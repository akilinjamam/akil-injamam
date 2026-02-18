'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import profile from '../../public/images/my-passport-size photo-300by300px.jpg'
import Image from 'next/image'
import Link from 'next/link'

export default function Portfolio() {
  const projects = [
    {
      title: 'ERP POS System',
      description:
        'Full-featured POS & ERP software with payroll, sales, barcode scanning, reporting, and PDF invoice generation etc.',
      tech: ['Vite js', 'Node js', 'Express', 'Mongodb', 'Chart js', 'Redux', 'JWT',],
      link: 'https://portfolio-erp-pos-optical-soft-clie.vercel.app/login',
    },
    {
      title: 'Optical E-commerce Platform',
      description:
        'Modern optical shop website with product management, online orders with online booking and real time communication between patient and doctor.',
      tech: ['Next.js', 'TypeScript', 'node js', 'express', 'MongoDB', 'Agora RTC'],
      link: 'https://eyelineoptica.com',
    },
    {
      title: 'Optical E-commerce Dashboard',
      description:
        'Managing all contents ,Doctor-patient consultation system with authentication, booking, and real-time communication.',
      tech: ['Vite js', 'Typescript', 'Redux', 'Framer Motion', 'Shadcn', 'Agora RTC'],
      link: 'https://adorable-churros-a5462d.netlify.app',
    },
    {
      title: 'KeyCraft Elit_',
      description:
        'This site is an online store for mechanical keyboards called “KeyCraft Elit,” focused on typing and gaming enthusiasts.',
      tech: ['Vite js', 'Node js', 'Express', 'Typescript', 'mongoDB', 'Redux'],
      link: 'https://level-2-24-assignment-4-client.vercel.app',
    },
    {
      title: 'RoomBridge',
      description:
        'RoomBridge is a meeting room booking website that offers real-time availability, instant confirmation, and flexible scheduling for modern conference spaces',
      tech: ['Vite js', 'Node js', 'Express', 'Typescript',  'mongoDB', 'Redux'],
      link: 'https://level-2-24-assignment-5-client.vercel.app',
    },
    {
      title: 'S3 integration with EC2',
      description:
        'A Demo application to post All types of Media files using AWS s3, possible to upload audio video images pdf etc ',
      tech: ['Vite js', 'Node js', 'Express', 'Typescript'],
      link: 'https://s3-file-upload-akilinjamam.netlify.app',
    },

  ]

  return (
    <main className="min-h-screen bg-linear-to-br from-black via-gray-900 to-black text-white px-6 md:px-20">


      <section id="home" className="min-h-screen flex items-center px-6 pt-24">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - About Me */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Hi, I am <br /> <span className="text-cyan-400">Injamam Islam Chowdhury </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-muted-foreground">
              MERN Stack Developer
            </h2>
            <p className="max-w-xl text-muted-foreground mb-8">
              I build scalable, high-performance full‑stack applications using MongoDB, Express, React, and Node.js. I focus on clean architecture, modern UI, and production‑ready solutions that solve real business problems.
            </p>
            <div className="flex gap-4">
              <a href="#projects" >
                <Button className="rounded-2xl px-6 bg-cyan-500/10 text-cyan-400">
                  View Projects
                </Button>
              </a>
              {/* <Button  className="rounded-2xl px-6 bg-cyan-500/10 text-cyan-400">
                Contact Me
              </Button> */}
            </div>
          </motion.div>

          {/* Right Side - Animated Visual */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Animated Glow */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  repeat: Infinity,
                  duration: 20,
                  ease: 'linear',
                }}
                className="absolute inset-0 rounded-full bg-linear-to-r from-primary/40 via-purple-500/30 to-cyan-400/40 blur-3xl"
              />

              {/* Profile Placeholder */}
              <div className="relative z-10 w-full h-full rounded-full border border-border backdrop-blur-xl bg-background/60 flex items-center justify-center text-6xl font-bold">
                <Image className='rounded-full' width={600} height={600} src={profile} alt='my-profile' />
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* About Section */}
      <section className="py-20">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-10 text-center"
        >
          About Me
        </motion.h2>

        <div className="max-w-4xl mx-auto text-gray-400 text-center leading-relaxed">
          I am a passionate MERN stack developer specializing in building
          full-featured ERP systems, e-commerce platforms, and scalable backend
          architectures and others. I focus on clean code, modular architecture, and
          performance optimization.
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-16 text-center"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="bg-gray-900 border border-gray-800 rounded-2xl hover:shadow-2xl hover:shadow-cyan-500/20 transition-all">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-white ">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link href={`${project.link}`} target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="ghost"
                      className="flex items-center gap-2 text-cyan-400"
                    >
                      View Project <ExternalLink size={16} />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 px-6 ">
        <h2 className="text-3xl font-bold mb-16 text-center">My Skills</h2>
        <div className=" mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { category: 'Language', items: ['Javascript', 'Typescript'] },
            { category: 'Frontend', items: ['React', 'Next.js', 'Redux', 'Tailwind CSS', 'Bootstrap', 'SCSS', 'DaisyUI', 'Shadcn/ui', 'React Hook Form'] },
            { category: 'Backend', items: ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'GraphQL', 'REST APIs'] },
            { category: 'Database', items: ['MongoDB', 'Mongoose', 'PostgreSQL', 'Prisma'] },
            { category: 'Cloud', items: ['AWS', 'S3', 'EC2', 'VPS'] },
            { category: 'Tools', items: ['Git', 'GitHub', 'VS code', 'Cursor ai', 'postman', 'mongoDB compass', 'Netlify', 'Figma', 'Chrome DevTools', 'Adobe illustrator', 'Adobe Photoshop'] },
            { category: 'Data Visualization & Reporting:', items: ['Chart js', 'PDF Generator'] },
          ].map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-gray-900 border border-gray-800 rounded-2xl hover:shadow-2xl hover:shadow-cyan-500/20 transition-all h-67.5 ">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6 text-white">
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {skillGroup.items.map((skill, i) => (
                      <span
                        key={i}
                        className=" text-sm rounded-full bg-cyan-500/10 text-cyan-400 px-3 py-1 font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>



      {/* Contact Section */}
      {/* <section className="py-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Lets Work Together
        </motion.h2>
        <p className="text-gray-400 mb-8">
          Available for freelance and full-time opportunities.
        </p>
        <Button className="rounded-2xl px-8 py-6 text-lg">
          Get In Touch
        </Button>
      </section> */}

      {/* Footer */}
      <footer className="py-10 text-center text-gray-500 text-sm border-t border-gray-800">
        © {new Date().getFullYear()} MERN Stack Developer. All rights reserved.
      </footer>
    </main>
  )
}
