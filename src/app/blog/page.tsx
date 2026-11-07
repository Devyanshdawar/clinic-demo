"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Clock, ArrowRight, BookOpen, Tag } from "lucide-react";
import { articlesData } from "@/data/articles";
import SectionHeading from "@/components/ui/SectionHeading";
import MedicalDisclaimerBanner from "@/components/ui/MedicalDisclaimerBanner";
import CtaBanner from "@/components/ui/CtaBanner";

export default function BlogListingPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "Spine & Posture",
    "Injury Rehabilitation",
    "Joint Health",
    "Skin & Wellness",
  ];

  const filteredArticles = articlesData.filter((article) => {
    const matchesCategory =
      selectedCategory === "All" || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-16 py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-xs font-semibold text-brand-800">
          <BookOpen className="w-3.5 h-3.5 text-gold-600" />
          <span>Patient Knowledge Base</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-stone-900 tracking-tight">
          Clinical Insights &amp; Patient Guides
        </h1>
        <p className="text-base text-stone-600 leading-relaxed">
          Evidence-based articles on spinal ergonomics, post-surgical recovery, joint preservation, and medical dermatology written by our attending physicians.
        </p>
      </div>

      {/* Search & Category Filter Controls */}
      <div className="max-w-3xl mx-auto space-y-4">
        {/* Search bar */}
        <div className="relative">
          <Search className="w-5 h-5 text-stone-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search posture, ACL rehab, arthritis, lasers, or ergonomics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border border-stone-200 shadow-sm text-sm focus:border-brand-700 focus:ring-1 focus:ring-brand-700"
          />
        </div>

        {/* Categories Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? "bg-brand-900 text-white shadow-sm"
                  : "bg-white border border-stone-200 hover:border-stone-300 text-stone-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredArticles.length > 0 ? (
          filteredArticles.map((article) => (
            <article
              key={article.slug}
              className="bg-white rounded-3xl border border-stone-200 shadow-soft overflow-hidden flex flex-col justify-between hover:shadow-card transition-all group"
            >
              <div>
                {/* Cover Image */}
                <div className="relative h-60 w-full overflow-hidden bg-stone-100">
                  <Image
                    src={article.coverImage}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-brand-950/80 backdrop-blur-md text-gold-300">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 space-y-3">
                  <div className="flex items-center space-x-3 text-xs text-stone-500">
                    <span>{article.publishedAt}</span>
                    <span>•</span>
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{article.readTime}</span>
                    </span>
                  </div>

                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 group-hover:text-brand-900 transition-colors leading-snug">
                    <Link href={`/blog/${article.slug}`}>{article.title}</Link>
                  </h2>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {article.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center space-x-1 text-[11px] font-medium text-stone-600 bg-stone-100 px-2 py-0.5 rounded-md"
                      >
                        <Tag className="w-3 h-3 text-stone-400" />
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Author & Read More */}
              <div className="p-6 sm:p-7 pt-0 border-t border-stone-100 mt-2 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="relative w-9 h-9 rounded-full overflow-hidden bg-stone-200">
                    <Image
                      src={article.author.image}
                      alt={article.author.name}
                      fill
                      sizes="36px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-stone-900">
                      {article.author.name}
                    </h3>
                    <p className="text-[11px] text-stone-500">
                      {article.author.role}
                    </p>
                  </div>
                </div>

                <Link
                  href={`/blog/${article.slug}`}
                  className="inline-flex items-center space-x-1 text-xs font-bold text-brand-800 hover:text-brand-950"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 text-gold-600" />
                </Link>
              </div>
            </article>
          ))
        ) : (
          <div className="col-span-full py-16 text-center space-y-3">
            <p className="text-stone-500 text-sm">
              No articles matched your search query &ldquo;{searchQuery}&rdquo;.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="text-xs font-semibold text-brand-700 underline"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      <MedicalDisclaimerBanner />

      <CtaBanner
        title="Need Advice Specific to Your Condition?"
        subtitle="Articles provide general knowledge. Book a 1-on-1 session for a tailored clinical diagnosis."
      />
    </div>
  );
}

