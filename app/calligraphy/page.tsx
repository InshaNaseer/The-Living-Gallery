"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Heart, ShoppingBag, Filter, BookOpen } from "lucide-react"
import Navigation from "@/components/navigation"

export default function CalligraphyPage() {
  const [sortBy, setSortBy] = useState("featured")
  const [filterBy, setFilterBy] = useState("all")

  const calligraphy = [
    {
      id: 1,
      title: "Ayat al-Kursi",
      description: "The Throne Verse in magnificent Thuluth script, offering protection and blessings.",
      price: 250,
      category: "quranic-verses",
      size: "16x20 inches",
      medium: "Gold Ink on Parchment",
      language: "Arabic",
      verse: "Allah - there is no deity except Him, the Ever-Living, the Sustainer...",
      image: "/placeholder.svg?height=400&width=300",
      featured: true,
    },
    {
      id: 3,
      title: "Bismillah ar-Rahman ar-Rahim",
      description: "In the name of Allah, the Most Gracious, the Most Merciful - rendered in flowing Naskh.",
      price: 180,
      category: "bismillah",
      size: "12x16 inches",
      medium: "Black Ink on Cream Paper",
      language: "Arabic",
      verse: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
      image: "/placeholder.svg?height=400&width=300",
      featured: true,
    },
    {
      id: 5,
      title: "Surah Al-Fatiha",
      description: "The Opening chapter of the Quran, the essence of Islamic prayer and devotion.",
      price: 320,
      category: "quranic-verses",
      size: "18x24 inches",
      medium: "Mixed Media with Gold Leaf",
      language: "Arabic",
      verse: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
      image: "/placeholder.svg?height=400&width=300",
      featured: true,
    },
    {
      id: 2,
      title: "99 Names of Allah",
      description: "Asma ul-Husna arranged in beautiful geometric patterns, celebrating divine attributes.",
      price: 380,
      category: "asma-ul-husna",
      size: "20x24 inches",
      medium: "Gold and Silver Ink",
      language: "Arabic",
      verse: "Ar-Rahman, Ar-Rahim, Al-Malik, Al-Quddus...",
      image: "/placeholder.svg?height=400&width=300",
      featured: true,
    },
    {
      id: 11,
      title: "Surah Al-Ikhlas",
      description: "The chapter of Sincerity, equal to one-third of the Quran in reward.",
      price: 220,
      category: "quranic-verses",
      size: "14x18 inches",
      medium: "Blue and Gold Ink",
      language: "Arabic",
      verse: "قُلْ هُوَ اللَّهُ أَحَدٌ",
      image: "/placeholder.svg?height=400&width=300",
      featured: false,
    },
    {
      id: 12,
      title: "La ilaha illa Allah",
      description: "The declaration of faith in elegant Diwani script, the foundation of Islamic belief.",
      price: 195,
      category: "shahada",
      size: "12x16 inches",
      medium: "Black Ink on White Paper",
      language: "Arabic",
      verse: "لَا إِلَٰهَ إِلَّا اللَّهُ",
      image: "/placeholder.svg?height=400&width=300",
      featured: false,
    },
  ]

  const filteredCalligraphy = calligraphy.filter((piece) => {
    if (filterBy === "all") return true
    return piece.category === filterBy
  })

  const sortedCalligraphy = [...filteredCalligraphy].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "name":
        return a.title.localeCompare(b.title)
      default:
        return b.featured ? 1 : -1
    }
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-rose-50 to-amber-50">
      <Navigation />

      {/* Header */}
      <section className="pt-28 pb-16 px-6 bg-gradient-to-r from-amber-100/50 to-rose-100/50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-7xl text-amber-900 mb-6">Divine Calligraphy</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Sacred words transformed into visual prayers, where every stroke carries the weight of divine wisdom and
            spiritual beauty.
          </p>
        </div>
      </section>

      {/* Filters and Sort */}
      <section className="py-8 px-6 border-b border-amber-200">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <Filter className="h-5 w-5 text-slate-600" />
            <Select value={filterBy} onValueChange={setFilterBy}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by style" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Styles</SelectItem>
                <SelectItem value="quranic-verses">Quranic Verses</SelectItem>
                <SelectItem value="asma-ul-husna">99 Names of Allah</SelectItem>
                <SelectItem value="bismillah">Bismillah</SelectItem>
                <SelectItem value="shahada">Shahada</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-slate-600">Sort by:</span>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="name">Name</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Calligraphy Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedCalligraphy.map((piece) => (
              <Card
                key={piece.id}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm"
              >
                <div className="relative overflow-hidden">
                  {piece.featured && (
                    <Badge className="absolute top-4 left-4 z-10 bg-amber-600 text-white">Featured</Badge>
                  )}
                  <Badge className="absolute top-4 right-4 z-10 bg-red-800 text-white text-xs">{piece.language}</Badge>
                  <Image
                    src={piece.image || "/placeholder.svg"}
                    alt={piece.title}
                    width={400}
                    height={500}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm font-serif italic">"{piece.verse}"</p>
                  </div>
                  <div className="absolute top-16 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="bg-white/80 text-red-700 hover:bg-white hover:text-red-800"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl text-amber-900 mb-2">{piece.title}</h3>
                  <p className="text-sm text-slate-600 mb-3 line-clamp-2">{piece.description}</p>
                  <div className="flex justify-between items-center text-xs text-slate-500 mb-4">
                    <span>{piece.size}</span>
                    <span>{piece.medium}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-serif text-red-900">${piece.price}</span>
                    <Link href={`/add-to-cart?id=${piece.id}`}>
                      <Button className="bg-amber-700 hover:bg-amber-800 text-white px-4 py-2 font-serif">
                        <ShoppingBag className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Calligraphy Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-rose-50 to-amber-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl text-amber-900 mb-6">The Art of Islamic Calligraphy</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Each piece of Islamic calligraphy is a form of worship and meditation. Using traditional Arabic scripts
                like Thuluth, Naskh, and Diwani, every stroke carries the weight of divine revelation and spiritual
                beauty.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                From the sacred verses of the Quran to the beautiful names of Allah, each tradition brings profound
                spiritual depth and aesthetic beauty to the holy words that guide our faith.
              </p>
              <Link href="/techniques">
                <Button className="bg-red-800 hover:bg-red-900 text-white px-6 py-3 font-serif">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Learn About Techniques
                </Button>
              </Link>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Calligraphy Process"
                width={400}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Custom Calligraphy CTA */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl text-amber-900 mb-6">Commission Personal Islamic Calligraphy</h2>
          <p className="text-lg text-slate-600 mb-8">
            Transform your favorite Quranic verse, dua, or the beautiful names of Allah into a personalized work of
            sacred Islamic art.
          </p>
          <Button className="bg-amber-800 hover:bg-amber-900 text-white px-8 py-4 text-lg font-serif">
            Request Custom Piece
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-gradient-to-r from-amber-50 to-rose-50 border-t border-amber-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-6 mb-8 md:mb-0">
              <Heart className="h-6 w-6 text-red-700" />
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-amber-200 to-rose-900" />
            </div>
            <div className="text-center md:text-right">
              <p className="font-serif text-lg text-amber-900 mb-2">The Living Gallery</p>
              <p className="text-sm text-slate-600">Where art becomes prayer</p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-amber-200 text-center">
            <p className="text-sm text-slate-500">
              © 2024 The Living Gallery. All rights reserved. | Crafted with love and reverence.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
