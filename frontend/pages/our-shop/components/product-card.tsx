import type { Product } from "../types/shop.tsx"
import Image from "next/image"
import { CardContent, Card } from "./ui/card"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-4">
        <div className="aspect-square relative rounded-lg bg-muted">
          <Image src={product.imageUrl || "/placeholder.svg"} alt={product.title} fill className="object-cover" />
        </div>
        <div className="p-4 bg-rose-50">
          <h3 className="font-medium">{product.title}</h3>
          <p className="text-sm text-muted-foreground">{product.type}</p>
        </div>
      </CardContent>
    </Card>
  )
}