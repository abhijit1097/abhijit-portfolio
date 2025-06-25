const experience = [
    {
      company: "Virtusa",
      role: "Senior Software Engineer",
      period: "Feb 2024 – Present",
      highlights: [
        "Built microservices using Node.js, TypeScript, and PostgreSQL with Sequelize ORM",
        "Developed secure JWT-based auth system with refresh token support",
        "Engineered a dynamic flow orchestrator and Redis-powered scheduler",
        "Created notification service with encryption and deduplication",
        "Wrote unit tests with Jest and documented APIs using Swagger"
      ]
    },
    {
      company: "Taskmo",
      role: "Senior Backend Developer",
      period: "Sep 2019 – Feb 2024",
      highlights: [
        "Designed and migrated backend to microservices architecture",
        "Integrated third-party APIs (payments, Google Maps)",
        "Implemented Kafka-based event-driven system",
        "Led team of 10+ developers and managed deployments",
        "Built secure auth and optimized high-load API performance"
      ]
    }
  ]
  
  export default function Experience() {
    return (
      <section id="experience" className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-10">Experience</h2>
        <div className="max-w-4xl mx-auto space-y-10 text-left">
          {experience.map((job, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 shadow-md">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold text-white">{job.role}</h3>
                <span className="text-sm text-gray-400">{job.period}</span>
              </div>
              <p className="text-blue-400 font-medium mb-3">{job.company}</p>
              <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                {job.highlights.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    )
  }
  