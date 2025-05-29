"use client"

import Link from "next/link"
import { Briefcase } from "lucide-react"

export default function CareersLanding() {
    return (
        <section className="py-2 bg-white">
            <div className="container mx-auto px-4 max-w-4xl text-center">
                {/* Icon Circle */}
                <div className="w-12 h-12 bg-[#2A2A2A] rounded-full mx-auto mb-8 flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-white" />
                </div>

                {/* Title */}
                <h2 className="text-2xl md:text-1xl lg:text-3xl font-serif text-[#2A2A2A] mb-4">
                    We are Hiring!
                </h2>

                {/* Description */}
                <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                    Together with new input from your side, work with us on developing something one of a kind for clients,
                    that literally blow their minds.
                </p>

                {/* Apply Now Button */}
                <Link
                    href="/careers/openings"
                    className="inline-block px-6 py-3 bg-[#36302a] text-white text-lg font-medium rounded-lg hover:bg-[#E75480]/90 transition-colors"
                >
                    Apply Now
                </Link>
            </div>
        </section>
    )
} 