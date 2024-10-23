'use client'

import React from 'react'
import { Employee } from "@/app/interfaces/interfaces";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Line, LineChart, Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from "recharts"
import { ChartContainer,  ChartTooltipContent } from "@/components/ui/chart"
import { Mail, Phone, MapPin } from 'lucide-react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Sample performance data for charts
const monthlyPerformance = [
  { month: "Jan", sales: 12, interactions: 80 },
  { month: "Feb", sales: 15, interactions: 95 },
  { month: "Mar", sales: 18, interactions: 110 },
  { month: "Apr", sales: 16, interactions: 100 },
  { month: "May", sales: 21, interactions: 130 },
  { month: "Jun", sales: 24, interactions: 150 },
]

const sentimentAnalysis = [
  { interaction: 1, sentiment: 0.8 },
  { interaction: 2, sentiment: 0.9 },
  { interaction: 3, sentiment: 0.7 },
  { interaction: 4, sentiment: 1.0 },
  { interaction: 5, sentiment: 0.8 },
  { interaction: 6, sentiment: 0.6 },
  { interaction: 7, sentiment: 0.9 },
  { interaction: 8, sentiment: 0.7 },
  { interaction: 9, sentiment: 0.8 },
  { interaction: 10, sentiment: 0.9 },
]

const interactions = [
  { id: 1, date: "2023-06-01", customer: "Ana Rodríguez", vehicle: "Tesla Model 3", outcome: "Prueba de Manejo Programada", sentiment: 0.9 },
  { id: 2, date: "2023-06-02", customer: "Carlos Gómez", vehicle: "Ford F-150", outcome: "Venta Completada", sentiment: 1.0 },
  { id: 3, date: "2023-06-03", customer: "Elena Martínez", vehicle: "BMW X5", outcome: "Seguimiento Programado", sentiment: 0.7 },
  { id: 4, date: "2023-06-04", customer: "Diego Fernández", vehicle: "Toyota Camry", outcome: "Venta Completada", sentiment: 0.8 },
  { id: 5, date: "2023-06-05", customer: "Isabel López", vehicle: "Audi A4", outcome: "Discusión de Financiamiento", sentiment: 0.6 },
]

function EmployeeInfoCard({ employee }: { employee: Employee }) {
  return (
    <Card className='flex flex-col justify-start  items-center'>
      <CardContent className="flex flex-col md:flex-row items-center space-x-4 h-full">
        <Avatar className="h-24 w-24">
          <AvatarImage src={employee.avatar} alt={employee.name} className='object-cover' />
          <AvatarFallback>{employee.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
        </Avatar>
        <div className='flex flex-col justify-start items-start'>
          <h2 className="text-2xl font-bold">{employee.name}</h2>
          <p className="text-muted-foreground">{employee.position}</p>
          <div className="flex items-center space-x-2 mt-2">
            <Mail className="h-4 w-4" />
            <span>{employee.email}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="h-4 w-4" />
            <span>{employee.phone}</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4" />
            <span>{employee.location}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function PerformanceMetricsCard({ employee }: { employee: Employee }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Performance Metrics</CardTitle>
      </CardHeader>
      <CardContent className="px-6">
        <div>
          <div className="flex justify-between mb-1">
            <span>Total Interactions</span>
            <span>{employee.totalInteractions}</span>
          </div>
          <Progress value={(employee.totalInteractions / 200) * 100} />
        </div>
        <div>
          <div className="flex justify-between mb-1">
            <span>Resolution Rate</span>
            <span>{employee.resolutionRate}%</span>
          </div>
          <Progress value={employee.resolutionRate} />
        </div>
        <div>
          <div className="flex justify-between mb-1">
            <span>Conversion Rate</span>
            <span>{employee.conversionRate}%</span>
          </div>
          <Progress value={employee.conversionRate * 2} />
        </div>
        <div>
          <div className="flex justify-between mb-1">
            <span>Average Sentiment</span>
            <span>{employee.averageSentiment.toFixed(2)}</span>
          </div>
          <Progress value={employee.averageSentiment * 100} />
        </div>
      </CardContent>
    </Card>
  )
}

function SpecializationsCard({ employee }: { employee: Employee }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Specializations</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {employee.specializations.map((specialization, index) => (
            <Badge key={index} variant="secondary">{specialization}</Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

function AchievementsCard({ employee }: { employee: Employee }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Achievements</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-5 space-y-2">
          {employee.topAchievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

function PerformanceChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Rendimiento Mensual</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={{
          sales: { label: "Sales", color: "hsl(var(--chart-1))" },
          interactions: { label: "Interactions", color: "hsl(var(--chart-2))" }
        }} className="h-auto">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={monthlyPerformance}>
              <XAxis dataKey="month" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip content={<ChartTooltipContent />} />
              <Legend />
              <Line yAxisId="left" type="monotone" dataKey="sales" name="Ventas" stroke="#3F5FFF" />
              <Line yAxisId="right" type="monotone" dataKey="interactions" name="Interacciones" stroke="#FF3FE5" />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

function SentimentAnalysisChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Análisis de Sentimiento (Últimas 10 Interacciones)</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={{
          sentiment: { label: "Sentimiento", color: "#3F5FFF" }
        }} className="h-auto w-auto">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={sentimentAnalysis}>
              <XAxis dataKey="interaction" />
              <YAxis domain={[0, 1]} />
              <Tooltip content={<ChartTooltipContent />} />
              <Bar dataKey="sentiment" fill="#3F5FFF" />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

function InteractionsTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Interactions</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Fecha</TableHead>
              <TableHead>Cliente</TableHead>
              <TableHead>Vehículo</TableHead>
              <TableHead>Resultado</TableHead>
              <TableHead>Sentimiento</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {interactions.map((interaction) => (
              <TableRow key={interaction.id}>
                <TableCell>{interaction.date}</TableCell>
                <TableCell>{interaction.customer}</TableCell>
                <TableCell>{interaction.vehicle}</TableCell>
                <TableCell>{interaction.outcome}</TableCell>
                <TableCell>{interaction.sentiment.toFixed(2)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

export function EmployeePerformanceComponent({ employee }: { employee: Employee }) {
  return (
    <div className="p-8 space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <EmployeeInfoCard employee={employee} />
        <PerformanceMetricsCard employee={employee} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <SpecializationsCard employee={employee} />
        <AchievementsCard employee={employee} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <PerformanceChart />
        <SentimentAnalysisChart />
      </div>
      <InteractionsTable />
    </div>
  )
}