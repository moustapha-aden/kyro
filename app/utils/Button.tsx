import { ArrowUpRight } from 'lucide-react';
function Button (){
    return (  <div className="mt-5 md:mt-14 flex flex-wrap items-center gap-5">
            
            {/* PRIMARY BUTTON */}
              <a href="#about">
            <button className="group relative overflow-hidden rounded-full bg-white px-8 py-5 text-black transition-all duration-500 hover:px-10">
              <span className="flex items-center gap-3 uppercase tracking-[0.2em] text-xs font-semibold">
                Découvrir
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </span>
            </button>
            </a>

            {/* SECOND BUTTON */}
             <a href="#services" className='hidden md:flex'>
            <button  className="rounded-full border border-white/15 bg-white/5 backdrop-blur-xl px-8 py-5 text-white uppercase tracking-[0.2em] text-xs hover:bg-white/10 transition-all duration-500">
              Nos Services
            </button>
            </a>
          </div>)
}
export default Button