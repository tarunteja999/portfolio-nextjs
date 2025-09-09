import Navbar from "../components/Navbar"
import ProjectCard from "../components/ProjectCard"
import Footer from "../components/Footer"
import Image from "next/image"

export default function Page() {
  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="section">
        <div className="container grid md:grid-cols-2 gap-8 items-center">
          {/* Left side: Intro */}
          <div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
              I design & ship <span className="text-purple-300">scalable</span> web apps.
            </h1>
            <p className="text-gray-300 mb-6">
              Full-stack developer focused on React/Next.js, Node/Spring, PostgreSQL/MongoDB and AWS.
              I own features end-to-end: architecture → build → test → deploy → observe.
            </p>
            <div className="space-x-3">
              <a className="tag" href="https://www.linkedin.com/in/tarun-teja-a-a84505215/" target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="tag" href="https://github.com/tarunteja999" target="_blank" rel="noreferrer">GitHub</a>
              <a className="tag" href="#projects">Projects</a>
            </div>
          </div>

          {/* Right side: Profile + Snapshot */}
          <div className="space-y-4">
            {/* Profile image card */}
            <div className="card p-0 overflow-hidden">
              <Image
                src="/profile.jpg"
                alt="Tarun Teja Akkipalli"
                width={640}
                height={640}
                priority
                className="w-full h-64 object-cover"
              />
            </div>

            {/* Snapshot card */}
            <div className="card">
              <h3 className="font-semibold mb-2">Snapshot</h3>
              <ul className="text-sm text-gray-300 list-disc ml-5 space-y-2">
                <li>React, Next.js, TypeScript</li>
                <li>Node.js/NestJS, Spring Boot</li>
                <li>PostgreSQL, MongoDB, Redis</li>
                <li>AWS, Docker, Kubernetes, CI/CD</li>
                <li>Secure auth (OAuth2/OIDC), OWASP</li>
                <li>Testing: Jest, RTL, Cypress, JUnit</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <h2 className="text-2xl font-semibold mb-6">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <ProjectCard
              title="SaaS Starter (Multi-tenant)"
              description="Next.js app with Node/NestJS API, PostgreSQL, Redis cache, JWT/OAuth2, Dockerized, CI/CD on GitHub Actions."
              tech={["Next.js", "Node.js", "NestJS", "PostgreSQL", "Redis", "Docker", "GitHub Actions"]}
              demo="https://portfolio-nextjs-ub2j.vercel.app/"
              code="https://github.com/tarunteja999/saas-starter-api"
            />
            <ProjectCard
              title="Event-Driven Checkout"
              description="Order workflow using Kafka/RabbitMQ patterns with idempotency keys, retries and DLQs; example dashboards."
              tech={["Node.js", "Kafka/RabbitMQ", "Express", "PostgreSQL", "OpenTelemetry"]}
              demo="#"
              code="#"
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section">
        <div className="container">
          <h2 className="text-2xl font-semibold mb-6">Experience</h2>
          <div className="card mb-4">
            <h3 className="font-semibold">Procore Technologies — Full-Stack Developer</h3>
            <p className="text-sm text-gray-300">Jan 2025 – Present · Toronto, ON</p>
            <ul className="text-sm text-gray-300 list-disc ml-5 mt-2 space-y-2">
              <li>Architected user-verification microservices on AWS EKS; improved p95 latency by 25%.</li>
              <li>Delivered React/Redux SPA with SSR/SSG; improved LCP by 30%.</li>
              <li>Introduced tracing & SLOs; reduced MTTR from 45m → 15m.</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="font-semibold">Hexaware Technologies — Software Developer</h3>
            <p className="text-sm text-gray-300">Jan 2020 – Feb 2023 · Bengaluru, India</p>
            <ul className="text-sm text-gray-300 list-disc ml-5 mt-2 space-y-2">
              <li>Scaled Node microservices to 500k daily sessions using Docker + Kafka.</li>
              <li>Built Spring Boot services with RabbitMQ; +40% order throughput.</li>
              <li>Modernized frontend to React/Next; added Cypress e2e for stability.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certs" className="section">
        <div className="container">
          <h2 className="text-2xl font-semibold mb-6">Certifications</h2>
          <div className="card">
            <ul className="text-sm text-gray-300 list-disc ml-5 space-y-2">
              <li>AWS Certified Developer – Associate (in progress)</li>
              <li>CKAD – Certified Kubernetes Application Developer (planned)</li>
              <li>Terraform Associate (planned)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <h2 className="text-2xl font-semibold mb-6">Contact</h2>
          <div className="card">
            <p className="text-sm text-gray-300">
              Email: <a href="mailto:akkipallitarunteja@gmail.com">akkipallitarunteja@gmail.com</a> ·
              LinkedIn: <a href="https://www.linkedin.com/in/tarun-teja-a-a84505215/" target="_blank" rel="noreferrer">tarun-teja</a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
