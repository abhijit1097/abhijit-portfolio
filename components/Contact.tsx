export default function Contact() {
    return (
      <section id="contact" className="text-center space-y-8">
        <h2 className="text-2xl md:text-3xl font-bold">Contact</h2>
  
        <form
          action="https://formspree.io/f/YOUR_FORM_ID"  // 🔁 Replace this
          method="POST"
          className="space-y-6 max-w-xl mx-auto"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full bg-gray-900 text-white border border-gray-700 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
  
          <input
            type="email"
            name="_replyto"
            placeholder="Your Email"
            required
            className="w-full bg-gray-900 text-white border border-gray-700 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
  
          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            required
            className="w-full bg-gray-900 text-white border border-gray-700 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
  
          <button
            type="submit"
            className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-md border border-gray-600 transition-colors"
          >
            Send Message
          </button>
        </form>
      </section>
    )
  }
  