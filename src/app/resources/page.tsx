import Link from 'next/link'

export default function Resources() {
  return (
    <div className="min-h-screen">
      {/* Our Guides Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Our Guides</h1>
          <p className="text-lg mb-8">
            Explore our comprehensive guides to entrepreneurship and networking. 
            Learn valuable insights to kickstart your journey.
          </p>
          <Link 
            href="#guides"
            className="inline-block border border-black px-6 py-2 rounded hover:bg-black hover:text-white transition-colors"
          >
            Read
          </Link>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Networking Tips</h3>
              <p className="mb-6">
                Learn effective strategies to expand your professional network and make 
                meaningful connections in the industry.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Industry Insights</h3>
              <p className="mb-6">
                Gain valuable insights into various industries, trends, and opportunities 
                to help shape your entrepreneurial path.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Success Strategies</h3>
              <p className="mb-6">
                Explore proven strategies and best practices from successful entrepreneurs 
                to guide you towards achieving your goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Helpful Links Section */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Helpful Links for You</h2>
          <p className="text-lg mb-8">
            Access a curated list of useful resources, tools, and platforms to support 
            your entrepreneurial journey.
          </p>
          <Link 
            href="#links"
            className="inline-block border border-black px-6 py-2 rounded hover:bg-black hover:text-white transition-colors"
          >
            Explore
          </Link>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Networking Events</h3>
              <p className="mb-6">
                Discover upcoming networking events where you can connect with industry 
                professionals and fellow students.
              </p>
              <Link 
                href="#events"
                className="text-black hover:underline"
              >
                Join Now
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Career Opportunities</h3>
              <p className="mb-6">
                Explore internship, job, and project opportunities to kickstart or 
                advance your career in the business world.
              </p>
              <Link 
                href="#careers"
                className="text-black hover:underline"
              >
                Explore Jobs
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Industry Reports</h3>
              <p className="mb-6">
                Access in-depth reports on various industries to stay informed about 
                market trends and potential business opportunities.
              </p>
              <Link 
                href="#reports"
                className="text-black hover:underline"
              >
                Read Reports
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Success Stories</h3>
              <p className="mb-6">
                Read inspiring success stories of entrepreneurs who have overcome 
                challenges and achieved remarkable milestones.
              </p>
              <Link 
                href="#stories"
                className="text-black hover:underline"
              >
                Get Inspired
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
