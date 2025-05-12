"use client"

import { User, Lock, Bell, Shield, Sun, LogOut } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"

export function SettingsTabs({ activeTab, onTabChange, onLogout }) {
  return (
    <div className="space-y-6">
      <div className="flex w-full flex-col space-y-1">
        <button
          onClick={() => onTabChange("profil")}
          className={`flex items-center justify-start rounded-md px-3 py-2 text-sm font-medium ${
            activeTab === "profil" ? "bg-primary/10 text-primary" : "hover:bg-slate-100"
          }`}
        >
          <User className="mr-2 h-4 w-4" />
          Profil
        </button>
        <button
          onClick={() => onTabChange("keamanan")}
          className={`flex items-center justify-start rounded-md px-3 py-2 text-sm font-medium ${
            activeTab === "keamanan" ? "bg-primary/10 text-primary" : "hover:bg-slate-100"
          }`}
        >
          <Lock className="mr-2 h-4 w-4" />
          Keamanan
        </button>
        <button
          onClick={() => onTabChange("notifikasi")}
          className={`flex items-center justify-start rounded-md px-3 py-2 text-sm font-medium ${
            activeTab === "notifikasi" ? "bg-primary/10 text-primary" : "hover:bg-slate-100"
          }`}
        >
          <Bell className="mr-2 h-4 w-4" />
          Notifikasi
        </button>
        <button
          onClick={() => onTabChange("privasi")}
          className={`flex items-center justify-start rounded-md px-3 py-2 text-sm font-medium ${
            activeTab === "privasi" ? "bg-primary/10 text-primary" : "hover:bg-slate-100"
          }`}
        >
          <Shield className="mr-2 h-4 w-4" />
          Privasi
        </button>
        <button
          onClick={() => onTabChange("tampilan")}
          className={`flex items-center justify-start rounded-md px-3 py-2 text-sm font-medium ${
            activeTab === "tampilan" ? "bg-primary/10 text-primary" : "hover:bg-slate-100"
          }`}
        >
          <Sun className="mr-2 h-4 w-4" />
          Tampilan
        </button>
      </div>

      <Separator />

      <Button variant="destructive" className="w-full" onClick={onLogout}>
        <LogOut className="mr-2 h-4 w-4" />
        Keluar
      </Button>
    </div>
  )
}
