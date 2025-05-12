"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import logo from '../src/logo.jpg'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-transparent">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <div className="relative w-24 h-24">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white font-serif text-xl">
                <Image
              src={logo}
              alt="Logo"
              width={52}
              
              height={52}
              className="rounded-full"
            />
                  <span className="inline-block">
        

                    <span className="text-2xl">N</span>exus
                  </span>
                  {/* <span className="inline-block mx-1">by</span>
                  <span className="inline-block"> */}
                    {/* <span className="text-2xl">AMP</span> */}
                  {/* </span> */}
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLinks />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-sm">
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
    { name: "Wedding Stories", href: "/wedding-stories" },
    { name: "Wedding Films", href: "/wedding-films" },
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
          className={`text-white drop-shadow-golden hover:text-golden-300 transition-colors ${
            mobile ? "text-lg py-2" : "text-sm font-light"
          }`}
          onClick={onClick}
        >
          {link.name}
        </Link>
      ))}
    </>
  )
}
