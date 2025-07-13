"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { TrendingUp, TrendingDown, DollarSign, ShoppingBag, Users, Eye, Download } from "lucide-react"

export default function AnalyticsView() {
  const salesData = [
    { month: "Jan", revenue: 8400, orders: 45, customers: 23 },
    { month: "Feb", revenue: 9200, orders: 52, customers: 28 },
    { month: "Mar", revenue: 11800, orders: 68, customers: 35 },
    { month: "Apr", revenue: 10600, orders: 58, customers: 31 },
    { month: "May", revenue: 13200, orders: 72, customers: 42 },
    { month: "Jun", revenue: 12450, orders: 69, customers: 38 },
  ]

  const topProducts = [
    { name: "Ayat al-Kursi", revenue: 11250, percentage: 28.5 },
    { name: "99 Names of Allah", revenue: 9840, percentage: 24.9 },
    { name: "Surah Al-Fatiha", revenue: 8960, percentage: 22.7 },
    { name: "Bismillah Calligraphy", revenue: 5940, percentage: 15.0 },
    { name: "Masjid al-Haram", revenue: 3520, percentage: 8.9 },
  ]

  const customerInsights = [
    { metric: "Average Order Value", value: "$285", change: "+12.3%" },
    { metric: "Customer Lifetime Value", value: "$1,240", change: "+8.7%" },
    { metric: "Repeat Purchase Rate", value: "68%", change: "+5.2%" },
    { metric: "Customer Acquisition Cost", value: "$45", change: "-15.8%" },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="font-serif text-2xl text-amber-900">Analytics & Insights</h2>
          <p className="text-slate-600">Track your gallery's performance and growth</p>
        </div>
        <div className="flex gap-2">
          <Select defaultValue="30days">
            <SelectTrigger className="w-40 border-amber-200">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7days">Last 7 days</SelectItem>
              <SelectItem value="30days">Last 30 days</SelectItem>
              <SelectItem value="90days">Last 90 days</SelectItem>
              <SelectItem value="1year">Last year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="border-amber-300 text-amber-900 bg-transparent">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6 border-0 shadow-lg bg-white/90 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600 mb-1">Total Revenue</p>
              <p className="text-2xl font-bold text-amber-900">$65,840</p>
              <div className="flex items-center gap-1 mt-2">
                <TrendingUp className="h-3 w-3 text-green-600" />
                <span className="text-xs text-green-600">+18.2%</span>
              </div>
            </div>
            <div className="p-3 rounded-full bg-green-100">
              <DollarSign className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </Card>

        <Card className="p-6 border-0 shadow-lg bg-white/90 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600 mb-1">Total Orders</p>
              <p className="text-2xl font-bold text-amber-900">364</p>
              <div className="flex items-center gap-1 mt-2">
                <TrendingUp className="h-3 w-3 text-green-600" />
                <span className="text-xs text-green-600">+12.5%</span>
              </div>
            </div>
            <div className="p-3 rounded-full bg-blue-100">
              <ShoppingBag className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </Card>

        <Card className="p-6 border-0 shadow-lg bg-white/90 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600 mb-1">New Customers</p>
              <p className="text-2xl font-bold text-amber-900">197</p>
              <div className="flex items-center gap-1 mt-2">
                <TrendingUp className="h-3 w-3 text-green-600" />
                <span className="text-xs text-green-600">+24.8%</span>
              </div>
            </div>
            <div className="p-3 rounded-full bg-purple-100">
              <Users className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </Card>

        <Card className="p-6 border-0 shadow-lg bg-white/90 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600 mb-1">Conversion Rate</p>
              <p className="text-2xl font-bold text-amber-900">3.2%</p>
              <div className="flex items-center gap-1 mt-2">
                <TrendingDown className="h-3 w-3 text-red-600" />
                <span className="text-xs text-red-600">-2.1%</span>
              </div>
            </div>
            <div className="p-3 rounded-full bg-amber-100">
              <Eye className="h-6 w-6 text-amber-600" />
            </div>
          </div>
        </Card>
      </div>

      {/* Sales Chart */}
      <Card className="p-6 border-0 shadow-lg bg-white/90 backdrop-blur-sm">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-serif text-xl text-amber-900">Revenue Trend</h3>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="border-amber-300 text-amber-900 bg-transparent">
              Revenue
            </Button>
            <Button variant="ghost" size="sm" className="text-slate-600">
              Orders
            </Button>
            <Button variant="ghost" size="sm" className="text-slate-600">
              Customers
            </Button>
          </div>
        </div>
        <div className="h-64 flex items-end justify-between gap-4">
          {salesData.map((data, index) => (
            <div key={index} className="flex-1 flex flex-col items-center">
              <div
                className="w-full bg-gradient-to-t from-amber-600 to-amber-400 rounded-t-lg mb-2"
                style={{ height: `${(data.revenue / 15000) * 200}px` }}
              />
              <span className="text-xs text-slate-600">{data.month}</span>
              <span className="text-xs font-medium text-amber-900">${(data.revenue / 1000).toFixed(1)}k</span>
            </div>
          ))}
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Products */}
        <Card className="p-6 border-0 shadow-lg bg-white/90 backdrop-blur-sm">
          <h3 className="font-serif text-xl text-amber-900 mb-6">Top Performing Products</h3>
          <div className="space-y-4">
            {topProducts.map((product, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="font-medium text-slate-900">{product.name}</p>
                  <div className="w-full bg-amber-100 rounded-full h-2 mt-2">
                    <div className="bg-amber-600 h-2 rounded-full" style={{ width: `${product.percentage}%` }} />
                  </div>
                </div>
                <div className="text-right ml-4">
                  <p className="font-medium text-red-900">${product.revenue.toLocaleString()}</p>
                  <p className="text-xs text-slate-500">{product.percentage}%</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Customer Insights */}
        <Card className="p-6 border-0 shadow-lg bg-white/90 backdrop-blur-sm">
          <h3 className="font-serif text-xl text-amber-900 mb-6">Customer Insights</h3>
          <div className="space-y-4">
            {customerInsights.map((insight, index) => (
              <div key={index} className="flex items-center justify-between p-4 border border-amber-200 rounded-lg">
                <div>
                  <p className="font-medium text-slate-900">{insight.metric}</p>
                  <p className="text-2xl font-bold text-amber-900 mt-1">{insight.value}</p>
                </div>
                <div className="text-right">
                  <div
                    className={`flex items-center gap-1 ${
                      insight.change.startsWith("+") ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {insight.change.startsWith("+") ? (
                      <TrendingUp className="h-3 w-3" />
                    ) : (
                      <TrendingDown className="h-3 w-3" />
                    )}
                    <span className="text-sm font-medium">{insight.change}</span>
                  </div>
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
            "And give full measure when you measure, and weigh with an even balance. That is the best and fairest in the
            final determination."
          </blockquote>
          <p className="text-slate-600">- Quran 17:35</p>
        </div>
      </Card>
    </div>
  )
}
