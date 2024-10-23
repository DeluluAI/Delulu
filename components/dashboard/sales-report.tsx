'use client'

import React from 'react'

import { Button } from "@/components/ui/button"
import { Interaction } from '@/app/interfaces/interfaces'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowUpRight, Download, FileSpreadsheet } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

const summaryCards = [
  { title: "Interacciones Totales", subtitle: "Resumen de interacciones totales", value: "$85,625" },
  { title: "Modelo Más Preguntado", subtitle: "Modelo de auto mas preguntado", value: "3,721" },
  { title: "Tiempo de Interacción", subtitle: "Tiempo promedio de interaccion", value: "1,245" },
  { title: "Promedio de Equipo", subtitle: "Calificacion promedio del equipo", value: "12,548" },
]

interface SummaryCardProps {
  title: string;
  subtitle: string;
  value: string;
}

function SummaryCard({ card }: { card: SummaryCardProps }) {
  return (
    <Card >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-semibold">{card.title}</CardTitle>
        <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent >
        <p className="text-muted-foreground text-xs mb-4">{card.subtitle}</p>
        <div className="text-2xl font-bold">{card.value}</div>
      </CardContent>
    </Card>
  )
}

function ProductTable({ interactions }: { interactions: Interaction[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[50px]">#</TableHead>
          <TableHead>Product</TableHead>
          <TableHead>Visit</TableHead>
          <TableHead>Sales</TableHead>
          <TableHead>Revenue</TableHead>
          <TableHead>Today</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {interactions.map((interaction) => (
          <TableRow key={interaction.id} className='hover:bg-gray-100'>
            <TableCell>{interaction.id}</TableCell>
            <TableCell className="font-medium">
              <div className="flex items-center space-x-2">
                <Avatar className="w-6 h-6">
                  <AvatarImage src={interaction.employee.avatar} />
                  <AvatarFallback>{interaction.employee.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <span>{interaction.employee.name}</span>
              </div>
            </TableCell>
            <TableCell>{interaction.date}</TableCell>
            <TableCell>{interaction.summary}</TableCell>
            <TableCell>{interaction.duration}</TableCell>
            <TableCell>{interaction.topics}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export function SalesReport({ interactions }: { interactions: Interaction[] }) {
  return (
    <div className="min-h-screen">
      <main className="">
        <div className="flex justify-between items-center mb-6">
          <Select defaultValue="november-2023">
            <SelectTrigger className="w-[180px] bg-white" >
              <SelectValue placeholder="Select month" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="november-2023">Noviembre 2024</SelectItem>
              <SelectItem value="october-2023">Octubre 2024</SelectItem>
              <SelectItem value="september-2023">Septiembre 2024</SelectItem>
            </SelectContent>
          </Select>

          <div className='flex flex-row gap-2'>
            <Button variant="outline" size="sm">
              Generar PDF
              <Download className="ml-4" width={16} height={16} />
            </Button>

            <Button variant="outline" size="sm">
              Exportar a CSV
              <FileSpreadsheet className="ml-4" width={16} height={16} />
            </Button>
          </div>

        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {summaryCards.map((card, index) => (
            <SummaryCard key={index} card={card} />
          ))}
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Product Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <ProductTable interactions={interactions} />
          </CardContent>
        </Card>
      </main>
    </div>
  )
}