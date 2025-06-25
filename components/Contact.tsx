import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="contact" className="py-20 text-center border-t border-gray-700">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>

      {submitted ? (
        <p className="text-green-400 text-lg">Thanks! I'll be in touch soon. ✅</p>
      ) : (
        <form
          action="https://formspree.io/f/xrbkolgy"  // Replace this with your actual Formspree endpoint
          method="POST"
          onSubmit={() => setSubmitted(true)}
          className="max-w-xl mx-auto text-left space-y-6"
        >
          <input type="text" name="name" placeholder="Your Name" required
            className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400" />

          <input type="email" name="_replyto" placeholder="Your Email" required
            className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400" />

          <textarea name="message" placeholder="Your Message" rows={5} required
            className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400" />

          <button type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded">
            Send Message
          </button>
        </form>
      )}
    </section>
  )
}
