"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Search,
  Filter,
  Eye,
  Edit,
  Mail,
  Phone,
  MapPin,
  Download,
  UserPlus,
  Calendar,
} from "lucide-react";

export default function CustomersManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const customers = [
    {
      id: 1,
      name: "Ahmad Hassan",
      email: "ahmad.hassan@email.com",
      phone: "+1 (555) 123-4567",
      location: "Medina City, CA",
      totalOrders: 8,
      totalSpent: 1240,
      status: "active",
      joinDate: "2023-08-15",
      lastOrder: "2024-01-15",
      favoriteCategory: "Calligraphy",
    },
    {
      id: 2,
      name: "Fatima Al-Zahra",
      email: "fatima.zahra@email.com",
      phone: "+1 (555) 234-5678",
      location: "Islamic Quarter, NY",
      totalOrders: 12,
      totalSpent: 2180,
      status: "vip",
      joinDate: "2023-06-20",
      lastOrder: "2024-01-14",
      favoriteCategory: "Paintings",
    },
    {
      id: 3,
      name: "Omar Abdullah",
      email: "omar.abdullah@email.com",
      phone: "+1 (555) 345-6789",
      location: "Spiritual District, TX",
      totalOrders: 5,
      totalSpent: 890,
      status: "active",
      joinDate: "2023-10-10",
      lastOrder: "2024-01-14",
      favoriteCategory: "Quranic Verses",
    },
    {
      id: 4,
      name: "Aisha Rahman",
      email: "aisha.rahman@email.com",
      phone: "+1 (555) 456-7890",
      location: "Sacred City, FL",
      totalOrders: 3,
      totalSpent: 520,
      status: "new",
      joinDate: "2024-01-05",
      lastOrder: "2024-01-13",
      favoriteCategory: "Bismillah",
    },
    {
      id: 5,
      name: "Yusuf Ibrahim",
      email: "yusuf.ibrahim@email.com",
      phone: "+1 (555) 567-8901",
      location: "Holy District, WA",
      totalOrders: 15,
      totalSpent: 3200,
      status: "vip",
      joinDate: "2023-03-12",
      lastOrder: "2024-01-10",
      favoriteCategory: "Sacred Places",
    },
    {
      id: 6,
      name: "Khadija Malik",
      email: "khadija.malik@email.com",
      phone: "+1 (555) 678-9012",
      location: "Faith Valley, CO",
      totalOrders: 1,
      totalSpent: 180,
      status: "inactive",
      joinDate: "2023-11-20",
      lastOrder: "2023-12-01",
      favoriteCategory: "Calligraphy",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "vip":
        return "bg-purple-100 text-purple-800";
      case "active":
        return "bg-green-100 text-green-800";
      case "new":
        return "bg-blue-100 text-blue-800";
      case "inactive":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const filteredCustomers = customers.filter((customer) => {
    const matchesSearch =
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || customer.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="font-serif text-2xl text-amber-900">
            Customers Management
          </h2>
          <p className="text-slate-600">
            Manage your valued customers and their journey
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="border-amber-300 text-amber-900 bg-transparent"
          >
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button className="bg-amber-800 hover:bg-amber-900 text-white">
            <UserPlus className="h-4 w-4 mr-2" />
            Add Customer
          </Button>
        </div>
      </div>

      {/* Customer Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4 border-0 shadow-lg bg-white/90 backdrop-blur-sm text-center">
          <p className="text-2xl font-bold text-amber-900">
            {customers.length}
          </p>
          <p className="text-sm text-slate-600">Total Customers</p>
        </Card>
        <Card className="p-4 border-0 shadow-lg bg-white/90 backdrop-blur-sm text-center">
          <p className="text-2xl font-bold text-purple-600">
            {customers.filter((c) => c.status === "vip").length}
          </p>
          <p className="text-sm text-slate-600">VIP Customers</p>
        </Card>
        <Card className="p-4 border-0 shadow-lg bg-white/90 backdrop-blur-sm text-center">
          <p className="text-2xl font-bold text-blue-600">
            {customers.filter((c) => c.status === "new").length}
          </p>
          <p className="text-sm text-slate-600">New This Month</p>
        </Card>
        <Card className="p-4 border-0 shadow-lg bg-white/90 backdrop-blur-sm text-center">
          <p className="text-2xl font-bold text-green-600">
            {customers.filter((c) => c.status === "active").length}
          </p>
          <p className="text-sm text-slate-600">Active Customers</p>
        </Card>
      </div>

      {/* Filters */}
      <Card className="p-6 border-0 shadow-lg bg-white/90 backdrop-blur-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input
              placeholder="Search customers..."
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
              <SelectItem value="vip">VIP</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="new">New</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
            </SelectContent>
          </Select>
          <Button
            variant="outline"
            className="border-amber-300 text-amber-900 bg-transparent"
          >
            <Filter className="h-4 w-4 mr-2" />
            More Filters
          </Button>
        </div>
      </Card>

      {/* Customers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCustomers.map((customer) => (
          <Card
            key={customer.id}
            className="p-6 border-0 shadow-lg bg-white/90 backdrop-blur-sm"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-serif text-lg text-amber-900 font-medium">
                  {customer.name}
                </h3>
                <Badge
                  className={`text-xs mt-1 ${getStatusColor(customer.status)}`}
                >
                  {customer.status.toUpperCase()}
                </Badge>
              </div>
              <div className="flex gap-1">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-amber-700 hover:text-amber-900"
                >
                  <Eye className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-blue-700 hover:text-blue-900"
                >
                  <Edit className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Mail className="h-4 w-4" />
                <span className="truncate">{customer.email}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Phone className="h-4 w-4" />
                <span>{customer.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <MapPin className="h-4 w-4" />
                <span>{customer.location}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Calendar className="h-4 w-4" />
                <span>Joined {customer.joinDate}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="text-center p-3 bg-amber-50 rounded-lg">
                <p className="text-lg font-bold text-amber-900">
                  {customer.totalOrders}
                </p>
                <p className="text-xs text-slate-600">Orders</p>
              </div>
              <div className="text-center p-3 bg-green-50 rounded-lg">
                <p className="text-lg font-bold text-green-900">
                  ${customer.totalSpent}
                </p>
                <p className="text-xs text-slate-600">Total Spent</p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-sm text-slate-600 mb-1">Favorite Category</p>
              <Badge variant="outline" className="text-xs">
                {customer.favoriteCategory}
              </Badge>
            </div>

            <div className="mt-4 pt-4 border-t border-amber-200">
              <p className="text-xs text-slate-500">
                Last Order: {customer.lastOrder}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
