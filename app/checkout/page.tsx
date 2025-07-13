"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import {
  CreditCard,
  Truck,
  Shield,
  ArrowLeft,
  Lock,
  CheckCircle,
  MapPin,
  Mail,
  Banknote,
  AlertCircle,
} from "lucide-react"
import Navigation from "@/components/navigation"

export default function CheckoutPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Shipping Information
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    zipCode: "",
    country: "United States",

    // Payment Information
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardName: "",

    // Order Options
    shippingMethod: "standard",
    paymentMethod: "card",
    specialInstructions: "",
    newsletter: false,
    terms: false,
  })

  // Mock cart items - in real app, this would come from cart state/context
  const cartItems = [
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
  ]

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal > 200 ? 0 : 25
  const tax = Math.round(subtotal * 0.08 * 100) / 100
  // Add COD fee for cash on delivery
  const codFee = formData.paymentMethod === "cod" ? 15 : 0
  const total = subtotal + shipping + tax + codFee

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    } else {
      // Process order
      console.log("Processing order:", formData)
      // Redirect to success page
      window.location.href = "/order-success"
    }
  }

  const steps = [
    { number: 1, title: "Shipping", icon: Truck },
    { number: 2, title: "Payment", icon: CreditCard },
    { number: 3, title: "Review", icon: CheckCircle },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-rose-50 to-amber-50">
      <Navigation />

      <div className="pt-28 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <Link href="/cart">
              <Button variant="ghost" className="text-amber-900 hover:text-amber-700">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Cart
              </Button>
            </Link>
          </div>

          <h1 className="font-serif text-4xl text-amber-900 mb-8 text-center">Sacred Checkout</h1>

          {/* Progress Steps */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center space-x-8">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center">
                  <div
                    className={`flex items-center justify-center w-12 h-12 rounded-full border-2 ${
                      currentStep >= step.number
                        ? "bg-amber-800 border-amber-800 text-white"
                        : "border-amber-300 text-amber-600"
                    }`}
                  >
                    <step.icon className="h-5 w-5" />
                  </div>
                  <span
                    className={`ml-3 font-medium ${currentStep >= step.number ? "text-amber-900" : "text-slate-500"}`}
                  >
                    {step.title}
                  </span>
                  {index < steps.length - 1 && (
                    <div className={`w-16 h-0.5 ml-8 ${currentStep > step.number ? "bg-amber-800" : "bg-amber-200"}`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Checkout Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit}>
                {/* Step 1: Shipping Information */}
                {currentStep === 1 && (
                  <Card className="p-8 border-0 shadow-lg bg-white/90 backdrop-blur-sm">
                    <h2 className="font-serif text-2xl text-amber-900 mb-6 flex items-center">
                      <Truck className="h-6 w-6 mr-3" />
                      Shipping Information
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <Label htmlFor="firstName" className="text-amber-900 font-medium">
                          First Name *
                        </Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          required
                          className="mt-1 border-amber-200 focus:border-amber-400"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-amber-900 font-medium">
                          Last Name *
                        </Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          required
                          className="mt-1 border-amber-200 focus:border-amber-400"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <Label htmlFor="email" className="text-amber-900 font-medium">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          required
                          className="mt-1 border-amber-200 focus:border-amber-400"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-amber-900 font-medium">
                          Phone Number *
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          required
                          className="mt-1 border-amber-200 focus:border-amber-400"
                          placeholder="Required for delivery confirmation"
                        />
                      </div>
                    </div>

                    <div className="mb-6">
                      <Label htmlFor="address" className="text-amber-900 font-medium">
                        Street Address *
                      </Label>
                      <Input
                        id="address"
                        value={formData.address}
                        onChange={(e) => handleInputChange("address", e.target.value)}
                        required
                        className="mt-1 border-amber-200 focus:border-amber-400"
                      />
                    </div>

                    <div className="mb-6">
                      <Label htmlFor="apartment" className="text-amber-900 font-medium">
                        Apartment, Suite, etc.
                      </Label>
                      <Input
                        id="apartment"
                        value={formData.apartment}
                        onChange={(e) => handleInputChange("apartment", e.target.value)}
                        className="mt-1 border-amber-200 focus:border-amber-400"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                      <div>
                        <Label htmlFor="city" className="text-amber-900 font-medium">
                          City *
                        </Label>
                        <Input
                          id="city"
                          value={formData.city}
                          onChange={(e) => handleInputChange("city", e.target.value)}
                          required
                          className="mt-1 border-amber-200 focus:border-amber-400"
                        />
                      </div>
                      <div>
                        <Label htmlFor="state" className="text-amber-900 font-medium">
                          State *
                        </Label>
                        <Select value={formData.state} onValueChange={(value) => handleInputChange("state", value)}>
                          <SelectTrigger className="mt-1 border-amber-200 focus:border-amber-400">
                            <SelectValue placeholder="Select state" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="CA">California</SelectItem>
                            <SelectItem value="NY">New York</SelectItem>
                            <SelectItem value="TX">Texas</SelectItem>
                            <SelectItem value="FL">Florida</SelectItem>
                            {/* Add more states as needed */}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="zipCode" className="text-amber-900 font-medium">
                          ZIP Code *
                        </Label>
                        <Input
                          id="zipCode"
                          value={formData.zipCode}
                          onChange={(e) => handleInputChange("zipCode", e.target.value)}
                          required
                          className="mt-1 border-amber-200 focus:border-amber-400"
                        />
                      </div>
                    </div>

                    {/* Shipping Method */}
                    <div className="mb-8">
                      <Label className="text-amber-900 font-medium mb-4 block">Shipping Method</Label>
                      <RadioGroup
                        value={formData.shippingMethod}
                        onValueChange={(value) => handleInputChange("shippingMethod", value)}
                      >
                        <div className="flex items-center space-x-2 p-4 border border-amber-200 rounded-lg">
                          <RadioGroupItem value="standard" id="standard" />
                          <Label htmlFor="standard" className="flex-1 cursor-pointer">
                            <div className="flex justify-between items-center">
                              <div>
                                <p className="font-medium text-amber-900">Standard Shipping</p>
                                <p className="text-sm text-slate-600">5-7 business days</p>
                              </div>
                              <span className="font-medium text-amber-900">{subtotal > 200 ? "Free" : "$25"}</span>
                            </div>
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 p-4 border border-amber-200 rounded-lg">
                          <RadioGroupItem value="express" id="express" />
                          <Label htmlFor="express" className="flex-1 cursor-pointer">
                            <div className="flex justify-between items-center">
                              <div>
                                <p className="font-medium text-amber-900">Express Shipping</p>
                                <p className="text-sm text-slate-600">2-3 business days</p>
                              </div>
                              <span className="font-medium text-amber-900">$45</span>
                            </div>
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <Button type="submit" className="w-full bg-amber-800 hover:bg-amber-900 text-white py-3 font-serif">
                      Continue to Payment
                    </Button>
                  </Card>
                )}

                {/* Step 2: Payment Information */}
                {currentStep === 2 && (
                  <Card className="p-8 border-0 shadow-lg bg-white/90 backdrop-blur-sm">
                    <h2 className="font-serif text-2xl text-amber-900 mb-6 flex items-center">
                      <CreditCard className="h-6 w-6 mr-3" />
                      Payment Information
                    </h2>

                    {/* Payment Method Selection */}
                    <div className="mb-8">
                      <Label className="text-amber-900 font-medium mb-4 block">Payment Method</Label>
                      <RadioGroup
                        value={formData.paymentMethod}
                        onValueChange={(value) => handleInputChange("paymentMethod", value)}
                      >
                        <div className="flex items-center space-x-2 p-4 border border-amber-200 rounded-lg">
                          <RadioGroupItem value="card" id="card" />
                          <Label htmlFor="card" className="flex-1 cursor-pointer">
                            <div className="flex items-center gap-3">
                              <CreditCard className="h-5 w-5 text-amber-800" />
                              <div>
                                <span className="font-medium text-amber-900">Credit/Debit Card</span>
                                <p className="text-xs text-slate-600">Secure online payment</p>
                              </div>
                            </div>
                          </Label>
                        </div>

                        <div className="flex items-center space-x-2 p-4 border border-amber-200 rounded-lg">
                          <RadioGroupItem value="paypal" id="paypal" />
                          <Label htmlFor="paypal" className="flex-1 cursor-pointer">
                            <div className="flex items-center gap-3">
                              <div className="w-5 h-5 bg-blue-600 rounded"></div>
                              <div>
                                <span className="font-medium text-amber-900">PayPal</span>
                                <p className="text-xs text-slate-600">Pay with your PayPal account</p>
                              </div>
                            </div>
                          </Label>
                        </div>

                        <div className="flex items-center space-x-2 p-4 border border-amber-200 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50">
                          <RadioGroupItem value="cod" id="cod" />
                          <Label htmlFor="cod" className="flex-1 cursor-pointer">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <Banknote className="h-5 w-5 text-green-700" />
                                <div>
                                  <span className="font-medium text-amber-900">Cash on Delivery (COD)</span>
                                  <p className="text-xs text-slate-600">Pay when you receive your order</p>
                                  <div className="flex items-center gap-1 mt-1">
                                    <Badge
                                      variant="outline"
                                      className="text-xs bg-green-100 text-green-800 border-green-300"
                                    >
                                      Trusted & Convenient
                                    </Badge>
                                  </div>
                                </div>
                              </div>
                              <div className="text-right">
                                <span className="text-sm font-medium text-green-700">+$15 COD Fee</span>
                              </div>
                            </div>
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    {/* Cash on Delivery Information */}
                    {formData.paymentMethod === "cod" && (
                      <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-lg">
                        <div className="flex items-start gap-3">
                          <AlertCircle className="h-5 w-5 text-green-600 mt-0.5" />
                          <div>
                            <h3 className="font-medium text-green-800 mb-2">Cash on Delivery Information</h3>
                            <ul className="text-sm text-green-700 space-y-1">
                              <li>• Pay in cash when your sacred art is delivered to your doorstep</li>
                              <li>• A small COD fee of $15 applies for this convenient service</li>
                              <li>• Please have exact change ready for smooth delivery</li>
                              <li>• Our delivery partner will call you before arrival</li>
                              <li>• Valid phone number is required for delivery coordination</li>
                            </ul>
                            <div className="mt-3 p-3 bg-amber-50 border border-amber-200 rounded">
                              <p className="text-sm text-amber-800 font-serif italic">
                                "And give full measure when you measure, and weigh with an even balance." - Quran 17:35
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Credit Card Form */}
                    {formData.paymentMethod === "card" && (
                      <div className="space-y-6">
                        <div>
                          <Label htmlFor="cardNumber" className="text-amber-900 font-medium">
                            Card Number *
                          </Label>
                          <Input
                            id="cardNumber"
                            placeholder="1234 5678 9012 3456"
                            value={formData.cardNumber}
                            onChange={(e) => handleInputChange("cardNumber", e.target.value)}
                            required
                            className="mt-1 border-amber-200 focus:border-amber-400"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                          <div>
                            <Label htmlFor="expiryDate" className="text-amber-900 font-medium">
                              Expiry Date *
                            </Label>
                            <Input
                              id="expiryDate"
                              placeholder="MM/YY"
                              value={formData.expiryDate}
                              onChange={(e) => handleInputChange("expiryDate", e.target.value)}
                              required
                              className="mt-1 border-amber-200 focus:border-amber-400"
                            />
                          </div>
                          <div>
                            <Label htmlFor="cvv" className="text-amber-900 font-medium">
                              CVV *
                            </Label>
                            <Input
                              id="cvv"
                              placeholder="123"
                              value={formData.cvv}
                              onChange={(e) => handleInputChange("cvv", e.target.value)}
                              required
                              className="mt-1 border-amber-200 focus:border-amber-400"
                            />
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="cardName" className="text-amber-900 font-medium">
                            Name on Card *
                          </Label>
                          <Input
                            id="cardName"
                            value={formData.cardName}
                            onChange={(e) => handleInputChange("cardName", e.target.value)}
                            required
                            className="mt-1 border-amber-200 focus:border-amber-400"
                          />
                        </div>
                      </div>
                    )}

                    {/* PayPal Information */}
                    {formData.paymentMethod === "paypal" && (
                      <div className="mb-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                            <span className="text-white text-sm font-bold">P</span>
                          </div>
                          <div>
                            <h3 className="font-medium text-blue-800">PayPal Payment</h3>
                            <p className="text-sm text-blue-700">
                              You will be redirected to PayPal to complete your payment securely.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Special Instructions */}
                    <div className="mt-8">
                      <Label htmlFor="specialInstructions" className="text-amber-900 font-medium">
                        Special Instructions (Optional)
                      </Label>
                      <Textarea
                        id="specialInstructions"
                        placeholder="Any special requests for your sacred art pieces or delivery instructions..."
                        value={formData.specialInstructions}
                        onChange={(e) => handleInputChange("specialInstructions", e.target.value)}
                        className="mt-1 border-amber-200 focus:border-amber-400"
                        rows={3}
                      />
                    </div>

                    <div className="flex gap-4 mt-8">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setCurrentStep(1)}
                        className="flex-1 border-amber-300 text-amber-900 hover:bg-amber-50"
                      >
                        Back to Shipping
                      </Button>
                      <Button
                        type="submit"
                        className="flex-1 bg-amber-800 hover:bg-amber-900 text-white py-3 font-serif"
                      >
                        Review Order
                      </Button>
                    </div>
                  </Card>
                )}

                {/* Step 3: Order Review */}
                {currentStep === 3 && (
                  <Card className="p-8 border-0 shadow-lg bg-white/90 backdrop-blur-sm">
                    <h2 className="font-serif text-2xl text-amber-900 mb-6 flex items-center">
                      <CheckCircle className="h-6 w-6 mr-3" />
                      Review Your Order
                    </h2>

                    {/* Order Summary */}
                    <div className="space-y-6 mb-8">
                      <div>
                        <h3 className="font-medium text-amber-900 mb-3 flex items-center">
                          <MapPin className="h-4 w-4 mr-2" />
                          Shipping Address
                        </h3>
                        <div className="bg-amber-50 p-4 rounded-lg text-sm">
                          <p className="font-medium">
                            {formData.firstName} {formData.lastName}
                          </p>
                          <p>{formData.address}</p>
                          {formData.apartment && <p>{formData.apartment}</p>}
                          <p>
                            {formData.city}, {formData.state} {formData.zipCode}
                          </p>
                          <p>{formData.country}</p>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-medium text-amber-900 mb-3 flex items-center">
                          <Mail className="h-4 w-4 mr-2" />
                          Contact Information
                        </h3>
                        <div className="bg-amber-50 p-4 rounded-lg text-sm">
                          <p>{formData.email}</p>
                          {formData.phone && <p>{formData.phone}</p>}
                        </div>
                      </div>

                      <div>
                        <h3 className="font-medium text-amber-900 mb-3 flex items-center">
                          {formData.paymentMethod === "cod" ? (
                            <Banknote className="h-4 w-4 mr-2" />
                          ) : (
                            <CreditCard className="h-4 w-4 mr-2" />
                          )}
                          Payment Method
                        </h3>
                        <div className="bg-amber-50 p-4 rounded-lg text-sm">
                          {formData.paymentMethod === "cod" && (
                            <div className="flex items-center gap-2">
                              <Banknote className="h-4 w-4 text-green-600" />
                              <span>Cash on Delivery (+$15 COD Fee)</span>
                            </div>
                          )}
                          {formData.paymentMethod === "card" && (
                            <div>
                              <p>Credit/Debit Card</p>
                              {formData.cardNumber && <p>**** **** **** {formData.cardNumber.slice(-4)}</p>}
                            </div>
                          )}
                          {formData.paymentMethod === "paypal" && <p>PayPal</p>}
                        </div>
                      </div>
                    </div>

                    {/* Terms and Conditions */}
                    <div className="space-y-4 mb-8">
                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="terms"
                          checked={formData.terms}
                          onCheckedChange={(checked) => handleInputChange("terms", checked as boolean)}
                          required
                        />
                        <Label htmlFor="terms" className="text-sm text-slate-600 leading-relaxed">
                          I agree to the{" "}
                          <Link href="/terms" className="text-amber-800 hover:underline">
                            Terms and Conditions
                          </Link>{" "}
                          and{" "}
                          <Link href="/privacy" className="text-amber-800 hover:underline">
                            Privacy Policy
                          </Link>
                        </Label>
                      </div>
                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="newsletter"
                          checked={formData.newsletter}
                          onCheckedChange={(checked) => handleInputChange("newsletter", checked as boolean)}
                        />
                        <Label htmlFor="newsletter" className="text-sm text-slate-600">
                          Subscribe to our newsletter for Islamic art updates and spiritual inspiration
                        </Label>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setCurrentStep(2)}
                        className="flex-1 border-amber-300 text-amber-900 hover:bg-amber-50"
                      >
                        Back to Payment
                      </Button>
                      <Button
                        type="submit"
                        disabled={!formData.terms}
                        className="flex-1 bg-red-800 hover:bg-red-900 text-white py-3 font-serif disabled:opacity-50"
                      >
                        {formData.paymentMethod === "cod" ? (
                          <>
                            <Banknote className="h-4 w-4 mr-2" />
                            Place COD Order
                          </>
                        ) : (
                          <>
                            <Lock className="h-4 w-4 mr-2" />
                            Complete Order
                          </>
                        )}
                      </Button>
                    </div>
                  </Card>
                )}
              </form>
            </div>

            {/* Order Summary Sidebar */}
            <div className="lg:col-span-1">
              <Card className="p-6 border-0 shadow-lg bg-white/90 backdrop-blur-sm sticky top-24">
                <h3 className="font-serif text-xl text-amber-900 mb-6">Order Summary</h3>

                {/* Cart Items */}
                <div className="space-y-4 mb-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-3">
                      <div className="relative">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          width={60}
                          height={60}
                          className="rounded-lg object-cover"
                        />
                        <Badge className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center p-0">
                          {item.quantity}
                        </Badge>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-amber-900 text-sm">{item.title}</h4>
                        <p className="text-xs text-slate-600">{item.type}</p>
                        <p className="text-xs text-slate-600">{item.size}</p>
                        <p className="font-medium text-red-900">${item.price}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Separator className="my-4" />

                {/* Pricing Breakdown */}
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Subtotal</span>
                    <span className="font-medium text-amber-900">${subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Shipping</span>
                    <span className="font-medium text-amber-900">{shipping === 0 ? "Free" : `$${shipping}`}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Tax</span>
                    <span className="font-medium text-amber-900">${tax}</span>
                  </div>
                  {codFee > 0 && (
                    <div className="flex justify-between">
                      <span className="text-slate-600">COD Fee</span>
                      <span className="font-medium text-green-700">${codFee}</span>
                    </div>
                  )}
                  <Separator className="my-2" />
                  <div className="flex justify-between text-lg font-medium">
                    <span className="text-amber-900">Total</span>
                    <span className="font-serif text-red-900">${total}</span>
                  </div>
                </div>

                {/* Security Badge */}
                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center gap-2 text-green-800">
                    <Shield className="h-4 w-4" />
                    <span className="text-sm font-medium">
                      {formData.paymentMethod === "cod" ? "Trusted Delivery" : "Secure Checkout"}
                    </span>
                  </div>
                  <p className="text-xs text-green-700 mt-1">
                    {formData.paymentMethod === "cod"
                      ? "Pay safely when you receive your order"
                      : "Your payment information is encrypted and secure"}
                  </p>
                </div>

                {/* Islamic Blessing */}
                <div className="mt-6 p-4 bg-amber-50 rounded-lg">
                  <p className="text-sm text-amber-800 font-serif italic text-center">
                    "And Allah is the best of providers." - Quran 62:11
                  </p>
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
              <Lock className="h-6 w-6 text-red-700" />
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
