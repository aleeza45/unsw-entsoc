"use client";

import Image from 'next/image'

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Get in Touch Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
          <p className="text-lg mb-8">
            Contact us for any queries or information. We are here to assist you.
          </p>
          
          <div className="flex space-x-6 mb-12">
            <a 
              href="https://www.instagram.com/unswentsoc/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Image
                src="https://static.wixstatic.com/media/11062b_ca1d837ce7194421b781ee7384061a8e~mv2.png"
                alt="Instagram"
                width={16}
                height={16}
              />
            </a>
            <a 
              href="https://www.facebook.com/unsw.entsoc" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Image
                src="https://static.wixstatic.com/media/11062b_362ef89dec51403eb0ee59a21bde967c~mv2.png"
                alt="Facebook"
                width={16}
                height={16}
              />
            </a>
            <a 
              href="https://www.linkedin.com/company/unswentsoc" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Image
                src="https://static.wixstatic.com/media/11062b_72c275822d4344358ee379f14e7e115f~mv2.png"
                alt="LinkedIn"
                width={16}
                height={16}
              />
            </a>
          </div>
        </div>
      </section>

      {/* Send a Message Section */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Send a Message</h2>
          <p className="text-lg mb-12">
            Drop us a message with your details and we'll get back to you as soon as possible.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-colors font-semibold"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="relative h-[288px]">
              <Image
                src="/images/entsoc2024/IMG_6860.jpg"
                alt="Contact Us"
                width={1120}
                height={288}
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
