'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import work1 from "../../src/flimcard/img9.jpg"
import work2 from "../../src/work2.jpg"
// import work3 from "../../public/images/work3.jpg"
import work4 from "../../src/work4.jpg"
import niraj from "../../src/niraj.jpg"
import work9 from "../../src/work9.jpg"

export default function About() {
  const teamMembers = [
    {
      id: 1,
      name: 'Ne',
      lastName: 'Maurya',
      role: 'Chief Dreamer & Co-Founder',
      image: niraj,
    },
    {
      id: 2,
      name: 'Soumi',
      lastName: 'Goswami',
      role: 'Creative Head & Co-Founder',
      image: work2
    },
    {
      id: 3,
      name: 'Prasad',
      lastName: 'Patil',
      role: 'Lead Photographer & Production Manager',
      image: work4
    },
    {
      id: 4,
      name: 'Rishabh',
      lastName: 'Khandhadia',
      role: 'Lead Photographer',
      image: work9
    }
  ];

  return (
    <div className="min-h-screen bg-[#F5F0EC] pt-32">
      {/* Hero Section */}
      <section className="relative min-h-[80px] flex flex-col items-center justify-center text-center px-2">
        <h1 className="font-playfair text-[1.5rem] md:text-[2.5rem] mb-4">Celebrating Love</h1>
        <h2 className="font-playfair text-[1.8rem] md:text-[2.2rem] italic text-gray-700">Through the Lens Since 2018</h2>
      </section>

      {/* Company History Section */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: Image */}
          {/* Left: 3-grid Image Structure */}
          {/* Left: Custom Grid with Portrait, Wide, and Large Image */}
          <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full h-full">
            {/* Portrait (Tall) */}
            <div className="relative row-span-2 ml-30 aspect-[1/] w-full">
              <Image
                src={niraj}
                alt="Portrait"
                fill
                className="object-cover grayscale rounded-lg"
                unoptimized
                priority
              />
            </div>

            {/* Wide (Landscape) */}
            {/* <div className="relative aspect-[4/4] w-full">
    <Image
      src={work2}
      alt="Wide"
      fill
      className="object-cover grayscale rounded-lg"
      unoptimized
    />
  </div> */}

            {/* Large (Big block) */}
            {/* <div className="relative aspect-square w-full">
    <Image
      src={work3}
      alt="Large"
      fill
      className="object-cover grayscale rounded-lg"
      unoptimized
    />
  </div> */}
          </div>



          {/* Right: Text */}
          <div>
            <p className="text-lg mr-20 leading-relaxed text-gray-800">
              It all began with a single camera and a desire to freeze moments in time. In 2018, I, Niraj, picked up my first camera and started photographing friends—for nothing more than the joy of their reactions. One favor for a friend's sister's wedding changed everything, and I found my true calling in wedding photography.
              What started as a one-man passion project is now a trusted team of 12+ creative professionals. Together, we've covered 300+ weddings across India, from grand destination celebrations to intimate home ceremonies. Each wedding is a new story, and we treat it with the love and uniqueness it deserves.
              We work in a documentary-meets-artistic style—capturing the raw, the real, and the beautiful. Every tear, every laugh, every detail is preserved with purpose.
              We're honored to be recognized as one of Nagpur's top candid wedding photography teams. But to us, it's not about awards—it's about telling your story, your way.      </p>
            <p className="text-lg leading-relaxed text-gray-800 mt-6 italic">
              The key to great photographs, Nexus  believes, lies in connecting with the subjects and providing them that comfort that which helps bring out their personalities and therefore stories in the photographs.
            </p>
          </div>
        </div>
      </section>


      {/* Dreamers & Doers Section */}
      <section className="py-20 px-4 md:px-8 bg-[#D3C4B5]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center font-playfair text-[2.5rem] mb-2">The Dreamers & Doers</h2>
          <h3 className="text-center font-playfair text-[1.8rem] mb-16">of Nexus</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="text-center">
                <div className="relative w-full aspect-square mb-6">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={`${member.name} ${member.lastName}`}
                    fill
                    className="object-cover grayscale"
                  />
                </div>
                <h3 className="font-playfair text-2xl">{member.name} <span className="font-normal">{member.lastName}</span></h3>
                <p className="text-gray-700 mt-2">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
