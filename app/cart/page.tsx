"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from "lucide-react"
import Navigation from "@/components/navigation"

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "Ayat al-Kursi",
      type: "Islamic Calligraphy",
      price: 250,
      quantity: 1,
      size: "16x20 inches",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 2,
      title: "99 Names of Allah",
      type: "Islamic Painting",
      price: 380,
      quantity: 1,
      size: "20x24 inches",
      image: "/placeholder.svg?height=200&width=200",
    },
  ])

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      setCartItems((items) => items.filter((item) => item.id !== id))
    } else {
      setCartItems((items) => items.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
    }
  }

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal > 200 ? 0 : 25
  const total = subtotal + shipping

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 via-rose-50 to-amber-50">
        <Navigation />
        <div className="pt-28 pb-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <ShoppingBag className="h-24 w-24 text-slate-400 mx-auto mb-8" />
            <h1 className="font-serif text-4xl text-amber-900 mb-6">Your Cart is Empty</h1>
            <p className="text-xl text-slate-600 mb-8">Discover beautiful sacred art to fill your spiritual space.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/paintings">
                <Button className="bg-amber-800 hover:bg-amber-900 text-white px-8 py-4 text-lg font-serif">
                  Browse Paintings
                </Button>
              </Link>
              <Link href="/calligraphy">
                <Button className="bg-red-800 hover:bg-red-900 text-white px-8 py-4 text-lg font-serif">
                  Browse Calligraphy
                </Button>
              </Link>
            </div>
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
          <div className="flex items-center gap-4 mb-8">
            <Link href="/">
              <Button variant="ghost" className="text-amber-900 hover:text-amber-700">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Continue Shopping
              </Button>
            </Link>
          </div>

          <h1 className="font-serif text-4xl text-amber-900 mb-8">Your Sacred Collection</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <div className="p-6">
                  <h2 className="font-serif text-2xl text-amber-900 mb-6">Items in Cart</h2>
                  <div className="space-y-6">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex gap-4 p-4 border border-amber-200 rounded-lg">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          width={100}
                          height={100}
                          className="rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <h3 className="font-serif text-lg text-amber-900 mb-1">{item.title}</h3>
                          <p className="text-sm text-slate-600 mb-2">
                            {item.type} • {item.size}
                          </p>
                          <p className="font-serif text-xl text-red-900">${item.price}</p>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeItem(item.id)}
                            className="text-slate-400 hover:text-red-600"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="h-8 w-8"
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="w-8 text-center">{item.quantity}</span>
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="h-8 w-8"
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm sticky top-24">
                <div className="p-6">
                  <h2 className="font-serif text-2xl text-amber-900 mb-6">Order Summary</h2>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Subtotal</span>
                      <span className="font-serif text-amber-900">${subtotal}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Shipping</span>
                      <span className="font-serif text-amber-900">{shipping === 0 ? "Free" : `$${shipping}`}</span>
                    </div>
                    {shipping === 0 && <p className="text-sm text-emerald-600">Free shipping on orders over $200!</p>}
                    <Separator />
                    <div className="flex justify-between text-lg font-medium">
                      <span className="text-amber-900">Total</span>
                      <span className="font-serif text-red-900">${total}</span>
                    </div>
                  </div>

                  <Link href="/checkout">
                    <Button className="w-full mt-6 bg-amber-800 hover:bg-amber-900 text-white py-4 text-lg font-serif">
                      Proceed to Checkout
                    </Button>
                  </Link>

                  <div className="mt-6 p-4 bg-amber-50 rounded-lg">
                    <h3 className="font-serif text-lg text-amber-900 mb-2">Barakah Guarantee</h3>
                    <p className="text-sm text-slate-600">
                      Each piece is created with Islamic principles and comes with accurate translations and Islamic
                      context. 30-day satisfaction guarantee, Insha'Allah.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
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
