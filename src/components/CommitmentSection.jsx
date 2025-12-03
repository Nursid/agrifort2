import { motion } from "framer-motion";

export default function CommitmentSection() {
  return (
    <section className="py-20 text-white" style={{ backgroundColor: "#062f15" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Company Commitment</h2>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

          {/* ---- CARD 1 ---- */}
          <motion.div
            className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Mission</h3>
            <p className="text-green-50">
              To revolutionize agriculture through sustainable innovation and empower farmers
              with technology-driven solutions.
            </p>
          </motion.div>

          {/* ---- CARD 2 ---- */}
          <motion.div
            className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Vision</h3>
            <p className="text-green-50">
              Creating a future where every farmer has access to sustainable, cutting-edge
              agricultural technology.
            </p>
          </motion.div>

          {/* ---- CARD 3 ---- */}
          <motion.div
            className="md:col-span-2 bg-white/10 backdrop-blur-lg p-8 rounded-2xl"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Environmental Policy</h3>
            <p className="text-green-50">
              Committed to protecting our planet through sustainable agricultural practices
              for future generations.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
