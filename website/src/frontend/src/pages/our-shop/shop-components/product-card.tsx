import type { Product } from "../types/shop"
import { CardContent, Card } from "./ui/card"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="aspect-square relative rounded-lg bg-muted group cursor-pointer">
          <img src={product.imageUrl || "/placeholder.svg"} alt={product.title} className="object-cover" />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <button 
              className="px-6 py-2 rounded-md bg-pinkBadge text-black font-medium transform hover:scale-105 hover:bg-[#e47be6] transition-transform"
              onClick={() => {
                const message = encodeURIComponent(
                  `Hello, I would like to purchase this ${product.title} from ICP Hub Kenya Shop\n \nProduct Details:\n${product.title}\n ${window.location.origin}/${product.imageUrl}`
                );
                window.open(`https://wa.me/254793763043?text=${message}`, '_blank');
              }}              
            >
              Checkout
            </button>
          </div>
        </div>
        <div className="p-4 bg-rose-50 align-middle">
          <h3 className="font-medium text-black">{product.title}</h3>
          <p className="text-sm text-black">{product.price} KES</p>
        </div>
      </CardContent>
    </Card>
  )
}