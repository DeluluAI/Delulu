'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Interaction } from "@/app/interfaces/interfaces"

function TableRenderer({ interactions }: { interactions: Interaction[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Fecha</TableHead>
          <TableHead>Resumen</TableHead>
          <TableHead>Empleado</TableHead>
          <TableHead>Duración</TableHead>
          <TableHead>Temas</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {interactions.map((interaction) => (
          <TableRow 
            key={interaction.id} 
            className="cursor-pointer hover:bg-gray-100" 
            onClick={() => window.location.href = `/dashboard/interactions/${interaction.id}`}
          >
            <TableCell>{interaction.date}</TableCell>
            <TableCell>{interaction.summary}</TableCell>
            <TableCell>
              <div className="flex items-center space-x-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={interaction.employee.avatar} alt={interaction.employee.name} className='object-cover' />
                  <AvatarFallback>{interaction.employee.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <span>{interaction.employee.name}</span>
              </div>
            </TableCell>
            <TableCell>{interaction.duration} min</TableCell>
            <TableCell>
              <div className="flex flex-wrap gap-1">
                {interaction.topics.map((topic, index) => (
                  <Badge key={index} variant="secondary">{topic}</Badge>
                ))}
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export function InteractionsTable({ interactions }: { interactions: Interaction[] }) {
  const [currentPage, setCurrentPage] = React.useState(1)
  const itemsPerPage = 5
  const totalPages = Math.ceil(interactions.length / itemsPerPage)

  const paginatedInteractions = interactions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  return (
    <Card>
      <CardHeader>
        <CardTitle>Interacciones Recientes</CardTitle>
      </CardHeader>
      <CardContent>
        <TableRenderer interactions={paginatedInteractions} />
        <div className="mt-4">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    setCurrentPage(prev => Math.max(prev - 1, 1))
                  }}
                />
              </PaginationItem>
              {[...Array(totalPages)].map((_, i) => (
                <PaginationItem key={i}>
                  <PaginationLink
                    href="#"
                    isActive={currentPage === i + 1}
                    onClick={(e) => {
                      e.preventDefault()
                      setCurrentPage(i + 1)
                    }}
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    setCurrentPage(prev => Math.min(prev + 1, totalPages))
                  }}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </CardContent>
    </Card>
  )
}