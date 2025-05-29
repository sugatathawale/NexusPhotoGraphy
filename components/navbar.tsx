"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import logo from "../src/logo.jpg"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showNavbar, setShowNavbar] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNavbar(false)
      } else {
        setShowNavbar(true)
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <nav
className={`fixed top-0 w-full z-50 transition-transform duration-300 ${
  showNavbar ? "translate-y-0" : "-translate-y-full"
} bg-gradient-to-b from-[#938372]/90 to-transparent backdrop-blur-xs `}

    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/images/logo.jpg"  alt="Logo" width={48} height={48} className="rounded-full" />
          <span className="text-white font-serif text-xl">
            <span className="text-2xl">N</span>exus
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLinks />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-b from-[#c9b17e]/90 to-[#1e1b16]/90 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <NavLinks mobile onClick={() => setIsMenuOpen(false)} />
          </div>
        </div>
      )}
    </nav>
  )
}

function NavLinks({ mobile = false, onClick = () => {} }) {
  const links = [
    { name: "Home", href: "/" },
    { name: "Wedding Films", href: "/wedding-films" },
    { name: "Wedding Stories", href: "/wedding-stories" },
    { name: "Couple Shoot", href: "/couple-shoot" },
    { name: "About", href: "/about" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
    // { name: "FAQ", href: "/faq" },
  ]

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          onClick={onClick}
          className={`text-white hover:text-yellow-300 transition-colors ${
            mobile ? "text-lg py-2" : "text-sm font-light"
          }`}
        >
          {link.name}
        </Link>
      ))}
    </>
  )
}
