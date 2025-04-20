import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const TimelineItem = ({ year, title, description, isLeft }: { 
  year: string, 
  title: string, 
  description: string, 
  isLeft: boolean 
}) => {
  return (
    <motion.div 
      className={`flex items-start gap-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <div className={`w-full md:w-1/2 ${isLeft ? 'md:text-right' : 'md:text-left'} text-left`}>
        <span className="text-primary font-bold text-xl">{year}</span>
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-text-light">{description}</p>
      </div>
      
      {/* Timeline Connector */}
      <div className="hidden md:flex flex-col items-center">
        <div className="w-4 h-4 rounded-full bg-primary"></div>
        <div className="w-1 h-24 bg-primary/30"></div>
      </div>
      
      {/* Empty space for alignment */}
      <div className="w-full md:w-1/2"></div>
    </motion.div>
  );
};

const HistoryTimeline = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [50, 0, 0, 50]);
  
  return (
    <section id="history" className="section bg-background relative overflow-hidden" ref={ref}>
      {/* Background parallax effect */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-10"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          y: useTransform(scrollYProgress, [0, 1], [0, 100])
        }}
      />
      
      <div className="container relative z-10">
        <motion.div 
          className="text-center mb-16"
          style={{ opacity, y }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The <span className="text-primary">History</span> of Locking
          </h2>
          <p className="text-lg text-text-light max-w-3xl mx-auto">
            Follow the timeline to discover how locking dance evolved from its beginnings to the present day.
          </p>
        </motion.div>
        
        <div className="space-y-8">
          <TimelineItem 
            year="1970" 
            title="The Birth of Locking"
            description="Don Campbell accidentally created locking when he couldn't do the 'robot' smoothly. His jerky 'locking' movements became popular at LA clubs."
            isLeft={true}
          />
          
          <TimelineItem 
            year="1973" 
            title="The Lockers Form"
            description="Campbell formed 'The Lockers' with dancers including Toni Basil, Fred Berry, and Adolfo 'Shabba-Doo' Quiñones."
            isLeft={false}
          />
          
          <TimelineItem 
            year="1973-1975" 
            title="Soul Train Era"
            description="Locking gained national exposure on Soul Train, influencing dancers across America and developing new moves."
            isLeft={true}
          />
          
          <TimelineItem 
            year="1980s" 
            title="Global Expansion"
            description="The style spread internationally, influencing street dance scenes worldwide and evolving with new techniques."
            isLeft={false}
          />
          
          <TimelineItem 
            year="2000s-Present" 
            title="Contemporary Locking"
            description="Locking continues to evolve through competitions, workshops, and social media, with a revival of interest in its original forms."
            isLeft={true}
          />
        </div>
      </div>
    </section>
  );
};

export default HistoryTimeline; 