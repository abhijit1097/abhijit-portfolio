import Layout from '../components/Layout'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Contact from '../components/Contact'
import Projects from '../components/Projects'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </Layout>
  )
}
