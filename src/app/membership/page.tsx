import Image from 'next/image'
import Link from 'next/link'

export default function Membership() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl font-bold mb-8">Get Involved</h1>
          <div className="relative h-[370px] mb-8">
            <Image
              src="/images/entsoc2024/IMG_4093.JPG"
              alt="Get Involved"
              fill
              sizes="100vw"
              priority
              style={{ objectFit: 'cover' }}
              className="rounded-lg"
            />
          </div>
          <p className="text-xl mb-8">
            Join the UNSW Entrepreneurs' Society to connect with like-minded students, 
            attend exclusive networking events, and stay updated on industry news.
          </p>
          <Link 
            href="https://www.arc.unsw.edu.au/get-involved/opportunity?name=Entrepreneurs%27%20Society"
            className="inline-block bg-black text-white px-8 py-3 rounded-md font-semibold hover:bg-gray-800 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join
          </Link>
        </div>
      </section>

      {/* Advantages Section */}
      {/* <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Discover the Advantages</h2>
          <p className="text-lg mb-12">
            Explore the benefits of being part of UNSW Entrepreneurs' Society. Gain 
            access to industry insights, networking opportunities, mentorship programs, and more.
          </p>
          <Link 
            href="#benefits"
            className="inline-block border border-black px-6 py-2 rounded hover:bg-black hover:text-white transition-colors mb-12"
          >
            Learn More
          </Link>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Mentorship</h3>
              <p className="mb-6">
                Receive guidance and support from experienced mentors to help shape 
                your entrepreneurial journey.
              </p>
              <Link href="#mentorship" className="text-black hover:underline">
                Discover
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Events</h3>
              <p className="mb-6">
                Attend workshops, seminars, and social gatherings that enhance your 
                entrepreneurial skills and knowledge.
              </p>
              <Link href="#events" className="text-black hover:underline">
                Join Now
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Skill Development</h3>
              <p className="mb-6">
                Develop essential skills through hands-on experiences and training 
                sessions organized by the society.
              </p>
              <Link href="#skills" className="text-black hover:underline">
                Learn More
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Community</h3>
              <p className="mb-6">
                Become part of a supportive community that shares your passion for 
                entrepreneurship and innovation.
              </p>
              <Link href="#community" className="text-black hover:underline">
                Join Us
              </Link>
            </div>
          </div>
        </div>
      </section> */}

      {/* Membership Options Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Membership Options</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg mb-6">
                The UNSW Entrepreneurs' Society offers flexible membership options to suit everyone:
              </p>
              <ul className="list-disc pl-6 space-y-4 mb-8">
                <li>Arc Members: Enjoy free access to all society events and resources.</li>
                <li>Non-Arc Members: Join for just $5 and gain full access to our activities and opportunities.</li>
                <li>Associate Members: Open to non-UNSW students for $5, providing the same benefits as full members.</li>
              </ul>
              <p className="mb-8">
                Choose the option that best fits your needs and become part of our 
                thriving entrepreneurial community!
              </p>
              <Link 
                href="https://www.arc.unsw.edu.au/get-involved/opportunity?name=Entrepreneurs%27%20Society"
                className="inline-block bg-black text-white px-8 py-3 rounded-md font-semibold hover:bg-gray-800 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore
              </Link>
            </div>

            <div className="space-y-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">Arc Member</h3>
                <p>
                  An Arc Member is a current UNSW student who has signed up for Arc@UNSW 
                  membership. This free membership unlocks access to exclusive benefits, 
                  including free participation in Arc-affiliated societies.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">Non-Arc Member</h3>
                <p>
                  A Non-Arc Member is a UNSW student who has not signed up for Arc@UNSW 
                  membership. They can still join EntSoc by paying a small membership 
                  fee to access all events and resources.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">Associate Member</h3>
                <p>
                  An Associate Member is someone who is not a UNSW student but wishes 
                  to join EntSoc. By paying a small membership fee, they can access 
                  the same events and resources as full members.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
