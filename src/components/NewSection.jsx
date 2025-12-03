import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { ChevronRight } from "lucide-react";

export default function NewSection() {
  return (
    <section className="relative w-full h-[100vh]">
    {/* --- TEXT OVERLAY (ONE TIME ONLY) --- */}
    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6 bg-black/30">
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
        <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
          Innovative Tech
        </span>
        <br />
        Transform Agriculture
      </h1>
  
      <p className="text-xl text-gray-200 mb-8 max-w-3xl">
        Empowering farmers with cutting-edge solutions. Farmer wins, we win.
      </p>
  
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="#about"
          className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center"
        >
          Explore Our Journey
        </a>
  
        <a
          href="#portfolio"
          className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold"
        >
          View Portfolio
        </a>
      </div>
    </div>
  
    {/* --- CAROUSEL BELOW CONTENT --- */}
    <Swiper
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop={true}
      className="w-full h-full z-10"
    >
      <SwiperSlide>
        <img src="/image/banner-5-scaled.jpg" className="w-full h-full object-cover" />
      </SwiperSlide>
  
      <SwiperSlide>
        <img src="/image/slider-1.webp" className="w-full h-full object-cover" />
      </SwiperSlide>
    </Swiper>
  </section>
  
  );
}
