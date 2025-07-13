"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Heart, ShoppingBag, Filter } from "lucide-react"
import Navigation from "@/components/navigation"

export default function PaintingsPage() {
  const [sortBy, setSortBy] = useState("featured")
  const [filterBy, setFilterBy] = useState("all")

  const paintings = [
    {
      id: 4,
      title: "Masjid al-Haram at Sunset",
      description: "The sacred Kaaba surrounded by pilgrims during the golden hour of Maghrib prayer.",
      price: 280,
      category: "sacred-places",
      size: "20x24 inches",
      medium: "Oil on Canvas",
      image: "/placeholder.svg?height=400&width=300",
      featured: true,
    },
    {
      id: 6,
      title: "Garden of Paradise",
      description: "Inspired by Quranic descriptions of Jannah, painted in ethereal greens and golds.",
      price: 220,
      category: "paradise",
      size: "16x20 inches",
      medium: "Acrylic on Canvas",
      image: "/placeholder.svg?height=400&width=300",
      featured: false,
    },
    {
      id: 7,
      title: "Islamic Geometric Harmony",
      description: "Sacred geometry reflecting the infinite nature of Allah's creation.",
      price: 195,
      category: "geometric",
      size: "18x18 inches",
      medium: "Mixed Media",
      image: "/placeholder.svg?height=400&width=300",
      featured: true,
    },
    {
      id: 8,
      title: "Mihrab of Light",
      description: "A prayer niche illuminated by divine light, symbolizing guidance and direction.",
      price: 240,
      category: "architecture",
      size: "14x18 inches",
      medium: "Watercolor and Gold Leaf",
      image: "/placeholder.svg?height=400&width=300",
      featured: false,
    },
    {
      id: 9,
      title: "Night of Power",
      description: "Laylat al-Qadr depicted through celestial blues and silver, better than a thousand months.",
      price: 260,
      category: "spiritual",
      size: "16x20 inches",
      medium: "Oil on Canvas",
      image: "/placeholder.svg?height=400&width=300",
      featured: true,
    },
    {
      id: 10,
      title: "Crescent Moon Reflection",
      description: "The Islamic crescent reflected in still waters, symbolizing peace and contemplation.",
      price: 185,
      category: "nature",
      size: "12x16 inches",
      medium: "Acrylic on Canvas",
      image: "/placeholder.svg?height=400&width=300",
      featured: false,
    },
  ]

  const filteredPaintings = paintings.filter((painting) => {
    if (filterBy === "all") return true
    return painting.category === filterBy
  })

  const sortedPaintings = [...filteredPaintings].sort((a, b) => {
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
          <h1 className="font-serif text-5xl md:text-7xl text-amber-900 mb-6">Sacred Paintings</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Each painting is a window into the divine, where colors become prayers and brushstrokes tell stories of the
            soul.
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
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="sacred-places">Sacred Places</SelectItem>
                <SelectItem value="paradise">Paradise</SelectItem>
                <SelectItem value="geometric">Geometric</SelectItem>
                <SelectItem value="architecture">Architecture</SelectItem>
                <SelectItem value="spiritual">Spiritual</SelectItem>
                <SelectItem value="nature">Nature</SelectItem>
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

      {/* Paintings Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedPaintings.map((painting) => (
              <Card
                key={painting.id}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm"
              >
                <div className="relative overflow-hidden">
                  {painting.featured && (
                    <Badge className="absolute top-4 left-4 z-10 bg-amber-600 text-white">Featured</Badge>
                  )}
                  <Image
                    src={painting.image || "/placeholder.svg"}
                    alt={painting.title}
                    width={400}
                    height={500}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
                  <h3 className="font-serif text-xl text-amber-900 mb-2">{painting.title}</h3>
                  <p className="text-sm text-slate-600 mb-3 line-clamp-2">{painting.description}</p>
                  <div className="flex justify-between items-center text-xs text-slate-500 mb-4">
                    <span>{painting.size}</span>
                    <span>{painting.medium}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-serif text-red-900">${painting.price}</span>
                    <Link href={`/add-to-cart?id=${painting.id}`}>
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

      {/* Call to Action */}
      <section className="py-16 px-6 bg-gradient-to-r from-rose-50 to-amber-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl text-amber-900 mb-6">Commission Islamic Art</h2>
          <p className="text-lg text-slate-600 mb-8">
            Let me create a personalized Islamic artwork featuring your favorite Quranic verse or Islamic theme that
            brings barakah to your sacred space.
          </p>
          <Button className="bg-red-800 hover:bg-red-900 text-white px-8 py-4 text-lg font-serif">
            Request Commission
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
