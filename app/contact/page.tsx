'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Contact() {
    return (
        <div className="min-h-screen bg-[#F5F0EC] pt-32">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    {/* Left side - Images */}
                    <div className="space-y-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="relative aspect-[4/3] w-full overflow-hidden rounded-lg"
                        >
                            <Image
                                src="/images/contact/couple1.jpg"
                                alt="Happy couple laughing"
                                fill
                                className="object-cover"
                                priority
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative aspect-[4/3] w-full overflow-hidden rounded-lg"
                        >
                            <Image
                                src="/images/contact/couple2.jpg"
                                alt="Wedding couple"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    </div>

                    {/* Right side - Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-white p-8 rounded-lg shadow-lg"
                    >
                        <h1 className="text-4xl font-playfair mb-4 text-[#36302a]">Get us to shoot you!</h1>
                        <p className="text-gray-600 mb-8">
                            Welcome to the first step in getting us on onboard. Fill this form and get one
                            step closer to making the best decision of your life! Not kidding.
                        </p>
                        <p className="text-gray-600 mb-8">
                            We would love to schedule a call and know more about your wedding once
                            we have all the details as mentioned below
                        </p>

                        <form className="space-y-6">
                            {/* Name Fields */}
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">
                                    Name <span className="text-gray-500">(required)</span>
                                </label>
                                <div className="grid grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                        className="w-full px-4 py-2 rounded-md bg-[#F5F0EC] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#36302a]"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                        className="w-full px-4 py-2 rounded-md bg-[#F5F0EC] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#36302a]"
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">
                                    Email <span className="text-gray-500">(required)</span>
                                </label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-2 rounded-md bg-[#F5F0EC] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#36302a]"
                                />
                            </div>

                            {/* Phone */}
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">Phone</label>
                                <input
                                    type="tel"
                                    className="w-full px-4 py-2 rounded-md bg-[#F5F0EC] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#36302a]"
                                />
                            </div>

                            {/* Date of Event */}
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">
                                    Date of the Event <span className="text-gray-500">(required)</span>
                                </label>
                                <input
                                    type="date"
                                    className="w-full px-4 py-2 rounded-md bg-[#F5F0EC] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#36302a]"
                                />
                            </div>

                            {/* Event Type */}
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">
                                    Event Type <span className="text-gray-500">(required)</span>
                                </label>
                                <select className="w-full px-4 py-2 rounded-md bg-[#F5F0EC] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#36302a]">
                                    <option value="">Select an option</option>
                                    <option value="wedding">Wedding</option>
                                    <option value="pre-wedding">Pre-Wedding</option>
                                    <option value="engagement">Engagement</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            {/* Wedding Details */}
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">
                                    Tell us more about your wedding <span className="text-gray-500">(required)</span>
                                </label>
                                <textarea
                                    rows={4}
                                    placeholder="All the dates, event flows, venues and any other specific details"
                                    className="w-full px-4 py-2 rounded-md bg-[#F5F0EC] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#36302a]"
                                ></textarea>
                            </div>

                            {/* Wedding Style */}
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">
                                    What style of wedding is it? <span className="text-gray-500">(required)</span>
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2 rounded-md bg-[#F5F0EC] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#36302a]"
                                />
                            </div>

                            {/* Venue City */}
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">
                                    Venue City <span className="text-gray-500">(required)</span>
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2 rounded-md bg-[#F5F0EC] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#36302a]"
                                />
                            </div>

                            {/* Guest Count */}
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">
                                    Guest Count <span className="text-gray-500">(required)</span>
                                </label>
                                <input
                                    type="number"
                                    className="w-full px-4 py-2 rounded-md bg-[#F5F0EC] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#36302a]"
                                />
                            </div>

                            {/* How did you find us */}
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">
                                    How did you find us? <span className="text-gray-500">(required)</span>
                                </label>
                                <select className="w-full px-4 py-2 rounded-md bg-[#F5F0EC] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#36302a]">
                                    <option value="">Select an option</option>
                                    <option value="instagram">Instagram</option>
                                    <option value="facebook">Facebook</option>
                                    <option value="google">Google</option>
                                    <option value="referral">Referral</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#36302a] text-white py-3 rounded-md hover:bg-[#2a2420] transition-colors duration-300"
                            >
                                Submit
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
} 