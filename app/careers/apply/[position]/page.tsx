"use client"

import { useState } from "react"
import { useParams, useRouter } from "next/navigation"

interface ApplicationFormData {
    position: string
    name: string
    email: string
    phone: string
    experience: string
    portfolio?: string
    resume: File | null
    coverLetter: string
}

export default function ApplicationPage() {
    const params = useParams()
    const router = useRouter()
    const position = (params.position as string).split('-').map(word =>
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ')

    const [formData, setFormData] = useState<ApplicationFormData>({
        position: position,
        name: "",
        email: "",
        phone: "",
        experience: "",
        portfolio: "",
        resume: null,
        coverLetter: ""
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission here
        console.log(formData)
        // Redirect to success page or show success message
        router.push('/careers/success')
    }

    const isCreativePosition = position === "Content Creator" || position === "Video Editor"

    return (
        <main>
            {/* Header Section */}
            <section className="bg-[#2A2A2A] py-16 rounded-b-[40px]">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-serif text-white text-center">
                        Apply for {position}
                    </h1>
                </div>
            </section>

            {/* Application Form */}
            <section className="py-16">
                <div className="container mx-auto px-4 max-w-2xl">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-gray-700 mb-2 font-medium">
                                Full Name *
                            </label>
                            <input
                                type="text"
                                required
                                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#E75480]/20 focus:border-[#E75480]"
                                value={formData.name}
                                onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-2 font-medium">
                                Email *
                            </label>
                            <input
                                type="email"
                                required
                                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#E75480]/20 focus:border-[#E75480]"
                                value={formData.email}
                                onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-2 font-medium">
                                Phone Number *
                            </label>
                            <input
                                type="tel"
                                required
                                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#E75480]/20 focus:border-[#E75480]"
                                value={formData.phone}
                                onChange={e => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-2 font-medium">
                                Years of Experience *
                            </label>
                            <input
                                type="text"
                                required
                                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#E75480]/20 focus:border-[#E75480]"
                                value={formData.experience}
                                onChange={e => setFormData(prev => ({ ...prev, experience: e.target.value }))}
                            />
                        </div>

                        {isCreativePosition && (
                            <div>
                                <label className="block text-gray-700 mb-2 font-medium">
                                    Portfolio URL
                                </label>
                                <input
                                    type="url"
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#E75480]/20 focus:border-[#E75480]"
                                    value={formData.portfolio || ""}
                                    onChange={e => setFormData(prev => ({ ...prev, portfolio: e.target.value }))}
                                    placeholder="https://your-portfolio.com"
                                />
                            </div>
                        )}

                        <div>
                            <label className="block text-gray-700 mb-2 font-medium">
                                Resume *
                            </label>
                            <input
                                type="file"
                                required
                                accept=".pdf,.doc,.docx"
                                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#E75480]/20 focus:border-[#E75480]"
                                onChange={e => setFormData(prev => ({ ...prev, resume: e.target.files?.[0] || null }))}
                            />
                            <p className="text-sm text-gray-500 mt-1">
                                Accepted formats: PDF, DOC, DOCX
                            </p>
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-2 font-medium">
                                Cover Letter
                            </label>
                            <textarea
                                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#E75480]/20 focus:border-[#E75480] h-40"
                                value={formData.coverLetter}
                                onChange={e => setFormData(prev => ({ ...prev, coverLetter: e.target.value }))}
                                placeholder="Tell us why you'd be a great fit for this position..."
                            ></textarea>
                        </div>

                        <div className="pt-4">
                            <button
                                type="submit"
                                className="w-full px-8 py-4 bg-[#E75480] text-white text-lg font-medium rounded-lg hover:bg-[#E75480]/90 transition-colors"
                            >
                                Submit Application
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    )
} 