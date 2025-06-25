const skills = [
    { icon: "/icons/nodejs.svg", alt: "Node.js" },
    { icon: "/icons/typescript.svg", alt: "TypeScript" },
    { icon: "/icons/mongodb.svg", alt: "MongoDB" },
    { icon: "/icons/postgresql.svg", alt: "PostgreSQL" },
    { icon: "/icons/kafka.png", alt: "Kafka" },
    { icon: "/icons/redis.svg", alt: "Redis" },
  ]
  
  export default function Skills() {
    return (
      <section id="skills" className="text-center space-y-10">
        <h2 className="text-2xl md:text-3xl font-bold">Skills</h2>
  
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 place-items-center">
          {skills.map((skill, index) => (
            <img
              key={index}
              src={skill.icon}
              alt={skill.alt}
              className="w-12 h-12 object-contain Use drop-shadow to give icons subtle pop:"
            />
          ))}
        </div>
      </section>
    )
  }
  