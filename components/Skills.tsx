'use client'

const skills = [
  '/icons/nodejs.svg',
  '/icons/nestjs.svg',
  '/icons/typescript.svg',
  '/icons/postgresql.svg',
  '/icons/mongodb.svg',
  '/icons/kafka.png',
  '/icons/redis.svg',
  '/icons/aws.svg',
  '/icons/docker.svg',
  '/icons/kube.svg',
  '/icons/elastic.svg',
  '/icons/serverless.svg',
]

export default function Skills() {
  return (
    <section id="skills" className="py-10 space-y-10 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">Skills</h2>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 place-items-center px-4">
        {skills.map((icon, index) => (
          <div key={index} className="w-16 h-16">
            <img
              src={icon}
              alt=""
              className="w-full h-full object-contain drop-shadow transition-transform hover:scale-110"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
