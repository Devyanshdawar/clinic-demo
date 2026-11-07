import { NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";

const appointmentSchema = z.object({
  service: z.enum(["chiropractic", "physiotherapy", "orthopedics", "aesthetics"], {
    errorMap: () => ({ message: "Please select a valid clinical specialty" }),
  }),
  doctor: z.string().min(2, "Please select an attending specialist"),
  date: z.string().min(4, "Please select a preferred date"),
  timeSlot: z.string().min(2, "Please select a preferred time slot"),
  patientName: z.string().min(2, "Full name must be at least 2 characters").max(100),
  email: z.string().email("Please provide a valid email address"),
  phone: z.string().min(8, "Please enter a valid phone or WhatsApp number").max(20),
  age: z.string().optional(),
  gender: z.string().optional(),
  isFirstVisit: z.boolean().default(true),
  chiefComplaint: z
    .string()
    .min(10, "Please describe your primary symptoms or requirements (minimum 10 characters)")
    .max(1000),
  consent: z.literal(true, {
    errorMap: () => ({ message: "You must acknowledge the clinical communication consent" }),
  }),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = appointmentSchema.parse(body);

    // Prepare email notification payload
    const emailSubject = `[New Appointment Request] ${validatedData.patientName} - ${validatedData.service.toUpperCase()}`;
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
        <h2 style="color: #134e4a; border-bottom: 2px solid #c59b27; padding-bottom: 10px;">New Clinic Appointment Request</h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
          <tr><td style="padding: 8px; font-weight: bold; width: 35%;">Specialty:</td><td style="padding: 8px; text-transform: capitalize;">${validatedData.service}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Doctor / Specialist:</td><td style="padding: 8px;">${validatedData.doctor}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Preferred Date:</td><td style="padding: 8px;">${validatedData.date}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Time Slot:</td><td style="padding: 8px;">${validatedData.timeSlot}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Patient Name:</td><td style="padding: 8px;">${validatedData.patientName}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Email:</td><td style="padding: 8px;"><a href="mailto:${validatedData.email}">${validatedData.email}</a></td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Phone:</td><td style="padding: 8px;">${validatedData.phone}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">First-Time Patient:</td><td style="padding: 8px;">${validatedData.isFirstVisit ? "Yes" : "No (Returning)"}</td></tr>
          ${validatedData.age ? `<tr><td style="padding: 8px; font-weight: bold;">Age:</td><td style="padding: 8px;">${validatedData.age}</td></tr>` : ""}
          ${validatedData.gender ? `<tr><td style="padding: 8px; font-weight: bold;">Gender:</td><td style="padding: 8px;">${validatedData.gender}</td></tr>` : ""}
        </table>
        <div style="margin-top: 20px; padding: 15px; background-color: #f8fafc; border-left: 4px solid #134e4a; border-radius: 4px;">
          <h4 style="margin: 0 0 8px 0; color: #134e4a;">Chief Complaint / Notes:</h4>
          <p style="margin: 0; color: #334155; line-height: 1.5;">${validatedData.chiefComplaint}</p>
        </div>
        <p style="margin-top: 25px; font-size: 12px; color: #64748b; text-align: center;">
          Sent automatically from Veritas Spine, Ortho & Aesthetic Clinic Web Portal.
        </p>
      </div>
    `;

    // Send email if SMTP or Resend credentials exist, otherwise log safely in development
    const smtpHost = process.env.SMTP_HOST;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const recipientEmail = process.env.CLINIC_NOTIFICATION_EMAIL || "care@veritashealthclinic.com";

    let emailSent = false;

    if (smtpHost && smtpUser && smtpPass) {
      try {
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: Number(process.env.SMTP_PORT) || 465,
          secure: (Number(process.env.SMTP_PORT) || 465) === 465,
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        });

        await transporter.sendMail({
          from: process.env.SMTP_FROM || `"Veritas Clinic Bookings" <${smtpUser}>`,
          to: recipientEmail,
          replyTo: validatedData.email,
          subject: emailSubject,
          html: emailHtml,
        });
        emailSent = true;
      } catch (mailError) {
        console.error("Nodemailer dispatch error:", mailError);
      }
    } else {
      console.log("[DEV MODE] Appointment received successfully (SMTP not configured):", {
        patient: validatedData.patientName,
        service: validatedData.service,
        date: validatedData.date,
        time: validatedData.timeSlot,
      });
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your appointment request has been registered successfully.",
        bookingReference: `VRT-${Math.floor(100000 + Math.random() * 900000)}`,
        data: {
          patientName: validatedData.patientName,
          service: validatedData.service,
          doctor: validatedData.doctor,
          date: validatedData.date,
          timeSlot: validatedData.timeSlot,
        },
        emailSent,
      },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed. Please review your entries.",
          errors: error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    console.error("Unexpected appointment registration error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An internal server error occurred while processing your request. Please try again or reach us via WhatsApp.",
      },
      { status: 500 }
    );
  }
}

