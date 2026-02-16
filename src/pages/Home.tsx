import React, { useState, useEffect } from 'react';
import { Plus, Truck, Contact, ArrowRight, Check } from 'lucide-react';

// --- IMAGE IMPORTS ---
import heroImg from "../images/i2.jpeg";
import aboutImg from "../images/i21.jpg";
import customClearanceImg from "../images/cstom clerance.jpg";
import shippingImg from "../images/Freight_Forwarding.jpeg";
import portHandlingImg from "../images/i5.jpg";
import warehouseImg from "../images/i33.jpg";
import transportationImg from "../images/i11.jpeg";
import hazardousImg from "../images/i2.jpeg";
import commitmentImg from "../images/i55.jpg";

// --- PARTNER LOGO IMPORTS ---
import haeLogo from "../images/partners/hae-group.png";
import iataLogo from "../images/partners/iata.png";
import dhlLogo from "../images/partners/dhl.png";
import fedexLogo from "../images/partners/fedex.png";

const Home: React.FC = () => {

  const [activeTab, setActiveTab] = useState(0);

  // --- HERO SLIDER STATE ---
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);

  const slides = [
    {
      subtitle: "Logistics and Shipping Company",
      desc: "Delivering expert solutions in customs clearance, freight forwarding, and inland transportation across Ethiopia.",
      image: heroImg
    },
    {
      subtitle: "Global Freight Solutions",
      desc: "Connecting businesses to global markets with reliable sea and air freight strategies focused on speed and safety.",
      image: aboutImg
    },
    {
      subtitle: "Supply Chain Excellence",
      desc: "Transforming complex shipping challenges into seamless experiences with our dedicated team and modern infrastructure.",
      image: commitmentImg
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((old) => {
        if (old >= 100) {
          setCurrentSlide((prev) => (prev + 1) % slides.length);
          return 0;
        }
        return old + 0.5;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [slides.length]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setProgress(0);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
  };

  const additionalServices = [
    { 
      name: 'GIZE PLC - LOGISTICS & FREIGHT STATION', 
      content: 'Gize PLC maintains a high-quality logistics freight station service in Ethiopia. We offer a wide range of services including warehousing, transportation, and custom clearance.',
      items: ['Warehousing services', 'Packing', 'Loading', 'Container Stuffing', 'Lashing'],
      img: warehouseImg 
    },
    { name: 'PACKING & MOVING SERVICES', content: 'Professional relocation and specialized moving services.', items: ['Secure Packing', 'Heavy Lifting', 'Transit Handling'], img: warehouseImg },
    { name: 'STORAGE & WAREHOUSING SERVICES', content: 'Comprehensive ocean and air forwarding solutions.', items: ['Route Optimization', 'Global Tracking'], img: warehouseImg },
    { name: 'FAST CARGO SERVICES', content: 'Time-critical airfreight and express logistics.', items: ['Express Delivery', 'Priority Handling'], img: warehouseImg }
  ];

  return (
    <div className="bg-white font-sans text-slate-900 overflow-x-hidden">

      {/* --- HERO SLIDER SECTION --- */}
     {/* --- HERO SLIDER SECTION --- */}
<section className="relative min-h-screen flex overflow-hidden">

{/* Background Slides */}
<div className="absolute inset-0">
  {slides.map((slide, index) => (
    <img
      key={index}
      src={slide.image}
      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
        index === currentSlide ? "opacity-100" : "opacity-0"
      }`}
      alt="Slide"
    />
  ))}
  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-[#0B1238]/80 z-10"></div>
</div>

{/* Sticky Sidebar / Navbar */}
{/* Sticky Sidebar / Navbar */}
<aside className="fixed left-0 top-0 w-16 lg:w-24 h-screen flex flex-col items-center pt-48 gap-12 bg-[#0B1238] z-50 border-r border-white/10 shadow-xl">

  {/* Red vertical line along the left */}
  <div className="w-[4px] bg-red-600 h-full absolute left-0 top-0"></div>

  {/* Track & Trace Button */}
  <div className="flex flex-col items-center gap-2 cursor-pointer group">
    <Truck
      className="text-white group-hover:text-[#E31B23] transition-colors"
      size={24}
    />
    <span className="text-white text-[8px] font-bold uppercase tracking-tighter text-center leading-tight">
      Track & Trace
    </span>
  </div>

  {/* Contact Us Button */}
  <div className="flex flex-col items-center gap-2 cursor-pointer group">
    <Contact
      className="text-white group-hover:text-[#E31B23] transition-colors"
      size={24}
    />
    <span className="text-white text-[8px] font-bold uppercase tracking-tighter text-center leading-tight">
      Contact Us
    </span>
  </div>
  
</aside>


{/* Main Hero Content */}
<div className="ml-16 lg:ml-24 flex-1 flex items-center justify-center relative z-20 px-4 max-w-7xl mx-auto">
  <div className="max-w-3xl">

    {/* Subtitle */}
    <div className="flex items-center gap-4 mb-6 h-6">
      <span className="h-[2px] w-12 bg-red-600"></span>
      <span className="text-white font-bold tracking-widest text-sm uppercase">
        {slides[currentSlide].subtitle}
      </span>
    </div>

    {/* Title */}
    <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white uppercase drop-shadow-2xl mb-4">
      <span className="text-red-600">G</span>ize PLC
    </h1>

    {/* Description */}
    <div className="h-32">
      <p className="text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed font-medium">
        {slides[currentSlide].desc}
      </p>
    </div>
  </div>
</div>

{/* Slider Controls */}
<div className="absolute bottom-12 right-12 flex items-center gap-10 z-30">
  <div className="flex gap-4">
    <button
      onClick={handlePrev}
      className="w-12 h-12 rounded-full border border-white text-white flex items-center justify-center hover:bg-red-600 transition-all"
    >
      ←
    </button>
    <button
      onClick={handleNext}
      className="w-12 h-12 rounded-full border border-white text-white flex items-center justify-center hover:bg-red-600 transition-all"
    >
      →
    </button>
  </div>

  {/* Progress Bar */}
  <div className="w-48 h-1 bg-white/30 rounded-full overflow-hidden">
    <div
      className="h-full bg-red-600 transition-all duration-100 ease-linear"
      style={{ width: `${progress}%` }}
    ></div>
  </div>
</div>
</section>

      


      {/* --- ABOUT SECTION --- */}
      <section className="py-32 px-4 md:px-20 lg:px-48 bg-white relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="relative">
            <div className="absolute -bottom-8 -left-8 w-2/3 h-full bg-[#E31B23] -z-10"></div>
            <img src={aboutImg} alt="Logistics Operation" className="w-full h-[500px] object-cover shadow-2xl" />
          </div>
          <div className="flex flex-col pt-10">
            <span className="text-[#E31B23] text-xs font-black uppercase tracking-widest mb-4 italic">About Gize PLC</span>
            <h2 className="text-4xl font-black text-[#0B1238] leading-tight mb-8 uppercase tracking-tighter">
              Gize PLC has built nearly Twelve years of experience delivering comprehensive logistics solutions in Ethiopia
            </h2>
            <div className="space-y-6 text-gray-600 text-base leading-relaxed font-medium">
              <p>Gize PLC was started by dedicated professionals with 30 years experience in the logistics, courier, and airfreight industry. We understand the dynamic nature of the world economy and current trends. We deliver products and services by being there for our customers—no matter what the size of your business is.</p>
              <p>As a multidimensional logistics company, we use the knowledge and opportunities we have to help our customers with everything from the smallest shipment of personal effects to the management of large-scale international projects.</p>
            </div>
            <button className="mt-10 bg-[#E31B23] text-white w-fit px-8 py-3 text-xs font-bold uppercase flex items-center gap-2 hover:bg-[#0B1238] transition-all">
              Read More <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* --- SERVICES GRID --- */}
      <section className="py-24 px-4 md:px-20 bg-white">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-5xl font-black text-[#0B1238] uppercase tracking-tighter">OUR SERVICES</h2>
          <div className="w-16 h-1 bg-gray-200 mx-auto my-6"></div>
          <p className="text-gray-500 font-medium leading-relaxed italic">
            Gize Logistics PLC delivers the knowledge and opportunities needed to optimize every flow for every client...
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 max-w-7xl mx-auto gap-1">
          <div className="lg:col-span-4 relative h-[600px] overflow-hidden group">
            <img src={commitmentImg} className="absolute inset-0 w-full h-full object-cover" alt="Commitment" />
            <div className="absolute inset-0 bg-[#0B1238]/60 group-hover:bg-[#0B1238]/40 transition-all"></div>
            <div className="relative h-full flex flex-col justify-center p-12 text-white z-10">
              <h3 className="text-3xl font-black mb-8 border-b-2 border-red-600 pb-4 w-fit">OUR COMMITMENT</h3>
              <ul className="space-y-4 text-sm text-gray-100 font-bold mb-6">
                <li>• We deliver high-quality logistics solutions tailored to each client's specific needs.</li>
                <li>• We are committed to building long-term relationships through excellent service and communication.</li>
                <li>• Our team is dedicated to providing efficient and reliable logistics solutions for businesses of all sizes.</li>
              </ul>
              <div className="bg-[#E31B23] w-10 h-10 flex items-center justify-center">
                <Plus size={24} />
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 gap-1">
            <ServiceCard title="Transportation" img={transportationImg} />
            <ServiceCard title="Custom Clearance" img={customClearanceImg} />
            <ServiceCard title="Airfreight" img={shippingImg} />
            <ServiceCard title="Port Handling" img={portHandlingImg} />
          </div>
        </div>
      </section>

      {/* --- ADDITIONAL SERVICES --- */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-center font-black text-3xl mb-16 tracking-tighter text-[#0B1238] uppercase">ADDITIONAL SERVICES</h2>
          <div className="flex flex-wrap justify-center gap-8 mb-20 border-b border-gray-200">
            {additionalServices.map((service, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`pb-4 text-[10px] font-black tracking-widest uppercase transition-all ${activeTab === idx ? 'text-[#E31B23] border-b-2 border-[#E31B23]' : 'text-gray-400 border-transparent hover:text-gray-900'}`}
              >
                {service.name}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center max-w-6xl mx-auto">
            <img src={additionalServices[activeTab].img} className="w-full h-[400px] object-cover" alt="Additional" />
            <div className="space-y-6">
              <h3 className="text-2xl font-black text-[#0B1238] uppercase tracking-tighter leading-tight">{additionalServices[activeTab].name}</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-md">{additionalServices[activeTab].content}</p>
              
              <ul className="flex flex-col gap-5 mt-8">
                {additionalServices[activeTab].items.map((item) => (
                  <li key={item} className="flex items-center gap-4 text-lg font-medium text-slate-800">
                    <div className="w-5 h-5 rounded-full bg-[#E31B23] flex items-center justify-center text-white shrink-0 shadow-sm">
                      <Check size={12} strokeWidth={6} />
                    </div> 
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

     {/* Hazardous Cargo Section (unchanged) */}
<section className="bg-gray-100 overflow-hidden">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">
    <div className="lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center">
      <h2 className="text-red-600 font-black text-5xl mb-10 uppercase leading-tight tracking-tighter">
        Hazardous Cargo Management
      </h2>
      <div className="space-y-6 text-gray-700 text-lg font-medium leading-relaxed">
        <p>
          Gize PLC provides specialized logistics support for hazardous and regulated cargo, focusing on safety, risk control, and regulatory compliance throughout the supply chain. Each shipment is assessed individually to ensure proper handling procedures are applied from origin to destination.
        </p>
        <p>
          Our operations team plans secure transport solutions by selecting suitable carriers, routes, and handling methods that minimize exposure and delays. Dedicated facilities and trained personnel ensure safe storage, monitoring, and controlled movement of sensitive cargo.
        </p>
      </div>
    </div>

    <div className="lg:w-1/2 h-[600px]">
      <img 
        src={hazardousImg} 
        className="w-full h-full object-cover grayscale-[30%]" 
        alt="Dangerous Goods Handling" 
      />
    </div>
  </div>
</section>


      {/* --- AFFILIATED COMPANIES --- */}
      <section className="py-24 bg-white text-center">
        <div className="mb-16">
          <span className="text-gray-400 text-xs font-black uppercase tracking-[0.6em]">With Us</span>
          <h2 className="text-2xl font-black text-[#E31B23] uppercase mt-4 tracking-tighter italic">Affiliated Companies</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-16 items-center px-10 mb-20 opacity-80">
          <img src={haeLogo} alt="HAE Group" className="h-8 object-contain" />
          <img src={iataLogo} alt="IATA" className="h-10 object-contain" />
          <img src={dhlLogo} alt="DHL" className="h-6 object-contain" />
          <img src={fedexLogo} alt="FedEx" className="h-8 object-contain" />
        </div>
      </section>

    </div>
  );
};

const ServiceCard = ({ title, img }: { title: string; img: string }) => (
  <div className="relative h-72 group overflow-hidden">
    <img src={img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={title} />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
    <div className="absolute bottom-8 left-8">
      <h4 className="text-white font-black text-xl uppercase tracking-tighter">{title}</h4>
      <div className="w-8 h-1 bg-red-600 mt-2"></div>
    </div>
    <div className="absolute bottom-6 right-6 bg-red-600 p-2 text-white">
      <Plus size={18} />
    </div>
  </div>
);

export default Home;