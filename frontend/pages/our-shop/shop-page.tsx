"use client"

import { useState } from "react"
import { products } from "./data/products"
import type { Category } from "./types/shop"
import { SearchInput } from "./components/search-input"
import { CategoryFilter } from "./components/category-filter"
import { ProductCard } from "./components/product-card"

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
      <h1 className="text-3xl font-bold text-center mb-8">ICP Shop</h1>

      <div className="max-w-xl mx-auto mb-8">
        <SearchInput value={searchQuery} onChange={setSearchQuery} />
      </div>

      <div className="mb-8">
        <CategoryFilter selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}