import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading Animation */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">AgriFort Journey</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto"></div>
        </motion.div>

        {/* Paragraph Animation */}
        <motion.div
          className="prose prose-lg max-w-4xl mx-auto text-gray-600"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-center text-xl leading-relaxed">
            From humble beginnings to agricultural innovation leaders, AgriFort has been at the
            forefront of transforming farming practices through technology and dedication.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
