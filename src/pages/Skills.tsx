
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Layout from '@/components/Layout';
import { Code, Database, Globe, Palette, Smartphone, Terminal } from 'lucide-react';

const Skills = () => {
  const [selectedTab, setSelectedTab] = useState("frontend");
  
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
                My Expertise
              </span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
            >
              Skills & Technologies
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
            >
              A comprehensive overview of my technical skills, tools, and technologies 
              that I've mastered throughout my career as a web developer.
            </motion.p>
          </motion.div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-10 -right-10 w-60 h-60 bg-primary/5 rounded-full blur-3xl"></div>
      </section>
      
      {/* Skills Categories */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs 
            defaultValue="frontend" 
            value={selectedTab}
            onValueChange={setSelectedTab}
            className="w-full"
          >
            <div className="flex justify-center mb-12">
              <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
                <TabsTrigger value="frontend" className="flex gap-2 items-center">
                  <Code className="h-4 w-4" />
                  <span className="hidden sm:inline">Frontend</span>
                </TabsTrigger>
                <TabsTrigger value="backend" className="flex gap-2 items-center">
                  <Database className="h-4 w-4" />
                  <span className="hidden sm:inline">Backend</span>
                </TabsTrigger>
                <TabsTrigger value="design" className="flex gap-2 items-center">
                  <Palette className="h-4 w-4" />
                  <span className="hidden sm:inline">Design</span>
                </TabsTrigger>
                <TabsTrigger value="mobile" className="flex gap-2 items-center">
                  <Smartphone className="h-4 w-4" />
                  <span className="hidden sm:inline">Mobile</span>
                </TabsTrigger>
                <TabsTrigger value="tools" className="flex gap-2 items-center">
                  <Terminal className="h-4 w-4" />
                  <span className="hidden sm:inline">Tools</span>
                </TabsTrigger>
                <TabsTrigger value="languages" className="flex gap-2 items-center">
                  <Globe className="h-4 w-4" />
                  <span className="hidden sm:inline">Languages</span>
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="frontend" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    name: "React.js",
                    level: 95,
                    yearsExp: 4,
                    description: "Building complex user interfaces with modern React concepts including hooks, context API, and state management solutions."
                  },
                  {
                    name: "TypeScript",
                    level: 90,
                    yearsExp: 3,
                    description: "Creating type-safe applications with TypeScript to improve code quality and developer experience."
                  },
                  {
                    name: "Next.js",
                    level: 85,
                    yearsExp: 2,
                    description: "Developing server-rendered React applications with focus on performance and SEO."
                  },
                  {
                    name: "CSS & SASS",
                    level: 90,
                    yearsExp: 5,
                    description: "Creating beautiful and responsive layouts with modern CSS techniques."
                  },
                  {
                    name: "Tailwind CSS",
                    level: 95,
                    yearsExp: 3,
                    description: "Utilizing utility-first CSS for rapid UI development."
                  },
                  {
                    name: "Redux",
                    level: 85,
                    yearsExp: 3,
                    description: "Managing complex application state with Redux and Redux Toolkit."
                  },
                  {
                    name: "JavaScript",
                    level: 95,
                    yearsExp: 6,
                    description: "Proficient in modern JavaScript (ES6+) patterns and best practices."
                  },
                  {
                    name: "HTML5",
                    level: 98,
                    yearsExp: 6,
                    description: "Creating semantic and accessible markup for the modern web."
                  },
                  {
                    name: "GraphQL",
                    level: 80,
                    yearsExp: 2,
                    description: "Building efficient data-fetching solutions with GraphQL and Apollo Client."
                  }
                ].map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="glass p-6 rounded-xl border-subtle"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold">{skill.name}</h3>
                      <span className="text-xs font-medium bg-primary/10 px-2 py-1 rounded-full">
                        {skill.yearsExp} {skill.yearsExp === 1 ? 'year' : 'years'}
                      </span>
                    </div>
                    
                    <div className="w-full h-2 bg-secondary rounded-full mb-4">
                      <div 
                        className="h-full bg-primary rounded-full"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                    
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="backend" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    name: "Node.js",
                    level: 85,
                    yearsExp: 4,
                    description: "Building scalable server-side applications with Node.js and Express."
                  },
                  {
                    name: "RESTful APIs",
                    level: 90,
                    yearsExp: 4,
                    description: "Designing and implementing RESTful APIs following best practices."
                  },
                  {
                    name: "MongoDB",
                    level: 80,
                    yearsExp: 3,
                    description: "Working with NoSQL databases to store and query data efficiently."
                  },
                  {
                    name: "PostgreSQL",
                    level: 75,
                    yearsExp: 2,
                    description: "Designing relational database schemas and writing efficient queries."
                  },
                  {
                    name: "Firebase",
                    level: 85,
                    yearsExp: 3,
                    description: "Utilizing Firebase services for authentication, database, and hosting."
                  },
                  {
                    name: "GraphQL (Server)",
                    level: 75,
                    yearsExp: 2,
                    description: "Implementing GraphQL servers with Apollo Server and type-safety."
                  }
                ].map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="glass p-6 rounded-xl border-subtle"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold">{skill.name}</h3>
                      <span className="text-xs font-medium bg-primary/10 px-2 py-1 rounded-full">
                        {skill.yearsExp} {skill.yearsExp === 1 ? 'year' : 'years'}
                      </span>
                    </div>
                    
                    <div className="w-full h-2 bg-secondary rounded-full mb-4">
                      <div 
                        className="h-full bg-primary rounded-full"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                    
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="design" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    name: "Figma",
                    level: 90,
                    yearsExp: 3,
                    description: "Creating high-fidelity wireframes, prototypes, and design systems."
                  },
                  {
                    name: "Adobe XD",
                    level: 85,
                    yearsExp: 3,
                    description: "Designing user interfaces and interactive prototypes."
                  },
                  {
                    name: "User Experience Design",
                    level: 85,
                    yearsExp: 4,
                    description: "Designing intuitive user flows and interfaces with focus on usability."
                  },
                  {
                    name: "UI Design",
                    level: 90,
                    yearsExp: 4,
                    description: "Creating visually appealing interfaces that align with brand guidelines."
                  },
                  {
                    name: "Responsive Design",
                    level: 95,
                    yearsExp: 5,
                    description: "Designing interfaces that work seamlessly across different screen sizes."
                  },
                  {
                    name: "Animation Design",
                    level: 80,
                    yearsExp: 2,
                    description: "Creating smooth and meaningful animations to enhance user experience."
                  }
                ].map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="glass p-6 rounded-xl border-subtle"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold">{skill.name}</h3>
                      <span className="text-xs font-medium bg-primary/10 px-2 py-1 rounded-full">
                        {skill.yearsExp} {skill.yearsExp === 1 ? 'year' : 'years'}
                      </span>
                    </div>
                    
                    <div className="w-full h-2 bg-secondary rounded-full mb-4">
                      <div 
                        className="h-full bg-primary rounded-full"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                    
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            
            {/* Add similar TabsContent for other tabs */}
            {["mobile", "tools", "languages"].map((tab) => (
              <TabsContent key={tab} value={tab} className="mt-6">
                <div className="text-center py-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-md mx-auto glass p-8 rounded-xl border-subtle"
                  >
                    <h3 className="text-xl font-semibold mb-4">Coming Soon</h3>
                    <p className="text-muted-foreground">
                      This section is currently being updated with my latest skills and experience.
                    </p>
                  </motion.div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
      
      {/* Skills Timeline */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Learning Journey</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A timeline of my professional development and key milestones
            </p>
          </div>
          
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2"></div>
            
            <div className="space-y-12">
              {[
                {
                  year: "2023 - Present",
                  title: "Senior Frontend Developer",
                  description: "Leading development of complex web applications with React and TypeScript.",
                  skills: ["React", "TypeScript", "Next.js", "GraphQL"]
                },
                {
                  year: "2021 - 2023",
                  title: "Full-Stack Developer",
                  description: "Building end-to-end solutions with modern frontend and backend technologies.",
                  skills: ["React", "Node.js", "MongoDB", "Express"]
                },
                {
                  year: "2019 - 2021",
                  title: "Web Developer",
                  description: "Developing responsive websites and web applications.",
                  skills: ["JavaScript", "HTML5", "CSS3", "jQuery"]
                },
                {
                  year: "2017 - 2019",
                  title: "Junior Developer",
                  description: "Starting my journey in web development, focusing on frontend basics.",
                  skills: ["HTML", "CSS", "JavaScript"]
                }
              ].map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center justify-between ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className="hidden md:block w-5/12"></div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary"></div>
                  
                  <div className="z-10 w-full md:w-5/12 p-6 glass rounded-xl border-subtle">
                    <span className="inline-block mb-3 text-xs font-semibold tracking-wider uppercase bg-primary/10 px-3 py-1 rounded-full">
                      {milestone.year}
                    </span>
                    <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground mb-4">{milestone.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {milestone.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="text-xs font-medium bg-primary/5 text-primary px-2 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Skills;
