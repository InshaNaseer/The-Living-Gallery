"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ShoppingBag, ArrowLeft, Plus, Heart } from "lucide-react"
import Navigation from "@/components/navigation"

export default function AddToCartPage() {
  const searchParams = useSearchParams()
  const [addedItem, setAddedItem] = useState(null)
  const [relatedItems, setRelatedItems] = useState([])

  // Mock data - in a real app, this would come from your database/API
  const allItems = [
    {
      id: 1,
      title: "Ayat al-Kursi",
      type: "Islamic Calligraphy",
      price: 250,
      size: "16x20 inches",
      medium: "Gold Ink on Parchment",
      category: "quranic-verses",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 2,
      title: "99 Names of Allah",
      type: "Islamic Painting",
      price: 380,
      size: "20x24 inches",
      medium: "Gold and Silver Ink",
      category: "asma-ul-husna",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 3,
      title: "Bismillah ar-Rahman ar-Rahim",
      type: "Islamic Calligraphy",
      price: 180,
      size: "12x16 inches",
      medium: "Black Ink on Cream Paper",
      category: "bismillah",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 4,
      title: "Masjid al-Haram at Sunset",
      type: "Islamic Painting",
      price: 280,
      size: "20x24 inches",
      medium: "Oil on Canvas",
      category: "sacred-places",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 5,
      title: "Surah Al-Fatiha",
      type: "Islamic Calligraphy",
      price: 320,
      size: "18x24 inches",
      medium: "Mixed Media with Gold Leaf",
      category: "quranic-verses",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 6,
      title: "Garden of Paradise",
      type: "Islamic Painting",
      price: 220,
      size: "16x20 inches",
      medium: "Acrylic on Canvas",
      category: "paradise",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  useEffect(() => {
    const itemId = searchParams.get("id")
    if (itemId) {
      const item = allItems.find((item) => item.id === Number.parseInt(itemId))
      if (item) {
        setAddedItem(item)
        // Get related items from the same category
        const related = allItems
          .filter((relatedItem) => relatedItem.category === item.category && relatedItem.id !== item.id)
          .slice(0, 3)
        setRelatedItems(related)
      }
    }
  }, [searchParams])

  if (!addedItem) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 via-rose-50 to-amber-50">
        <Navigation />
        <div className="pt-28 pb-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl text-amber-900 mb-6">Item Not Found</h1>
            <p className="text-xl text-slate-600 mb-8">The item you're looking for could not be found.</p>
            <Link href="/">
              <Button className="bg-amber-800 hover:bg-amber-900 text-white px-8 py-4 text-lg font-serif">
                Return Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-rose-50 to-amber-50">
      <Navigation />

      <div className="pt-28 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Success Message */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="font-serif text-4xl text-amber-900 mb-4">Added to Your Sacred Collection!</h1>
            <p className="text-xl text-slate-600">
              May this piece bring barakah and beauty to your space, Insha'Allah.
            </p>
          </div>

          {/* Added Item Details */}
          <Card className="mb-12 border-0 shadow-lg bg-white/90 backdrop-blur-sm">
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="relative">
                  <Image
                    src={addedItem.image || "/placeholder.svg"}
                    alt={addedItem.title}
                    width={400}
                    height={400}
                    className="w-full h-80 object-cover rounded-lg shadow-lg"
                  />
                  <Badge className="absolute top-4 left-4 bg-green-600 text-white">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Added to Cart
                  </Badge>
                </div>
                <div>
                  <h2 className="font-serif text-3xl text-amber-900 mb-4">{addedItem.title}</h2>
                  <p className="text-lg text-slate-600 mb-4">{addedItem.type}</p>
                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Size:</span>
                      <span className="font-medium text-amber-900">{addedItem.size}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Medium:</span>
                      <span className="font-medium text-amber-900">{addedItem.medium}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Price:</span>
                      <span className="font-serif text-2xl text-red-900">${addedItem.price}</span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/cart" className="flex-1">
                      <Button className="w-full bg-amber-800 hover:bg-amber-900 text-white py-3 font-serif">
                        <ShoppingBag className="h-4 w-4 mr-2" />
                        View Cart
                      </Button>
                    </Link>
                    <Link href="/paintings" className="flex-1">
                      <Button
                        variant="outline"
                        className="w-full py-3 font-serif border-amber-300 text-amber-900 hover:bg-amber-50 bg-transparent"
                      >
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Continue Shopping
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Related Items */}
          {relatedItems.length > 0 && (
            <div>
              <h2 className="font-serif text-3xl text-amber-900 text-center mb-8">You Might Also Like</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedItems.map((item) => (
                  <Card
                    key={item.id}
                    className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm"
                  >
                    <div className="relative overflow-hidden">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        width={300}
                        height={300}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
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
                      <h3 className="font-serif text-xl text-amber-900 mb-2">{item.title}</h3>
                      <p className="text-sm text-slate-600 mb-3">{item.type}</p>
                      <div className="flex justify-between items-center text-xs text-slate-500 mb-4">
                        <span>{item.size}</span>
                        <span>{item.medium}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-serif text-red-900">${item.price}</span>
                        <Link href={`/add-to-cart?id=${item.id}`}>
                          <Button className="bg-amber-700 hover:bg-amber-800 text-white px-4 py-2 font-serif">
                            <Plus className="h-4 w-4 mr-2" />
                            Add to Cart
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Islamic Blessing */}
          <div className="mt-16 text-center">
            <Card className="p-8 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <h3 className="font-serif text-2xl text-amber-900 mb-4">Barakah Guarantee</h3>
              <p className="text-lg text-slate-600 mb-4">
                "And whoever relies upon Allah - then He is sufficient for him. Indeed, Allah will accomplish His
                purpose." - Quran 65:3
              </p>
              <p className="text-slate-600">
                Each piece is created with Islamic principles and comes with accurate translations and Islamic context.
                30-day satisfaction guarantee, Insha'Allah.
              </p>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-16 px-6 bg-gradient-to-r from-amber-50 to-rose-50 border-t border-amber-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-6 mb-8 md:mb-0">
              <ShoppingBag className="h-6 w-6 text-red-700" />
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
