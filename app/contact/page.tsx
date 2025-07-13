"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"
import Navigation from "@/components/navigation"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    inquiryType: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-rose-50 to-amber-50">
      <Navigation />

      {/* Header */}
      <section className="pt-28 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl text-amber-900 mb-6">Connect With Me</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            I'd love to hear from you. Whether you have questions about my art, want to commission a piece, or simply
            wish to share your thoughts, every message is a blessing.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <Card className="p-8 border-0 shadow-lg bg-white/80 backdrop-blur-sm mb-8">
              <h2 className="font-serif text-2xl text-amber-900 mb-6">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-200 to-rose-200 rounded-full flex items-center justify-center">
                    <Mail className="h-5 w-5 text-amber-800" />
                  </div>
                  <div>
                    <p className="font-medium text-amber-900">Email</p>
                    <p className="text-slate-600">elena@livinggallery.art</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-200 to-rose-200 rounded-full flex items-center justify-center">
                    <Phone className="h-5 w-5 text-amber-800" />
                  </div>
                  <div>
                    <p className="font-medium text-amber-900">Phone</p>
                    <p className="text-slate-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-200 to-rose-200 rounded-full flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-amber-800" />
                  </div>
                  <div>
                    <p className="font-medium text-amber-900">Studio</p>
                    <p className="text-slate-600">
                      Sacred Arts District
                      <br />
                      Spiritual Quarter, CA
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-200 to-rose-200 rounded-full flex items-center justify-center">
                    <Clock className="h-5 w-5 text-amber-800" />
                  </div>
                  <div>
                    <p className="font-medium text-amber-900">Studio Hours</p>
                    <p className="text-slate-600">
                      By appointment only
                      <br />
                      Tuesday - Saturday
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <h3 className="font-serif text-xl text-amber-900 mb-4">Islamic Commission Process</h3>
              <div className="space-y-3 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <span>Consultation with Islamic guidance</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <span>Verse selection and translation review</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <span>Design proposal with Islamic aesthetics</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <span>Creation with Bismillah and dua</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <span>Delivery with translation and context</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <h2 className="font-serif text-2xl text-amber-900 mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-amber-900 mb-2">Name *</label>
                    <Input
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      placeholder="Your full name"
                      required
                      className="border-amber-200 focus:border-amber-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-amber-900 mb-2">Email *</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="your@email.com"
                      required
                      className="border-amber-200 focus:border-amber-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-amber-900 mb-2">Inquiry Type</label>
                  <Select value={formData.inquiryType} onValueChange={(value) => handleChange("inquiryType", value)}>
                    <SelectTrigger className="border-amber-200 focus:border-amber-400">
                      <SelectValue placeholder="What can I help you with?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="commission">Custom Commission</SelectItem>
                      <SelectItem value="purchase">Purchase Existing Artwork</SelectItem>
                      <SelectItem value="exhibition">Exhibition Inquiry</SelectItem>
                      <SelectItem value="workshop">Workshop/Teaching</SelectItem>
                      <SelectItem value="collaboration">Collaboration</SelectItem>
                      <SelectItem value="general">General Question</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-amber-900 mb-2">Subject</label>
                  <Input
                    value={formData.subject}
                    onChange={(e) => handleChange("subject", e.target.value)}
                    placeholder="Brief subject line"
                    className="border-amber-200 focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-amber-900 mb-2">Message *</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder="Please share your thoughts, questions, or commission details..."
                    rows={6}
                    required
                    className="border-amber-200 focus:border-amber-400"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-amber-800 hover:bg-amber-900 text-white py-4 text-lg font-serif"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-rose-50 to-amber-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl text-amber-900 text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <Card className="p-6 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <h3 className="font-serif text-xl text-amber-900 mb-3">Do you only work with Quranic verses?</h3>
              <p className="text-slate-600">
                I specialize in Quranic verses, the 99 names of Allah (Asma ul-Husna), Islamic duas, and other Islamic
                content. I work closely with Islamic scholars to ensure accuracy and proper respect for the sacred
                texts.
              </p>
            </Card>
            <Card className="p-6 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <h3 className="font-serif text-xl text-amber-900 mb-3">What Arabic scripts do you use?</h3>
              <p className="text-slate-600">
                I work with traditional Arabic calligraphy scripts including Thuluth, Naskh, Diwani, Kufic, and
                Nastaliq. Each script has its own beauty and is chosen based on the content and the spiritual feeling we
                want to convey.
              </p>
            </Card>
            <Card className="p-6 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <h3 className="font-serif text-xl text-amber-900 mb-3">Are your artworks suitable for Islamic homes?</h3>
              <p className="text-slate-600">
                Absolutely. All my artwork follows Islamic principles and guidelines. I focus on Quranic verses, Allah's
                names, and Islamic themes that bring barakah and spiritual beauty to Muslim homes and spaces.
              </p>
            </Card>
            <Card className="p-6 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <h3 className="font-serif text-xl text-amber-900 mb-3">Do you provide translations?</h3>
              <p className="text-slate-600">
                Yes, each piece comes with accurate English translations and transliterations. I also provide context
                about the verse or Islamic concept depicted, helping to deepen understanding and appreciation.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-gradient-to-r from-amber-50 to-rose-50 border-t border-amber-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-6 mb-8 md:mb-0">
              <Mail className="h-6 w-6 text-red-700" />
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
