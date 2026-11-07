import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Clock, Calendar, ArrowLeft, Tag, Share2 } from "lucide-react";
import { articlesData } from "@/data/articles";
import MedicalDisclaimerBanner from "@/components/ui/MedicalDisclaimerBanner";
import CtaBanner from "@/components/ui/CtaBanner";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articlesData.map((a) => ({
    slug: a.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articlesData.find((a) => a.slug === slug);

  if (!article) {
    return { title: "Article Not Found" };
  }

  return {
    title: `${article.title} | Veritas Patient Resources`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [{ url: article.coverImage }],
    },
  };
}

export default async function ArticleDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = articlesData.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = articlesData
    .filter((a) => a.slug !== slug && a.category === article.category)
    .slice(0, 2);

  return (
    <article className="space-y-12 py-8 sm:py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-xs sm:text-sm text-stone-500">
        <Link href="/" className="hover:text-stone-900 transition-colors">
          Home
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
        <Link href="/blog" className="hover:text-stone-900 transition-colors">
          Patient Resources
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
        <span className="font-semibold text-brand-900 truncate max-w-xs sm:max-w-md">
          {article.title}
        </span>
      </nav>

      {/* Article Header */}
      <header className="space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-xs font-semibold text-brand-800">
          <span>{article.category}</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight leading-tight">
          {article.title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-stone-500 pt-2 border-y border-stone-200 py-3">
          <div className="flex items-center space-x-2 text-stone-900 font-semibold">
            <div className="relative w-7 h-7 rounded-full overflow-hidden bg-stone-200">
              <Image
                src={article.author.image}
                alt={article.author.name}
                fill
                sizes="28px"
                className="object-cover"
              />
            </div>
            <span>{article.author.name}</span>
          </div>
          <span>•</span>
          <span className="flex items-center space-x-1">
            <Calendar className="w-3.5 h-3.5" />
            <span>{article.publishedAt}</span>
          </span>
          <span>•</span>
          <span className="flex items-center space-x-1">
            <Clock className="w-3.5 h-3.5" />
            <span>{article.readTime}</span>
          </span>
        </div>
      </header>

      {/* Hero Cover Image */}
      <div className="relative h-72 sm:h-96 w-full rounded-3xl overflow-hidden shadow-card border border-stone-200">
        <Image
          src={article.coverImage}
          alt={article.title}
          fill
          priority
          sizes="(max-width: 896px) 100vw, 896px"
          className="object-cover"
        />
      </div>

      {/* Article Body Content */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-soft">
        <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed text-sm sm:text-base space-y-6">
          <p className="text-base sm:text-lg font-medium text-stone-900 leading-relaxed border-l-4 border-gold-500 pl-4 py-1 italic">
            {article.excerpt}
          </p>

          <div
            className="space-y-4"
            dangerouslySetInnerHTML={{
              __html: article.content
                .replace(/### (.*)/g, '<h3 class="font-serif text-xl sm:text-2xl font-bold text-stone-900 mt-6 mb-2">$1</h3>')
                .replace(/#### (.*)/g, '<h4 class="font-serif text-base sm:text-lg font-bold text-brand-900 mt-4 mb-1">$1</h4>')
                .replace(/\* (.*)/g, '<li class="ml-4 list-disc text-stone-700">$1</li>')
                .replace(/\n\n/g, '<p class="leading-relaxed"></p>'),
            }}
          />
        </div>

        {/* Tags */}
        <div className="mt-8 pt-6 border-t border-stone-200 flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold text-stone-500">Topics:</span>
          {article.tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-xs font-medium px-2.5 py-1 rounded-lg bg-stone-100 text-stone-700"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Author Bio Box */}
        <div className="mt-8 p-6 rounded-2xl bg-stone-50 border border-stone-200/90 flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="relative w-16 h-16 rounded-2xl overflow-hidden shrink-0 bg-stone-200">
            <Image
              src={article.author.image}
              alt={article.author.name}
              fill
              sizes="64px"
              className="object-cover"
            />
          </div>
          <div className="space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">
              Reviewed by Physician
            </span>
            <h3 className="font-serif font-bold text-base text-stone-900">
              {article.author.name}
            </h3>
            <p className="text-xs text-brand-700 font-medium">
              {article.author.role} at Veritas Clinic
            </p>
            <p className="text-xs text-stone-600">
              Passionate about patient health literacy, biomechanical wellness, and ethical medical education.
            </p>
          </div>
        </div>
      </div>

      <MedicalDisclaimerBanner />

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="space-y-6 pt-6 border-t border-stone-200">
          <h2 className="font-serif text-2xl font-bold text-stone-900">
            Related Guides
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedArticles.map((rel) => (
              <div
                key={rel.slug}
                className="bg-white p-5 rounded-2xl border border-stone-200 shadow-soft space-y-2 hover:border-brand-300 transition-colors"
              >
                <span className="text-[11px] font-bold text-gold-600 uppercase tracking-wider">
                  {rel.category}
                </span>
                <h3 className="font-serif font-bold text-base text-stone-900 leading-snug">
                  <Link href={`/blog/${rel.slug}`}>{rel.title}</Link>
                </h3>
                <p className="text-xs text-stone-600 line-clamp-2">
                  {rel.excerpt}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <CtaBanner
        title="Schedule a Diagnostic Evaluation"
        subtitle="Turn reading into recovery. Our clinical team is here to design your treatment program."
      />
    </article>
  );
}

