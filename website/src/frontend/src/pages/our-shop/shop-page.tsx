"use client"

import { useState } from "react"
import { products } from "./data/products"
import type { Category, Product } from "./types/shop"
import { SearchInput } from "./shop-components/search-input"
import { CategoryFilter } from "./shop-components/category-filter"
import { ProductCard } from "./shop-components/product-card"

export default function ShopPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<Category>("All")

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-[1200px] mx-auto">
        <h1 className="text-4xl sm:text-4xl text-center lg:text-5xl font-bold mb-6 sm:mb-7 tracking-[-0.08em]">
            ICP Shop
        </h1>

        <div className="max-w-2xl mx-auto mb-8">
          <SearchInput value={searchQuery} onChange={setSearchQuery} />
        </div>

        <div className="mb-8">
          <CategoryFilter selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}