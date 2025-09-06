'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function AboutPart1() {
  return (
    <div className="min-h-screen">
      {/* Our Purpose Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-6">Our Purpose</h1>
            <p className="text-lg mb-8">
              The UNSW Entrepreneurs' Society, affiliated with ARC, is dedicated to providing 
              regular updates on our membership portal and society announcements. Our primary 
              goal is to foster a network-building environment for UNSW students through 
              engaging networking events in the industry.
            </p>
            <Link 
              href="/membership"
              className="inline-block border border-black px-6 py-2 rounded hover:bg-black hover:text-white transition-colors"
            >
              Learn More
            </Link>
          </div>
          <div className="relative h-[500px]">
              <Image
                src="/images/entsoc2024/IMG_4093.JPG"
                alt="Our Purpose"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="bg-black text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Established with the aim of creating a vibrant community for aspiring entrepreneurs, 
            the UNSW Entrepreneurs' Society has been a cornerstone for innovation and creativity.
          </h2>
          <p className="text-lg mb-8">
            Over the years, we have evolved into a hub for entrepreneurial spirit and excellence, 
            continuously striving to empower and inspire the next generation of business leaders.
          </p>
          <Link 
            href="/resources"
            className="inline-block bg-white text-black px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
          >
            Discover
          </Link>
        </div>
      </section>
    </div>
  )
}
