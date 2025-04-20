import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
// Import lokalnego zdjęcia tancerki
import dancerImage from '../assets/images/dancer-colorful-pants.png';

const Hero = () => {
  const [animationStarted, setAnimationStarted] = useState(false);
  // Referencja do sekcji Hero, aby dostosować styl w zależności od szerokości ekranu
  const heroRef = useRef<HTMLElement>(null);
  // Stan przechowujący optymalną pozycję tła
  const [bgPosition, setBgPosition] = useState('center 20%');
  
  // Używam lokalnego obrazu zamiast zewnętrznego URL
  const lockingDancerImage = dancerImage;

  useEffect(() => {
    // Funkcja dostosowująca pozycję tła na podstawie szerokości ekranu
    const adjustBackgroundPosition = () => {
      if (window.innerWidth >= 1440) {
        // Dla dużych ekranów - więcej góry obrazu, aby lepiej widać było twarz
        setBgPosition('center 20%');
      } else if (window.innerWidth >= 1024) {
        // Dla średnich ekranów
        setBgPosition('center 25%');
      } else if (window.innerWidth >= 768) {
        // Dla tabletów
        setBgPosition('center 30%');
      } else {
        // Dla telefonów
        setBgPosition('center 35%');
      }
    };

    // Początkowe dostosowanie
    adjustBackgroundPosition();
    
    // Nasłuchiwanie zmian rozmiaru okna
    window.addEventListener('resize', adjustBackgroundPosition);
    
    // Opóźnij rozpoczęcie animacji, aby poczekać na załadowanie strony
    const timer = setTimeout(() => {
      setAnimationStarted(true);
    }, 500);
    
    return () => {
      window.removeEventListener('resize', adjustBackgroundPosition);
      clearTimeout(timer);
    };
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
    <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {/* Tło ze zdjęciem */}
        <div className="w-full h-full relative">
          {/* Główne zdjęcie tancerki - bardziej rozjaśnione i wyraziste, z lepszym kadrowaniem */}
          <div 
            className="absolute inset-0 bg-cover"
            style={{ 
              backgroundImage: `url('${lockingDancerImage}')`,
              backgroundPosition: bgPosition, 
              backgroundSize: 'cover',
              filter: 'brightness(1.4) contrast(1.1) saturate(1.2)'
            }}
          />
          
          {/* Efekt paralaksy dla zdjęcia - jeszcze jaśniejszy */}
          <motion.div 
            className="absolute inset-0 bg-cover"
            style={{ 
              backgroundImage: `url('${lockingDancerImage}')`,
              backgroundPosition: bgPosition, 
              backgroundSize: 'cover',
              filter: 'blur(8px) brightness(0.9) saturate(1.4)'
            }}
            animate={{ 
              scale: [1, 1.05, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 15,
              ease: "easeInOut"
            }}
          />
          
          {/* Delikatniejsze gradienty dla lepszej widoczności zdjęcia */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-background/20 z-5"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-background/20 via-transparent to-background/20 z-5"></div>
        </div>
      </div>
      
      {/* Animowane kolorowe elementy tła - bardziej intensywne kolory, ale mniejsza nieprzezroczystość */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <motion.div 
          className="absolute top-[20%] left-[10%] w-40 h-40 rounded-full bg-primary opacity-15 blur-xl"
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, -50, 0],
          }} 
          transition={{ 
            repeat: Infinity,
            duration: 7,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute top-[60%] right-[15%] w-52 h-52 rounded-full bg-accent opacity-15 blur-xl"
          animate={{ 
            scale: [1, 1.6, 1],
            x: [0, -60, 0],
            y: [0, 60, 0],
          }} 
          transition={{ 
            repeat: Infinity,
            duration: 9,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-[30%] left-[30%] w-72 h-72 rounded-full bg-secondary opacity-15 blur-xl"
          animate={{ 
            scale: [1, 1.4, 1],
            x: [0, 70, 0],
            y: [0, 40, 0],
          }} 
          transition={{ 
            repeat: Infinity,
            duration: 11,
            ease: "easeInOut" 
          }}
        />
        
        {/* Dodatkowe eksplozywne elementy */}
        <motion.div 
          className="absolute top-[40%] right-[35%] w-32 h-32 rounded-full bg-primary/30 blur-lg"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [0, 1.5, 0],
            opacity: [0, 0.4, 0]
          }} 
          transition={{ 
            repeat: Infinity,
            duration: 5,
            ease: "easeOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-[40%] right-[25%] w-24 h-24 rounded-full bg-secondary/30 blur-lg"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [0, 1.3, 0],
            opacity: [0, 0.5, 0]
          }} 
          transition={{ 
            repeat: Infinity,
            duration: 4,
            delay: 2,
            ease: "easeOut" 
          }}
        />
      </div>

      {/* Bardzo lekki panel za tekstem */}
      <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 h-auto z-15 bg-background/10 backdrop-blur-[1px] py-10"></div>

      {/* Content */}
      <div className="container relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Animowany tytuł litera po literze - dodane jaśniejsze cieniowanie */}
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
                  textShadow: "0 0 20px rgba(255,255,255,0.3), 0 0 15px rgba(0,0,0,0.4)"
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
            style={{ textShadow: "0 0 10px rgba(0,0,0,0.6), 0 0 15px rgba(255,255,255,0.1)" }}
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
                className="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                animate={{ 
                  x: ['100%', '-100%'] 
                }} 
                transition={{ 
                  repeat: Infinity,
                  duration: 1.2,
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
                className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                animate={{ 
                  x: ['100%', '-100%'] 
                }} 
                transition={{ 
                  repeat: Infinity,
                  duration: 1.2,
                  ease: "linear"
                }}
              />
              Join Classes
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Dekoracyjne elementy po bokach - bardziej energiczne */}
      <motion.div 
        className="absolute left-6 inset-y-0 w-2 flex flex-col justify-center items-center z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.8 }}
      >
        <motion.div 
          className="w-2 h-2 rounded-full bg-primary mb-3"
          animate={{ scale: [1, 1.8, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        />
        <motion.div 
          className="w-2 h-20 bg-primary rounded-full"
        />
        <motion.div 
          className="w-2 h-2 rounded-full bg-primary mt-3"
          animate={{ scale: [1, 1.8, 1] }}
          transition={{ repeat: Infinity, duration: 1.5, delay: 0.6 }}
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
          animate={{ scale: [1, 1.8, 1] }}
          transition={{ repeat: Infinity, duration: 1.5, delay: 0.3 }}
        />
        <motion.div 
          className="w-2 h-20 bg-secondary rounded-full"
        />
        <motion.div 
          className="w-2 h-2 rounded-full bg-secondary mt-3"
          animate={{ scale: [1, 1.8, 1] }}
          transition={{ repeat: Infinity, duration: 1.5, delay: 0.9 }}
        />
      </motion.div>

      {/* Scroll indicator - bardziej dynamiczny */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          y: [0, 10, 0]
        }}
        transition={{ 
          opacity: { delay: 2.2, duration: 0.5 },
          y: { repeat: Infinity, duration: 1.2 }
        }}
      >
        <div className="flex flex-col items-center">
          <p className="text-white text-sm mb-2 font-bold">Scroll Down</p>
          <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero; 