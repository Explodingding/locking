import { useState } from 'react';
import { motion } from 'framer-motion';

const galleryItems = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1536684922504-91d18320f0d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Dancer performing locking moves',
    width: 'col-span-1'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Dance performance on stage',
    width: 'col-span-2'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Urban dance session',
    width: 'col-span-1'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1519925610903-381054cc2a1c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Dance group practicing',
    width: 'col-span-1'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Dancer in motion',
    width: 'col-span-2'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1530021232320-687d8e3dba54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Dance battle',
    width: 'col-span-1'
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  const openLightbox = (id: number) => {
    setSelectedImage(id);
    document.body.style.overflow = 'hidden';
  };
  
  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };
  
  const selectedItem = galleryItems.find(item => item.id === selectedImage);
  
  return (
    <section id="gallery" className="section bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary">Gallery</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-text-light max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Check out these amazing locking performances and dancers showcasing their style and energy.
          </motion.p>
        </div>
        
        {/* Masonry Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              className={`overflow-hidden rounded-lg cursor-pointer ${item.width}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              whileHover={{ scale: 1.02 }}
              onClick={() => openLightbox(item.id)}
            >
              <img 
                src={item.src} 
                alt={item.alt} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Lightbox */}
      {selectedImage && selectedItem && (
        <motion.div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button 
            className="absolute top-8 right-8 text-white text-4xl"
            onClick={closeLightbox}
          >
            &times;
          </button>
          <motion.img 
            src={selectedItem.src} 
            alt={selectedItem.alt}
            className="max-w-full max-h-[90vh] object-contain"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      )}
    </section>
  );
};

export default Gallery; 