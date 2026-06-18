import React from 'react';
import { motion } from 'framer-motion';
import './AboutUs.css';

const AboutUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut" } }
  };

  return (
    <section className="about-showcase-section">
      <div className="about-showcase-container">
        
        {/* Left Column: Image */}
        <motion.div 
          className="about-image-column"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={imageVariants}
        >
          <img src="/media/floating_veggies.png" alt="Fresh Floating Vegetables" className="floating-veggies-img" />
        </motion.div>

        {/* Right Column: Text Content */}
        <motion.div 
          className="about-text-column"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.span variants={itemVariants} className="showcase-tag">About Us</motion.span>
          <motion.h2 variants={itemVariants} className="showcase-title">
            About Tasali Supermarket
          </motion.h2>
          <motion.p variants={itemVariants} className="showcase-description">
            Tasali Supermarket is a neighborhood shopping destination located in Al Jurf, Ajman.
          </motion.p>
          <motion.p variants={itemVariants} className="showcase-description" style={{ marginTop: '-15px' }}>
            Formerly known as Abadi Al Madeena, we have transformed into Tasali with a renewed vision to provide better service, quality products, and affordable prices to our customers.
          </motion.p>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutUs;
