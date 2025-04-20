import { motion } from 'framer-motion';

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="section bg-background-dark">
      <div className="container">
        <motion.div
          className="max-w-4xl mx-auto text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-text"
            variants={itemVariants}
          >
            About <span className="text-primary">Locking</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-text-light"
            variants={itemVariants}
          >
            Locking is a style of funk dance, which is today also associated with hip hop. The name is based on the concept of locking movements, which basically means freezing from a fast movement and "locking" in a certain position, holding that position for a short period of time and then continuing at the same speed as before.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Feature 1 */}
          <motion.div 
            className="bg-background/50 p-8 rounded-xl backdrop-blur-sm"
            variants={itemVariants}
          >
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-center">Expression</h3>
            <p className="text-text-light">Locking is characterized by distinctive, rhythmic and theatrical movements combined with freezes in certain positions.</p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div 
            className="bg-background/50 p-8 rounded-xl backdrop-blur-sm"
            variants={itemVariants}
          >
            <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-center">Energy</h3>
            <p className="text-text-light">High energy, exaggerated movements, and strong character are essential to the locking style and performance.</p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div 
            className="bg-background/50 p-8 rounded-xl backdrop-blur-sm"
            variants={itemVariants}
          >
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-center">Community</h3>
            <p className="text-text-light">Locking developed in the 1970s club scene, creating a vibrant community of dancers who continue to evolve the style today.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection; 