"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Image
              src="/favicon.ico"
              alt="Logo"
              width={32}
              height={32}
              className="mr-2"
            />
            <h1 className="text-2xl font-bold text-foreground font-script">
              Mei Sports
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-muted-foreground transition-colors px-3 py-2 text-sm font-medium">
              Trang chủ
            </a>
            <a href="#collection" className="text-foreground hover:text-muted-foreground transition-colors px-3 py-2 text-sm font-medium">
              Bộ sưu tập
            </a>
            <a href="#custom" className="text-foreground hover:text-muted-foreground transition-colors px-3 py-2 text-sm font-medium">
              Thiết kế riêng
            </a>
            <a href="#contact" className="text-foreground hover:text-muted-foreground transition-colors px-3 py-2 text-sm font-medium">
              Liên hệ
            </a>

            {/* Hotline */}
            <span className="text-red-600 font-bold animate-blink">
              📞 Hotline: 0377436238
            </span>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-muted-foreground"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              <a href="#" className="text-foreground hover:text-muted-foreground block px-3 py-2 text-base font-medium">
                Trang chủ
              </a>
              <a href="#collection" className="text-foreground hover:text-muted-foreground block px-3 py-2 text-base font-medium">
                Bộ sưu tập
              </a>
              <a href="#custom" className="text-foreground hover:text-muted-foreground block px-3 py-2 text-base font-medium">
                Thiết kế riêng
              </a>
              <a href="#contact" className="text-foreground hover:text-muted-foreground block px-3 py-2 text-base font-medium">
                Liên hệ
              </a>

              {/* Hotline Mobile */}
              <span className="block mt-2 text-red-600 font-bold animate-blink">
                📞 Hotline: 0377436238
              </span>
            </div>
          </div>
        )}
      </div>
      {/* CSS Animation */}
      <style jsx>{`
        @keyframes blink {
          0%, 50%, 100% { opacity: 1; }
          25%, 75% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 3s infinite;
        }
      `}</style>
    </nav>
  )
}
