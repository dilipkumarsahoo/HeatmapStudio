import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { useEffect } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-background font-sans overflow-x-hidden">
      <Header />
      
      <section className="pt-32 pb-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            
            {/* Left Column: Info */}
            <div className="animate-in fade-in slide-in-from-left-8 duration-1000">
              <span className="inline-block text-[11px] tracking-wider uppercase border border-foreground/20 rounded-full px-4 py-1.5 text-foreground/70 mb-6 font-bold">
                Get in touch
              </span>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium text-foreground tracking-tight leading-[0.95] mb-8">
                Let's start a <br />
                <span className="text-foreground/30 italic">conversation.</span>
              </h1>
              <p className="text-xl text-foreground/60 max-w-md leading-relaxed mb-12">
                Have questions about our tools or interested in a custom enterprise solution? We're here to help.
              </p>
              
              <div className="space-y-8">
                {[
                  { icon: <Mail className="w-5 h-5" />, label: "Email", value: "hello@heatmapstudio.com" },
                  { icon: <Phone className="w-5 h-5" />, label: "Phone", value: "+1 (555) 123-4567" },
                  { icon: <MapPin className="w-5 h-5" />, label: "Office", value: "123 Innovation Drive, San Francisco, CA" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-foreground/5 flex items-center justify-center text-foreground">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-foreground/40 font-bold mb-0.5">{item.label}</p>
                      <p className="text-lg font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="bg-surface border border-foreground/5 p-6 sm:p-8 md:p-12 rounded-[32px] sm:rounded-[40px] shadow-2xl animate-in fade-in slide-in-from-right-8 duration-1000">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground/60 ml-1">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full bg-background border border-foreground/10 rounded-2xl px-6 py-4 outline-none focus:border-brand-green transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground/60 ml-1">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full bg-background border border-foreground/10 rounded-2xl px-6 py-4 outline-none focus:border-brand-green transition-colors"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground/60 ml-1">Subject</label>
                  <select className="w-full bg-background border border-foreground/10 rounded-2xl px-6 py-4 outline-none focus:border-brand-green transition-colors appearance-none">
                    <option>General Inquiry</option>
                    <option>Technical Support</option>
                    <option>Partnership Request</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground/60 ml-1">Message</label>
                  <textarea 
                    rows={5}
                    placeholder="Tell us more about your needs..."
                    className="w-full bg-background border border-foreground/10 rounded-2xl px-6 py-4 outline-none focus:border-brand-green transition-colors resize-none"
                  ></textarea>
                </div>

                <button className="w-full bg-foreground text-background font-bold py-5 rounded-2xl hover:opacity-90 transition-opacity flex items-center justify-center gap-3">
                  Send Message
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;
