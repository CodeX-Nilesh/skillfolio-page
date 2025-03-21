
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Layers, Paintbrush, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

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
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <motion.div
            initial={isLoaded ? false : "hidden"}
            animate="visible"
            variants={containerVariants}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={itemVariants} className="mb-3">
              <span className="px-3 py-1 text-xs font-semibold tracking-wider uppercase bg-primary/10 rounded-full">
                Web Developer & Designer
              </span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
            >
              Crafting Digital <br /> 
              <span className="relative">
                Experiences
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/20 rounded-full"></span>
              </span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            >
              I design and build exceptional digital experiences with attention to
              detail and a passion for crafting intuitive and visually stunning interfaces.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link 
                to="/portfolio" 
                className="inline-flex items-center justify-center px-6 py-3 font-medium bg-primary text-primary-foreground rounded-full transition-all hover:opacity-90"
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-6 py-3 font-medium bg-transparent border border-primary text-primary rounded-full transition-all hover:bg-primary/5"
              >
                Contact Me
              </Link>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-10 -right-10 w-60 h-60 bg-primary/5 rounded-full blur-3xl"></div>
      </section>

      {/* Skills Highlight Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized skills crafted through years of experience building modern web applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Code className="h-6 w-6" />,
                title: "Frontend Development",
                description: "Creating responsive, accessible and performant user interfaces with modern technologies."
              },
              {
                icon: <Layers className="h-6 w-6" />,
                title: "Backend Systems",
                description: "Building robust APIs and server-side applications with scalability in mind."
              },
              {
                icon: <Paintbrush className="h-6 w-6" />,
                title: "UI/UX Design",
                description: "Designing intuitive user experiences with a focus on aesthetics and usability."
              },
              {
                icon: <Zap className="h-6 w-6" />,
                title: "Performance Optimization",
                description: "Enhancing application speed and reliability through targeted optimizations."
              }
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass hover-translate p-8 rounded-2xl border-subtle"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{skill.title}</h3>
                <p className="text-muted-foreground">{skill.description}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              to="/skills" 
              className="inline-flex items-center text-sm font-medium"
            >
              View all my skills
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                A selection of my recent work, showcasing my design and development capabilities
              </p>
            </div>
            <Link 
              to="/portfolio" 
              className="mt-4 md:mt-0 inline-flex items-center text-sm font-medium"
            >
              View all projects
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "E-Commerce Platform",
                category: "Full-Stack Development",
                image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
                href: "/portfolio/ecommerce"
              },
              {
                title: "Financial Dashboard",
                category: "Frontend • React • Data Visualization",
                image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
                href: "/portfolio/dashboard"
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl"
              >
                <Link to={project.href}>
                  <div className="aspect-[16/9] overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="mb-2 opacity-90">
                      <span className="text-xs font-medium">{project.category}</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold group-hover:underline decoration-1 underline-offset-4">
                      {project.title}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
