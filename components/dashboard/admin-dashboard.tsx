'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Area, AreaChart, Line, LineChart } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Image from 'next/image'
import { ChatBubbleIcon, FontStyleIcon, LapTimerIcon, MagicWandIcon, TimerIcon } from '@radix-ui/react-icons'

const dailyInteractions = [
  { day: "Lun", interactions: 53 },
  { day: "Mar", interactions: 42 },
  { day: "Mie", interactions: 60 },
  { day: "Jue", interactions: 55 },
  { day: "Vie", interactions: 65 },
  { day: "Sab", interactions: 42 },
  { day: "Dom", interactions: 58 },
]

const monthlyTrends = [
  { topic: "Credito Automotriz", value: 44 },
  { topic: "Mazda 3 2022", value: 33 },
  { topic: "Intercambio y refinanciamiento", value: 22 },
  { topic: "CX3 2021", value: 21 },
  { topic: "Plan de seguro automotriz", value: 18 },
]

const interruptionFrequency = [
  { date: "2015", frequency: 30 },
  { date: "2016", frequency: 40 },
  { date: "2017", frequency: 45 },
  { date: "2018", frequency: 50 },
  { date: "2019", frequency: 49 },
]

const resolutionRate = [
  { year: "2015", rate: 20 },
  { year: "2016", rate: 40 },
  { year: "2017", rate: 60 },
  { year: "2018", rate: 80 },
  { year: "2019", rate: 90 },
]

const lastInteractions = [
  { topic: "Financiamiento Mazda 3", employee: "Sergio H.", duration: "17:33 min", img: "/dashboard/avatars/avatar1.png" },
  { topic: "Intercambio de auto usado", employee: "Andrea R.", duration: "17:33 min", img: "/dashboard/avatars/avatar2.png" },
  { topic: "Refinanciamiento Sentra", employee: "Fernando", duration: "17:33 min", img: "/dashboard/avatars/avatar3.png" },
  { topic: "Consulta sobre garantía", employee: "Jose M.", duration: "17:33 min", img: "/dashboard/avatars/avatar4.png" },
  { topic: "Queja sobre mecánico", employee: "Edith R.", duration: "17:33 min", img: "/dashboard/avatars/avatar5.png" },
  { topic: "Solicitud prueba de manejo", employee: "Cecilia N.", duration: "17:33 min", img: "/dashboard/avatars/avatar6.png" },
  { topic: "Plan de seguro automotriz", employee: "Jonas A.", duration: "17:33 min", img: "/dashboard/avatars/avatar7.png" },
]

function DailyInteractionsChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Interacciones Diarias</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={{ interactions: { label: "Interacciones", color: "hsl(var(--chart-1))" } }} className="h-auto">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={dailyInteractions}>
              <XAxis dataKey="day" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="interactions" fill="#3F5FFF" />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

function MonthlyTrendsChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Tendencias Octubre 2024</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={{ value: { label: "Valor", color: "hsl(var(--chart-1))" } }} className="h-auto min-h-[200px] w-auto min-w-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={monthlyTrends} layout="vertical">
              <XAxis type="number" />
              <YAxis dataKey="topic" type="category" width={150} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="value" fill="#3F5FFF" />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

function InterruptionFrequencyChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Frecuencia de interrupciones</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={{ frequency: { label: "Frecuencia", color: "hsl(var(--chart-1))" } }} className="h-auto">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={interruptionFrequency}>
              <XAxis dataKey="date" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area type="monotone" dataKey="frequency" stroke="#3F5FFF" fill="#3F5FFF" fillOpacity={0.2} />
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

function ResolutionRateChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Tasa de resolución primera interacción</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={{ rate: { label: "Tasa", color: "hsl(var(--chart-1))" } }} className="h-auto">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={resolutionRate}>
              <XAxis dataKey="year" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line type="monotone" dataKey="rate" stroke="#3F5FFF" />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

function LastInteractionsTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Ultimas interacciones</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Tema</TableHead>
              <TableHead>Empleado</TableHead>
              <TableHead>Duración</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {lastInteractions.map((interaction, index) => (
              <TableRow key={index}>
                <TableCell>{interaction.topic}</TableCell>
                <TableCell className="flex items-center gap-2">
                  <Image src={interaction.img} alt="Avatar" width={20} height={20} className="rounded-full object-cover h-6 w-6"  />
                  {interaction.employee}
                </TableCell>
                <TableCell>{interaction.duration}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

function InishgtCards() {
  const cards = [
    { title: "Interacciones totales", value: "647", icon: <ChatBubbleIcon className="w-6 h-6" /> , iconBg: "bg-[#3F5FFF]" },
    { title: "Mejor vendedor", value: "Sergio H.", icon: <MagicWandIcon className="w-6 h-6" /> , iconBg: "bg-[#3F5FFF]" },
    { title: "Tiempo promedio de interacción", value: "12:34", icon: <LapTimerIcon className="w-6 h-6" /> , iconBg: "bg-[#3F5FFF]" },
    { title: "Tema mas conversado", value: "Financiamiento Mazda 3", icon: <FontStyleIcon className="w-6 h-6" /> , iconBg: "bg-[#3F5FFF]" },
    { title: "Tiempo de resolución", value: "12:34", icon: <TimerIcon className="w-6 h-6" /> , iconBg: "bg-[#3F5FFF]" },
  ]
  return (
    <div className="flex flex-row gap-8">

      {cards.map((card, index) => (
        <Card key={index} className=' w-auto md:w-1/5 flex flex-col items-center justify-center'>
          <CardContent className="flex flex-col items-center justify-center gap-2 p-4">
            <div className={`w-10 h-10 flex items-center justify-center rounded-full ${card.iconBg} text-white`}>
              {card.icon}
            </div>
            <div className="flex flex-col items-center">
              <span className="text-lg font-semibold text-center">{card.value}</span>
              <span className="text-sm text-gray-500 text-center">{card.title}</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export function AdminDashboardComponent() {
  return (
    <div className="p-8 space-y-8 bg-slate-50">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      <InishgtCards />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <DailyInteractionsChart />
        <MonthlyTrendsChart />
        <InterruptionFrequencyChart />
        <ResolutionRateChart />
      </div>
      <LastInteractionsTable />
    </div>
  )
}