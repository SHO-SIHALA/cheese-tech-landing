
import { cn } from "@/lib/utils";

const services = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
      </svg>
    ),
    title: "Cybersecurity & Risk Management",
    description: "Protect your business from evolving threats with our comprehensive security solutions.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
        <line x1="6" y1="6" x2="6.01" y2="6"></line>
        <line x1="6" y1="18" x2="6.01" y2="18"></line>
      </svg>
    ),
    title: "IT Infrastructure & Networking",
    description: "Build a robust, scalable IT environment designed for performance and reliability.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path>
        <path d="M12 12v9"></path>
        <path d="m8 17 4 4 4-4"></path>
      </svg>
    ),
    title: "Cloud Solutions & Data Security",
    description: "Secure, scalable, and efficient cloud technology tailored to your business needs.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
        <rect x="9" y="9" width="6" height="6"></rect>
        <line x1="9" y1="2" x2="9" y2="4"></line>
        <line x1="15" y1="2" x2="15" y2="4"></line>
        <line x1="9" y1="20" x2="9" y2="22"></line>
        <line x1="15" y1="20" x2="15" y2="22"></line>
        <line x1="20" y1="9" x2="22" y2="9"></line>
        <line x1="20" y1="14" x2="22" y2="14"></line>
        <line x1="2" y1="9" x2="4" y2="9"></line>
        <line x1="2" y1="14" x2="4" y2="14"></line>
      </svg>
    ),
    title: "Hardware Solutions",
    description: "High-performance systems and equipment tailored to your specific needs.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
        <path d="m9 12 2 2 4-4"></path>
      </svg>
    ),
    title: "Custom IT Solutions",
    description: "Innovative, business-focused tech services designed to solve your unique challenges.",
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-cheese-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4">
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-tech-100 text-tech-800">
              Our Services
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-cheese-800 mb-6">
            Comprehensive IT Solutions for Modern Businesses
          </h2>
          <p className="text-cheese-600">
            We offer a wide range of technology services designed to help your business thrive in the digital landscape while maintaining the highest security standards.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={cn(
                "animated-element glass p-8 rounded-xl",
                "border border-white/50 shadow-glass-sm hover:shadow-glass",
                "flex flex-col h-full"
              )}
            >
              <div className="rounded-full w-14 h-14 flex items-center justify-center bg-tech-100 text-tech-600 mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-cheese-800 mb-3">{service.title}</h3>
              <p className="text-cheese-600 flex-grow">{service.description}</p>
              <a 
                href="#contact" 
                className="mt-6 inline-flex items-center text-tech-600 font-medium hover:text-tech-700"
              >
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
