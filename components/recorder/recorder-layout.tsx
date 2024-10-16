'use client'

import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"
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

export function RecorderLayoutComponent({ children }: { children: React.ReactNode }) {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true)

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded)
  }

  return (
    <div className="flex h-screen bg-gray-100">
    

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navbar */}
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between px-6 py-3">

            <Image src="/dashboard/bavaria.png" alt="logo" width={50} height={50} />
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
                    <span className="mr-2">Alejandro Fernandez</span>
                    <span className="text-sm text-gray-500 mr-2">Sales Representative</span>
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
        <main className="flex-1 overflow-y-auto bg-slate-50">
          {children}
        </main>
      </div>
    </div>
  )
}

function MenuItem({ icon, label, isExpanded, link }: { icon: React.ReactNode; label: string; isExpanded: boolean, link: string }) {
  return (
    <a href={link} className={cn(
      "flex items-center py-2 text-gray-700 hover:bg-gray-100 transition-all duration-300 ease-in-out",
      isExpanded ? "justify-start pl-12" : "justify-center"
    )}>
      <span className={cn("flex items-center justify-center", isExpanded ? "w-5" : "w-full")}>
        {icon}
      </span>
      {isExpanded && <span className="ml-2 transition-opacity duration-300">{label}</span>}
    </a>
  )
}