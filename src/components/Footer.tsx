
import { cn } from "@/lib/utils";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-steelblue-dark text-white py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-secondary to-white">Cheese Tech</h3>
            <p className="text-white/80 text-sm max-w-xs">
              Your trusted IT & Cybersecurity partner, providing innovative solutions to help businesses stay secure and efficient.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Us</h4>
            <address className="not-italic text-white/80 text-sm space-y-2">
              <p>Cheese Tech (SMC-Pvt) Ltd.</p>
              <p>Office #123, Some Street</p>
              <p>City, Country, Postal Code</p>
              <p>Phone: +92 305 566 4442</p>
              <p>Email: info@cheesetech.pk</p>
            </address>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Connect With Us</h4>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/share/1BWtCMWF3D/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="animated-element w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/cheesetech.pk?igsh=dGhyZTdmN2VrN2I0&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="animated-element w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a 
                href="https://wa.me/03055664442" 
                target="_blank" 
                rel="noopener noreferrer"
                className="animated-element w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center"
                aria-label="WhatsApp"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 text-sm text-white/70 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {currentYear} Cheese Tech (SMC-Pvt) Ltd. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
