"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Volume2, VolumeX, Heart, Star, Lock, Unlock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/navigation";

export default function HomePage() {
  const [isMuted, setIsMuted] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[id]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const toggleMusic = () => {
    setIsMuted(!isMuted);
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  };

  const featuredArtworks = [
    {
      id: 1,
      title: "Ayat al-Kursi",
      description:
        "The Throne Verse rendered in flowing Thuluth script, a protection and blessing for any home.",
      price: "$180",
      type: "calligraphy",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      id: 2,
      title: "99 Names of Allah",
      description:
        "Asma ul-Husna beautifully painted with gold accents, celebrating the divine attributes.",
      price: "$220",
      type: "painting",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      id: 3,
      title: "Surah Al-Fatiha",
      description:
        "The Opening chapter of the Quran, painted with reverence and spiritual devotion.",
      price: "$195",
      type: "calligraphy",
      image: "/placeholder.svg?height=400&width=300",
    },
  ];

  const limitedPieces = [
    {
      id: 1,
      title: "The Sacred Seven",
      isLocked: true,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 2,
      title: "Moonlit Prayers",
      isLocked: false,
      price: "$350",
      image: "/placeholder.svg?height=300&width=300",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-rose-50 to-amber-50">
      <Navigation />

      {/* Ambient Audio */}
      <audio ref={audioRef} loop className="hidden">
        <source src="/ambient-music.mp3" type="audio/mpeg" />
      </audio>

      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-amber-300 rounded-full opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Header Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
        <div
          className="absolute inset-0"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            background: `
              linear-gradient(135deg, rgba(245, 240, 230, 0.9) 0%, rgba(240, 230, 220, 0.8) 50%, rgba(235, 225, 215, 0.9) 100%),
              url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d4af37' fillOpacity='0.08'%3E%3Cpath d='M50 15c19.33 0 35 15.67 35 35s-15.67 35-35 35-35-15.67-35-35 15.67-35 35-35zm0 5c-16.569 0-30 13.431-30 30s13.431 30 30 30 30-13.431 30-30-13.431-30-30-30z'/%3E%3Cpath d='M50 25c13.807 0 25 11.193 25 25s-11.193 25-25 25-25-11.193-25-25 11.193-25 25-25zm0 5c-11.046 0-20 8.954-20 20s8.954 20 20 20 20-8.954 20-20-8.954-20-20-20z'/%3E%3Cpath d='M50 35c8.284 0 15 6.716 15 15s-6.716 15-15 15-15-6.716-15-15 6.716-15 15-15zm0 5c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"),
              url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%238B4513' fillOpacity='0.03'%3E%3Cpath d='M30 5l5 5-5 5-5-5zm0 10l10 10-10 10-10-10zm0 20l15 15-15 15-15-15z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
            `,
            backgroundSize: "200px 200px, 60px 60px",
            backgroundPosition: "0 0, 30px 30px",
          }}
        />

        {/* Vintage paper texture overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: `
              radial-gradient(circle at 20% 80%, rgba(139, 69, 19, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(160, 82, 45, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(210, 180, 140, 0.1) 0%, transparent 50%)
            `,
          }}
        />

        {/* Vintage ornamental corners */}
        <div className="absolute top-8 left-8 w-16 h-16 opacity-30">
          <svg viewBox="0 0 100 100" className="w-full h-full text-amber-700">
            <path
              d="M10,10 Q50,10 50,50 Q50,10 90,10 Q90,50 50,50 Q90,50 90,90 Q50,90 50,50 Q50,90 10,90 Q10,50 50,50 Q10,50 10,10 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </div>

        <div className="absolute top-8 right-8 w-16 h-16 opacity-30 transform rotate-90">
          <svg viewBox="0 0 100 100" className="w-full h-full text-amber-700">
            <path
              d="M10,10 Q50,10 50,50 Q50,10 90,10 Q90,50 50,50 Q90,50 90,90 Q50,90 50,50 Q50,90 10,90 Q10,50 50,50 Q10,50 10,10 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </div>

        <div className="absolute bottom-8 left-8 w-16 h-16 opacity-30 transform rotate-270">
          <svg viewBox="0 0 100 100" className="w-full h-full text-amber-700">
            <path
              d="M10,10 Q50,10 50,50 Q50,10 90,10 Q90,50 50,50 Q90,50 90,90 Q50,90 50,50 Q50,90 10,90 Q10,50 50,50 Q10,50 10,10 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </div>

        <div className="absolute bottom-8 right-8 w-16 h-16 opacity-30 transform rotate-180">
          <svg viewBox="0 0 100 100" className="w-full h-full text-amber-700">
            <path
              d="M10,10 Q50,10 50,50 Q50,10 90,10 Q90,50 50,50 Q90,50 90,90 Q50,90 50,50 Q50,90 10,90 Q10,50 50,50 Q10,50 10,10 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </div>

        {/* Vintage manuscript lines */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `
                repeating-linear-gradient(
                  0deg,
                  transparent,
                  transparent 35px,
                  rgba(139, 69, 19, 0.3) 35px,
                  rgba(139, 69, 19, 0.3) 36px
                )
              `,
            }}
          />
        </div>

        {/* Music Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-6 right-6 z-10 text-red-900 hover:text-amber-900 hover:bg-amber-100/50"
          onClick={toggleMusic}
        >
          {isMuted ? (
            <VolumeX className="h-5 w-5" />
          ) : (
            <Volume2 className="h-5 w-5" />
          )}
        </Button>

        <div className="text-center z-10 max-w-4xl px-6 mt-16">
          <h1 className="font-serif text-5xl md:text-7xl text-amber-900 mb-8 animate-fade-in-up">
            The Living Gallery
          </h1>
          <p className="font-serif text-xl md:text-2xl text-red-900 mb-16 leading-relaxed animate-fade-in-up animation-delay-300">
            "And it is He who created the heavens and earth in truth. And the
            day He says, 'Be,' and it is, His word is the truth." - Quran 6:73
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up animation-delay-600">
            <Link href="/paintings">
              <Button className="bg-amber-800 hover:bg-amber-900 text-amber-50 px-8 py-6 text-lg font-serif border-2 border-amber-700 shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto">
                Explore Paintings
              </Button>
            </Link>
            <Link href="/calligraphy">
              <Button className="bg-red-800 hover:bg-red-900 text-white px-8 py-6 text-lg font-serif border-2 border-red-700 shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto">
                Discover Calligraphy
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Collections Preview */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-5xl text-amber-900 text-center mb-16">
            Featured Collections
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            {/* Paintings Preview */}
            <div className="text-center">
              <h3 className="font-serif text-3xl text-red-900 mb-8">
                Sacred Paintings
              </h3>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="relative group overflow-hidden rounded-lg"
                  >
                    <Image
                      src={`/placeholder.svg?height=200&width=200`}
                      alt={`Painting ${i}`}
                      width={200}
                      height={200}
                      className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                ))}
              </div>
              <Link href="/paintings">
                <Button className="bg-amber-700 hover:bg-amber-800 text-white px-6 py-3 font-serif">
                  View All Paintings
                </Button>
              </Link>
            </div>

            {/* Calligraphy Preview */}
            <div className="text-center">
              <h3 className="font-serif text-3xl text-red-900 mb-8">
                Divine Calligraphy
              </h3>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="relative group overflow-hidden rounded-lg"
                  >
                    <Image
                      src={`/placeholder.svg?height=200&width=200`}
                      alt={`Calligraphy ${i}`}
                      width={200}
                      height={200}
                      className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                ))}
              </div>
              <Link href="/calligraphy">
                <Button className="bg-red-700 hover:bg-red-800 text-white px-6 py-3 font-serif">
                  View All Calligraphy
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Artist's Soul Section */}
      <section
        id="artist-soul"
        className="py-20 px-6 bg-gradient-to-r from-rose-50 to-rose-50"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-serif text-5xl text-amber-900 mb-12">
            The Artist's Soul
          </h2>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="relative">
                <div className="absolute -inset-6 bg-gradient-to-r from-amber-200 to-rose-900 rounded-full opacity-20" />
                <Image
                  src="/i.jpeg?height=300&width=300"
                  alt="Artist Portrait"
                  width={300}
                  height={300}
                  className="relative rounded-full shadow-xl mx-auto"
                />
              </div>
            </div>
            <div className="flex-1 text-left">
              <p className="text-lg text-slate-600 leading-relaxed font-light mb-6">
                In the quiet hours before dawn, when the world holds its breath,
                I find myself drawn to the sacred dance between brush and
                canvas. Each piece begins as a whispered prayer, a conversation
                with the divine that unfolds in strokes of gold and whispers of
                rose.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed font-light mb-6">
                My art is not merely decoration—it is meditation made visible,
                spirituality given form. Through ancient calligraphy and
                timeless paintings, I seek to create windows into the soul,
                spaces where beauty and meaning converge in perfect harmony.
              </p>
              <p className="font-serif text-xl text-red-900 mb-8 italic">
                — Insha Naseer, Founder of The Living Gallery
              </p>
              <Link href="/about">
                <Button className="bg-amber-700 hover:bg-amber-800 text-white px-6 py-3 font-serif">
                  Read Full Story
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Divine Drops - Limited Edition */}
      <section
        id="divine-drops"
        className="py-20 px-6 bg-gradient-to-r from-amber-50 to-rose-50"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-serif text-5xl text-amber-900 mb-8">
            Divine Drops
          </h2>
          <p className="text-xl text-slate-600 mb-16 font-light">
            Rare treasures, released when the stars align. Some secrets are
            worth the wait.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {limitedPieces.map((piece) => (
              <Card
                key={piece.id}
                className="relative overflow-hidden border-0 shadow-xl bg-white/90 backdrop-blur-sm"
              >
                <div className="relative">
                  <Image
                    src={piece.image || "/placeholder.svg"}
                    alt={piece.title}
                    width={300}
                    height={300}
                    className={`w-full h-64 object-cover ${
                      piece.isLocked ? "filter blur-sm" : ""
                    }`}
                  />
                  {piece.isLocked && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <div className="text-center text-white">
                        <Lock className="h-12 w-12 mx-auto mb-4" />
                        <p className="font-serif text-lg">Unlock with Email</p>
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h4 className="font-serif text-2xl text-amber-900 mb-4">
                    {piece.title}
                  </h4>
                  {piece.isLocked ? (
                    <div className="space-y-4">
                      <Input
                        placeholder="Enter your email to unlock"
                        className="border-amber-200"
                      />
                      <Button className="w-full bg-amber-700 hover:bg-amber-800 text-white font-serif">
                        <Unlock className="h-4 w-4 mr-2" />
                        Reveal Sacred Art
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <p className="text-2xl font-serif text-red-900">
                        {piece.price}
                      </p>
                      <Button className="w-full bg-amber-700 hover:bg-amber-800 text-white font-serif">
                        Add to Collection
                      </Button>
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final Quote Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(135deg, rgba(245, 240, 230, 0.9) 0%, rgba(240, 230, 220, 0.8) 50%, rgba(235, 225, 215, 0.9) 100%),
              url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d4af37' fillOpacity='0.08'%3E%3Cpath d='M50 15c19.33 0 35 15.67 35 35s-15.67 35-35 35-35-15.67-35-35 15.67-35 35-35zm0 5c-16.569 0-30 13.431-30 30s13.431 30 30 30 30-13.431 30-30-13.431-30-30-30z'/%3E%3Cpath d='M50 25c13.807 0 25 11.193 25 25s-11.193 25-25 25-25-11.193-25-25 11.193-25 25-25zm0 5c-11.046 0-20 8.954-20 20s8.954 20 20 20 20-8.954 20-20-8.954-20-20-20z'/%3E%3Cpath d='M50 35c8.284 0 15 6.716 15 15s-6.716 15-15 15-15-6.716-15-15 6.716-15 15-15zm0 5c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"),
              url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%238B4513' fillOpacity='0.03'%3E%3Cpath d='M30 5l5 5-5 5-5-5zm0 10l10 10-10 10-10-10zm0 20l15 15-15 15-15-15z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
            `,
            backgroundSize: "200px 200px, 60px 60px",
            backgroundPosition: "0 0, 30px 30px",
          }}
        />

        {/* Vintage paper texture overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: `
              radial-gradient(circle at 20% 80%, rgba(139, 69, 19, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(160, 82, 45, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(210, 180, 140, 0.1) 0%, transparent 50%)
            `,
          }}
        />

        {/* Vintage ornamental corners */}
        <div className="absolute top-8 left-8 w-20 h-20 opacity-25">
          <svg viewBox="0 0 100 100" className="w-full h-full text-amber-700">
            <path
              d="M20,20 Q30,10 50,20 Q70,10 80,20 Q90,30 80,50 Q90,70 80,80 Q70,90 50,80 Q30,90 20,80 Q10,70 20,50 Q10,30 20,20 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <circle cx="50" cy="50" r="8" fill="currentColor" opacity="0.3" />
          </svg>
        </div>

        <div className="absolute top-8 right-8 w-20 h-20 opacity-25 transform rotate-90">
          <svg viewBox="0 0 100 100" className="w-full h-full text-amber-700">
            <path
              d="M20,20 Q30,10 50,20 Q70,10 80,20 Q90,30 80,50 Q90,70 80,80 Q70,90 50,80 Q30,90 20,80 Q10,70 20,50 Q10,30 20,20 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <circle cx="50" cy="50" r="8" fill="currentColor" opacity="0.3" />
          </svg>
        </div>

        <div className="absolute bottom-8 left-8 w-20 h-20 opacity-25 transform rotate-270">
          <svg viewBox="0 0 100 100" className="w-full h-full text-amber-700">
            <path
              d="M20,20 Q30,10 50,20 Q70,10 80,20 Q90,30 80,50 Q90,70 80,80 Q70,90 50,80 Q30,90 20,80 Q10,70 20,50 Q10,30 20,20 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <circle cx="50" cy="50" r="8" fill="currentColor" opacity="0.3" />
          </svg>
        </div>

        <div className="absolute bottom-8 right-8 w-20 h-20 opacity-25 transform rotate-180">
          <svg viewBox="0 0 100 100" className="w-full h-full text-amber-700">
            <path
              d="M20,20 Q30,10 50,20 Q70,10 80,20 Q90,30 80,50 Q90,70 80,80 Q70,90 50,80 Q30,90 20,80 Q10,70 20,50 Q10,30 20,20 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <circle cx="50" cy="50" r="8" fill="currentColor" opacity="0.3" />
          </svg>
        </div>

        {/* Vintage manuscript lines */}
        <div className="absolute inset-0 opacity-8">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `
                repeating-linear-gradient(
                  0deg,
                  transparent,
                  transparent 40px,
                  rgba(139, 69, 19, 0.2) 40px,
                  rgba(139, 69, 19, 0.2) 41px
                )
              `,
            }}
          />
        </div>

        {/* Central decorative flourish */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 opacity-15">
          <svg viewBox="0 0 100 100" className="w-full h-full text-red-800">
            <path
              d="M50,10 Q60,20 70,30 Q80,40 70,50 Q80,60 70,70 Q60,80 50,90 Q40,80 30,70 Q20,60 30,50 Q20,40 30,30 Q40,20 50,10 Z"
              fill="currentColor"
              opacity="0.1"
            />
            <path
              d="M50,20 Q55,25 60,30 Q65,35 60,40 Q65,45 60,50 Q65,55 60,60 Q55,65 50,70 Q45,65 40,60 Q35,55 40,50 Q35,45 40,40 Q35,35 40,30 Q45,25 50,20 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.3"
            />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <blockquote className="font-serif text-4xl md:text-6xl text-amber-900 mb-12 leading-relaxed">
            "And Allah is the best of providers." - Quran 62:11
          </blockquote>
          <Link href="/shop">
            <Button
              size="lg"
              className="bg-red-800 hover:bg-red-900 text-white px-12 py-6 text-xl font-serif shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Begin Your Curation
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-gradient-to-r from-amber-50 to-rose-50 border-t border-amber-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-6 mb-8 md:mb-0">
              <Heart className="h-6 w-6 text-red-700" />
              <Star className="h-6 w-6 text-amber-500" />
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
