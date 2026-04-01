import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface PropertyCardProps {
  title: string;
  location: string;
  image: string;
  href: string;
  tag?: string;
}

export default function PropertyCard({ title, location, image, href, tag }: PropertyCardProps) {
  return (
    <Link href={href} className="group block relative overflow-hidden">
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 25vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />
        {tag && (
          <span className="absolute top-4 left-4 text-[11px] uppercase tracking-[0.12em] bg-[#94a901] text-white px-2.5 py-1">{tag}</span>
        )}
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <p className="text-[11px] uppercase tracking-[0.12em] text-white/90 mb-1.5">{location}</p>
        <h3 className="font-heading text-[1.35rem] font-extralight text-white leading-tight">{title}</h3>
        <div className="flex items-center gap-1.5 mt-3 text-[#94a901] text-[11px] uppercase tracking-[0.1em]">
          <span>Explore</span>
          <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
