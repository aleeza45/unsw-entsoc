'use client'
import Link from 'next/link'
import TeamMemberCard from '../../components/TeamMemberCard'
import { teamMembers } from '../../data/teamMembers'
import ErrorBoundary from '../../components/ErrorBoundary'
import { useState } from 'react'

export default function AboutPart2() {
  const [showAllMembers, setShowAllMembers] = useState(false)
  
  // Show first 8 members initially
  const displayedMembers = showAllMembers ? teamMembers : teamMembers.slice(0, 8)

  return (
    <>
      {/* Meet the Team */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Meet the Team</h2>
          <p className="text-lg text-center mb-12">
            Our team is comprised of dedicated individuals who share a passion for 
            entrepreneurship and student development. Each member brings unique skills 
            and experiences to create a dynamic and supportive environment.
          </p>
          
          {/* Team Members Grid */}
          <ErrorBoundary>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {displayedMembers.map((member, index) => (
                <TeamMemberCard key={index} member={member} />
              ))}
            </div>
          </ErrorBoundary>

          {/* See More Button */}
          {!showAllMembers && teamMembers.length > 8 && (
            <div className="text-center">
              <button
                onClick={() => setShowAllMembers(true)}
                className="inline-block bg-black text-white px-8 py-3 rounded-md font-semibold hover:bg-gray-800 transition-colors"
              >
                See More Team Members ({teamMembers.length - 8} more)
              </button>
            </div>
          )}

          {/* Show Less Button */}
          {showAllMembers && (
            <div className="text-center">
              <button
                onClick={() => setShowAllMembers(false)}
                className="inline-block bg-gray-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-gray-700 transition-colors"
              >
                Show Less
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Upcoming Events</h2>
          <p className="text-lg mb-12">
            Stay tuned for our exciting lineup of events designed to inspire, educate, 
            and connect aspiring entrepreneurs. From workshops to networking sessions, 
            we offer a range of opportunities to enhance your entrepreneurial journey.
          </p>
          <Link 
            href="https://www.eventbrite.com.au/o/unsw-entrepreneur-society-87970783883"
            className="inline-block bg-black text-white px-8 py-3 rounded-md font-semibold hover:bg-gray-800 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Attend
          </Link>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Workshops</h3>
              <p>Share your feature information here to attract new clients. Provide a brief summary to help visitors understand the context and background.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Guest Speakers</h3>
              <p>Share your feature information here to attract new clients. Provide a brief summary to help visitors understand the context and background.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Panel Discussions</h3>
              <p>Share your feature information here to attract new clients. Provide a brief summary to help visitors understand the context and background.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Pitch Competitions</h3>
              <p>Share your feature information here to attract new clients. Provide a brief summary to help visitors understand the context and background.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
