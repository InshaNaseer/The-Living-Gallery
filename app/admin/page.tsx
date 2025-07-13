"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Download, Bell } from "lucide-react"
import AdminNavigation from "@/components/admin-navigation"
import DashboardOverview from "@/components/admin/dashboard-overview"
import OrdersManagement from "@/components/admin/orders-management"
import ProductsManagement from "@/components/admin/products-management"
import CustomersManagement from "@/components/admin/customers-management"
import AnalyticsView from "@/components/admin/analytics-view"
import SettingsView from "@/components/admin/settings-view"

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard")

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardOverview />
      case "orders":
        return <OrdersManagement />
      case "products":
        return <ProductsManagement />
      case "customers":
        return <CustomersManagement />
      case "analytics":
        return <AnalyticsView />
      case "settings":
        return <SettingsView />
      default:
        return <DashboardOverview />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-rose-50 to-amber-50">
      <AdminNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="pt-20 pb-8 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="font-serif text-4xl text-amber-900 mb-2">Admin Dashboard</h1>
              <p className="text-slate-600">Manage your sacred art gallery with wisdom and care</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" className="border-amber-300 text-amber-900 bg-transparent">
                <Download className="h-4 w-4 mr-2" />
                Export Data
              </Button>
              <Button variant="outline" className="border-amber-300 text-amber-900 bg-transparent">
                <Bell className="h-4 w-4 mr-2" />
                Notifications
              </Button>
            </div>
          </div>

          {/* Content */}
          {renderContent()}
        </div>
      </div>
    </div>
  )
}
