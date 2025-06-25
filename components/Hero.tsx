// components/Hero.tsx
export default function Hero() {
    return (
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I’m <span className="text-blue-400">Abhijit Mohanty</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-xl mb-6">
          Senior Backend Engineer specialized in Node.js, TypeScript, Kafka, and scalable distributed systems.
        </p>
  
        <a
          href="/Abhijit_backend_developer.pdf"
          download
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded transition"
        >
          Download Resume
        </a>
      </section>
    )
  }
  