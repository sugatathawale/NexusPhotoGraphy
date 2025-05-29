"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus } from "lucide-react"
import Link from "next/link"

interface JobPosition {
    title: string
    experience: string
    description: string[]
    requirements?: string[]
}

const jobOpenings: JobPosition[] = [
    {
        title: "Operation Manager",
        experience: "5 TO 10 years",
        description: [
            "Maintain constant communication with management, staff, and vendors to ensure proper operations of the organization.",
            "Grow the efficiency of existing organizational processes and procedures to enhance and sustain the organizations internal capacity.",
            "Continuous improvement of the process, the communication methods, reporting and platform infrastructures",
            "Prioritize and manage escalated issues affecting our products for multiple customers to successful resolution",
            "Ensure high-quality customer service with emphasis on timely resolution and through problem definition and identification",
            "The main responsibility is to bring order, structure, and focused management attention to the customer's problems in order to gain complete consumer satisfaction",
            "Perform periodic maintenance and servicing of MIS system to improve operational efficiency."
        ]
    },
    {
        title: "Content Creator",
        experience: "1 TO 6 Years",
        description: [
            "Create engaging and high-quality content for social media platforms",
            "Develop and maintain content calendar",
            "Collaborate with photography and video teams",
            "Handle social media management and engagement",
            "Create compelling storytelling through various media formats"
        ]
    },
    {
        title: "Video Editor",
        experience: "0 TO 9 Years",
        description: [
            "Edit and produce high-quality wedding films",
            "Color grading and audio mixing",
            "Create cinematic storytelling through video",
            "Handle multiple projects simultaneously",
            "Stay updated with latest editing techniques and trends"
        ]
    }
]

export default function CareersPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    return (
        <main>
            {/* Header Section */}
            <section className="bg-[#2A2A2A] py-16 rounded-b-[40px]">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white text-center">
                        Current Openings
                    </h1>
                </div>
            </section>

            {/* Job Listings */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="space-y-4">
                        {jobOpenings.map((job, index) => (
                            <div key={index} className="bg-white rounded-2xl overflow-hidden">
                                {/* Job Header - Always Visible */}
                                <div className="bg-[#44392e] px-6 py-4 text-white">
                                    <div className="flex justify-between items-center">
                                        <h3 className="text-xl md:text-2xl font-medium">
                                            {job.title}
                                        </h3>
                                        <span className="text-sm opacity-90">
                                            (EXP: {job.experience})
                                        </span>
                                    </div>
                                </div>

                                {/* Expandable Content */}
                                <div className="border border-gray-100 rounded-b-2xl shadow-sm">
                                    <button
                                        className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-gray-50"
                                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    >
                                        <span className="text-gray-600 font-medium">
                                            Job Description
                                        </span>
                                        <motion.div
                                            animate={{ rotate: openIndex === index ? 45 : 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <Plus className="w-6 h-6 text-[#d1c5a8]" />
                                        </motion.div>
                                    </button>

                                    <AnimatePresence>
                                        {openIndex === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-6 py-4">
                                                    <ul className="space-y-3 text-gray-600 list-disc pl-5 mb-6">
                                                        {job.description.map((item, i) => (
                                                            <li key={i}>{item}</li>
                                                        ))}
                                                    </ul>

                                                    <Link
                                                        href={`/careers/apply/${job.title.toLowerCase().replace(/\s+/g, '-')}`}
                                                        className="inline-block px-8 py-3 bg-[#E75480] text-white rounded-full hover:bg-[#E75480]/90 transition-colors"
                                                    >
                                                        Apply Now
                                                    </Link>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
} 