
import Hero from '../components/Hero';
import { SERVICES } from '../constants';
import { ChevronRight, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

function Services() {
  const caseStudies = [
      {
          title: "Enhancing connectivity with new multimodal ground and rail solution from Ethiopia to other countries",
          image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
          id: 1
      },
      {
          title: "Multi-modal transport solution for peak holiday season",
          image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=800",
          id: 2,
          featured: true
      },
      {
          title: "Leveraging electric vehicle for 5,000 kilometer long-haul transport in China",
          image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=800",
          id: 3
      }
  ];

  return (
    <div>
      <Hero 
        title="What we do" 
        image="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1200"
      />

      {/* Services Grid on Red Background */}
      <section className="py-24 bg-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {SERVICES.map((s) => (
                  <Link to={s.link} key={s.id} className="group relative bg-white h-[400px] overflow-hidden rounded-sm hover:scale-[1.02] transition-transform">
                      <img src={s.image} className="w-full h-full object-cover opacity-90 transition-all duration-500 group-hover:opacity-100" alt={s.title} />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all"></div>
                      <div className="absolute bottom-10 left-6 right-6">
                          <h3 className="text-white font-black text-2xl uppercase tracking-tighter mb-4">{s.title}</h3>
                          <div className="w-12 h-[3px] bg-red-600 transition-all group-hover:w-full"></div>
                      </div>
                  </Link>
              ))}
           </div>
           
           <div className="mt-12 flex justify-center gap-4">
               <div className="flex gap-2">
                   <span className="w-12 h-1 bg-white/20"></span>
                   <span className="w-12 h-1 bg-blue-900"></span>
                   <span className="w-12 h-1 bg-white/20"></span>
               </div>
           </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
            <h2 className="text-blue-900/10 text-6xl lg:text-8xl font-black absolute left-0 right-0 pointer-events-none -mt-8">CASE STUDIES</h2>
            <p className="text-blue-900 text-sm font-bold uppercase tracking-widest relative z-10">
                We collaborate with industry leaders and experts to deliver proven, real-world success stories.
            </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
           {caseStudies.map((study) => (
               <div key={study.id} className={`flex flex-col group ${study.featured ? 'scale-105 z-10' : ''}`}>
                   <div className="h-64 relative overflow-hidden">
                       <img src={study.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={study.title} />
                       {study.featured && (
                            <div className="absolute bottom-0 right-0 bg-red-600 p-4 text-white">
                                <Plus size={32} />
                            </div>
                       )}
                   </div>
                   <div className={`p-8 shadow-2xl flex-grow flex flex-col justify-between ${study.featured ? 'bg-red-600 text-white' : 'bg-white text-blue-900'}`}>
                       <div>
                           <span className="text-[10px] font-bold uppercase tracking-widest mb-4 block">CASE STUDIES</span>
                           <h4 className="text-xl font-black leading-tight mb-6">{study.title}</h4>
                       </div>
                       <Link to="#" className="flex items-center gap-2 font-bold uppercase text-xs tracking-widest group-hover:translate-x-2 transition-transform">
                           LEARN MORE <ChevronRight size={14} />
                       </Link>
                   </div>
               </div>
           ))}
        </div>

        <div className="text-center mt-20">
            <button className="bg-red-600 text-white px-10 py-5 font-black uppercase text-xl tracking-tighter rounded-sm hover:bg-red-700 transition-all shadow-xl hover:-translate-y-1">
                Discover more
            </button>
        </div>
      </section>
    </div>
  );
}

export default Services;