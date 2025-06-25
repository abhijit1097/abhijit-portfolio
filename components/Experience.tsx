const experience = [
    {
      company: "Virtusa",
      role: "Senior Software Engineer",
      period: "Feb 2024 – Present",
      points: [
        "Built backend services using Node.js, TypeScript, PostgreSQL, and Redis",
        "Implemented flow orchestration, JWT auth, and notification service",
        "Optimized scheduler using Redis and enhanced automation",
        "Wrote unit tests with Jest and documented with Swagger",
      ],
    },
    {
      company: "Taskmo",
      role: "Senior Backend Developer",
      period: "Sep 2019 – Feb 2024",
      points: [
        "Designed and scaled microservices architecture",
        "Integrated Kafka and event-driven pipelines",
        "Led a team of 10+ developers and owned backend systems",
        "Implemented secure APIs, payment systems, and third-party integrations",
      ],
    },
  ]
  
  export default function Experience() {
    return (
      <section id="experience" className="space-y-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center">Experience</h2>
  
        <div className="space-y-10">
          {experience.map((job, index) => (
            <div key={index} className="flex flex-col md:flex-row md:space-x-10">
              {/* Left column: company + period */}
              <div className="w-full md:w-1/3 text-sm text-gray-400">
                <p className="font-semibold text-white">{job.company}</p>
                <p>{job.period}</p>
              </div>
  
              {/* Right column: role + bullets */}
              <div className="w-full md:w-2/3 space-y-2">
                <p className="font-medium text-white">{job.role}</p>
                <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                  {job.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }
  