
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import { ArrowRight, BarChart, Code, Globe, Heart, User, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
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
                A passionate web developer with over 5 years of experience creating
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
        
        {/* Background decorative elements */}
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-10 -right-10 w-60 h-60 bg-primary/5 rounded-full blur-3xl"></div>
      </section>
      
      {/* My Story Section */}
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
      
      {/* Core Values */}
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
    </Layout>
  );
};

export default About;
