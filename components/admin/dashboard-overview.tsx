"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DollarSign,
  ShoppingBag,
  Users,
  Package,
  TrendingUp,
  TrendingDown,
  Eye,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react"

export default function DashboardOverview() {
  const stats = [
    {
      title: "Total Revenue",
      value: "$12,450",
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
      color: "text-green-600",
    },
    {
      title: "Orders",
      value: "156",
      change: "+8.2%",
      trend: "up",
      icon: ShoppingBag,
      color: "text-blue-600",
    },
    {
      title: "Customers",
      value: "89",
      change: "+15.3%",
      trend: "up",
      icon: Users,
      color: "text-purple-600",
    },
    {
      title: "Products",
      value: "24",
      change: "+2",
      trend: "up",
      icon: Package,
      color: "text-amber-600",
    },
  ]

  const recentOrders = [
    {
      id: "#ORD-001",
      customer: "Ahmad Hassan",
      product: "Ayat al-Kursi",
      amount: "$250",
      status: "completed",
      payment: "COD",
      date: "2024-01-15",
    },
    {
      id: "#ORD-002",
      customer: "Fatima Al-Zahra",
      product: "99 Names of Allah",
      amount: "$380",
      status: "processing",
      payment: "Card",
      date: "2024-01-14",
    },
    {
      id: "#ORD-003",
      customer: "Omar Abdullah",
      product: "Surah Al-Fatiha",
      amount: "$320",
      status: "pending",
      payment: "PayPal",
      date: "2024-01-14",
    },
    {
      id: "#ORD-004",
      customer: "Aisha Rahman",
      product: "Bismillah Calligraphy",
      amount: "$180",
      status: "shipped",
      payment: "COD",
      date: "2024-01-13",
    },
  ]

  const topProducts = [
    {
      name: "Ayat al-Kursi",
      sales: 45,
      revenue: "$11,250",
      category: "Calligraphy",
    },
    {
      name: "99 Names of Allah",
      sales: 32,
      revenue: "$12,160",
      category: "Painting",
    },
    {
      name: "Surah Al-Fatiha",
      sales: 28,
      revenue: "$8,960",
      category: "Calligraphy",
    },
    {
      name: "Masjid al-Haram",
      sales: 22,
      revenue: "$6,160",
      category: "Painting",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800"
      case "processing":
        return "bg-blue-100 text-blue-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "shipped":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-3 w-3" />
      case "processing":
        return <Clock className="h-3 w-3" />
      case "pending":
        return <AlertCircle className="h-3 w-3" />
      case "shipped":
        return <Package className="h-3 w-3" />
      default:
        return <Clock className="h-3 w-3" />
    }
  }

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="p-6 border-0 shadow-lg bg-white/90 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600 mb-1">{stat.title}</p>
                <p className="text-2xl font-bold text-amber-900">{stat.value}</p>
                <div className="flex items-center gap-1 mt-2">
                  {stat.trend === "up" ? (
                    <TrendingUp className="h-3 w-3 text-green-600" />
                  ) : (
                    <TrendingDown className="h-3 w-3 text-red-600" />
                  )}
                  <span className={`text-xs ${stat.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                    {stat.change}
                  </span>
                </div>
              </div>
              <div className={`p-3 rounded-full bg-amber-100 ${stat.color}`}>
                <stat.icon className="h-6 w-6" />
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Orders */}
        <Card className="p-6 border-0 shadow-lg bg-white/90 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-serif text-xl text-amber-900">Recent Orders</h2>
            <Button variant="outline" size="sm" className="border-amber-300 text-amber-900 bg-transparent">
              <Eye className="h-4 w-4 mr-2" />
              View All
            </Button>
          </div>
          <div className="space-y-4">
            {recentOrders.map((order) => (
              <div key={order.id} className="flex items-center justify-between p-4 border border-amber-200 rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-medium text-amber-900">{order.id}</span>
                    <Badge className={`text-xs ${getStatusColor(order.status)}`}>
                      {getStatusIcon(order.status)}
                      <span className="ml-1 capitalize">{order.status}</span>
                    </Badge>
                  </div>
                  <p className="text-sm text-slate-600">{order.customer}</p>
                  <p className="text-xs text-slate-500">{order.product}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-red-900">{order.amount}</p>
                  <p className="text-xs text-slate-500">{order.payment}</p>
                  <p className="text-xs text-slate-500">{order.date}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Top Products */}
        <Card className="p-6 border-0 shadow-lg bg-white/90 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-serif text-xl text-amber-900">Top Products</h2>
            <Button variant="outline" size="sm" className="border-amber-300 text-amber-900 bg-transparent">
              <Eye className="h-4 w-4 mr-2" />
              View All
            </Button>
          </div>
          <div className="space-y-4">
            {topProducts.map((product, index) => (
              <div key={index} className="flex items-center justify-between p-4 border border-amber-200 rounded-lg">
                <div className="flex-1">
                  <p className="font-medium text-amber-900">{product.name}</p>
                  <p className="text-sm text-slate-600">{product.category}</p>
                  <p className="text-xs text-slate-500">{product.sales} sales</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-red-900">{product.revenue}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Islamic Quote */}
      <Card className="p-8 border-0 shadow-lg bg-gradient-to-r from-amber-100 to-rose-100">
        <div className="text-center">
          <blockquote className="font-serif text-2xl text-amber-900 mb-4 italic">
            "And whoever relies upon Allah - then He is sufficient for him. Indeed, Allah will accomplish His purpose."
          </blockquote>
          <p className="text-slate-600">- Quran 65:3</p>
        </div>
      </Card>
    </div>
  )
}
