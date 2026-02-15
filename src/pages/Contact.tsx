import React from 'react';
import { MapPin, Clock, Phone, ArrowRight } from 'lucide-react';

const heroImg = "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200";

function Contact() {
  return (
    <div className="bg-white font-sans text-slate-900 overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-[40vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroImg} className="w-full h-full object-cover" alt="Hero" />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="max-w-7xl mx-auto px-8 relative z-10 w-full">
          <h2 className="text-white text-4xl font-bold">Contact us</h2>
        </div>
      </section>

      {/* --- MAIN CONTENT --- */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          
          {/* Main Header with Underline */}
          <div className="text-center mb-13">
            <h1 className="text-4xl font-black text-[#FF4136] uppercase tracking-tight mb-2">
              Contact Us
            </h1>
            <div className="w-48 h-1 bg-[#0B1238] mx-auto"></div>
          </div>

          {/* GET IN TOUCH Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-start">
            <div className="lg:col-span-4">
              <h3 className="text-7xl font-black text-[#0B1238] uppercase tracking-tighter leading-[0.9]">
                GET IN<br />TOUCH
              </h3>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <ContactCard 
                icon={<MapPin size={20} />} 
                title="Offical Location" 
                detail="Rwanda St, Addis Ababa Around Wolo Sefer" 
              />
              <ContactCard 
                icon={<Clock size={20} />} 
                title="Working Hours" 
                detail="Mon - Fri : 3am - 5pm Sat : 3am - 12pm" 
              />
              <ContactCard 
                icon={<Phone size={20} />} 
                title="Call" 
                detail="+251-911-201-001 gizeplc@gmail.com" 
              />
            </div>
          </div>
          <div className="bg-[#FF4136] p-12 lg:p-20 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="bg-white p-4 shadow-2xl">
                <div className="bg-[#FF4136] p-8 lg:p-10">
                  <form className="space-y-4">
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full p-3 bg-white border-none outline-none font-medium text-gray-700"
                    />
                    <input 
                      type="email" 
                      placeholder="Your Email" 
                      className="w-full p-3 bg-white border-none outline-none font-medium text-gray-700"
                    />
                    <textarea 
                      rows={5} 
                      placeholder="Message" 
                      className="w-full p-3 bg-white border-none outline-none font-medium text-gray-700 resize-none"
                    ></textarea>
                    <button className="bg-[#0B1238] text-white px-6 py-3 font-bold rounded-sm shadow-md hover:bg-black transition-colors">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>

              {/* Text Area */}
              <div className="text-white">
                <p className="text-xl font-bold mb-0">Have any questions?</p>
                <h3 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter leading-none">
                  Contact Us
                </h3>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

const ContactCard = ({ icon, title, detail }: { icon: any, title: string, detail: string }) => (
  <div className="bg-[#FF4136] text-white p-6 shadow-lg h-full flex flex-col">
    <div className="mb-4">{icon}</div>
    <h4 className="text-lg font-bold mb-2">{title}</h4>
    <p className="text-[11px] font-medium leading-relaxed mb-4 opacity-90">{detail}</p>
    <a href="#" className="mt-auto flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider">
      Direction <ArrowRight size={12} />
    </a>
  </div>
);

export default Contact;