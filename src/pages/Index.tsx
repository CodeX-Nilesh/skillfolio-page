
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart, Code, Globe, Heart, Layers, Paintbrush, User, Zap } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const portfolioRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToRef = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
              <button 
                onClick={() => scrollToRef(portfolioRef)}
                className="inline-flex items-center justify-center px-6 py-3 font-medium bg-primary text-primary-foreground rounded-full transition-all hover:opacity-90"
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              
              <button 
                onClick={() => navigate('/contact')}
                className="inline-flex items-center justify-center px-6 py-3 font-medium bg-transparent border border-primary text-primary rounded-full transition-all hover:bg-primary/5"
              >
                Contact Me
              </button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-10 -right-10 w-60 h-60 bg-primary/5 rounded-full blur-3xl"></div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="relative overflow-hidden py-20">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <motion.div variants={itemVariants} className="mb-3">
                <span className="px-3 py-1 text-xs font-semibold tracking-wider uppercase bg-primary/10 rounded-full">
                  About Me
                </span>
              </motion.div>
              
              <motion.h1 
                variants={itemVariants}
                className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
              >
                Hello, I'm Nilesh Gupta
              </motion.h1>
              
              <motion.p 
                variants={itemVariants}
                className="text-lg text-muted-foreground mb-6"
              >
                A passionate web developer with over 3 years of experience creating
                beautiful, functional, and user-centered digital experiences.
              </motion.p>
              
              <motion.p 
                variants={itemVariants}
                className="text-lg text-muted-foreground mb-8"
              >
                Based in India, I'm dedicated to turning complex problems
                into simple, intuitive designs. My approach combines technical expertise
                with creative thinking to build products that people love to use.
              </motion.p>
              
              <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button 
                  onClick={() => scrollToRef(portfolioRef)}
                  className="inline-flex items-center justify-center px-6 py-3 font-medium bg-primary text-primary-foreground rounded-full transition-all hover:opacity-90"
                >
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
                
                <button 
                  onClick={() => navigate('/contact')}
                  className="inline-flex items-center justify-center px-6 py-3 font-medium bg-transparent border border-primary text-primary rounded-full transition-all hover:bg-primary/5"
                >
                  Contact Me
                </button>
              </motion.div>
            </div>
            
            <motion.div 
              variants={itemVariants}
              className="relative aspect-square max-w-md mx-auto lg:ml-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-3xl transform -rotate-6"></div>
              <img 
                src="/lovable-uploads/86866d1f-3fbd-4f43-af4a-e42b291aeb83.png" 
                alt="Nilesh Gupta - Web Developer"
                className="relative z-10 rounded-2xl object-cover w-full h-full shadow-lg"
              />
            </motion.div>
          </motion.div>
        </div>
        
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-10 -right-10 w-60 h-60 bg-primary/5 rounded-full blur-3xl"></div>
      </section>

      {/* My Journey Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">My Journey</h2>
              <p className="text-lg text-muted-foreground">
                The path that led me to become the developer I am today
              </p>
            </div>
            
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-xl border-subtle"
              >
                <h3 className="text-xl font-semibold mb-3">How It All Started</h3>
                <p className="text-muted-foreground mb-4">
                  My journey into web development began with curiosity. As a teenager,
                  I was fascinated by how websites worked and started learning HTML and CSS
                  by modifying templates and building simple pages. What started as a hobby
                  quickly turned into a passion.
                </p>
                <p className="text-muted-foreground">
                  After completing my degree in Computer Science, I joined a startup where I
                  was thrown into the deep end, learning on the job and quickly adapting to
                  new technologies and frameworks. This experience shaped my problem-solving
                  approach and instilled a growth mindset that I carry to this day.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-xl border-subtle"
              >
                <h3 className="text-xl font-semibold mb-3">Professional Growth</h3>
                <p className="text-muted-foreground mb-4">
                  Over the years, I've had the privilege of working with diverse teams on a
                  variety of projects, from e-commerce platforms to fintech applications and
                  content management systems. Each project brought unique challenges that
                  helped me refine my skills and expand my expertise.
                </p>
                <p className="text-muted-foreground">
                  I believe in continuous learning and stay updated with the latest industry
                  trends and technologies. Whether it's adopting new frameworks or exploring
                  emerging design patterns, I'm always looking to enhance my toolkit and deliver
                  better solutions.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-xl border-subtle"
              >
                <h3 className="text-xl font-semibold mb-3">My Approach</h3>
                <p className="text-muted-foreground mb-4">
                  I approach each project with a blend of analytical thinking and creative
                  problem-solving. Understanding the client's needs and end-users' expectations
                  is always my starting point. I believe that the best digital products are
                  those that solve real problems elegantly and efficiently.
                </p>
                <p className="text-muted-foreground">
                  My development philosophy is centered around creating clean, maintainable,
                  and scalable code. I pay close attention to details and prioritize performance,
                  accessibility, and user experience in everything I build.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Highlight Section */}
      <section ref={skillsRef} className="py-20">
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
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Principles that guide my work and professional relationships
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <User className="h-6 w-6" />,
                title: "User-Centered Design",
                description: "I believe in creating solutions that prioritize the needs and experiences of the end users above all else."
              },
              {
                icon: <Zap className="h-6 w-6" />,
                title: "Efficiency",
                description: "I strive to optimize processes and code for maximum performance and maintainability."
              },
              {
                icon: <Code className="h-6 w-6" />,
                title: "Clean Code",
                description: "I'm committed to writing clean, well-documented code that's easy to understand and maintain."
              },
              {
                icon: <Globe className="h-6 w-6" />,
                title: "Accessibility",
                description: "I ensure my projects are accessible to all users, regardless of their abilities or disabilities."
              },
              {
                icon: <BarChart className="h-6 w-6" />,
                title: "Data-Driven",
                description: "I make decisions based on data and metrics whenever possible, measuring impact and outcomes."
              },
              {
                icon: <Heart className="h-6 w-6" />,
                title: "Passion",
                description: "I bring enthusiasm and dedication to every project, constantly seeking to improve and innovate."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-xl border-subtle hover-translate"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section ref={portfolioRef} className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                A selection of my recent work, showcasing my design and development capabilities
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "E-Commerce Platform",
                category: "Full-Stack Development",
                image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
              },
              {
                title: "Financial Dashboard",
                category: "Frontend • React • Data Visualization",
                image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Placeholder for future implementation */}
      <section ref={contactRef} id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or want to discuss collaboration opportunities? I'd love to hear from you.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="text-center p-12 glass rounded-2xl border-subtle">
              <p className="text-xl mb-6">Email me at:</p>
              <a 
                href="mailto:hello@example.com" 
                className="text-2xl font-medium text-primary hover:underline"
              >
                hello@example.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
