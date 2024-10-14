'use client'

import React, { useState } from 'react'
import { Bell, ChevronDown, Layout, Users, BarChart2, MessageSquare, Users2, Puzzle, Settings, Search, ChevronRight, Flag } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import Image from 'next/image'

export function DashboardLayoutComponent({ children }: { children: React.ReactNode }) {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true)

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded)
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Sidebar */}
      <aside className={cn(
        "bg-white shadow-md transition-all duration-300 ease-in-out",
        isSidebarExpanded ? "w-64" : "w-16"
      )}>
        <div className="p-4 flex justify-center">
          <Button variant="ghost" onClick={toggleSidebar} className="p-0">
            <Image
              src="/dashboard/bavaria.png"
              alt="BMW"
              width={48}
              height={48}
              
            />
          </Button>
        </div>
        <nav className="mt-4">
          <MenuItem icon={<Layout />} label="Dashboard" isExpanded={isSidebarExpanded} link="/dashboard" />
          <MenuItem icon={<Users2 />} label="Mi Equipo" isExpanded={isSidebarExpanded} link="/dashboard/team" />
          <MenuItem icon={<BarChart2 />} label="Interacciones" isExpanded={isSidebarExpanded} link="/dashboard/interactions" />
          <MenuItem icon={<BarChart2 />} label="Reportes" isExpanded={isSidebarExpanded} link="/dashboard/reports" />
          <MenuItem icon={<MessageSquare />} label="Conversaciones" isExpanded={isSidebarExpanded} link="/dashboard/conversations" />

          <div className="my-4 border-t border-gray-200"></div>

          <h3 className="text-gray-500 text-sm font-semibold px-4 mb-2">Admin</h3>
          <MenuItem icon={<Puzzle />} label="Integraciones" isExpanded={isSidebarExpanded} link="/dashboard/integrations" />
          <MenuItem icon={<Bell />} label="Notificaciones" isExpanded={isSidebarExpanded} link="/dashboard/notifications" />
          <MenuItem icon={<Flag />} label="Ayuda" isExpanded={isSidebarExpanded} link="/dashboard/help" />
          <MenuItem icon={<Settings />} label="Configuración" isExpanded={isSidebarExpanded} link="/dashboard/settings" />
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navbar */}
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between px-6 py-3">
            {/* Toggle Button */}
            <Button variant="ghost" onClick={toggleSidebar} className="p-1">
              <ChevronRight className={cn(
                "h-6 w-6 text-gray-400 transition-transform duration-300 ease-in-out",
                isSidebarExpanded ? "rotate-0" : "rotate-180"
              )} />
            </Button>

            {/* Search Bar */}
            <div className="flex-1 max-w-xl mx-4">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
                <Input type="search" placeholder="Buscar..." className="pl-8 w-full" />
              </div>
            </div>

            {/* User Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center">
                  <Image
                    src="/dashboard/avatar.png"
                    alt="User avatar"
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <div className="flex flex-col items-start">
                    <span className="mr-2">Antonio Niño De Rivera</span>
                    <span className="text-sm text-gray-500 mr-2">Gerente</span>
                  </div>

                  <ChevronDown className="h-4 w-4 text-gray-500" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  )
}

function MenuItem({ icon, label, isExpanded, link }: { icon: React.ReactNode; label: string; isExpanded: boolean, link: string }) {
  return (
    <a href={link} className={cn(
      "flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 transition-all duration-300 ease-in-out",
      isExpanded ? "justify-start" : "justify-center"
    )}>
      <span className={cn("flex items-center justify-center", isExpanded ? "w-5" : "w-full")}>
        {icon}
      </span>
      {isExpanded && <span className="ml-2 transition-opacity duration-300">{label}</span>}
    </a>
  )
}