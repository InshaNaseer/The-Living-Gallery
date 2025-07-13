"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingBag } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md border-b border-amber-200/50">
      <div className="max-w-7xl mx-auto px-6 py-2">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link
            href="/"
            className="font-serif text-xl text-amber-800 hover:text-amber-600 transition-colors"
          >
            The Living Gallery
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-slate-700 hover:text-amber-900 transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/paintings"
              className="text-slate-700 hover:text-amber-900 transition-colors font-medium"
            >
              Paintings
            </Link>
            {/* <Link
              href="/page"
              className="text-slate-700 hover:text-amber-900 transition-colors font-medium"
            >
              Abstract Art
            </Link> */}
            <Link
              href="/calligraphy"
              className="text-slate-700 hover:text-amber-900 transition-colors font-medium"
            >
              Calligraphy
            </Link>
            <Link
              href="/techniques"
              className="text-slate-700 hover:text-amber-900 transition-colors font-medium"
            >
              Techniques
            </Link>
            <Link
              href="/about"
              className="text-slate-700 hover:text-amber-900 transition-colors font-medium"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-slate-700 hover:text-amber-900 transition-colors font-medium"
            >
              Contact
            </Link>
            <Link href="/cart">
              <Button
                variant="ghost"
                size="icon"
                className="text-slate-700 hover:text-amber-900"
              >
                <ShoppingBag className="h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-slate-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-amber-200">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-slate-700 hover:text-amber-900 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/paintings"
                className="text-slate-700 hover:text-amber-900 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Paintings
              </Link>
              <Link
                href="/calligraphy"
                className="text-slate-700 hover:text-amber-900 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Calligraphy
              </Link>
              <Link
                href="/techniques"
                className="text-slate-700 hover:text-amber-900 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Techniques
              </Link>
              <Link
                href="/about"
                className="text-slate-700 hover:text-amber-900 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-slate-700 hover:text-amber-900 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/cart"
                className="text-slate-700 hover:text-amber-900 transition-colors font-medium flex items-center gap-2"
                onClick={() => setIsOpen(false)}
              >
                <ShoppingBag className="h-4 w-4" />
                Cart
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
