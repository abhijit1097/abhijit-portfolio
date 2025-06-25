const skills = [
    'Node.js', 'TypeScript', 'JavaScript', 'Express.js', 'NestJS',
    'PostgreSQL', 'MySQL', 'MongoDB', 'Sequelize', 'Mongoose',
    'Kafka', 'Redis', 'Pub/Sub', 'Docker', 'Kubernetes',
    'AWS (EC2, S3, Lambda)', 'GCP (basic)', 'CI/CD', 'Git',
    'Microservices', 'Distributed Systems', 'Event-driven Systems', 'System Design',
    'Jest', 'Swagger/OpenAPI', 'Postman'
  ]
  
  export default function Skills() {
    return (
      <section id="skills" className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-10">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto text-gray-300">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 p-4 rounded-lg shadow hover:bg-gray-700 transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>
    )
  }
  