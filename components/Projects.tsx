"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "DevConnect API",
    description:
      "REST API for a developer networking platform with user profiles, secure auth, and messaging.",
    stack: ["Node.js", "Express", "MongoDB", "JWT", "Jest"],
    github: "https://github.com/abhijitmoh/devconnect-api",
    demo: "",
  },
  {
    title: "TaskQueue Service",
    description:
      "An event-driven task queue system using Redis and BullMQ to manage background jobs with retry logic.",
    stack: ["Node.js", "TypeScript", "Redis", "BullMQ"],
    github: "https://github.com/abhijitmoh/taskqueue-service",
    demo: "",
  },
  {
    title: "NotifyX",
    description:
      "Microservice to send in-app and email notifications based on Kafka events with deduplication.",
    stack: ["Node.js", "Kafka", "TypeScript", "MongoDB"],
    github: "https://github.com/abhijitmoh/notifyx",
    demo: "",
  },
  {
    title: "CRON Service API",
    description:
      "Microservice for managing scheduled tasks via cron expressions and delivering webhooks.",
    stack: ["Node.js", "Redis", "TypeScript", "Express"],
    github: "https://github.com/abhijitmoh/cron-api",
    demo: "",
  },
  {
    title: "AgentBridge (WIP)",
    description:
      "Coming soon: An AI agent orchestration system to chain tools, actions, and external APIs via message bus.",
    stack: ["Node.js", "LLM API", "Webhooks", "Kafka"],
    github: "",
    demo: "",
  },
  {
    title: "CodeFlow Agent (WIP)",
    description:
      "An autonomous coding assistant that plans and executes tasks using recursive action trees and tools.",
    stack: ["TypeScript", "LangChain", "OpenAI", "Redis"],
    github: "",
    demo: "",
  },
];


function Projects() {
  return (
    <section id="projects" className="text-center space-y-10">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          viewport={{ once: true }}
          className="bg-gray-900 rounded-xl p-6 shadow-md border border-gray-800 text-left transform transition-transform hover:scale-[1.02]"
        >
          <h3 className="text-white text-xl font-semibold mb-2">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.stack.map((tech, i) => (
              <span
                key={i}
                className="bg-gray-700 text-gray-200 text-xs px-2 py-1 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-4 text-sm">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                className="text-blue-400 hover:underline"
              >
                GitHub
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                className="text-blue-400 hover:underline"
              >
                Live Demo
              </a>
            )}
          </div>
        </motion.div>
      ))}
    </section>
  );
}
export default Projects;
