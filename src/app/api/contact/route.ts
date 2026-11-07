import { NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";

const contactSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please provide a valid email address"),
  phone: z.string().min(8, "Please enter a valid contact number").max(20),
  subject: z.string().min(3, "Please enter a message subject").max(150),
  department: z.string().min(2, "Please select an area of interest"),
  message: z.string().min(10, "Message must be at least 10 characters").max(2000),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Please consent to contact from our care coordination team" }),
  }),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    const emailSubject = `[Inquiry] ${validatedData.subject} - ${validatedData.fullName}`;
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
        <h2 style="color: #134e4a; border-bottom: 2px solid #c59b27; padding-bottom: 10px;">Clinic Contact Inquiry</h2>
        <p><strong>From:</strong> ${validatedData.fullName} (&lt;${validatedData.email}&gt;)</p>
        <p><strong>Phone:</strong> ${validatedData.phone}</p>
        <p><strong>Department:</strong> ${validatedData.department}</p>
        <p><strong>Subject:</strong> ${validatedData.subject}</p>
        <div style="margin-top: 15px; padding: 15px; background: #f8fafc; border-left: 4px solid #134e4a; border-radius: 4px;">
          <p style="margin: 0; white-space: pre-wrap; line-height: 1.5;">${validatedData.message}</p>
        </div>
      </div>
    `;

    const smtpHost = process.env.SMTP_HOST;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const recipientEmail = process.env.CLINIC_NOTIFICATION_EMAIL || "care@veritashealthclinic.com";

    if (smtpHost && smtpUser && smtpPass) {
      try {
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: Number(process.env.SMTP_PORT) || 465,
          secure: (Number(process.env.SMTP_PORT) || 465) === 465,
          auth: { user: smtpUser, pass: smtpPass },
        });

        await transporter.sendMail({
          from: process.env.SMTP_FROM || `"Veritas Clinic Web" <${smtpUser}>`,
          to: recipientEmail,
          replyTo: validatedData.email,
          subject: emailSubject,
          html: emailHtml,
        });
      } catch (err) {
        console.error("Contact mail send error:", err);
      }
    } else {
      console.log("[DEV MODE] Contact submission received:", validatedData);
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for reaching out. A patient care coordinator will contact you within 2-4 business hours.",
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: "Please check your inputs and try again.",
          errors: error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred. Please contact us directly via telephone or WhatsApp.",
      },
      { status: 500 }
    );
  }
}

