'use client'
import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="contact" className="text-center space-y-10">
      <h2 className="text-2xl md:text-3xl font-bold">Contact</h2>

      <div className="bg-gray-900 max-w-lg mx-auto rounded-xl shadow-lg border border-gray-800 p-8">
        <form
          onSubmit={(e) => {
            e.preventDefault()
            setSubmitted(true)
            // optional: send to Formspree / EmailJS / webhook
          }}
          className="space-y-6 text-left"
        >
          <div>
            <label htmlFor="name" className="block text-sm text-gray-400 mb-1">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full bg-gray-800 text-white border border-gray-700 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm text-gray-400 mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full bg-gray-800 text-white border border-gray-700 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm text-gray-400 mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full bg-gray-800 text-white border border-gray-700 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className={`w-full text-center px-4 py-2 rounded-md transition-colors ${
              submitted
                ? 'bg-green-600 text-white cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
            disabled={submitted}
          >
            {submitted ? 'Message Sent 🎉' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  )
}
