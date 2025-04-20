import { useState } from 'react';
import { motion } from 'framer-motion';

// Sample events
const events = [
  {
    id: 1,
    title: 'Locking Dance Workshop',
    date: 'June 15, 2025',
    location: 'Urban Dance Studio, New York',
    description: 'Learn the fundamentals of locking with professional dancers. All levels welcome.'
  },
  {
    id: 2,
    title: 'Funk Styles Battle',
    date: 'July 22, 2025',
    location: 'Street Dance Arena, Los Angeles',
    description: 'Competitive battle featuring locking, popping, and other funk styles with cash prizes.'
  },
  {
    id: 3,
    title: 'History of Locking Seminar',
    date: 'August 5, 2025',
    location: 'Dance Academy, Chicago',
    description: 'Educational seminar covering the origins and evolution of locking dance with special guest instructors.'
  },
  {
    id: 4,
    title: 'International Locking Festival',
    date: 'September 18-20, 2025',
    location: 'Global Dance Center, Paris',
    description: 'Three-day festival with workshops, battles, performances, and networking opportunities.'
  }
];

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);
  
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
      transition: { duration: 0.5 }
    }
  };
  
  return (
    <section id="events" className="section bg-background-dark">
      <div className="container">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Upcoming <span className="text-primary">Events</span>
          </h2>
          <p className="text-lg text-text-light max-w-3xl mx-auto">
            Don't miss these exciting opportunities to learn, perform, and connect with the locking dance community.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {events.map((event) => (
            <motion.div 
              key={event.id}
              className={`bg-background/50 p-6 rounded-xl backdrop-blur-sm border-l-4 ${
                selectedEvent === event.id 
                  ? 'border-secondary scale-105' 
                  : 'border-primary'
              } transition-all duration-300`}
              variants={itemVariants}
              onClick={() => setSelectedEvent(event.id === selectedEvent ? null : event.id)}
            >
              <div className="flex flex-col md:flex-row gap-4 items-start">
                <div className="bg-primary/10 rounded-lg p-3 text-center min-w-[100px]">
                  <span className="text-primary block font-bold">
                    {event.date.split(',')[0]}
                  </span>
                  <span className="text-sm">
                    {event.date.split(',')[1]}
                  </span>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-text-light mb-2 text-sm flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {event.location}
                  </p>
                  
                  {selectedEvent === event.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-text-light mt-4">{event.description}</p>
                      <button className="btn btn-primary mt-4 text-sm py-2 px-4">
                        Register Now
                      </button>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <button className="btn bg-secondary text-white hover:bg-opacity-90">
            View Full Calendar
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Events; 