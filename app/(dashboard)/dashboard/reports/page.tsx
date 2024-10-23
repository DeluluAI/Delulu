import { SalesReport } from "@/components/dashboard/sales-report"
import { Interaction } from "@/app/interfaces/interfaces"

export default function ReportsPage() {
    const interactions: Interaction[] = [
        {
            id: 1,
            date: "2023-06-15 10:30",
            summary: "Test drive for SUV model",
            employee: { name: "John Smith", avatar: "/dashboard/avatars/avatar1.png" },
            duration: 45,
            topics: ["Test Drive", "SUV", "Car Model"],
        },
        {
            id: 2,
            date: "2023-06-15 13:15",
            summary: "Financing options for sedan",
            employee: { name: "Alice Johnson", avatar: "/dashboard/avatars/avatar2.png" },
            duration: 30,
            topics: ["Finance", "Sedan", "Car Model"],
        },
        {
            id: 3,
            date: "2023-06-16 09:45",
            summary: "Leasing discussion for electric car",
            employee: { name: "Bob Williams", avatar: "/dashboard/avatars/avatar3.png" },
            duration: 60,
            topics: ["Leasing", "Electric Car", "Car Model"],
        },
        {
            id: 4,
            date: "2023-06-16 14:00",
            summary: "Trade-in valuation for used truck",
            employee: { name: "Carol Davis", avatar: "/dashboard/avatars/avatar4.png" },
            duration: 40,
            topics: ["Trade-in", "Truck", "Used Car"],
        },
        {
            id: 5,
            date: "2023-06-17 11:30",
            summary: "Warranty options for luxury vehicle",
            employee: { name: "David Brown", avatar: "/dashboard/avatars/avatar5.png" },
            duration: 35,
            topics: ["Warranty", "Luxury", "Car Model"],
        },
        {
            id: 6,
            date: "2023-06-18 15:45",
            summary: "Test drive for electric car",
            employee: { name: "Eve Green", avatar: "/dashboard/avatars/avatar6.png" },
            duration: 50,
            topics: ["Test Drive", "Electric Car", "Car Model"],
        },
        {
            id: 7,
            date: "2023-06-19 10:15",
            summary: "Financing options for sedan",
            employee: { name: "Frank White", avatar: "/dashboard/avatars/avatar7.png" },
            duration: 30,
            topics: ["Finance", "Sedan", "Car Model"],
        },
        {
            id: 8,
            date: "2023-06-20 12:30",
            summary: "Leasing discussion for electric car",
            employee: { name: "Grace Black", avatar: "/dashboard/avatars/avatar8.png" },
            duration: 60,
            topics: ["Leasing", "Electric Car", "Car Model"],
        },
        {
            id: 9,
            date: "2023-06-21 14:45",
            summary: "Trade-in valuation for used truck",
            employee: { name: "Henry Blue", avatar: "/dashboard/avatars/avatar9.png" },
            duration: 40,
            topics: ["Trade-in", "Truck", "Used Car"],
        },
        {
            id: 10,
            date: "2023-06-22 11:00",
            summary: "Warranty options for luxury vehicle",
            employee: { name: "Ivy Red", avatar: "/dashboard/avatars/avatar10.png" },
            duration: 35,
            topics: ["Warranty", "Luxury", "Car Model"],
        },
    ]

    return (
        <div className="px-8">
            <h1 className="text-3xl font-bold mb-8">Reporte de ventas</h1>
            <SalesReport interactions={interactions} />
        </div>
    )
}