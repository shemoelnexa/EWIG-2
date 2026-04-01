import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title:
      "How to Get Residential Property for Rent in Dubai and Abu Dhabi",
    excerpt:
      "A comprehensive guide to navigating the UAE rental market, from choosing the right location to understanding lease agreements.",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    category: "Property Guide",
    date: "April 2021",
    slug: "residential-property-rent-dubai-abu-dhabi",
  },
  {
    title:
      "Important Things You Should Know Before Getting a Residential Property",
    excerpt:
      "Key considerations every tenant should know before signing a lease — from security deposits to maintenance policies.",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
    category: "Tenant Guide",
    date: "April 2021",
    slug: "things-to-know-before-renting",
  },
  {
    title:
      "Renting a Property in UAE: Important Considerations During Covid-19",
    excerpt:
      "Navigating the rental landscape during uncertain times — what changed and what tenants need to be aware of.",
    image:
      "https://images.unsplash.com/photo-1582407947092-50b8e7dce57c?w=800&q=80",
    category: "Market Insights",
    date: "April 2021",
    slug: "renting-property-uae-covid-19",
  },
  {
    title:
      "How to Get Efficient Negotiations with the Best Real Estate Company",
    excerpt:
      "Tips and strategies for negotiating favorable terms with real estate companies in Abu Dhabi.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    category: "Expert Tips",
    date: "April 2021",
    slug: "efficient-negotiations-real-estate",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden bg-ewig-deep-sea">
        <div className="absolute inset-0 bg-gradient-to-br from-ewig-deep-sea to-ewig-black" />
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-16 pb-16 lg:pb-24 w-full">
          <p className="text-xs uppercase tracking-[0.3em] text-ewig-gold mb-4">
            Insights & News
          </p>
          <h1 className="font-heading font-extralight text-white">
            Our <em className="italic">Blog</em>
          </h1>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 lg:py-40 bg-ewig-off-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          {/* Featured Post */}
          <ScrollReveal>
            <Link
              href={`/blog/${blogPosts[0].slug}`}
              className="group block mb-16 lg:mb-24"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-xs uppercase tracking-[0.15em] text-ewig-gold mb-4">
                    {blogPosts[0].category} &mdash; {blogPosts[0].date}
                  </p>
                  <h2 className="font-heading text-2xl lg:text-3xl font-extralight leading-tight group-hover:text-ewig-gold transition-colors duration-300">
                    {blogPosts[0].title}
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-[#4a4540]">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center gap-2 mt-6 text-xs uppercase tracking-[0.1em] text-ewig-black group-hover:text-ewig-gold transition-colors">
                    <span>Read Article</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            </Link>
          </ScrollReveal>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <ScrollReveal key={post.slug} delay={index * 100}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block"
                >
                  <div className="relative aspect-[4/3] overflow-hidden mb-6">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <p className="text-xs uppercase tracking-[0.15em] text-ewig-gold mb-3">
                    {post.category} &mdash; {post.date}
                  </p>
                  <h3 className="font-heading text-lg font-extralight leading-snug group-hover:text-ewig-gold transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-sm text-[#4a4540] leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
