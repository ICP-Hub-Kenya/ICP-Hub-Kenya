import { Button } from "./ui/button"
import { Category } from "../types/shop"

interface CategoryFilterProps {
  selectedCategory: Category
  onCategoryChange: (category: Category) => void
}

export function CategoryFilter({ selectedCategory, onCategoryChange }: CategoryFilterProps) {
  const categories: Category[] = ["Cups", "Tshirts", "Water bottles", "Hoodies", "All"]

  return (
    <div className="flex gap-2 flex-wrap justify-center w-full">
      {categories.map((category) => (
        <Button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={selectedCategory === category ? "bg-amber-400 hover:bg-amber-500" : ""}
        >
          {category}
        </Button>
      ))}
    </div>
  )
}