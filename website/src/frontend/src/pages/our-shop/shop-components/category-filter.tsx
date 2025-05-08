import { Category } from "../types/shop"

interface CategoryFilterProps {
  selectedCategory: Category
  onCategoryChange: (category: Category) => void
}

export function CategoryFilter({ selectedCategory, onCategoryChange }: CategoryFilterProps) {
  const categories: Category[] = ["Cups", "Tshirts", "Water bottles", "Hoodies", "All"]

  return (
    <div className="flex gap-2 flex-wrap justify-center w-full">
      {categories.map((category) => {
        const isSelected = selectedCategory === category;
        return (
          <button
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
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}