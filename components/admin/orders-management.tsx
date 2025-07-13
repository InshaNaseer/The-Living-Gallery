"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Search,
  Filter,
  Eye,
  Edit,
  Truck,
  CheckCircle,
  Clock,
  AlertCircle,
  Package,
  Download,
  RefreshCw,
} from "lucide-react"

export default function OrdersManagement() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [paymentFilter, setPaymentFilter] = useState("all")

  const orders = [
    {
      id: "#ORD-001",
      customer: "Ahmad Hassan",
      email: "ahmad.hassan@email.com",
      product: "Ayat al-Kursi",
      amount: "$250",
      status: "completed",
      payment: "COD",
      date: "2024-01-15",
      address: "123 Islamic St, Medina City, CA 90210",
    },
    {
      id: "#ORD-002",
      customer: "Fatima Al-Zahra",
      email: "fatima.zahra@email.com",
      product: "99 Names of Allah",
      amount: "$380",
      status: "processing",
      payment: "Card",
      date: "2024-01-14",
      address: "456 Mosque Ave, Islamic Quarter, NY 10001",
    },
    {
      id: "#ORD-003",
      customer: "Omar Abdullah",
      email: "omar.abdullah@email.com",
      product: "Surah Al-Fatiha",
      amount: "$320",
      status: "pending",
      payment: "PayPal",
      date: "2024-01-14",
      address: "789 Prayer Rd, Spiritual District, TX 75001",
    },
    {
      id: "#ORD-004",
      customer: "Aisha Rahman",
      email: "aisha.rahman@email.com",
      product: "Bismillah Calligraphy",
      amount: "$180",
      status: "shipped",
      payment: "COD",
      date: "2024-01-13",
      address: "321 Faith Blvd, Sacred City, FL 33101",
    },
    {
      id: "#ORD-005",
      customer: "Yusuf Ibrahim",
      email: "yusuf.ibrahim@email.com",
      product: "Masjid al-Haram Painting",
      amount: "$280",
      status: "cancelled",
      payment: "Card",
      date: "2024-01-12",
      address: "654 Divine Way, Holy District, WA 98101",
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
      case "cancelled":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-3 w-3" />
      case "processing":
        return <RefreshCw className="h-3 w-3" />
      case "pending":
        return <Clock className="h-3 w-3" />
      case "shipped":
        return <Truck className="h-3 w-3" />
      case "cancelled":
        return <AlertCircle className="h-3 w-3" />
      default:
        return <Clock className="h-3 w-3" />
    }
  }

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.product.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || order.status === statusFilter
    const matchesPayment = paymentFilter === "all" || order.payment.toLowerCase() === paymentFilter.toLowerCase()

    return matchesSearch && matchesStatus && matchesPayment
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="font-serif text-2xl text-amber-900">Orders Management</h2>
          <p className="text-slate-600">Manage and track all customer orders</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="border-amber-300 text-amber-900 bg-transparent">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button className="bg-amber-800 hover:bg-amber-900 text-white">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
        </div>
      </div>

      {/* Filters */}
      <Card className="p-6 border-0 shadow-lg bg-white/90 backdrop-blur-sm">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input
              placeholder="Search orders..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 border-amber-200 focus:border-amber-400"
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="border-amber-200 focus:border-amber-400">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="processing">Processing</SelectItem>
              <SelectItem value="shipped">Shipped</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="cancelled">Cancelled</SelectItem>
            </SelectContent>
          </Select>
          <Select value={paymentFilter} onValueChange={setPaymentFilter}>
            <SelectTrigger className="border-amber-200 focus:border-amber-400">
              <SelectValue placeholder="Filter by payment" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Payment Methods</SelectItem>
              <SelectItem value="cod">Cash on Delivery</SelectItem>
              <SelectItem value="card">Credit Card</SelectItem>
              <SelectItem value="paypal">PayPal</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="border-amber-300 text-amber-900 bg-transparent">
            <Filter className="h-4 w-4 mr-2" />
            More Filters
          </Button>
        </div>
      </Card>

      {/* Orders Table */}
      <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-amber-200">
                  <th className="text-left py-3 px-4 font-medium text-amber-900">Order ID</th>
                  <th className="text-left py-3 px-4 font-medium text-amber-900">Customer</th>
                  <th className="text-left py-3 px-4 font-medium text-amber-900">Product</th>
                  <th className="text-left py-3 px-4 font-medium text-amber-900">Amount</th>
                  <th className="text-left py-3 px-4 font-medium text-amber-900">Payment</th>
                  <th className="text-left py-3 px-4 font-medium text-amber-900">Status</th>
                  <th className="text-left py-3 px-4 font-medium text-amber-900">Date</th>
                  <th className="text-left py-3 px-4 font-medium text-amber-900">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.map((order) => (
                  <tr key={order.id} className="border-b border-amber-100 hover:bg-amber-50/50">
                    <td className="py-4 px-4">
                      <span className="font-medium text-amber-900">{order.id}</span>
                    </td>
                    <td className="py-4 px-4">
                      <div>
                        <p className="font-medium text-slate-900">{order.customer}</p>
                        <p className="text-sm text-slate-500">{order.email}</p>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-slate-900">{order.product}</span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="font-medium text-red-900">{order.amount}</span>
                    </td>
                    <td className="py-4 px-4">
                      <Badge variant="outline" className="text-xs">
                        {order.payment}
                      </Badge>
                    </td>
                    <td className="py-4 px-4">
                      <Badge className={`text-xs ${getStatusColor(order.status)}`}>
                        {getStatusIcon(order.status)}
                        <span className="ml-1 capitalize">{order.status}</span>
                      </Badge>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-slate-600">{order.date}</span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm" className="text-amber-700 hover:text-amber-900">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-blue-700 hover:text-blue-900">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-green-700 hover:text-green-900">
                          <Package className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Card>

      {/* Order Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card className="p-4 border-0 shadow-lg bg-white/90 backdrop-blur-sm text-center">
          <p className="text-2xl font-bold text-amber-900">{orders.filter((o) => o.status === "pending").length}</p>
          <p className="text-sm text-slate-600">Pending</p>
        </Card>
        <Card className="p-4 border-0 shadow-lg bg-white/90 backdrop-blur-sm text-center">
          <p className="text-2xl font-bold text-blue-600">{orders.filter((o) => o.status === "processing").length}</p>
          <p className="text-sm text-slate-600">Processing</p>
        </Card>
        <Card className="p-4 border-0 shadow-lg bg-white/90 backdrop-blur-sm text-center">
          <p className="text-2xl font-bold text-purple-600">{orders.filter((o) => o.status === "shipped").length}</p>
          <p className="text-sm text-slate-600">Shipped</p>
        </Card>
        <Card className="p-4 border-0 shadow-lg bg-white/90 backdrop-blur-sm text-center">
          <p className="text-2xl font-bold text-green-600">{orders.filter((o) => o.status === "completed").length}</p>
          <p className="text-sm text-slate-600">Completed</p>
        </Card>
        <Card className="p-4 border-0 shadow-lg bg-white/90 backdrop-blur-sm text-center">
          <p className="text-2xl font-bold text-red-600">{orders.filter((o) => o.status === "cancelled").length}</p>
          <p className="text-sm text-slate-600">Cancelled</p>
        </Card>
      </div>
    </div>
  )
}
