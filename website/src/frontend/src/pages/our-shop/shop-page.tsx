"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { products } from "./data/products"
import type { Category, Product } from "./types/shop"
import { SearchInput } from "./shop-components/search-input"
import { CategoryFilter } from "./shop-components/category-filter"
import { ProductCard } from "./shop-components/product-card"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export default function ShopPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<Category>("All")

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <motion.div 
      className="container mx-auto px-4 py-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div 
        className="max-w-[1200px] mx-auto"
        variants={itemVariants}
      >
        <motion.h1 
          className="text-4xl sm:text-4xl text-center lg:text-5xl font-bold mb-6 sm:mb-7 tracking-[-0.08em]"
          style={{
            background: 'linear-gradient(90deg, #192F70 0%, #C53AA2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            color: 'transparent',
          }}
          variants={itemVariants}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          ICP Shop
        </motion.h1>

        <motion.div 
          className="max-w-2xl mx-auto mb-8"
          variants={itemVariants}
        >
          <SearchInput value={searchQuery} onChange={setSearchQuery} />
        </motion.div>

        <motion.div 
          className="mb-8"
          variants={itemVariants}
        >
          <CategoryFilter selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
        >
          {filteredProducts.map((product: Product, index: number) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              custom={index}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}