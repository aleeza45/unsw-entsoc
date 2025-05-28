import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-black text-white flex items-center justify-center">
        <div className="absolute inset-0">
            <Image
              src="https://static.wixstatic.com/media/baac51_a1800801553a41e4b95e214079fef63e~mv2.jpg"
              alt="Hero background"
              fill
              sizes="100vw"
              style={{ objectFit: 'cover', opacity: '0.7' }}
              priority
          />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-6xl font-bold mb-6">Empowering Student Entrepreneurs</h1>
          <p className="text-xl mb-8">
            Welcome to the UNSW Entrepreneurs' Society, where innovation and ideas converge. 
            Join us to explore, learn, and grow together.
          </p>
          <Link 
            href="/about"
            className="inline-block bg-white text-black px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
          >
            About Us
          </Link>
        </div>
      </section>

      {/* Latest Updates Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Latest Updates</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg mb-6">
                Stay informed with the latest news and events from our society. 
                Discover new opportunities and exciting developments.
              </p>
              <Link 
                href="/news"
                className="inline-block border border-black px-6 py-2 rounded hover:bg-black hover:text-white transition-colors"
              >
                Read More
              </Link>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-3">Meetups</h3>
                <p>Connect with like-minded peers at our regular meetups. Share ideas, collaborate, and build a strong community.</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">Workshops</h3>
                <p>Enhance your skills with practical workshops tailored for aspiring entrepreneurs. Gain valuable insights and hands-on experience.</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">Seminar Series</h3>
                <p>Join our seminar series featuring expert speakers and thought-provoking discussions. Expand your knowledge and stay ahead of trends.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Benefits */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Membership Benefits</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Skill Development</h3>
              <p className="mb-4">Develop essential entrepreneurial skills through our workshops and training programs. Acquire the tools you need to succeed in the business world.</p>
              <Link href="/resources" className="text-black hover:underline">Learn More</Link>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Career Opportunities</h3>
              <p className="mb-4">Access exclusive career opportunities, internships, and job placements tailored for entrepreneurial-minded students.</p>
              <Link href="/resources" className="text-black hover:underline">Explore</Link>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Community Engagement</h3>
              <p className="mb-4">Engage with the community through outreach programs, social initiatives, and collaborative projects that make a positive impact.</p>
              <Link href="/membership" className="text-black hover:underline">Get Involved</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Student Voices */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Student Voices</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 relative rounded-full overflow-hidden">
                <Image
                  src="https://static.wixstatic.com/media/baac51_e71bd5b73fa44da787967e24e8eba422~mv2.jpg"
                  alt="Student 1"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <p className="mb-4 italic">"The networking events are fantastic! I've made connections that will last a lifetime and had the opportunity to learn from successful entrepreneurs."</p>
              <p className="font-semibold">Jessica Smith</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 relative rounded-full overflow-hidden">
                <Image
                  src="https://static.wixstatic.com/media/baac51_e71bd5b73fa44da787967e24e8eba422~mv2.jpg"
                  alt="Student 2"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <p className="mb-4 italic">"The workshops are so practical and insightful. I've gained knowledge that I can immediately apply to my startup ideas and projects."</p>
              <p className="font-semibold">Michael Chen</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 relative rounded-full overflow-hidden">
                <Image
                  src="https://static.wixstatic.com/media/baac51_e71bd5b73fa44da787967e24e8eba422~mv2.jpg"
                  alt="Student 3"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <p className="mb-4 italic">"Being part of this community has been inspiring. I've found support, encouragement, and a platform to showcase my innovations."</p>
              <p className="font-semibold">Aisha Patel</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Subscribe to our newsletter</h2>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email*"
              className="w-full px-4 py-2 border rounded-md"
              required
            />
            <div className="flex items-center justify-center gap-2">
              <input type="checkbox" id="subscribe" className="rounded" />
              <label htmlFor="subscribe">Yes, subscribe me to your newsletter.</label>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
