import Image from 'next/image'
import Link from 'next/link'

export default function News() {
  return (
    <div className="min-h-screen">
      {/* News Update Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">News Update</h1>
          <Link 
            href="#news"
            className="inline-block border border-black px-6 py-2 rounded hover:bg-black hover:text-white transition-colors mb-12"
          >
            Read
          </Link>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="relative h-[300px]">
              <Image
                src="https://static.wixstatic.com/media/baac51_85ea66dc04284f40910abb8e1b90a2ba~mv2.jpg"
                alt="News Update"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
            </div>

            <div className="grid gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-3">Workshops</h3>
                <p>Join us for upcoming events</p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-3">Seminar</h3>
                <p>Enhance your skills with our workshops</p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-3">Networking</h3>
                <p>Participate in our insightful seminars</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold mb-4">Membership Portal</h3>
              <p className="mb-6">Explore our membership portal for exclusive features</p>
              <Link 
                href="https://www.arc.unsw.edu.au/get-involved/opportunity?name=Entrepreneurs%27%20Society"
                className="text-black hover:underline"
              >
                Join Now
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold mb-4">Society Updates</h3>
              <p className="mb-6">Get the latest updates on society activities</p>
              <Link 
                href="#updates"
                className="text-black hover:underline"
              >
                Learn More
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold mb-4">Networking Events</h3>
              <p className="mb-6">Join our networking events to expand your connections</p>
              <Link 
                href="#events"
                className="text-black hover:underline"
              >
                Join Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Stay Updated</h2>
          <p className="text-lg mb-8">
            Subscribe to our newsletter to receive the latest updates, event announcements, 
            and entrepreneurial insights directly in your inbox.
          </p>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-md"
              required
            />
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
