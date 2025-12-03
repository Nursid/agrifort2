/* AgriFortWebsiteEnhanced.jsx
   - React component with Tailwind, Swiper (hero + portfolio + partners),
     and Framer Motion animations.
   - Replace placeholder images in /public/images or appropriate path.
*/

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Menu,
  X,
  ChevronRight,
  Leaf,
  Users,
  BookOpen,
  Briefcase,
  Phone,
  Mail,
  Award,
} from "lucide-react";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Autoplay, Navigation, Pagination, EffectFade } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";


// Initialize modules
// SwiperCore.use([Autoplay, Navigation, Pagination, EffectFade]);

const heroSlides = [
  {
    title: "Innovative Tech to Transform Agriculture",
    subtitle: "Empowering farmers with cutting-edge solutions. Farmer wins, we win.",
    image: "/images/hero1.jpg", // replace with your images
    ctaText: "Explore Our Journey",
  },
  {
    title: "Sustainable Farming, Modern Methods",
    subtitle: "From soil health to smart sensors — we build solutions for tomorrow.",
    image: "/images/hero2.jpg",
    ctaText: "View Portfolio",
  },
  {
    title: "Trusted Partnerships, Real Impact",
    subtitle: "Collaborations that build better livelihoods.",
    image: "/images/hero3.jpg",
    ctaText: "Get Involved",
  },
];

const navigation = [
  { name: "About Us", href: "#about" },
  { name: "Leadership People", href: "#leadership" },
  { name: "Our Portfolio", href: "#portfolio" },
  { name: "Family Vibes", href: "#family" },
  { name: "AgriFort Highlights", href: "#highlights" },
];

const advantages = [
  {
    icon: Award,
    title: "Manufacturing",
    description: "State-of-the-art production facilities",
  },
  { icon: BookOpen, title: "R&D", description: "Cutting-edge research and development" },
  { icon: Users, title: "People at AgriFort", description: "Experienced team of professionals" },
  { icon: Briefcase, title: "Trusted Partnerships", description: "Building lasting relationships" },
];

const portfolioItems = [
  { img: "/images/portfolio1.jpg", title: "Precision Irrigation", subtitle: "IoT-based scheduling" },
  { img: "/images/portfolio2.jpg", title: "Soil Health Kits", subtitle: "Easy field diagnostics" },
  { img: "/images/portfolio3.jpg", title: "Crop Analytics", subtitle: "AI-driven recommendations" },
  { img: "/images/portfolio4.jpg", title: "Greenhouses", subtitle: "Controlled environment farming" },
  { img: "/images/portfolio5.jpg", title: "Seed R&D", subtitle: "High-yield varieties" },
];

const partnerLogos = [
  "/images/partner1.png",
  "/images/partner2.png",
  "/images/partner3.png",
  "/images/partner4.png",
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemFadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const AgriFortWebsiteEnhanced = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 text-gray-900">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-green-600 to-emerald-700 p-2 rounded-lg shadow">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <div>
                <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-emerald-600">
                  AgriFort
                </span>
                <div className="text-xs text-gray-500">Innovation in Agriculture</div>
              </div>
            </div>

            <div className="hidden md:flex space-x-8 items-center">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <a href="#registration" className="text-green-700 hover:text-green-800 font-medium">
                Registration Centre
              </a>
              <a
                href="#login"
                className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-200"
              >
                Workplace Login
              </a>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden bg-white border-t shadow-sm">
              <div className="px-4 py-4 space-y-3">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block text-gray-700 hover:text-green-600 font-medium py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="pt-4 border-t space-y-2">
                  <a href="#registration" className="block text-green-700 font-medium py-2">
                    Registration Centre
                  </a>
                  <a
                    href="#login"
                    className="block bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-2 rounded-full text-center"
                  >
                    Workplace Login
                  </a>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* HERO: Swiper Carousel */}
      <section className="pt-28">
        <Swiper
          className="h-[70vh]"
          spaceBetween={0}
          slidesPerView={1}
          loop
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          navigation
          pagination={{ clickable: true }}
          effect="fade"
        >
          {heroSlides.map((slide, i) => (
            <SwiperSlide key={i}>
              <div
                className="relative h-[70vh] bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(6,95,70,0.28), rgba(2,6,23,0.18)), url(${slide.image})`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20"></div>

                <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-2xl text-white"
                  >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow">
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-green-50">
                        {slide.title}
                      </span>
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-white/90">{slide.subtitle}</p>

                    <div className="mt-8 flex gap-4">
                      <a
                        href="#about"
                        className="inline-flex items-center bg-gradient-to-r from-green-600 to-emerald-600 px-6 py-3 rounded-full text-sm md:text-base font-semibold shadow-lg hover:scale-[1.02] transition-transform"
                      >
                        {slide.ctaText}
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </a>
                      <a
                        href="#portfolio"
                        className="inline-flex items-center border-2 border-white/30 text-white px-5 py-3 rounded-full text-sm md:text-base font-semibold hover:bg-white/10 transition"
                      >
                        View Portfolio
                      </a>
                    </div>
                  </motion.div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Journey / About */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="text-center mb-12"
          >
            <motion.h2 variants={itemFadeUp} className="text-4xl font-bold text-gray-900">
              AgriFort Journey
            </motion.h2>
            <motion.div variants={itemFadeUp} className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto mt-4"></motion.div>
            <motion.p variants={itemFadeUp} className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to agricultural innovation leaders, AgriFort has been at the forefront of transforming farming practices through technology and dedication.
            </motion.p>
          </motion.div>

          {/* Timeline (simple animated) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12"
          >
            <div className="overflow-x-auto">
              <div className="min-w-[900px] flex items-center gap-8 px-4">
                {["Founded", "First Product", "R&D Lab", "AgriFest", "Scale-up"].map((step, idx) => (
                  <div key={step} className="flex-shrink-0 w-56">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center text-white font-bold shadow-lg">
                        {idx + 1}
                      </div>
                      <div>
                        <div className="font-semibold">{step}</div>
                        <div className="text-sm text-gray-500">Short description goes here</div>
                      </div>
                    </div>
                    <div className="mt-4 h-1 bg-gray-100 rounded"></div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Commitment */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-center"
          >
            <motion.div variants={itemFadeUp} className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Mission</h3>
              <p className="text-green-50">To revolutionize agriculture through sustainable innovation and empower farmers with technology-driven solutions.</p>
            </motion.div>
            <motion.div variants={itemFadeUp} className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Vision</h3>
              <p className="text-green-50">Creating a future where every farmer has access to cutting-edge agricultural technology and sustainable practices.</p>
            </motion.div>
            <motion.div variants={itemFadeUp} className="md:col-span-2 bg-white/10 backdrop-blur-lg p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Environmental Policy</h3>
              <p className="text-green-50">Committed to sustainable practices that protect our planet while enhancing agricultural productivity for future generations.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Advantages */}
      <section id="highlights" className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={containerVariants} className="text-center mb-12">
            <motion.h2 variants={itemFadeUp} className="text-4xl font-bold text-gray-900">The AgriFort Advantage</motion.h2>
            <motion.div variants={itemFadeUp} className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto mt-4"></motion.div>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((adv, idx) => {
              const Icon = adv.icon;
              return (
                <motion.div
                  key={idx}
                  variants={itemFadeUp}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
                >
                  <div className="bg-gradient-to-br from-green-600 to-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transform-gpu">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{adv.title}</h3>
                  <p className="text-sm text-gray-600">{adv.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Carousel */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="text-center mb-10">
            <motion.h2 variants={itemFadeUp} className="text-4xl font-bold text-gray-900">Our Portfolio</motion.h2>
            <motion.p variants={itemFadeUp} className="mt-3 text-gray-600 max-w-3xl mx-auto">Selected projects and products demonstrating our impact and innovation.</motion.p>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              navigation
              autoplay={{ delay: 3500, disableOnInteraction: false }}
            >
              {portfolioItems.map((p, i) => (
                <SwiperSlide key={i}>
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition transform-gpu">
                    <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${p.img})` }} />
                    <div className="p-5">
                      <h4 className="font-semibold text-lg">{p.title}</h4>
                      <p className="text-sm text-gray-500 mt-1">{p.subtitle}</p>
                      <div className="mt-4">
                        <a href="#portfolio" className="text-green-600 font-medium hover:underline inline-flex items-center">
                          Learn more <ChevronRight className="ml-2 h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </section>

      {/* Partners Slider */}
      <section className="py-12 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h3 initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} className="text-center text-gray-600 mb-6">
            Trusted by
          </motion.h3>

          <Swiper
            slidesPerView={2}
            spaceBetween={20}
            breakpoints={{ 640: { slidesPerView: 4 }, 1024: { slidesPerView: 6 } }}
            autoplay={{ delay: 2200, disableOnInteraction: false }}
            loop
          >
            {partnerLogos.map((src, idx) => (
              <SwiperSlide key={idx}>
                <div className="flex items-center justify-center p-4">
                  <img src={src} alt={`partner-${idx}`} className="max-h-12 object-contain opacity-90" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Contact / Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-gradient-to-br from-green-600 to-emerald-700 p-2 rounded-lg">
                  <Leaf className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold">AgriFort</span>
              </div>
              <p className="text-gray-400 mb-4">Transforming agriculture through innovation and technology.</p>
              <div className="flex gap-3">
                <a href="#" className="text-gray-400 hover:text-green-400">Address</a>
                <a href="#" className="text-gray-400 hover:text-green-400">Privacy</a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Get in Touch</h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <p className="flex items-center"><Phone className="h-4 w-4 mr-2" /> +91 98765 43210</p>
                <p className="flex items-center"><Mail className="h-4 w-4 mr-2" /> info@agrifort.com</p>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Grow Your Career</h4>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">Join Our Team</a>
            </div>

            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-green-400 transition-colors text-sm">Socials</a>
                <a href="#" className="block text-gray-400 hover:text-green-400 transition-colors text-sm">Media</a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} AgriFort. All rights reserved. Innovating for a sustainable future.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AgriFortWebsiteEnhanced;
