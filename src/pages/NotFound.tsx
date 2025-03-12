
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-tech px-4">
      <div className="glass rounded-2xl p-12 shadow-xl max-w-lg w-full text-center">
        <h1 className="text-6xl font-bold text-cheese-800 mb-6">404</h1>
        <p className="text-xl text-cheese-600 mb-8">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link 
          to="/" 
          className={cn(
            "animated-element inline-flex items-center justify-center",
            "rounded-lg px-6 py-3 font-medium text-white",
            "bg-tech-600 hover:bg-tech-700 shadow-lg"
          )}
        >
          Return to Home
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6"></path>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
