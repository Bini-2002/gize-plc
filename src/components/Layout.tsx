import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Linkedin, Facebook, Instagram } from 'lucide-react';

// Custom X (Twitter) Icon Component
const XIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="white">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

// Custom Instagram with proper inner circles
const CustomInstagram = ({ size = 14 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="white" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'SERVICES', path: '/services' },
    { name: 'ABOUT US', path: '/about' },
    { name: 'FAQ', path: '/faq' },
    { name: 'CONTACT US', path: '/contact' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-2">
              <img src="/gize-logo.png" alt="Gize PLC Logo" className="h-10 object-contain" />
            </Link>
            <nav className="hidden md:flex space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-[10px] font-bold tracking-wider transition-colors hover:text-[#E31B23] ${
                    location.pathname === link.path ? 'text-[#E31B23]' : isScrolled ? 'text-[#0B1238]' : 'text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-grow">{children}</main>

      {/* --- THREE COLUMN FOOTER --- */}
      <footer className="bg-[#0B1238] text-white pt-10 pb-0 overflow-hidden relative border-none">
        <div className="absolute bottom-0 left-0 w-2 h-12 bg-[#E31B23] z-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 items-center">
            
            {/* LEFT ALIGN: Logo */}
            <div className="flex flex-col items-center lg:items-start shrink-0 mb-8 lg:mb-0">
              <img src="/gize-logo.png" alt="Gize Logo" className="h-14 object-contain" />
              <p className="text-gray-400 text-[7px] uppercase tracking-[0.2em] mt-1">Private Limited Company</p>
            </div>

            {/* CENTER ALIGN: Text Block (Lighter Weight) */}
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center gap-6">
                <span className="text-[#E31B23] font-bold text-base tracking-tighter uppercase">WE CONNECT</span>
                {/* Changed font-black to font-medium for a thinner look */}
                <div className="flex flex-col font-medium text-xl lg:text-3xl leading-snug text-gray-100 italic tracking-wide">
                  <span>PEOPLE</span>
                  <span>RESOURCE</span>
                  <span>SYSTEMS</span>
                </div>
              </div>
              <Link to="/contact" className="mt-6 border border-white px-5 py-1 hover:bg-white hover:text-[#0B1238] transition-all">
                <span className="text-[8px] font-bold tracking-[0.2em] uppercase">CONTACT US</span>
              </Link>
            </div>

            {/* RIGHT ALIGN: Globe */}
            <div className="flex justify-center lg:justify-end shrink-0">
              <div className="w-48 h-48 lg:w-56 lg:h-56">
                <img src="/globe.png" alt="Globe" className="w-full h-full object-contain animate-spin-slow opacity-90" />
              </div>
            </div>

          </div>
        </div>

        {/* BOTTOM SOCIAL BAR */}
        <div className="bg-[#E5E7EB] py-3 mt-8 border-t border-gray-300">
          <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-2">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12">
              <span className="text-gray-500 font-bold uppercase tracking-widest text-xs">Follow US</span>
              <span className="font-black text-lg text-[#0B1238]"># GIZE PLC</span>

              <div className="flex gap-1.5">
                {[
                  { icon: <Linkedin size={14} fill="white" className="text-white" />, href: '#' },
                  { icon: <Facebook size={14} fill="white" className="text-white" />, href: '#' },
                  { icon: <XIcon size={14} />, href: '#' },
                  { icon: <CustomInstagram size={14} />, href: '#' }
                ].map((item, idx) => (
                  <a 
                    key={idx} 
                    href={item.href} 
                    className="bg-[#E31B23] p-2 rounded-sm text-white hover:opacity-90 transition-opacity flex items-center justify-center"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="w-full max-w-4xl h-[1px] bg-gray-300"></div>

            <div className="flex flex-wrap justify-center gap-x-6 text-[7px] font-bold text-[#0B1238] uppercase tracking-[0.2em]">
              <Link to="#">Privacy Policy</Link>
              <Link to="#">Terms & Legal</Link>
              <Link to="#">SiteMap</Link>
              <Link to="#">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;