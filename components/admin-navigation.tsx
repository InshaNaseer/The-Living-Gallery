"use client";

import { Badge } from "@/components/ui/badge";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  ShoppingBag,
  Users,
  Package,
  BarChart3,
  Settings,
  LogOut,
  Menu,
  X,
  Home,
} from "lucide-react";

interface AdminNavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function AdminNavigation({
  activeTab,
  setActiveTab,
}: AdminNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "orders", label: "Orders", icon: ShoppingBag },
    { id: "products", label: "Products", icon: Package },
    // { id: "products", label: "Products", icon: Package },
    { id: "customers", label: "Customers", icon: Users },
    { id: "analytics", label: "Analytics", icon: BarChart3 },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-amber-200">
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="font-serif text-xl text-amber-800 hover:text-amber-600 transition-colors"
            >
              The Living Gallery
            </Link>
            <Badge className="bg-red-800 text-white text-xs">Admin</Badge>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={activeTab === item.id ? "default" : "ghost"}
                onClick={() => setActiveTab(item.id)}
                className={`${
                  activeTab === item.id
                    ? "bg-amber-800 text-white"
                    : "text-slate-700 hover:text-amber-900 hover:bg-amber-50"
                }`}
              >
                <item.icon className="h-4 w-4 mr-2" />
                {item.label}
              </Button>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-2">
            <Link href="/">
              <Button
                variant="ghost"
                size="sm"
                className="text-slate-700 hover:text-amber-900"
              >
                <Home className="h-4 w-4 mr-2" />
                View Site
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="sm"
              className="text-slate-700 hover:text-red-700"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-slate-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-amber-200 mt-3">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant={activeTab === item.id ? "default" : "ghost"}
                  onClick={() => {
                    setActiveTab(item.id);
                    setIsOpen(false);
                  }}
                  className={`justify-start ${
                    activeTab === item.id
                      ? "bg-amber-800 text-white"
                      : "text-slate-700 hover:text-amber-900 hover:bg-amber-50"
                  }`}
                >
                  <item.icon className="h-4 w-4 mr-2" />
                  {item.label}
                </Button>
              ))}
              <div className="border-t border-amber-200 pt-2 mt-2">
                <Link href="/">
                  <Button
                    variant="ghost"
                    className="justify-start w-full text-slate-700 hover:text-amber-900"
                  >
                    <Home className="h-4 w-4 mr-2" />
                    View Site
                  </Button>
                </Link>
                <Button
                  variant="ghost"
                  className="justify-start w-full text-slate-700 hover:text-red-700"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
