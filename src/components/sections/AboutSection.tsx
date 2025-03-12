
import { cn } from "@/lib/utils";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-tech-100 rounded-full blur-2xl opacity-70"></div>
              <div className="glass rounded-2xl overflow-hidden shadow-xl relative">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Cybersecurity Solutions" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width="600"
                  height="400"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-tech-200 rounded-full blur-2xl opacity-50 z-0"></div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 space-y-6">
            <div className="inline-block">
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-tech-100 text-tech-800">
                About Us
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-cheese-800 leading-tight">
              Your Trusted IT & <br className="hidden sm:block" />Cybersecurity Partner
            </h2>
            <p className="text-cheese-600">
              At Cheese Tech (SMC-Pvt) Ltd., we provide innovative IT solutions, cybersecurity services, and high-quality hardware solutions to help businesses stay secure and efficient. Our expertise ensures your technology infrastructure is optimized, protected, and future-ready.
            </p>
            
            <div className="bg-cheese-50 rounded-xl p-6 border border-cheese-100 shadow-subtle">
              <p className="text-cheese-700 font-medium">
                With years of experience in the industry, we've helped countless businesses transform their digital infrastructure and strengthen their security posture to meet modern challenges.
              </p>
            </div>
            
            <a 
              href="#services" 
              className={cn(
                "animated-element inline-flex items-center",
                "font-medium text-tech-600 hover:text-tech-700"
              )}
            >
              Discover our services
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
