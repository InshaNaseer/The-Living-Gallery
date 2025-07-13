"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Palette, Pen, Star, ArrowRight } from "lucide-react"
import Navigation from "@/components/navigation"
import Link from "next/link"

export default function TechniquesPage() {
  const scripts = [
    {
      name: "Thuluth",
      description: "The most revered script in Islamic calligraphy, known for its elegance and grandeur.",
      characteristics: ["Curved letters", "Proportional beauty", "Ceremonial use", "Mosque decorations"],
      difficulty: "Advanced",
      origin: "7th Century",
      image: "/placeholder.svg?height=300&width=400",
      usage: "Quranic verses, mosque inscriptions, ceremonial documents",
    },
    {
      name: "Naskh",
      description: "The most readable script, widely used for copying the Quran and daily writing.",
      characteristics: ["Clear letterforms", "Horizontal emphasis", "Easy readability", "Balanced proportions"],
      difficulty: "Intermediate",
      origin: "10th Century",
      image: "/placeholder.svg?height=300&width=400",
      usage: "Quran manuscripts, books, everyday writing",
    },
    {
      name: "Diwani",
      description: "An ornate Ottoman script known for its flowing curves and decorative flourishes.",
      characteristics: ["Flowing curves", "Decorative elements", "Compact writing", "Ottoman heritage"],
      difficulty: "Advanced",
      origin: "16th Century",
      image: "/placeholder.svg?height=300&width=400",
      usage: "Official documents, decorative panels, artistic compositions",
    },
    {
      name: "Kufic",
      description: "The oldest Arabic script, characterized by angular letterforms and geometric precision.",
      characteristics: ["Angular forms", "Geometric precision", "Historical significance", "Architectural use"],
      difficulty: "Intermediate",
      origin: "7th Century",
      image: "/placeholder.svg?height=300&width=400",
      usage: "Early Quran manuscripts, architectural inscriptions, decorative borders",
    },
    {
      name: "Nastaliq",
      description: "A Persian-influenced script known for its hanging baseline and poetic beauty.",
      characteristics: ["Hanging baseline", "Poetic flow", "Persian influence", "Artistic expression"],
      difficulty: "Advanced",
      origin: "14th Century",
      image: "/placeholder.svg?height=300&width=400",
      usage: "Poetry, literature, artistic calligraphy, Persian texts",
    },
    {
      name: "Ruq'ah",
      description: "A simplified script developed for everyday writing, known for its speed and practicality.",
      characteristics: ["Simple forms", "Quick writing", "Practical use", "Modern adaptation"],
      difficulty: "Beginner",
      origin: "19th Century",
      image: "/placeholder.svg?height=300&width=400",
      usage: "Everyday writing, notes, modern applications",
    },
  ]

  const tools = [
    {
      name: "Qalam (Reed Pen)",
      description: "Traditional writing instrument made from reed, essential for authentic Islamic calligraphy.",
      image: "/placeholder.svg?height=200&width=200",
      uses: ["All traditional scripts", "Authentic texture", "Variable line width"],
    },
    {
      name: "Bamboo Pen",
      description: "Flexible alternative to reed pens, offering smooth ink flow and durability.",
      image: "/placeholder.svg?height=200&width=200",
      uses: ["Modern practice", "Consistent lines", "Beginner-friendly"],
    },
    {
      name: "Traditional Inks",
      description: "Carbon-based inks and natural pigments used in classical Islamic manuscripts.",
      image: "/placeholder.svg?height=200&width=200",
      uses: ["Permanent writing", "Rich black color", "Historical authenticity"],
    },
    {
      name: "Gold Leaf",
      description: "Pure gold applied to enhance sacred texts and create luminous decorative elements.",
      image: "/placeholder.svg?height=200&width=200",
      uses: ["Divine names", "Verse highlighting", "Decorative borders"],
    },
  ]

  const techniques = [
    {
      title: "Proper Posture and Grip",
      description: "The foundation of beautiful calligraphy begins with correct posture and pen grip.",
      steps: [
        "Sit upright with feet flat on the floor",
        "Hold the qalam at a 45-degree angle",
        "Keep wrist straight and relaxed",
        "Maintain consistent pen angle throughout",
      ],
    },
    {
      title: "Letter Proportions",
      description: "Islamic calligraphy follows precise mathematical proportions based on dots and circles.",
      steps: [
        "Use the alif as the basic unit of measurement",
        "Each letter has specific height ratios",
        "Maintain consistent spacing between letters",
        "Follow traditional proportion guidelines",
      ],
    },
    {
      title: "Rhythm and Flow",
      description: "Developing a natural rhythm creates harmony and beauty in Islamic calligraphy.",
      steps: [
        "Practice basic strokes repeatedly",
        "Develop muscle memory through repetition",
        "Maintain steady breathing while writing",
        "Let the pen flow naturally across the page",
      ],
    },
    {
      title: "Spiritual Preparation",
      description: "Islamic calligraphy is an act of worship requiring proper spiritual preparation.",
      steps: [
        "Begin with Wudu (ablution) when writing sacred texts",
        "Recite Bismillah before starting",
        "Maintain focus and reverence throughout",
        "End with gratitude and dua",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-rose-50 to-amber-50">
      <Navigation />

      {/* Header */}
      <section className="pt-28 pb-16 px-6 bg-gradient-to-r from-amber-100/50 to-rose-100/50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-7xl text-amber-900 mb-6">Islamic Calligraphy Techniques</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Discover the sacred art of Arabic calligraphy, where every stroke carries spiritual significance and
            centuries of tradition.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="p-8 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <BookOpen className="h-12 w-12 text-amber-800 mx-auto mb-6" />
            <h2 className="font-serif text-3xl text-amber-900 mb-6">The Sacred Art of Writing</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Islamic calligraphy is more than beautiful writing—it is a spiritual discipline that transforms the sacred
              words of Allah into visual prayers. Each script carries its own history, purpose, and spiritual
              significance.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              From the angular precision of Kufic to the flowing elegance of Thuluth, every style serves to honor and
              beautify the divine revelation of the Quran.
            </p>
          </Card>
        </div>
      </section>

      {/* Arabic Scripts */}
      <section className="py-20 px-6 bg-gradient-to-r from-rose-50 to-amber-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl text-amber-900 text-center mb-16">Traditional Arabic Scripts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {scripts.map((script, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-lg bg-white/90 backdrop-blur-sm">
                <div className="relative">
                  <Image
                    src={script.image || "/placeholder.svg"}
                    alt={script.name}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge
                      className={`${
                        script.difficulty === "Beginner"
                          ? "bg-green-600"
                          : script.difficulty === "Intermediate"
                            ? "bg-yellow-600"
                            : "bg-red-600"
                      } text-white`}
                    >
                      {script.difficulty}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-amber-800 text-white">{script.origin}</Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl text-amber-900 mb-3">{script.name}</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">{script.description}</p>

                  <div className="mb-4">
                    <h4 className="font-medium text-amber-800 mb-2">Characteristics:</h4>
                    <div className="flex flex-wrap gap-2">
                      {script.characteristics.map((char, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {char}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-medium text-amber-800 mb-2">Common Usage:</h4>
                    <p className="text-sm text-slate-600">{script.usage}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tools and Materials */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl text-amber-900 text-center mb-16">Traditional Tools & Materials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tools.map((tool, index) => (
              <Card key={index} className="text-center border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <div className="p-6">
                  <Image
                    src={tool.image || "/placeholder.svg"}
                    alt={tool.name}
                    width={200}
                    height={200}
                    className="w-24 h-24 mx-auto mb-4 rounded-lg object-cover"
                  />
                  <h3 className="font-serif text-xl text-amber-900 mb-3">{tool.name}</h3>
                  <p className="text-slate-600 mb-4 text-sm leading-relaxed">{tool.description}</p>
                  <div className="space-y-1">
                    {tool.uses.map((use, i) => (
                      <div key={i} className="flex items-center justify-center gap-2 text-xs text-slate-500">
                        <Star className="h-3 w-3 text-amber-500" />
                        <span>{use}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fundamental Techniques */}
      <section className="py-20 px-6 bg-gradient-to-r from-amber-50 to-rose-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl text-amber-900 text-center mb-16">Fundamental Techniques</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {techniques.map((technique, index) => (
              <Card key={index} className="p-6 border-0 shadow-lg bg-white/90 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-200 to-rose-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <Palette className="h-6 w-6 text-amber-800" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl text-amber-900 mb-3">{technique.title}</h3>
                    <p className="text-slate-600 mb-4 leading-relaxed">{technique.description}</p>
                    <div className="space-y-2">
                      {technique.steps.map((step, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-amber-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                            {i + 1}
                          </div>
                          <span className="text-sm text-slate-600">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl text-amber-900 mb-8">Your Learning Journey</h2>
          <p className="text-lg text-slate-600 mb-12">
            Master Islamic calligraphy through a structured approach that honors tradition while building practical
            skills.
          </p>

          <div className="space-y-6">
            <Card className="p-6 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <div className="text-left">
                  <h3 className="font-serif text-xl text-amber-900 mb-2">1. Foundation & Spiritual Preparation</h3>
                  <p className="text-slate-600">
                    Learn proper posture, tools, and spiritual approach to Islamic calligraphy
                  </p>
                </div>
                <ArrowRight className="h-6 w-6 text-amber-600" />
              </div>
            </Card>

            <Card className="p-6 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <div className="text-left">
                  <h3 className="font-serif text-xl text-amber-900 mb-2">2. Master Basic Scripts (Naskh & Ruq'ah)</h3>
                  <p className="text-slate-600">
                    Start with readable scripts to build fundamental letter-forming skills
                  </p>
                </div>
                <ArrowRight className="h-6 w-6 text-amber-600" />
              </div>
            </Card>

            <Card className="p-6 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <div className="text-left">
                  <h3 className="font-serif text-xl text-amber-900 mb-2">3. Advance to Decorative Scripts</h3>
                  <p className="text-slate-600">Progress to Thuluth, Diwani, and other ornamental styles</p>
                </div>
                <ArrowRight className="h-6 w-6 text-amber-600" />
              </div>
            </Card>

            <Card className="p-6 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <div className="text-left">
                <h3 className="font-serif text-xl text-amber-900 mb-2">4. Create Sacred Art</h3>
                <p className="text-slate-600">
                  Apply your skills to write Quranic verses and create meaningful Islamic art
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-gradient-to-r from-rose-50 to-amber-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl text-amber-900 mb-6">Begin Your Calligraphy Journey</h2>
          <p className="text-lg text-slate-600 mb-8">
            Ready to start learning Islamic calligraphy? Explore our collection of handcrafted pieces for inspiration,
            or commission a custom work to see these techniques in action.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/calligraphy">
              <Button className="bg-amber-800 hover:bg-amber-900 text-white px-8 py-4 text-lg font-serif">
                <Pen className="h-5 w-5 mr-2" />
                View Calligraphy Collection
              </Button>
            </Link>
            <Link href="/contact">
              <Button className="bg-red-800 hover:bg-red-900 text-white px-8 py-4 text-lg font-serif">
                Request Custom Commission
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-gradient-to-r from-amber-50 to-rose-50 border-t border-amber-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-6 mb-8 md:mb-0">
              <BookOpen className="h-6 w-6 text-red-700" />
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
