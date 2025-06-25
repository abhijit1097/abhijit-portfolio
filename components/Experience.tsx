'use client'
import { motion } from 'framer-motion'

const experience = [
  {
    title: 'Senior Software Engineer',
    company: 'Virtusa',
    period: 'Feb 2024 – Present',
  },
  {
    title: 'Senior Backend Developer',
    company: 'Taskmo (Quess)',
    period: 'March 2020 – Feb 2024',
  },
  {
    title: 'Founding Engineer',
    company: 'FeedMyPockets',
    period: 'Sep 2019 – March 2020',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="text-center px-4 py-20 space-y-10">
      <h2 className="text-2xl md:text-3xl font-bold">Experience</h2>

      <motion.div
        className="cursor-grab active:cursor-grabbing overflow-hidden"
        whileTap={{ cursor: 'grabbing' }}
      >
        <motion.div
          className="flex gap-8 px-4"
          drag="x"
          dragConstraints={{ left: -400, right: 0 }}
        >
          {experience.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 w-72 flex-shrink-0 text-left shadow-lg hover:shadow-blue-500/40 transition-shadow"
            >
              {/* Timeline Dot */}
              <div className="w-4 h-4 bg-blue-500 rounded-full mb-4 shadow-md" />
              <p className="text-sm text-gray-400 mb-1">{item.period}</p>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="text-sm text-gray-300">{item.company}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
