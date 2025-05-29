"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "Why should we choose you?",
    answer: "We bring a unique blend of artistic vision and technical expertise to every wedding we capture. Our team specializes in creating timeless, emotion-filled narratives that go beyond traditional wedding photography. We're known for our attention to detail, personalized service, and ability to make every couple feel comfortable and natural in front of the camera. With years of experience in destination weddings across India, we understand how to capture the perfect moments while being unobtrusive and professional."
  },
  {
    question: "How is your work different from others?",
    answer: "Our signature style combines candid photojournalism with artistic portraiture, creating a perfect blend of authentic moments and beautifully crafted images. We use state-of-the-art equipment and innovative techniques to capture your wedding in the most creative way possible. Unlike others, we focus on telling your unique love story through our lens, ensuring that each photo and video reflects your personality and the special moments that make your wedding unique."
  },
  {
    question: "Do you cover destination weddings?",
    answer: "Yes, we absolutely love destination weddings! We've covered ceremonies across India and internationally, from beach weddings in Goa to palace celebrations in Udaipur. Our team is experienced in handling the unique challenges of destination weddings and working with local vendors. We offer special packages for destination weddings that include travel arrangements and extended coverage to capture pre-wedding events and celebrations."
  },
  {
    question: "How many people will come for my wedding?",
    answer: "Our team size is customized based on your wedding's scale and requirements. Typically, we send 2-4 photographers and 1-2 videographers for comprehensive coverage. For larger weddings or multiple-day events, we can provide additional team members. We always ensure there's enough coverage to capture every important moment without being intrusive."
  },
  {
    question: "How are your services priced?",
    answer: "Our pricing is transparent and customized based on your specific needs. We offer different packages starting from basic coverage to premium all-inclusive options. Packages typically include pre-wedding shoots, full-day wedding coverage, edited high-resolution images, cinematic films, and premium photo albums. We're happy to create a custom package that fits your budget and requirements."
  },
  {
    question: "What are your delivery timelines?",
    answer: "We understand the excitement to see your wedding memories. Our standard delivery timeline includes: sneak peeks within 48 hours, complete edited photo collection within 4-6 weeks, and cinematic films within 8-10 weeks. Rush delivery is available upon request. All deliverables are provided in both digital and physical formats, depending on your package."
  }
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-cream-100">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-4 text-black py-4 px-2 rounded-lg">
          Confused? <span className="italic text-black">We've Got the Answers!</span>
        </h2>


        <div className="mt-12 space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                className="w-full py-6 flex justify-between items-center text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="text-xl md:text-2xl font-serif text-gray-800">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0 ml-4"
                >
                  <Plus className="w-6 h-6 text-golden-500" />
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
                    <p className="pb-6 text-gray-600 text-lg leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

     
      </div>
    </section>
  )
} 