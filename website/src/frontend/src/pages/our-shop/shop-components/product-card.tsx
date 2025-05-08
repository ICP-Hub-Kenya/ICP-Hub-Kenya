import type { Product } from "../types/shop"
import { CardContent, Card } from "./ui/card"
import { motion } from "framer-motion"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <motion.div 
          className="aspect-square relative rounded-lg bg-muted group cursor-pointer"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <motion.img 
            src={product.imageUrl || "/placeholder.svg"} 
            alt={product.title} 
            className="object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.div 
            className="absolute inset-0 bg-black/50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <motion.button 
              className="px-6 py-2 rounded-md bg-magenta text-black font-medium transform hover:bg-[#e47be6] transition-transform"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const message = encodeURIComponent(
                  `Hello, I would like to purchase this ${product.title} from ICP Hub Kenya Shop\n \nProduct Details:\n${product.title}\n ${window.location.origin}/${product.imageUrl}`
                );
                window.open(`https://wa.me/254793763043?text=${message}`, '_blank');
              }}              
            >
              Checkout
            </motion.button>
          </motion.div>
        </motion.div>
        <motion.div 
          className="p-4 bg-rose-50 align-middle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.h3 
            className="font-medium text-black"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {product.title}
          </motion.h3>
          <motion.p 
            className="text-sm text-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {product.price} KES
          </motion.p>
        </motion.div>
      </CardContent>
    </Card>
  )
}