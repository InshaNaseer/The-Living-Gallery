"use client"

import { useState } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, Eye, Edit, Trash2, Plus, Download, Upload, Star, Package } from "lucide-react"

export default function ProductsManagement() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")

  const products = [
    {
      id: 1,
      title: "Ayat al-Kursi",
      category: "Quranic Verses",
      type: "Calligraphy",
      price: 250,
      stock: 12,
      status: "active",
      featured: true,
      sales: 45,
      rating: 4.9,
      image: "/placeholder.svg?height=100&width=100",
      description: "The Throne Verse in magnificent Thuluth script",
    },
    {
      id: 2,
      title: "99 Names of Allah",
      category: "Asma ul-Husna",
      type: "Painting",
      price: 380,
      stock: 8,
      status: "active",
      featured: true,
      sales: 32,
      rating: 4.8,
      image: "/placeholder.svg?height=100&width=100",
      description: "Beautiful arrangement of Allah's names",
    },
    {
      id: 3,
      title: "Surah Al-Fatiha",
      category: "Quranic Verses",
      type: "Calligraphy",
      price: 320,
      stock: 5,
      status: "active",
      featured: false,
      sales: 28,
      rating: 4.7,
      image: "/placeholder.svg?height=100&width=100",
      description: "The Opening chapter in elegant script",
    },
    {
      id: 4,
      title: "Bismillah Calligraphy",
      category: "Bismillah",
      type: "Calligraphy",
      price: 180,
      stock: 0,
      status: "out_of_stock",
      featured: false,
      sales: 22,
      rating: 4.6,
      image: "/placeholder.svg?height=100&width=100",
      description: "In the name of Allah, beautifully written",
    },
    {
      id: 5,
      title: "Masjid al-Haram Painting",
      category: "Sacred Places",
      type: "Painting",
      price: 280,
      stock: 15,
      status: "active",
      featured: true,
      sales: 18,
      rating: 4.9,
      image: "/placeholder.svg?height=100&width=100",
      description: "The sacred Kaaba at sunset",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800"
      case "draft":
        return "bg-yellow-100 text-yellow-800"
      case "out_of_stock":
        return "bg-red-100 text-red-800"
      case "archived":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStockStatus = (stock: number) => {
    if (stock === 0) return { color: "text-red-600", text: "Out of Stock" }
    if (stock <= 5) return { color: "text-yellow-600", text: "Low Stock" }
    return { color: "text-green-600", text: "In Stock" }
  }

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.type.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory =
      categoryFilter === "all" || product.category.toLowerCase().includes(categoryFilter.toLowerCase())
    const matchesStatus = statusFilter === "all" || product.status === statusFilter

    return matchesSearch && matchesCategory && matchesStatus
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="font-serif text-2xl text-amber-900">Products Management</h2>
          <p className="text-slate-600">Manage your sacred art collection</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="border-amber-300 text-amber-900 bg-transparent">
            <Upload className="h-4 w-4 mr-2" />
            Import
          </Button>
          <Button variant="outline" className="border-amber-300 text-amber-900 bg-transparent">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button className="bg-amber-800 hover:bg-amber-900 text-white">
            <Plus className="h-4 w-4 mr-2" />
            Add Product
          </Button>
        </div>
      </div>

      {/* Filters */}
      <Card className="p-6 border-0 shadow-lg bg-white/90 backdrop-blur-sm">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 border-amber-200 focus:border-amber-400"
            />
          </div>
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="border-amber-200 focus:border-amber-400">
              <SelectValue placeholder="Filter by category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="quranic">Quranic Verses</SelectItem>
              <SelectItem value="asma">Asma ul-Husna</SelectItem>
              <SelectItem value="bismillah">Bismillah</SelectItem>
              <SelectItem value="sacred">Sacred Places</SelectItem>
            </SelectContent>
          </Select>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="border-amber-200 focus:border-amber-400">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="draft">Draft</SelectItem>
              <SelectItem value="out_of_stock">Out of Stock</SelectItem>
              <SelectItem value="archived">Archived</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="border-amber-300 text-amber-900 bg-transparent">
            <Filter className="h-4 w-4 mr-2" />
            More Filters
          </Button>
        </div>
      </Card>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => {
          const stockStatus = getStockStatus(product.stock)
          return (
            <Card key={product.id} className="border-0 shadow-lg bg-white/90 backdrop-blur-sm overflow-hidden">
              <div className="relative">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                {product.featured && (
                  <Badge className="absolute top-2 left-2 bg-amber-600 text-white">
                    <Star className="h-3 w-3 mr-1" />
                    Featured
                  </Badge>
                )}
                <Badge className={`absolute top-2 right-2 ${getStatusColor(product.status)}`}>
                  {product.status.replace("_", " ").toUpperCase()}
                </Badge>
              </div>

              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-serif text-lg text-amber-900 font-medium">{product.title}</h3>
                  <span className="text-lg font-bold text-red-900">${product.price}</span>
                </div>

                <p className="text-sm text-slate-600 mb-3">{product.description}</p>

                <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                  <span>{product.category}</span>
                  <span>{product.type}</span>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Package className="h-4 w-4 text-slate-400" />
                    <span className={`text-sm ${stockStatus.color}`}>
                      {product.stock} units - {stockStatus.text}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm text-slate-600">{product.rating}</span>
                  </div>
                </div>

                <div className="text-xs text-slate-500 mb-4">{product.sales} sales this month</div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1 border-amber-300 text-amber-900 bg-transparent">
                    <Eye className="h-3 w-3 mr-1" />
                    View
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 border-blue-300 text-blue-900 bg-transparent">
                    <Edit className="h-3 w-3 mr-1" />
                    Edit
                  </Button>
                  <Button variant="outline" size="sm" className="border-red-300 text-red-900 bg-transparent">
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </Card>
          )
        })}
      </div>

      {/* Product Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4 border-0 shadow-lg bg-white/90 backdrop-blur-sm text-center">
          <p className="text-2xl font-bold text-amber-900">{products.length}</p>
          <p className="text-sm text-slate-600">Total Products</p>
        </Card>
        <Card className="p-4 border-0 shadow-lg bg-white/90 backdrop-blur-sm text-center">
          <p className="text-2xl font-bold text-green-600">{products.filter((p) => p.status === "active").length}</p>
          <p className="text-sm text-slate-600">Active</p>
        </Card>
        <Card className="p-4 border-0 shadow-lg bg-white/90 backdrop-blur-sm text-center">
          <p className="text-2xl font-bold text-red-600">{products.filter((p) => p.stock === 0).length}</p>
          <p className="text-sm text-slate-600">Out of Stock</p>
        </Card>
        <Card className="p-4 border-0 shadow-lg bg-white/90 backdrop-blur-sm text-center">
          <p className="text-2xl font-bold text-purple-600">{products.filter((p) => p.featured).length}</p>
          <p className="text-sm text-slate-600">Featured</p>
        </Card>
      </div>
    </div>
  )
}
