"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  CheckCircle,
  Download,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Package,
  Truck,
  Heart,
  Star,
  Share2,
  MessageCircle,
  Home,
  ShoppingBag,
  Clock,
  Banknote,
  CreditCard,
} from "lucide-react"
import Navigation from "@/components/navigation"

export default function OrderSuccessPage() {
  const searchParams = useSearchParams()
  const [orderData, setOrderData] = useState(null)
  const [showConfetti, setShowConfetti] = useState(true)

  // Mock order data - in real app, this would come from your backend
  const mockOrderData = {
    orderNumber: "ORD-2024-001",
    orderDate: "January 15, 2024",
    estimatedDelivery: "January 22-24, 2024",
    paymentMethod: "Cash on Delivery",
    codFee: 15,
    customer: {
      name: "Ahmad Hassan",
      email: "ahmad.hassan@email.com",
      phone: "+1 (555) 123-4567",
    },
    shippingAddress: {
      street: "123 Islamic Street",
      apartment: "Apt 4B",
      city: "Medina City",
      state: "CA",
      zipCode: "90210",
      country: "United States",
    },
    items: [
      {
        id: 1,
        title: "Ayat al-Kursi",
        type: "Islamic Calligraphy",
        price: 250,
        quantity: 1,
        size: "16x20 inches",
        medium: "Gold Ink on Parchment",
        image: "/placeholder.svg?height=200&width=200",
        translation: "Allah - there is no deity except Him, the Ever-Living, the Sustainer of existence...",
      },
    ],
    pricing: {
      subtotal: 250,
      shipping: 0,
      tax: 20,
      codFee: 15,
      total: 285,
    },
    tracking: {
      status: "confirmed",
      steps: [
        { title: "Order Confirmed", completed: true, date: "Jan 15, 2024 2:30 PM" },
        { title: "Preparing Your Art", completed: false, date: "Expected: Jan 16, 2024" },
        { title: "Quality Check", completed: false, date: "Expected: Jan 18, 2024" },
        { title: "Shipped", completed: false, date: "Expected: Jan 19, 2024" },
        { title: "Out for Delivery", completed: false, date: "Expected: Jan 22, 2024" },
        { title: "Delivered", completed: false, date: "Expected: Jan 22-24, 2024" },
      ],
    },
  }

  useEffect(() => {
    // Simulate loading order data
    setTimeout(() => {
      setOrderData(mockOrderData)
    }, 500)

    // Hide confetti after animation
    setTimeout(() => {
      setShowConfetti(false)
    }, 3000)
  }, [])

  if (!orderData) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 via-rose-50 to-amber-50">
        <Navigation />
        <div className="pt-28 pb-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-800 mx-auto mb-4"></div>
            <p className="text-amber-900">Loading your order details...</p>
          </div>
        </div>
      </div>
    )
  }

  const getPaymentIcon = () => {
    if (orderData.paymentMethod === "Cash on Delivery") return <Banknote className="h-4 w-4" />
    return <CreditCard className="h-4 w-4" />
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-rose-50 to-amber-50 relative overflow-hidden">
      <Navigation />

      {/* Confetti Animation */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-10">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            >
              <div className="w-2 h-2 bg-amber-400 rounded-full opacity-70"></div>
            </div>
          ))}
        </div>
      )}

      <div className="pt-28 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Success Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-6">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
            <h1 className="font-serif text-4xl md:text-5xl text-amber-900 mb-4">Barakallahu feeki! Order Confirmed</h1>
            <p className="text-xl text-slate-600 mb-2">Your sacred art has been ordered successfully, Alhamdulillah!</p>
            <p className="text-lg text-slate-500">Order #{orderData.orderNumber}</p>
          </div>

          {/* Islamic Blessing */}
          <Card className="mb-8 p-6 border-0 shadow-lg bg-gradient-to-r from-green-50 to-emerald-50">
            <div className="text-center">
              <blockquote className="font-serif text-2xl text-green-800 mb-4 italic">
                "And whoever relies upon Allah - then He is sufficient for him. Indeed, Allah will accomplish His
                purpose."
              </blockquote>
              <p className="text-green-700">- Quran 65:3</p>
              <p className="text-sm text-green-600 mt-3">
                May this sacred art bring barakah and spiritual beauty to your home, Insha'Allah.
              </p>
            </div>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Order Details */}
            <div className="lg:col-span-2 space-y-6">
              {/* Order Summary */}
              <Card className="p-6 border-0 shadow-lg bg-white/90 backdrop-blur-sm">
                <h2 className="font-serif text-2xl text-amber-900 mb-6">Order Summary</h2>
                <div className="space-y-4">
                  {orderData.items.map((item) => (
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
                        <p className="text-xs text-slate-500 mb-2">{item.medium}</p>
                        <div className="bg-amber-50 p-2 rounded text-xs text-amber-800 italic">
                          "{item.translation}"
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-serif text-xl text-red-900">${item.price}</p>
                        <p className="text-sm text-slate-500">Qty: {item.quantity}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Separator className="my-6" />

                {/* Pricing Breakdown */}
                <div className="space-y-2">
                  <div className="flex justify-between text-slate-600">
                    <span>Subtotal</span>
                    <span>${orderData.pricing.subtotal}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Shipping</span>
                    <span>{orderData.pricing.shipping === 0 ? "Free" : `$${orderData.pricing.shipping}`}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Tax</span>
                    <span>${orderData.pricing.tax}</span>
                  </div>
                  {orderData.pricing.codFee > 0 && (
                    <div className="flex justify-between text-green-700">
                      <span>COD Fee</span>
                      <span>${orderData.pricing.codFee}</span>
                    </div>
                  )}
                  <Separator className="my-2" />
                  <div className="flex justify-between text-lg font-medium">
                    <span className="text-amber-900">Total</span>
                    <span className="font-serif text-red-900">${orderData.pricing.total}</span>
                  </div>
                </div>
              </Card>

              {/* Order Tracking */}
              <Card className="p-6 border-0 shadow-lg bg-white/90 backdrop-blur-sm">
                <h2 className="font-serif text-2xl text-amber-900 mb-6">Order Progress</h2>
                <div className="space-y-4">
                  {orderData.tracking.steps.map((step, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          step.completed
                            ? "bg-green-600 text-white"
                            : index === 1
                              ? "bg-amber-600 text-white animate-pulse"
                              : "bg-gray-200 text-gray-500"
                        }`}
                      >
                        {step.completed ? (
                          <CheckCircle className="h-4 w-4" />
                        ) : index === 1 ? (
                          <Clock className="h-4 w-4" />
                        ) : (
                          <div className="w-2 h-2 bg-current rounded-full" />
                        )}
                      </div>
                      <div className="flex-1">
                        <p
                          className={`font-medium ${
                            step.completed ? "text-green-800" : index === 1 ? "text-amber-800" : "text-gray-500"
                          }`}
                        >
                          {step.title}
                        </p>
                        <p className="text-sm text-slate-500">{step.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* What's Next */}
              <Card className="p-6 border-0 shadow-lg bg-white/90 backdrop-blur-sm">
                <h2 className="font-serif text-2xl text-amber-900 mb-6">What Happens Next?</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-amber-800 font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-amber-900 mb-1">Preparation with Bismillah</h3>
                      <p className="text-sm text-slate-600">
                        Our artist will begin preparing your sacred art with proper Islamic etiquette and reverence.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-amber-800 font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-amber-900 mb-1">Quality Assurance</h3>
                      <p className="text-sm text-slate-600">
                        Each piece undergoes careful quality checks to ensure it meets our Islamic art standards.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-amber-800 font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-amber-900 mb-1">Secure Packaging & Delivery</h3>
                      <p className="text-sm text-slate-600">
                        Your art will be carefully packaged and delivered to your doorstep with care and respect.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Order Info */}
              <Card className="p-6 border-0 shadow-lg bg-white/90 backdrop-blur-sm">
                <h3 className="font-serif text-xl text-amber-900 mb-4">Order Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-slate-500" />
                    <span className="text-slate-600">Ordered: {orderData.orderDate}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Truck className="h-4 w-4 text-slate-500" />
                    <span className="text-slate-600">Delivery: {orderData.estimatedDelivery}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    {getPaymentIcon()}
                    <span className="text-slate-600">{orderData.paymentMethod}</span>
                  </div>
                </div>
              </Card>

              {/* Contact Info */}
              <Card className="p-6 border-0 shadow-lg bg-white/90 backdrop-blur-sm">
                <h3 className="font-serif text-xl text-amber-900 mb-4">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-slate-500" />
                    <span className="text-slate-600">{orderData.customer.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-slate-500" />
                    <span className="text-slate-600">{orderData.customer.phone}</span>
                  </div>
                </div>
              </Card>

              {/* Shipping Address */}
              <Card className="p-6 border-0 shadow-lg bg-white/90 backdrop-blur-sm">
                <h3 className="font-serif text-xl text-amber-900 mb-4">Shipping Address</h3>
                <div className="flex items-start gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-slate-500 mt-0.5" />
                  <div className="text-slate-600">
                    <p className="font-medium">{orderData.customer.name}</p>
                    <p>{orderData.shippingAddress.street}</p>
                    {orderData.shippingAddress.apartment && <p>{orderData.shippingAddress.apartment}</p>}
                    <p>
                      {orderData.shippingAddress.city}, {orderData.shippingAddress.state}{" "}
                      {orderData.shippingAddress.zipCode}
                    </p>
                    <p>{orderData.shippingAddress.country}</p>
                  </div>
                </div>
              </Card>

              {/* Actions */}
              <Card className="p-6 border-0 shadow-lg bg-white/90 backdrop-blur-sm">
                <h3 className="font-serif text-xl text-amber-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Button className="w-full bg-amber-800 hover:bg-amber-900 text-white">
                    <Download className="h-4 w-4 mr-2" />
                    Download Receipt
                  </Button>
                  <Button variant="outline" className="w-full border-amber-300 text-amber-900 bg-transparent">
                    <Package className="h-4 w-4 mr-2" />
                    Track Order
                  </Button>
                  <Button variant="outline" className="w-full border-blue-300 text-blue-900 bg-transparent">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Contact Support
                  </Button>
                  <Button variant="outline" className="w-full border-green-300 text-green-900 bg-transparent">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share Order
                  </Button>
                </div>
              </Card>

              {/* COD Information */}
              {orderData.paymentMethod === "Cash on Delivery" && (
                <Card className="p-6 border-0 shadow-lg bg-green-50 border-green-200">
                  <h3 className="font-serif text-xl text-green-800 mb-4">Cash on Delivery</h3>
                  <div className="space-y-2 text-sm text-green-700">
                    <p className="flex items-center gap-2">
                      <Banknote className="h-4 w-4" />
                      <span>Total to pay: ${orderData.pricing.total}</span>
                    </p>
                    <p>• Please have exact change ready</p>
                    <p>• Our delivery partner will call before arrival</p>
                    <p>• COD fee of ${orderData.pricing.codFee} is included</p>
                  </div>
                </Card>
              )}
            </div>
          </div>

          {/* Continue Shopping */}
          <div className="mt-12 text-center">
            <h2 className="font-serif text-2xl text-amber-900 mb-6">Continue Your Sacred Art Journey</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button className="bg-amber-800 hover:bg-amber-900 text-white px-8 py-4 text-lg font-serif">
                  <Home className="h-5 w-5 mr-2" />
                  Return Home
                </Button>
              </Link>
              <Link href="/paintings">
                <Button
                  variant="outline"
                  className="border-amber-300 text-amber-900 hover:bg-amber-50 bg-transparent px-8 py-4 text-lg font-serif"
                >
                  <ShoppingBag className="h-5 w-5 mr-2" />
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>

          {/* Recommendations */}
          <Card className="mt-12 p-8 border-0 shadow-lg bg-white/90 backdrop-blur-sm">
            <h2 className="font-serif text-2xl text-amber-900 mb-6 text-center">You Might Also Love</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Surah Al-Fatiha",
                  price: "$320",
                  image: "/placeholder.svg?height=200&width=200",
                  rating: 4.9,
                },
                {
                  title: "99 Names of Allah",
                  price: "$380",
                  image: "/placeholder.svg?height=200&width=200",
                  rating: 4.8,
                },
                {
                  title: "Bismillah Calligraphy",
                  price: "$180",
                  image: "/placeholder.svg?height=200&width=200",
                  rating: 4.7,
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={200}
                    height={200}
                    className="w-full h-40 object-cover rounded-lg mb-3"
                  />
                  <h3 className="font-serif text-lg text-amber-900 mb-2">{item.title}</h3>
                  <div className="flex items-center justify-center gap-1 mb-2">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm text-slate-600">{item.rating}</span>
                  </div>
                  <p className="font-serif text-xl text-red-900 mb-3">{item.price}</p>
                  <Button size="sm" className="bg-amber-700 hover:bg-amber-800 text-white">
                    View Details
                  </Button>
                </div>
              ))}
            </div>
          </Card>

          {/* Final Islamic Blessing */}
          <Card className="mt-8 p-8 border-0 shadow-lg bg-gradient-to-r from-amber-100 to-rose-100">
            <div className="text-center">
              <Heart className="h-8 w-8 text-red-700 mx-auto mb-4" />
              <blockquote className="font-serif text-2xl text-amber-900 mb-4 italic">
                "And it is He who sends down rain from heaven, and We produce thereby the vegetation of every kind."
              </blockquote>
              <p className="text-slate-600 mb-4">- Quran 6:99</p>
              <p className="text-lg text-slate-700">
                May your new sacred art flourish in your home and bring continuous blessings, Ameen.
              </p>
            </div>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-16 px-6 bg-gradient-to-r from-amber-50 to-rose-50 border-t border-amber-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-6 mb-8 md:mb-0">
              <CheckCircle className="h-6 w-6 text-green-700" />
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
