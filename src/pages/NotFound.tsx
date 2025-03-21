
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[70vh] flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="text-9xl font-bold">404</span>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">Page not found</h1>
          <p className="mt-6 text-lg leading-7 text-muted-foreground max-w-md mx-auto">
            Sorry, we couldn't find the page you're looking for. It might have been removed, 
            renamed, or doesn't exist.
          </p>
          <div className="mt-10">
            <Link 
              to="/" 
              className="inline-flex items-center justify-center px-6 py-3 font-medium bg-primary text-primary-foreground rounded-full transition-all hover:opacity-90"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default NotFound;
