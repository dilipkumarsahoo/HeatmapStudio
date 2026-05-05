import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-white pt-20 pb-10">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* CTA Section */}
        <div 
          className="relative w-full rounded-[32px] overflow-hidden bg-black aspect-[1200/320] flex items-center justify-between px-12 md:px-16"
          style={{
            backgroundImage: "url('/cta-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="relative z-10 max-w-[50%]">
            <h2 className="text-3xl md:text-5xl font-semibold text-white leading-tight">
              Ready to transform how you work?
            </h2>
          </div>
          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4">
            <Link to="/products" className="bg-white text-black font-medium px-8 py-3.5 rounded-full hover:bg-white/90 transition-colors">
              Explore Tools
            </Link>
            <button className="bg-[#5AFF5A] text-black font-medium px-8 py-3.5 rounded-full hover:bg-[#4AEF4A] transition-colors">
              Start Building — Free
            </button>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mt-24 mb-20">
          <div>
            <h3 className="font-bold text-lg mb-6">Suite</h3>
            <ul className="space-y-4">
              <li><Link to="/products" className="text-foreground/70 hover:text-foreground transition-colors">Resume Builder</Link></li>
              <li><Link to="/products" className="text-foreground/70 hover:text-foreground transition-colors">QR Generator</Link></li>
              <li><Link to="/products" className="text-foreground/70 hover:text-foreground transition-colors">Notes App</Link></li>
              <li><Link to="/products" className="text-foreground/70 hover:text-foreground transition-colors">Budget Tracker</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-foreground/70 hover:text-foreground transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-foreground/70 hover:text-foreground transition-colors">Contact</Link></li>
              <li><a href="#" className="text-foreground/70 hover:text-foreground transition-colors">Privacy</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-foreground transition-colors">Terms</a></li>
            </ul>
          </div>
          <div>
            {/* Empty column */}
          </div>
          <div>
            <h3 className="font-bold text-lg mb-6">Support</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-foreground/70 hover:text-foreground transition-colors">Help Center</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-foreground transition-colors">API Docs</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-foreground transition-colors">Community</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Logo & Socials */}
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-gray-100 pt-10 pb-6">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-foreground flex items-center justify-center">
                <span className="text-background text-sm font-black">H</span>
              </div>
              <span className="font-display text-2xl font-bold tracking-tight text-[#111]">HeatMap Studio</span>
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="text-foreground hover:opacity-70 transition-opacity"><Linkedin size={20} fill="#111" strokeWidth={0}/></a>
              <a href="#" className="text-foreground hover:opacity-70 transition-opacity"><Instagram size={20} /></a>
              <a href="#" className="text-foreground hover:opacity-70 transition-opacity"><Facebook size={20} fill="#111" strokeWidth={0}/></a>
              <a href="#" className="text-foreground hover:opacity-70 transition-opacity"><Youtube size={20} fill="#111" strokeWidth={0}/></a>
              <a href="#" className="text-foreground hover:opacity-70 transition-opacity"><Twitter size={20} fill="#111" strokeWidth={0}/></a>
            </div>
          </div>
        </div>

        {/* Copyrights */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-6 text-sm text-foreground/60">
          <p>© 2024 HeatMap Studio. Tools for the way you move.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-foreground transition-colors underline underline-offset-4">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors underline underline-offset-4">Security</a>
            <a href="#" className="hover:text-foreground transition-colors underline underline-offset-4">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
