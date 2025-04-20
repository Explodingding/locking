import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

// Zdjęcia specjalnie dobrane do stylu locking dance lub zbliżonego
const galleryItems = [
  {
    id: 1,
    src: 'https://raw.githubusercontent.com/Explodingding/locking/main/locking-dancer.jpg',
    alt: 'Energetic dancer in colorful pants showing locking dance moves',
    caption: 'Vibrant Locking Style',
    width: 'col-span-2 md:row-span-2'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    alt: 'Dancer with expressive moves in urban setting',
    caption: 'Urban Locking Moves',
    width: 'col-span-1'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    alt: 'Street dancer with dynamic locking pose',
    caption: 'Street Performance',
    width: 'col-span-1'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1535525153412-5a42439a210d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    alt: 'Dancer showcasing freeze position similar to locking style',
    caption: 'Freeze Position',
    width: 'col-span-1'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1547153760-18fc86324498?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    alt: 'Dancers in vibrant costumes that match locking aesthetic',
    caption: 'Vibrant Locking Aesthetic',
    width: 'col-span-1'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1502519144081-acca18599776?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    alt: 'Dance crew in formation - typical of locking performances',
    caption: 'Crew Formation',
    width: 'col-span-1'
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1562592305-4d79686bdd5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    alt: 'Old school dancer demonstrating classic moves',
    caption: 'Old School Technique',
    width: 'col-span-1'
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1516417156595-3ca5df62a3a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    alt: 'Energetic dancer with explosive movement',
    caption: 'Explosive Energy',
    width: 'col-span-1'
  }
];

// Komponent dla pojedynczego elementu galerii
const GalleryItem = ({ item, index, openLightbox }: {
  item: typeof galleryItems[0],
  index: number,
  openLightbox: (id: number) => void
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  return (
    <motion.div
      ref={ref}
      className={`group overflow-hidden rounded-lg cursor-pointer ${item.width} h-80 relative`}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.05 * index }}
      whileHover={{ scale: 1.02 }}
      onClick={() => openLightbox(item.id)}
    >
      {/* Kolorowa ramka */}
      <motion.div 
        className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ 
          background: `linear-gradient(45deg, 
            #FF4D00 0%, 
            rgba(255, 77, 0, 0) 30%, 
            rgba(0, 194, 255, 0) 70%, 
            #00C2FF 100%
          )`,
          padding: '3px'
        }}
      />
      
      {/* Obrazek */}
      <div className="absolute inset-0 z-0 overflow-hidden rounded-lg">
        <img 
          src={item.src} 
          alt={item.alt} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay przy hover */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4"
        >
          <motion.h3 
            className="text-white text-lg font-bold"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {item.caption}
          </motion.h3>
          <motion.div 
            className="w-12 h-1 bg-primary mt-2 mb-2"
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          />
          <motion.p 
            className="text-text-light text-sm"
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            Click to view larger
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const openLightbox = (id: number) => {
    setSelectedImage(id);
    setCurrentIndex(galleryItems.findIndex(item => item.id === id));
    document.body.style.overflow = 'hidden';
  };
  
  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction: 'next' | 'prev') => {
    let newIndex = direction === 'next' 
      ? (currentIndex + 1) % galleryItems.length
      : (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    
    setCurrentIndex(newIndex);
    setSelectedImage(galleryItems[newIndex].id);
  };
  
  const selectedItem = galleryItems.find(item => item.id === selectedImage);
  
  return (
    <section id="gallery" className="section bg-background py-20">
      <div className="container">
        <div className="text-center mb-16">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-1 bg-primary mx-auto mb-8"
          />
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 relative inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Locking Gallery
            </span>
          </motion.h2>
          <motion.p 
            className="text-lg text-text-light max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Check out these amazing locking performances showcasing the unique style, energy and attitude that defines this dance form.
          </motion.p>
        </div>
        
        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {galleryItems.map((item, index) => (
            <GalleryItem 
              key={item.id} 
              item={item} 
              index={index} 
              openLightbox={openLightbox} 
            />
          ))}
        </div>
        
        {/* "View All" Button */}
        <div className="text-center mt-12">
          <motion.button
            className="btn bg-gradient-to-r from-primary to-secondary text-white hover:from-primary/90 hover:to-secondary/90 shadow-lg"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
            whileTap={{ scale: 0.95 }}
          >
            View Full Collection
          </motion.button>
        </div>
      </div>
      
      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && selectedItem && (
          <motion.div 
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.button 
              className="absolute top-8 right-8 text-white text-4xl hover:text-primary transition-colors z-20"
              onClick={closeLightbox}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              &times;
            </motion.button>
            
            {/* Navigation Buttons */}
            <motion.button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-primary text-5xl z-20"
              onClick={() => navigateImage('prev')}
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              &#8249;
            </motion.button>
            
            <motion.button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-primary text-5xl z-20"
              onClick={() => navigateImage('next')}
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              &#8250;
            </motion.button>
            
            {/* Image Container */}
            <motion.div
              className="relative max-w-5xl w-full mx-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src={selectedItem.src} 
                alt={selectedItem.alt}
                className="max-w-full max-h-[80vh] object-contain mx-auto"
              />
              
              {/* Caption */}
              <motion.div
                className="text-center mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-white text-xl font-bold">{selectedItem.caption}</h3>
                <p className="text-gray-300 mt-1">{selectedItem.alt}</p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery; 