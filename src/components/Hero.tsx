import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    // Opóźnij rozpoczęcie animacji, aby poczekać na załadowanie strony
    const timer = setTimeout(() => {
      setAnimationStarted(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  // Animacja liter w tytule
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1, 
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.6,
        type: "spring",
        stiffness: 100
      }
    })
  };

  const title = "Locking Dance";
  const titleArray = title.split("");

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {/* Kolorowy overlay ze zmieszanymi kolorami */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-background/70 to-secondary/40 z-10"></div>
        
        {/* Animowane geometryczne elementy tła */}
        <div className="absolute inset-0 z-5">
          <motion.div 
            className="absolute top-[20%] left-[10%] w-24 h-24 rounded-full bg-primary/30 blur-xl"
            animate={{ 
              scale: [1, 1.2, 1],
              x: [0, 30, 0],
              y: [0, -30, 0],
            }} 
            transition={{ 
              repeat: Infinity,
              duration: 8,
              ease: "easeInOut" 
            }}
          />
          <motion.div 
            className="absolute bottom-[30%] right-[15%] w-32 h-32 rounded-full bg-accent/20 blur-xl"
            animate={{ 
              scale: [1, 1.5, 1],
              x: [0, -40, 0],
              y: [0, 40, 0],
            }} 
            transition={{ 
              repeat: Infinity,
              duration: 10,
              ease: "easeInOut" 
            }}
          />
          <motion.div 
            className="absolute top-[60%] left-[30%] w-40 h-40 rounded-full bg-secondary/20 blur-xl"
            animate={{ 
              scale: [1, 1.3, 1],
              x: [0, 50, 0],
              y: [0, 20, 0],
            }} 
            transition={{ 
              repeat: Infinity,
              duration: 12,
              ease: "easeInOut" 
            }}
          />
        </div>
        
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-people-dancing-at-a-night-club-4344-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <div className="container relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Animowany tytuł litera po literze */}
          <div className="flex justify-center mb-6 overflow-hidden">
            {titleArray.map((letter, index) => (
              <motion.span
                key={index}
                custom={index}
                variants={titleVariants}
                initial="hidden"
                animate={animationStarted ? "visible" : "hidden"}
                className={`
                  text-6xl md:text-8xl font-bold inline-block
                  ${letter === " " ? "mx-4" : "mx-1"}
                  ${index % 3 === 0 ? "text-primary" : index % 3 === 1 ? "text-accent" : "text-secondary"}
                `}
                style={{
                  textShadow: "0 0 8px rgba(0,0,0,0.5)"
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>

          <motion.p
            className="text-xl md:text-2xl text-white mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            style={{ textShadow: "0 0 8px rgba(0,0,0,0.7)" }}
          >
            Experience the energetic, funky, and expressive dance style that originated in the 1970s.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            <motion.button
              className="btn bg-primary text-white hover:bg-primary/90 shadow-lg mx-2 relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span 
                className="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                animate={{ 
                  x: ['100%', '-100%'] 
                }} 
                transition={{ 
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "linear"
                }}
              />
              Learn More
            </motion.button>
            
            <motion.button
              className="btn bg-secondary text-white hover:bg-secondary/90 shadow-lg mx-2 relative overflow-hidden group mt-4 md:mt-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span 
                className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                animate={{ 
                  x: ['100%', '-100%'] 
                }} 
                transition={{ 
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "linear"
                }}
              />
              Join Classes
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Dekoracyjne elementy po bokach */}
      <motion.div 
        className="absolute left-6 inset-y-0 w-2 flex flex-col justify-center items-center z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.8 }}
      >
        <motion.div 
          className="w-2 h-2 rounded-full bg-primary mb-3"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
        <motion.div 
          className="w-2 h-16 bg-primary-300 rounded-full"
        />
        <motion.div 
          className="w-2 h-2 rounded-full bg-primary mt-3"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ repeat: Infinity, duration: 2, delay: 0.6 }}
        />
      </motion.div>
      
      <motion.div 
        className="absolute right-6 inset-y-0 w-2 flex flex-col justify-center items-center z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2 }}
      >
        <motion.div 
          className="w-2 h-2 rounded-full bg-secondary mb-3"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ repeat: Infinity, duration: 2, delay: 0.3 }}
        />
        <motion.div 
          className="w-2 h-16 bg-secondary-300 rounded-full"
        />
        <motion.div 
          className="w-2 h-2 rounded-full bg-secondary mt-3"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ repeat: Infinity, duration: 2, delay: 0.9 }}
        />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          y: [0, 8, 0]
        }}
        transition={{ 
          opacity: { delay: 2.2, duration: 0.5 },
          y: { repeat: Infinity, duration: 1.5 }
        }}
      >
        <div className="flex flex-col items-center">
          <p className="text-white text-sm mb-2">Scroll Down</p>
          <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero; 