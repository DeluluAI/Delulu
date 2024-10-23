'use client'

import React, { useState, useRef } from 'react'

import Link from 'next/link'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronDown, AlertCircle, CheckCircle2, RefreshCw, Trash2, Pencil, Plus } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

// Sample data
const teamMembers = [
  { id: 1, name: "Sergio H.", avatar: "/dashboard/avatars/avatar1.png" },
  { id: 2, name: "Andrea R.", avatar: "/dashboard/avatars/avatar2.png" },
  { id: 3, name: "Fernando", avatar: "/dashboard/avatars/avatar3.png" },
  { id: 4, name: "Jose M.", avatar: "/dashboard/avatars/avatar4.png" },
  { id: 5, name: "Edith R.", avatar: "/dashboard/avatars/avatar5.png" },
  { id: 6, name: "Cecilia N.", avatar: "/dashboard/avatars/avatar6.png" },
  { id: 7, name: "Jonas A.", avatar: "/dashboard/avatars/avatar7.png" },
  { id: 8, name: "Juan P.", avatar: "/dashboard/avatars/avatar8.png" },
  { id: 9, name: "Maria L.", avatar: "/dashboard/avatars/avatar9.png" },
  { id: 10, name: "Carlos G.", avatar: "/dashboard/avatars/avatar10.png" },
  { id: 11, name: "Luisa M.", avatar: "/dashboard/avatars/avatar11.png" },
  { id: 12, name: "Pedro R.", avatar: "/dashboard/avatars/avatar12.png" },
  { id: 13, name: "Ana T.", avatar: "/dashboard/avatars/avatar13.png" },
  { id: 14, name: "Miguel H.", avatar: "/dashboard/avatars/avatar14.png" },
  { id: 15, name: "Laura S.", avatar: "/dashboard/avatars/avatar15.png" },
  { id: 16, name: "Jorge V.", avatar: "/dashboard/avatars/avatar16.png" },
  { id: 17, name: "Elena F.", avatar: "/dashboard/avatars/avatar17.png" },
  { id: 18, name: "Roberto M.", avatar: "/dashboard/avatars/avatar18.png" },
  { id: 19, name: "Sandra L.", avatar: "/dashboard/avatars/avatar19.png" },
  { id: 20, name: "Diego G.", avatar: "/dashboard/avatars/avatar20.png" },
  { id: 21, name: "Isabel R.", avatar: "/dashboard/avatars/avatar21.png" },
  { id: 22, name: "Andrés V.", avatar: "/dashboard/avatars/avatar22.png" },
  { id: 23, name: "Carmen D.", avatar: "/dashboard/avatars/avatar23.png" },
  { id: 24, name: "Miguel H.", avatar: "/dashboard/avatars/avatar24.png" },
  { id: 25, name: "Laura S.", avatar: "/dashboard/avatars/avatar25.png" },
  { id: 26, name: "Jorge V.", avatar: "/dashboard/avatars/avatar26.png" },
];


const metrics = [
  { title: 'Experiencia en Prueba de Manejo Promedio', value: '87%', subtext: '56 Interacciones analizadas', status: 'Active' },
  { title: 'Preguntas a empleados promedio', value: '33', subtext: '56 Interacciones analizadas', status: 'Active' },
  { title: 'Calificación promedio', value: '88%', subtext: '56 Interacciones analizadas', status: 'Active' },
  { title: 'Cierre de Interacciones Totales', value: '23', subtext: '56 Interacciones analizadas', status: 'Active' },
]

function MetricCard({ title, value, subtext, status }: { title: string, value: string, subtext: string, status: string }) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <span className="text-2xl font-bold">{value}</span>
      </CardHeader>
      <CardContent>
        <p className="text-xs text-muted-foreground">{subtext}</p>
        <div className="flex items-center mt-2">
          {status === 'Active' ? (
            <CheckCircle2 className="h-4 w-4 text-green-500 mr-1" />
          ) : (
            <AlertCircle className="h-4 w-4 text-red-500 mr-1" />
          )}
          <span className="text-sm">{status}</span>
        </div>
      </CardContent>
    </Card>
  )
}

function EmployeeList() {
  const [searchTerm, setSearchTerm] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const filteredEmployees = teamMembers.filter(employee =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleInputClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" onClick={() => setIsOpen(true)}>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" onCloseAutoFocus={(e) => e.preventDefault()}>
        <div className="p-2" onClick={handleInputClick}>
          <Input
            type="search"
            placeholder="Search employees..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            autoFocus
            ref={inputRef}
          />
        </div>
        {filteredEmployees.map((employee, index) => (
          <DropdownMenuItem key={index} onSelect={(e) => e.preventDefault()} onFocus={(e) => e.preventDefault()}>
            <Link href={`/dashboard/team/${employee.id}`} className="flex items-center w-full" onMouseDown={(e) => e.preventDefault()}>
              <Avatar className="h-8 w-8 mr-2">
                <AvatarImage src={employee.avatar} alt={employee.name} className="w-10 h-10 object-cover" />
                <AvatarFallback>{employee.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              {employee.name}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function CRUDButtons() {
  return (
    <div className="flex space-x-2 mb-4">
      <Button variant="outline" size="sm">
        <Plus className="mr-2 h-4 w-4" />
        Agregar Empleado
      </Button>
      <Button variant="outline" size="sm">
        <Pencil className="mr-2 h-4 w-4" />
        Editar Empleado
      </Button>
      <Button variant="outline" size="sm">
        <Trash2 className="mr-2 h-4 w-4" />
        Eliminar Empleado
      </Button>
      <Button variant="outline" size="sm">
        <RefreshCw className="mr-2 h-4 w-4" />
        Actualizar
      </Button>
    </div>
  )
}

export function MyTeamDashboardComponent() {
  return (
    <div className="p-8 space-y-8">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold">BMW Pdte. Masaryk</h1>
          <p className="text-muted-foreground">22 employees</p>
        </div>
        <CRUDButtons />
      </div>

      <div className="flex items-center space-x-2">
        <TooltipProvider>
          {teamMembers.slice(0, 5).map((member, index) => (
            <Tooltip key={index}>
              <TooltipTrigger>
                <Avatar>
                  <AvatarImage src={member.avatar} alt={member.name} className="w-10 h-10 object-cover" />
                  <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
              </TooltipTrigger>
              <TooltipContent>
                <p>{member.name}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
        <EmployeeList />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <MetricCard
            key={index}
            title={metric.title}
            value={metric.value}
            subtext={metric.subtext}
            status={metric.status}
          />
        ))}
      </div>

      <div className="flex justify-center">
        <Button variant="outline">View health score</Button>
      </div>
    </div>
  )
}
