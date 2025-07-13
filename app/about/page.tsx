"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Palette, BookOpen, Award } from "lucide-react";
import Navigation from "@/components/navigation";
import Link from "next/link";

export default function AboutPage() {
  const milestones = [
    {
      year: "2018",
      title: "Embracing Islam",
      description:
        "Reverted to Islam and discovered the profound beauty of Quranic verses and Islamic art traditions.",
    },
    {
      year: "2019",
      title: "First Islamic Exhibition",
      description:
        "Showcased Islamic calligraphy at the local mosque, sharing the beauty of Allah's words through art.",
    },
    {
      year: "2021",
      title: "Master of Arabic Scripts",
      description:
        "Completed intensive studies in traditional Arabic calligraphy including Thuluth, Naskh, and Diwani.",
    },
    {
      year: "2023",
      title: "The Living Gallery",
      description:
        "Launched this sacred space to share Islamic art with Muslims seeking to beautify their homes with faith.",
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Sacred Intention (Niyyah)",
      description:
        "Every piece begins with Bismillah and the intention to glorify Allah through beautiful art.",
    },
    {
      icon: Palette,
      title: "Traditional Craft",
      description:
        "Using authentic Arabic calligraphy techniques passed down through Islamic artistic traditions.",
    },
    {
      icon: BookOpen,
      title: "Quranic Wisdom",
      description:
        "Drawing inspiration from the Holy Quran and the beautiful names and attributes of Allah.",
    },
    {
      icon: Award,
      title: "Halal Excellence",
      description:
        "Committed to creating art that is both beautiful and pleasing to Allah, following Islamic principles.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-rose-50 to-amber-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-28 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-serif text-5xl md:text-6xl text-amber-900 mb-6">
                Meet InshaNaseer
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Artist, Spiritual Seeker, and Guardian of Sacred Traditions
              </p>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                In the quiet hours before Fajr, when the world holds its breath
                in anticipation of dawn, I find myself drawn to the sacred dance
                between brush and canvas. Each piece begins as a whispered dua,
                a conversation with Allah that unfolds in strokes of gold and
                verses of divine guidance.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                My art is not merely decoration—it is worship made visible,
                faith given form. Through traditional Islamic calligraphy and
                paintings inspired by Quranic verses, I seek to create windows
                into the divine, spaces where beauty and meaning converge in
                perfect submission to Allah.
              </p>
              <p className="font-serif text-xl text-red-900 mb-8 italic">
                — InshaNaseer, Calligrapher and Artist
              </p>
              <Link href="/contact">
                <Button className="bg-amber-800 hover:bg-amber-900 text-white px-8 py-4 text-lg font-serif">
                  Connect With Me
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-r from-amber-200 to-rose-900 rounded-full opacity-20" />
              <Image
                src="/art.jpeg?height=500&width=500"
                alt="InshaNaseer - Artist Portrait"
                width={500}
                height={500}
                className="relative rounded-full shadow-2xl mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-rose-50 to-amber-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl text-amber-900 text-center mb-16">
            Sacred Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="p-6 text-center border-0 shadow-lg bg-white/80 backdrop-blur-sm"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-amber-200 to-rose-200 rounded-full flex items-center justify-center">
                  <value.icon className="h-8 w-8 text-amber-800" />
                </div>
                <h3 className="font-serif text-xl text-amber-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl text-amber-900 text-center mb-16">
            My Artistic Journey
          </h2>
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center gap-8"
              >
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-r from-amber-600 to-red-800 rounded-full flex items-center justify-center">
                    <span className="text-white font-serif text-lg font-bold">
                      {milestone.year}
                    </span>
                  </div>
                </div>
                <Card className="flex-1 p-6 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                  <h3 className="font-serif text-2xl text-amber-900 mb-3">
                    {milestone.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {milestone.description}
                  </p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-amber-50 to-rose-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-serif text-4xl text-amber-900 mb-8">
            Artistic Philosophy
          </h2>
          <blockquote className="font-serif text-2xl md:text-3xl text-red-900 mb-8 leading-relaxed italic">
            "And whoever relies upon Allah - then He is sufficient for him.
            Indeed, Allah will accomplish His purpose." - Quran 65:3
          </blockquote>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
            <div className="text-left">
              <h3 className="font-serif text-2xl text-amber-900 mb-4">
                The Sacred Process
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                Each artwork begins with Wudu and the recitation of Bismillah. I
                believe that the artist must first purify their intention,
                seeking only to glorify Allah through the beauty of His revealed
                words.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                This is not merely technique—it is worship. The canvas becomes a
                place of remembrance, the studio a sanctuary, and each completed
                piece a form of dhikr made manifest.
              </p>
            </div>
            <div className="text-left">
              <h3 className="font-serif text-2xl text-amber-900 mb-4">
                Universal Beauty in Islam
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                While rooted in Islamic tradition and Arabic calligraphy, the
                beauty of Allah's words transcends cultural boundaries, speaking
                to the fitrah (natural disposition) that recognizes divine
                truth.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                In our diverse ummah, art becomes a bridge, reminding us that
                the love of Allah and His beautiful words unites believers
                across all backgrounds and cultures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl text-amber-900 mb-6">
            Begin Your Sacred Art Journey
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Whether you're seeking a piece for meditation, a gift of spiritual
            significance, or a custom commission that speaks to your soul, I'm
            here to help you find the perfect sacred art.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/paintings">
              <Button className="bg-amber-800 hover:bg-amber-900 text-white px-8 py-4 text-lg font-serif">
                Explore Paintings
              </Button>
            </Link>
            <Link href="/calligraphy">
              <Button className="bg-red-800 hover:bg-red-900 text-white px-8 py-4 text-lg font-serif">
                Discover Calligraphy
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
              <Heart className="h-6 w-6 text-red-700" />
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-amber-200 to-rose-900" />
            </div>
            <div className="text-center md:text-right">
              <p className="font-serif text-lg text-amber-900 mb-2">
                The Living Gallery
              </p>
              <p className="text-sm text-slate-600">Where art becomes prayer</p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-amber-200 text-center">
            <p className="text-sm text-slate-500">
              © 2024 The Living Gallery. All rights reserved. | Crafted with
              love and reverence.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
