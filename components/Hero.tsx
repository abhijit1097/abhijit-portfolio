export default function Hero() {
    return (
      <section id="home" className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Hi, I&rsquo;m Abhijit <span className="inline-block">👋</span>
        </h1>
  
        <p className="text-gray-400 text-lg md:text-xl mb-6 max-w-2xl mx-auto">
          Senior Backend Engineer specializing in Node.js, TypeScript, Kafka, and scalable backend systems.
        </p>
  
        <a
          href="/abhijit_resume.pdf"
          download
          className="inline-block bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-lg transition-colors border border-gray-700"
        >
          Download Resume
        </a>
      </section>
    )
  }
  