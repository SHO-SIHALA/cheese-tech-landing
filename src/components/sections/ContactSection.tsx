
import { cn } from "@/lib/utils";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-cheese-50">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-tech-100 text-tech-800">
              Get in Touch
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-cheese-800 mb-6">
            Let's Discuss Your IT Needs
          </h2>
          <p className="text-cheese-600">
            Looking for cutting-edge IT solutions and cybersecurity services? Contact us today to discover how Cheese Tech can help your business thrive in the digital era.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 glass rounded-2xl overflow-hidden shadow-xl">
            <div className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-cheese-700">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg border border-cheese-200 focus:ring-2 focus:ring-tech-500 focus:border-tech-500 outline-none transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-cheese-700">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-cheese-200 focus:ring-2 focus:ring-tech-500 focus:border-tech-500 outline-none transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-medium text-cheese-700">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 rounded-lg border border-cheese-200 focus:ring-2 focus:ring-tech-500 focus:border-tech-500 outline-none transition-all"
                    placeholder="How can we help you?"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-cheese-700">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-cheese-200 focus:ring-2 focus:ring-tech-500 focus:border-tech-500 outline-none transition-all"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className={cn(
                    "animated-element w-full inline-flex items-center justify-center",
                    "rounded-lg px-6 py-3 font-medium text-white",
                    "bg-tech-600 hover:bg-tech-700 shadow-lg"
                  )}
                >
                  Send Message
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </button>
              </form>
            </div>
          </div>
          
          <div className="lg:col-span-2 space-y-8">
            <div className="glass rounded-2xl shadow-xl p-8 h-full flex flex-col">
              <h3 className="text-xl font-semibold text-cheese-800 mb-6">Connect With Us</h3>
              
              <div className="space-y-6 flex-grow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-tech-100 flex items-center justify-center text-tech-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-cheese-500">Phone</h4>
                    <p className="text-cheese-800 font-medium">+92 305 566 4442</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-tech-100 flex items-center justify-center text-tech-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-cheese-500">Email</h4>
                    <p className="text-cheese-800 font-medium">info@cheesetech.pk</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-tech-100 flex items-center justify-center text-tech-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-cheese-500">Office Location</h4>
                    <p className="text-cheese-800 font-medium">Office #123, Some Street, City</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-cheese-200">
                <h4 className="text-sm font-medium text-cheese-500 mb-4">Connect directly via WhatsApp</h4>
                <a 
                  href="https://wa.me/03055664442" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={cn(
                    "animated-element inline-flex items-center justify-center w-full",
                    "rounded-lg px-6 py-3 font-medium text-white",
                    "bg-green-600 hover:bg-green-700 shadow-lg"
                  )}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
