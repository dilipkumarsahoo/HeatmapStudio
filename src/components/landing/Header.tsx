import { ChevronDown, Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Products", href: "/products" },
    { name: "About us", href: "/about" },
    { name: "Blog", href: "/blog/1" },
    { name: "Contact Us", href: "/contact" }
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-foreground/5 py-3" : "bg-transparent py-5"
      }`}>
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-1 z-50">
          <div className="w-8 h-8 rounded-lg bg-foreground flex items-center justify-center transform hover:rotate-12 transition-transform duration-300">
            <span className="text-background text-sm font-black">H</span>
          </div>
          <span className="font-display text-2xl font-bold text-foreground tracking-tight">HeatMap<span className="text-foreground/40 font-medium">Studio</span></span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) => `
                flex items-center gap-1 transition-colors hover:text-foreground
                ${isActive ? "text-foreground font-semibold" : "text-foreground/60"}
              `}
            >
              {item.name}
              {/* {(item.name === "Products" || item.name === "Blog") && <ChevronDown className="w-3.5 h-3.5" />} */}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3 z-50">
          <button className="hidden lg:block text-sm font-medium text-foreground hover:opacity-70">Book A Demo</button>
          <button className="hidden sm:block bg-foreground text-background text-sm font-medium px-5 py-2.5 rounded-full hover:opacity-90 transition-all active:scale-95">
            Get Started
          </button>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-foreground hover:bg-foreground/5 rounded-full transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`
        fixed inset-0 bg-background z-40 flex flex-col pt-32 px-8 transition-all duration-500 md:hidden
        ${isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"}
      `}>
        <nav className="flex flex-col gap-6">
          {navItems.map((item, i) => (
            <NavLink 
              key={item.name} 
              to={item.href} 
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ transitionDelay: `${i * 50}ms` }}
              className={({ isActive }) => `
                text-4xl font-display font-medium transition-all duration-500 transform
                ${isMobileMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"}
                ${isActive ? "text-foreground" : "text-foreground/30"}
              `}
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
        
        <div className={`
          mt-auto pb-12 space-y-4 transition-all duration-500 delay-300 transform
          ${isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}
        `}>
          <button className="w-full text-center text-lg font-medium text-foreground py-4 border border-foreground/10 rounded-2xl">
            Book A Demo
          </button>
          <button className="w-full bg-foreground text-background text-lg font-bold py-5 rounded-2xl shadow-lg">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
