import Link from "next/link"
import { Instagram, Facebook, Youtube, Twitter, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
<footer style={{ backgroundColor: '#36302a' }} className="text-white pt-16 pb-8">
    
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-serif mb-6 drop-shadow-golden">Nexus</h3>
            <p className="text-gray-400 mb-6">
              Capturing love stories since 2014. We specialize in wedding photography and filmmaking that tells your
              unique story.
            </p>
            <div className="flex space-x-4">
 <Link
  href="https://www.instagram.com/weddings.studionexus"
  target="_blank"
  rel="noopener noreferrer"
  className="text-gray-400 hover:text-golden-400 transition-colors flex items-center space-x-1"
>
  <Instagram className="w-5 h-5" />
  <span className="sr-only">Instagram</span>
</Link>

              <Link href="#" className="text-gray-400 hover:text-golden-400 transition-colors">
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </Link>
        <Link
  href="https://www.youtube.com/@studionexusphotography"
  target="_blank"
  rel="noopener noreferrer"
  className="text-gray-400 hover:text-golden-400 transition-colors"
>
  <Youtube className="w-5 h-5" />
  <span className="sr-only">YouTube</span>
</Link>

              <Link href="#" className="text-gray-400 hover:text-golden-400 transition-colors">
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Wedding Stories
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Wedding Films
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Couple Shoot
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-golden-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">123 Wedding Street, Mumbai, Maharashtra, India - 400001</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-golden-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400">+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-golden-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400">hello@Nexus.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Nexus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
