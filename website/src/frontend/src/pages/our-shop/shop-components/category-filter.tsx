import { Category } from "../types/shop"
import { motion } from "framer-motion"

interface CategoryFilterProps {
  selectedCategory: Category
  onCategoryChange: (category: Category) => void
}

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

const buttonVariants = {
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

export function CategoryFilter({ selectedCategory, onCategoryChange }: CategoryFilterProps) {
  const categories: Category[] = ["Cups", "Tshirts", "Water bottles", "Hoodies", "All"]

  return (
    <motion.div 
      className="flex gap-2 flex-wrap justify-center w-full"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {categories.map((category) => {
        const isSelected = selectedCategory === category;
        return (
          <motion.button
            key={category}
            type="button"
            onClick={() => onCategoryChange(category)}
            className={
              `px-6 py-2 rounded-md border border-black font-medium transition-colors duration-150
              ${isSelected
                ? 'bg-magenta text-white'
                : 'bg-white text-black hover:bg-magenta hover:text-white'}
              `
            }
            variants={buttonVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={isSelected ? { 
              scale: [1, 1.1, 1],
              transition: { duration: 0.3 }
            } : {}}
          >
            {category}
          </motion.button>
        )
      })}
    </motion.div>
  )
}