import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function AgriSection() {
  return (
    <section className="py-20">
      
      {/* TOP TEXT */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-green-600 text-lg"
        >
          Let’s start your farming journey together!
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-gray-900"
        >
          Innovative solutions for agriculture optimal crops growth & soil health.
        </motion.h2>

        {/* ICON ANIMATIONS */}
        <div className="flex justify-center gap-4 mt-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="h-5 w-5 bg-green-600 rounded-full"
          />
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="h-5 w-5 bg-green-600 rounded-full"
          />
        </div>
      </div>

      {/* SWIPER CAROUSEL */}
      <Swiper
        spaceBetween={40}
        slidesPerView={2}
        loop={true}
        autoplay={{ delay: 4000 }}
        className="max-w-7xl mx-auto"
      >
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <SwiperSlide key={i}>
            <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
              
              {/* IMAGE */}
              <div className="overflow-hidden">
                <img
                  src={`https://7oroofthemes.com/agritec/wp-content/uploads/elementor/thumbs/service-${i}-rcg7wuspaf0q69774kmmzmoeea536o7umf1c4k2eq0.webp`}
                  className="w-full h-72 object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* CONTENT CARD */}
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold mb-2">Service Title {i}</h3>
                <p className="text-gray-600">
                  Sample description about the agricultural service and its benefits.
                </p>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-green-600 mt-4"
                >
                  Explore More →
                </a>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}
