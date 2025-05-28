"use client";
import Image from 'next/image';

export default function Navigation() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Image
                src="/logo.svg"
                alt="UNSW Entrepreneurs' Society Logo"
                width={40}
                height={40}
                className="w-10 h-10"
                style={{ filter: 'brightness(1)' }}
              />
              <a href="/" className="text-black font-bold">
                UNSW Entrepreneurs' Society
              </a>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="/" className="text-black hover:text-gray-600 px-3 py-2 transition-colors">Home</a>
                <a href="/about" className="text-black hover:text-gray-600 px-3 py-2 transition-colors">About Us</a>
                <a href="/resources" className="text-black hover:text-gray-600 px-3 py-2 transition-colors">Resources</a>
                <a href="/news" className="text-black hover:text-gray-600 px-3 py-2 transition-colors">News</a>
                <a href="/membership" className="text-black hover:text-gray-600 px-3 py-2 transition-colors">Membership</a>
                <a href="/contact" className="text-black hover:text-gray-600 px-3 py-2 transition-colors">Contact Us</a>
              </div>
            </div>
            
            {/* Mobile Navigation Button */}
            <div className="md:hidden">
              <button 
                onClick={() => {
                  const mobileMenu = document.getElementById('mobile-menu');
                  if (mobileMenu) {
                    mobileMenu.classList.toggle('hidden');
                  }
                }}
                className="text-black p-2"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/* Mobile Navigation Menu */}
      <div id="mobile-menu" className="hidden md:hidden fixed top-16 left-0 right-0 bg-white border-b z-50">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a href="/" className="block px-3 py-2 text-black hover:text-gray-600 transition-colors">Home</a>
          <a href="/about" className="block px-3 py-2 text-black hover:text-gray-600 transition-colors">About Us</a>
          <a href="/resources" className="block px-3 py-2 text-black hover:text-gray-600 transition-colors">Resources</a>
          <a href="/news" className="block px-3 py-2 text-black hover:text-gray-600 transition-colors">News</a>
          <a href="/membership" className="block px-3 py-2 text-black hover:text-gray-600 transition-colors">Membership</a>
          <a href="/contact" className="block px-3 py-2 text-black hover:text-gray-600 transition-colors">Contact Us</a>
        </div>
      </div>
    </>
  );
}
