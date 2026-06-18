import React from 'react';
import { motion } from 'framer-motion';
import './Products.css';

const products = [
  { name: 'Fresh Fruits', img: '/media/img_fruits.png' },
  { name: 'Vegetables', img: '/media/img_vegetables.png' },
  { name: 'Grocery', img: '/media/img_oil.png' },
  { name: 'Household Items', img: '/media/img_dairy.png' },
  { name: 'Dairy Products', img: '/media/img_dairy.png' },
  { name: 'Bread', img: '/media/img_bread.png' },
  { name: 'Bakery', img: '/media/img_bread.png' },
  { name: 'Snacks', img: '/media/img_snacks.png' },
  { name: 'Chocolates', img: '/media/img_snacks.png' },
  { name: 'Soft Drinks', img: '/media/img_drinks.png' },
  { name: 'Juices', img: '/media/img_drinks.png' },
  { name: 'Frozen Foods', img: '/media/img_vegetables.png' },
  { name: 'Tea', img: '/media/img_drinks.png' },
  { name: 'Coffee', img: '/media/img_drinks.png' },
  { name: 'Rice', img: '/media/img_rice.png' },
  { name: 'Flour', img: '/media/img_rice.png' },
  { name: 'Cooking Essentials', img: '/media/img_oil.png' }
];

const Products = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="products-section">
      <div className="products-container">
        
        <motion.div 
          className="products-header-new"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.span variants={itemVariants} className="products-tag">Products</motion.span>
          <motion.h2 variants={itemVariants} className="products-main-title">Everything You Need Under One Roof</motion.h2>
          <motion.p variants={itemVariants} className="products-description">We offer a wide range of products including:</motion.p>
        </motion.div>

        <motion.div 
          className="products-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {products.map((product, index) => (
            <motion.div variants={itemVariants} className="product-card" key={index}>
              <div className="product-image-container">
                <img src={product.img} alt={product.name} className="product-image" />
              </div>
              <div className="product-info">
                <h3 className="product-name" style={{ marginBottom: 0 }}>{product.name}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
