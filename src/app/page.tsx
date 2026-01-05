'use client'
import { PerfumeCard } from '@/components/ui'
import Link from 'next/link'
import { getFeaturedPerfumes } from '@/lib/data/perfumes'

export default function Home() {
  const featuredPerfumes = getFeaturedPerfumes(3)

  return (
    <div dir="rtl" className="min-h-screen bg-[#F2F0EB]">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-[#5B4233] mb-4">Ask Seba</h1>
          <p className="text-xl text-[#5B4233]/70 max-w-2xl mx-auto">
            اكتشف عطرك المثالي بناءً على تفضيلاتك الشخصية
          </p>
        </div>

        {/* Featured Perfumes */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#5B4233] mb-8 text-center">عطور مميزة</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {featuredPerfumes.map((perfume) => (
              <Link key={perfume.id} href={`/perfume/${perfume.id}`}>
                <PerfumeCard
                  variant={perfume.variant || 'bestseller'}
                  title={perfume.name}
                  brand={perfume.brand}
                  matchPercentage={perfume.matchPercentage || perfume.score || 0}
                  price={perfume.price}
                  imageUrl={perfume.image}
                  isSafe={perfume.isSafe ?? (perfume.matchPercentage || perfume.score || 0) >= 80}
                />
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link
            href="/dashboard"
            className="inline-block px-8 py-4 bg-[#c0841a] hover:bg-[#c0841a]/90 text-white rounded-full font-bold text-lg shadow-lg shadow-[#c0841a]/20 transition-all hover:scale-105"
          >
            ابدأ رحلتك الآن →
          </Link>
        </div>
      </div>
    </div>
  )
}
