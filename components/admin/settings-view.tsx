"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Save, Bell, Shield, Palette, Globe, Truck, CreditCard, SettingsIcon } from "lucide-react"

export default function SettingsView() {
  const [settings, setSettings] = useState({
    // General Settings
    siteName: "The Living Gallery",
    siteDescription: "Where art becomes prayer - Sacred Islamic calligraphy and paintings",
    contactEmail: "elena@livinggallery.art",
    supportEmail: "support@livinggallery.art",
    phone: "+1 (555) 123-4567",
    address: "Sacred Arts District, Spiritual Quarter, CA",

    // Notifications
    orderNotifications: true,
    customerNotifications: true,
    inventoryAlerts: true,
    marketingEmails: false,

    // Payment Settings
    enableCOD: true,
    enablePayPal: true,
    enableStripe: true,
    codFee: 15,
    freeShippingThreshold: 200,

    // Shipping Settings
    standardShipping: 25,
    expressShipping: 45,
    internationalShipping: 75,

    // Islamic Settings
    enableIslamicCalendar: true,
    enablePrayerTimes: false,
    enableQiblaDirection: false,
    enableIslamicGreeting: true,

    // Security
    twoFactorAuth: false,
    sessionTimeout: 30,
    passwordExpiry: 90,

    // Display Settings
    itemsPerPage: 12,
    enableWishlist: true,
    enableReviews: true,
    enableSocialShare: true,
  })

  const handleSettingChange = (key: string, value: any) => {
    setSettings((prev) => ({ ...prev, [key]: value }))
  }

  const handleSave = () => {
    console.log("Saving settings:", settings)
    // Here you would typically save to your backend
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="font-serif text-2xl text-amber-900">Settings</h2>
          <p className="text-slate-600">Configure your gallery settings and preferences</p>
        </div>
        <Button onClick={handleSave} className="bg-amber-800 hover:bg-amber-900 text-white">
          <Save className="h-4 w-4 mr-2" />
          Save Changes
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Settings Navigation */}
        <div className="lg:col-span-1">
          <Card className="p-4 border-0 shadow-lg bg-white/90 backdrop-blur-sm">
            <h3 className="font-serif text-lg text-amber-900 mb-4">Settings Categories</h3>
            <div className="space-y-2">
              <Button variant="ghost" className="w-full justify-start text-amber-900 bg-amber-50">
                <SettingsIcon className="h-4 w-4 mr-2" />
                General
              </Button>
              <Button variant="ghost" className="w-full justify-start text-slate-700">
                <Bell className="h-4 w-4 mr-2" />
                Notifications
              </Button>
              <Button variant="ghost" className="w-full justify-start text-slate-700">
                <CreditCard className="h-4 w-4 mr-2" />
                Payments
              </Button>
              <Button variant="ghost" className="w-full justify-start text-slate-700">
                <Truck className="h-4 w-4 mr-2" />
                Shipping
              </Button>
              <Button variant="ghost" className="w-full justify-start text-slate-700">
                <Globe className="h-4 w-4 mr-2" />
                Islamic Features
              </Button>
              <Button variant="ghost" className="w-full justify-start text-slate-700">
                <Shield className="h-4 w-4 mr-2" />
                Security
              </Button>
              <Button variant="ghost" className="w-full justify-start text-slate-700">
                <Palette className="h-4 w-4 mr-2" />
                Display
              </Button>
            </div>
          </Card>
        </div>

        {/* Settings Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* General Settings */}
          <Card className="p-6 border-0 shadow-lg bg-white/90 backdrop-blur-sm">
            <h3 className="font-serif text-xl text-amber-900 mb-6 flex items-center">
              <SettingsIcon className="h-5 w-5 mr-2" />
              General Settings
            </h3>
            <div className="space-y-4">
              <div>
                <Label htmlFor="siteName" className="text-amber-900 font-medium">
                  Site Name
                </Label>
                <Input
                  id="siteName"
                  value={settings.siteName}
                  onChange={(e) => handleSettingChange("siteName", e.target.value)}
                  className="mt-1 border-amber-200 focus:border-amber-400"
                />
              </div>
              <div>
                <Label htmlFor="siteDescription" className="text-amber-900 font-medium">
                  Site Description
                </Label>
                <Textarea
                  id="siteDescription"
                  value={settings.siteDescription}
                  onChange={(e) => handleSettingChange("siteDescription", e.target.value)}
                  className="mt-1 border-amber-200 focus:border-amber-400"
                  rows={3}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="contactEmail" className="text-amber-900 font-medium">
                    Contact Email
                  </Label>
                  <Input
                    id="contactEmail"
                    type="email"
                    value={settings.contactEmail}
                    onChange={(e) => handleSettingChange("contactEmail", e.target.value)}
                    className="mt-1 border-amber-200 focus:border-amber-400"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-amber-900 font-medium">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    value={settings.phone}
                    onChange={(e) => handleSettingChange("phone", e.target.value)}
                    className="mt-1 border-amber-200 focus:border-amber-400"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="address" className="text-amber-900 font-medium">
                  Business Address
                </Label>
                <Input
                  id="address"
                  value={settings.address}
                  onChange={(e) => handleSettingChange("address", e.target.value)}
                  className="mt-1 border-amber-200 focus:border-amber-400"
                />
              </div>
            </div>
          </Card>

          {/* Notification Settings */}
          <Card className="p-6 border-0 shadow-lg bg-white/90 backdrop-blur-sm">
            <h3 className="font-serif text-xl text-amber-900 mb-6 flex items-center">
              <Bell className="h-5 w-5 mr-2" />
              Notification Settings
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="orderNotifications" className="text-amber-900 font-medium">
                    Order Notifications
                  </Label>
                  <p className="text-sm text-slate-600">Receive notifications for new orders</p>
                </div>
                <Switch
                  id="orderNotifications"
                  checked={settings.orderNotifications}
                  onCheckedChange={(checked) => handleSettingChange("orderNotifications", checked)}
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="customerNotifications" className="text-amber-900 font-medium">
                    Customer Notifications
                  </Label>
                  <p className="text-sm text-slate-600">Notifications for new customer registrations</p>
                </div>
                <Switch
                  id="customerNotifications"
                  checked={settings.customerNotifications}
                  onCheckedChange={(checked) => handleSettingChange("customerNotifications", checked)}
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="inventoryAlerts" className="text-amber-900 font-medium">
                    Inventory Alerts
                  </Label>
                  <p className="text-sm text-slate-600">Low stock and out of stock alerts</p>
                </div>
                <Switch
                  id="inventoryAlerts"
                  checked={settings.inventoryAlerts}
                  onCheckedChange={(checked) => handleSettingChange("inventoryAlerts", checked)}
                />
              </div>
            </div>
          </Card>

          {/* Payment Settings */}
          <Card className="p-6 border-0 shadow-lg bg-white/90 backdrop-blur-sm">
            <h3 className="font-serif text-xl text-amber-900 mb-6 flex items-center">
              <CreditCard className="h-5 w-5 mr-2" />
              Payment Settings
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="enableCOD" className="text-amber-900 font-medium">
                    Cash on Delivery
                  </Label>
                  <p className="text-sm text-slate-600">Enable COD payment option</p>
                </div>
                <Switch
                  id="enableCOD"
                  checked={settings.enableCOD}
                  onCheckedChange={(checked) => handleSettingChange("enableCOD", checked)}
                />
              </div>
              {settings.enableCOD && (
                <div>
                  <Label htmlFor="codFee" className="text-amber-900 font-medium">
                    COD Fee ($)
                  </Label>
                  <Input
                    id="codFee"
                    type="number"
                    value={settings.codFee}
                    onChange={(e) => handleSettingChange("codFee", Number(e.target.value))}
                    className="mt-1 border-amber-200 focus:border-amber-400 w-32"
                  />
                </div>
              )}
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="enablePayPal" className="text-amber-900 font-medium">
                    PayPal
                  </Label>
                  <p className="text-sm text-slate-600">Enable PayPal payments</p>
                </div>
                <Switch
                  id="enablePayPal"
                  checked={settings.enablePayPal}
                  onCheckedChange={(checked) => handleSettingChange("enablePayPal", checked)}
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="enableStripe" className="text-amber-900 font-medium">
                    Credit Cards (Stripe)
                  </Label>
                  <p className="text-sm text-slate-600">Enable credit card payments</p>
                </div>
                <Switch
                  id="enableStripe"
                  checked={settings.enableStripe}
                  onCheckedChange={(checked) => handleSettingChange("enableStripe", checked)}
                />
              </div>
            </div>
          </Card>

          {/* Islamic Features */}
          <Card className="p-6 border-0 shadow-lg bg-white/90 backdrop-blur-sm">
            <h3 className="font-serif text-xl text-amber-900 mb-6 flex items-center">
              <Globe className="h-5 w-5 mr-2" />
              Islamic Features
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="enableIslamicGreeting" className="text-amber-900 font-medium">
                    Islamic Greetings
                  </Label>
                  <p className="text-sm text-slate-600">Show "Assalamu Alaikum" and Islamic phrases</p>
                </div>
                <Switch
                  id="enableIslamicGreeting"
                  checked={settings.enableIslamicGreeting}
                  onCheckedChange={(checked) => handleSettingChange("enableIslamicGreeting", checked)}
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="enableIslamicCalendar" className="text-amber-900 font-medium">
                    Islamic Calendar
                  </Label>
                  <p className="text-sm text-slate-600">Display Hijri dates alongside Gregorian</p>
                </div>
                <Switch
                  id="enableIslamicCalendar"
                  checked={settings.enableIslamicCalendar}
                  onCheckedChange={(checked) => handleSettingChange("enableIslamicCalendar", checked)}
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="enablePrayerTimes" className="text-amber-900 font-medium">
                    Prayer Times
                  </Label>
                  <p className="text-sm text-slate-600">Show daily prayer times widget</p>
                </div>
                <Switch
                  id="enablePrayerTimes"
                  checked={settings.enablePrayerTimes}
                  onCheckedChange={(checked) => handleSettingChange("enablePrayerTimes", checked)}
                />
              </div>
            </div>
          </Card>

          {/* Security Settings */}
          <Card className="p-6 border-0 shadow-lg bg-white/90 backdrop-blur-sm">
            <h3 className="font-serif text-xl text-amber-900 mb-6 flex items-center">
              <Shield className="h-5 w-5 mr-2" />
              Security Settings
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="twoFactorAuth" className="text-amber-900 font-medium">
                    Two-Factor Authentication
                  </Label>
                  <p className="text-sm text-slate-600">Enable 2FA for admin accounts</p>
                </div>
                <Switch
                  id="twoFactorAuth"
                  checked={settings.twoFactorAuth}
                  onCheckedChange={(checked) => handleSettingChange("twoFactorAuth", checked)}
                />
              </div>
              <Separator />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="sessionTimeout" className="text-amber-900 font-medium">
                    Session Timeout (minutes)
                  </Label>
                  <Input
                    id="sessionTimeout"
                    type="number"
                    value={settings.sessionTimeout}
                    onChange={(e) => handleSettingChange("sessionTimeout", Number(e.target.value))}
                    className="mt-1 border-amber-200 focus:border-amber-400"
                  />
                </div>
                <div>
                  <Label htmlFor="passwordExpiry" className="text-amber-900 font-medium">
                    Password Expiry (days)
                  </Label>
                  <Input
                    id="passwordExpiry"
                    type="number"
                    value={settings.passwordExpiry}
                    onChange={(e) => handleSettingChange("passwordExpiry", Number(e.target.value))}
                    className="mt-1 border-amber-200 focus:border-amber-400"
                  />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Islamic Quote */}
      <Card className="p-8 border-0 shadow-lg bg-gradient-to-r from-amber-100 to-rose-100">
        <div className="text-center">
          <blockquote className="font-serif text-2xl text-amber-900 mb-4 italic">
            "And whoever fears Allah - He will make for him a way out and will provide for him from where he does not
            expect."
          </blockquote>
          <p className="text-slate-600">- Quran 65:2-3</p>
        </div>
      </Card>
    </div>
  )
}
