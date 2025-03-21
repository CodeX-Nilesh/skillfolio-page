
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full border-t border-border py-12 mt-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Developer Portfolio</h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              Crafting exceptional digital experiences through clean design and elegant code.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Github"
              >
                <Github size={18} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="mailto:hello@example.com" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h4 className="text-sm font-medium uppercase tracking-wider">Site</h4>
              <nav className="flex flex-col space-y-2">
                <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Home</Link>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</Link>
                <Link to="/skills" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Skills</Link>
                <Link to="/portfolio" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Portfolio</Link>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
              </nav>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-sm font-medium uppercase tracking-wider">Services</h4>
              <nav className="flex flex-col space-y-2">
                <Link to="/skills" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Web Design</Link>
                <Link to="/skills" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Web Development</Link>
                <Link to="/skills" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Mobile Apps</Link>
                <Link to="/skills" className="text-sm text-muted-foreground hover:text-foreground transition-colors">UX/UI Design</Link>
              </nav>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-sm font-medium uppercase tracking-wider">Legal</h4>
              <nav className="flex flex-col space-y-2">
                <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link>
                <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link>
              </nav>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Developer Portfolio. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed and built with precision</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
