'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import work1 from '../../src/work1.jpg'
import work2 from '../../src/work2.jpg'
import work3 from '../../src/work3.jpg'
import work4 from '../../src/work4.jpg'

import work9 from '../../src/work9.jpg'

export default function About() {
    const teamMembers = [
        {
            id: 1,
            name: 'Anupam',
            lastName: 'Maurya',
            role: 'Chief Dreamer & Co-Founder',
            image: work1,
        },
        {
            id: 2,
            name: 'Soumi',
            lastName: 'Goswami',
            role: 'Creative Head & Co-Founder',
            image:work2
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
                <h2 className="font-playfair text-[1.8rem] md:text-[2.2rem] italic text-gray-700">Through the Lens Since 2013</h2>
            </section>

            {/* Company History Section */}
         <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    {/* Left: Image */}
 {/* Left: 3-grid Image Structure */}
{/* Left: Custom Grid with Portrait, Wide, and Large Image */}
<div className="grid grid-cols-2 grid-rows-2 gap-4 w-full h-full">
  {/* Portrait (Tall) */}
  <div className="relative row-span-2 aspect-[1/] w-full">
    <Image
      src={work1}
      alt="Portrait"
      fill
      className="object-cover grayscale rounded-lg"
      unoptimized
      priority
    />
  </div>

  {/* Wide (Landscape) */}
  <div className="relative aspect-[4/4] w-full">
    <Image
      src={work2}
      alt="Wide"
      fill
      className="object-cover grayscale rounded-lg"
      unoptimized
    />
  </div>

  {/* Large (Big block) */}
  <div className="relative aspect-square w-full">
    <Image
      src={work3}
      alt="Large"
      fill
      className="object-cover grayscale rounded-lg"
      unoptimized
    />
  </div>
</div>



    {/* Right: Text */}
    <div>
      <p className="text-lg leading-relaxed text-gray-800">
        It all started when <span className="underline">Anupam</span>, a BITS Pilani alumnus, decided to quit his job as Circuit Design Engineer at AMD to pursue his passion of photography full time. AMP (Anupam Maurya Photography) was born in December, 2013. Since then AMP grew multiple folds, with <span className="underline">Soumi</span> joining as Co-Founder. Fast Forward to 2016, KnotsbyAMP was officially born.
      </p>
      <p className="text-lg leading-relaxed text-gray-800 mt-6">
        KnotsbyAMP is today one of the best wedding photographers in Mumbai and top choices of couple's in India, with one of the highest reviews on Google and <span className="underline">WedmeGood</span> for any photography company in India. Led by Anupam & Soumi, KnotsbyAMP has covered a rich kaleidoscope of Indian Weddings from private weddings to luxurious destination weddings. But their professionalism, communication and bespoke style of working and ability to blend elements of fashion, fine art, documentary into their frames is what sets them apart.
      </p>
      <p className="text-lg leading-relaxed text-gray-800 mt-6 italic">
        The key to great photographs, KnotsbyAMP believes, lies in connecting with the subjects and providing them that comfort that which helps bring out their personalities and therefore stories in the photographs.
      </p>
    </div>
  </div>
</section>


            {/* Dreamers & Doers Section */}
            <section className="py-20 px-4 md:px-8 bg-[#D3C4B5]">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-center font-playfair text-[2.5rem] mb-2">The Dreamers & Doers</h2>
                    <h3 className="text-center font-playfair text-[1.8rem] mb-16">of KnotsbyAMP</h3>

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
