
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Layout from '@/components/Layout';
import { ArrowUpRight, Github, Globe, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A modern e-commerce platform built with React, Node.js, and Stripe integration.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      categories: ["web", "fullstack"],
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
      liveUrl: "https://example.com",
      repoUrl: "https://github.com",
      featured: true
    },
    {
      id: 2,
      title: "Financial Dashboard",
      description: "A comprehensive financial dashboard with real-time data visualization.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
      categories: ["web", "frontend"],
      technologies: ["React", "TypeScript", "Recharts", "Redux"],
      liveUrl: "https://example.com",
      repoUrl: "https://github.com",
      featured: true
    },
    {
      id: 3,
      title: "Travel Booking App",
      description: "A mobile-first travel booking application with advanced filtering options.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
      categories: ["web", "mobile"],
      technologies: ["React Native", "Firebase", "Google Maps API"],
      liveUrl: "https://example.com",
      repoUrl: "https://github.com",
      featured: false
    },
    {
      id: 4,
      title: "Social Media Dashboard",
      description: "An analytics dashboard for social media managers with data visualization.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      categories: ["web", "frontend"],
      technologies: ["Vue.js", "Vuex", "D3.js", "TailwindCSS"],
      liveUrl: "https://example.com",
      repoUrl: "https://github.com",
      featured: false
    },
    {
      id: 5,
      title: "Task Management App",
      description: "A collaborative task management tool for teams with real-time updates.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      categories: ["web", "fullstack"],
      technologies: ["React", "Node.js", "Socket.io", "PostgreSQL"],
      liveUrl: "https://example.com",
      repoUrl: "https://github.com",
      featured: false
    },
    {
      id: 6,
      title: "Weather Application",
      description: "A weather forecast application with location-based services.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
      categories: ["web", "mobile"],
      technologies: ["React", "OpenWeather API", "Geolocation API"],
      liveUrl: "https://example.com",
      repoUrl: "https://github.com",
      featured: false
    }
  ];
  
  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.categories.includes(selectedCategory));
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
  };
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={itemVariants} className="mb-3">
              <span className="px-3 py-1 text-xs font-semibold tracking-wider uppercase bg-primary/10 rounded-full">
                My Work
              </span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
            >
              Portfolio & Projects
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
            >
              A showcase of my recent work, demonstrating my skills in web development,
              design, and problem-solving across various domains.
            </motion.p>
          </motion.div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-10 -right-10 w-60 h-60 bg-primary/5 rounded-full blur-3xl"></div>
      </section>
      
      {/* Portfolio Projects */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs 
            defaultValue="all" 
            value={selectedCategory}
            onValueChange={setSelectedCategory}
            className="w-full"
          >
            <div className="flex justify-center mb-12">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2">
                <TabsTrigger value="all">All Projects</TabsTrigger>
                <TabsTrigger value="web">Web Apps</TabsTrigger>
                <TabsTrigger value="frontend">Frontend</TabsTrigger>
                <TabsTrigger value="fullstack">Full Stack</TabsTrigger>
              </TabsList>
            </div>
            
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="glass overflow-hidden border-subtle rounded-xl flex flex-col h-full hover-translate"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                    
                    {project.featured && (
                      <div className="absolute top-3 left-3">
                        <span className="text-xs font-medium bg-primary/80 text-primary-foreground px-2 py-1 rounded-full">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-1 p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.categories.map((category, catIndex) => (
                        <span 
                          key={catIndex}
                          className="text-xs font-medium bg-primary/5 text-primary px-2 py-1 rounded-full"
                        >
                          {category.charAt(0).toUpperCase() + category.slice(1)}
                        </span>
                      ))}
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="text-xs bg-secondary/80 px-2 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="p-6 pt-0 mt-auto flex gap-4">
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium flex items-center text-primary hover:opacity-80 transition-opacity"
                    >
                      Live Demo
                      <Globe className="ml-1 h-4 w-4" />
                    </a>
                    <a 
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium flex items-center text-primary hover:opacity-80 transition-opacity"
                    >
                      Source Code
                      <Github className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </Tabs>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-12 rounded-2xl border-subtle max-w-3xl mx-auto text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                <Layers className="h-8 w-8" />
              </div>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Interested in working together?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-6 py-3 font-medium bg-primary text-primary-foreground rounded-full transition-all hover:opacity-90"
            >
              Get in Touch
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
