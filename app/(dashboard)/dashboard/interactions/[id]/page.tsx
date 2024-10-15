import { InteractionChatComponent } from "@/components/dashboard/interaction-chat"
import { ChatData } from "@/app/interfaces/interfaces"

export default function InteractionChatPage({ params }: { params: { id: number } }) {

    // Sample chat data
    const chatData: ChatData[] = [
        {
            chatId: "1",
            employee: {
                name: "Sergio H.",
                avatar: "/dashboard/avatars/avatar1.png"
            },
            client: {
                name: "Sarah Johnson",
                avatar: "/placeholder.svg?height=40&width=40"
            },
            messages: [
                { id: 1, sender: 'employee', content: "¡Hola! Bienvenido a BMW Polanco. ¿En qué puedo ayudarte hoy?", timestamp: "14:30" },
                { id: 2, sender: 'client', content: "Hola, estoy interesado en el nuevo modelo de SUV eléctrico que tienen.", timestamp: "14:31" },
                { id: 3, sender: 'employee', content: "¡Excelente elección! Nuestro nuevo SUV eléctrico, el EcoXplorer, ha sido muy popular. ¿Te gustaría saber más sobre sus características o prefieres programar una prueba de manejo?", timestamp: "14:33" },
                { id: 4, sender: 'client', content: "Primero me gustaría conocer sus características, especialmente el alcance y el tiempo de carga.", timestamp: "14:35" },
                { id: 5, sender: 'employee', content: "El EcoXplorer tiene un impresionante alcance de 300 millas con una sola carga. En cuanto a la carga, puede alcanzar el 80% de su capacidad en solo 30 minutos usando una estación de carga rápida. En casa, con un cargador de Nivel 2, tarda alrededor de 8 horas en cargarse completamente.", timestamp: "14:37" },
                { id: 6, sender: 'client', content: "Eso suena prometedor. ¿Y qué hay del espacio interior y las características tecnológicas?", timestamp: "14:39" },
                { id: 7, sender: 'employee', content: "El EcoXplorer ofrece asientos espaciosos para 5 adultos con amplio espacio para las piernas. Cuenta con un sistema de infoentretenimiento con pantalla táctil grande, carga inalámbrica para teléfonos y avanzadas funciones de asistencia al conductor, incluyendo control de crucero adaptativo y asistencia para mantenerse en el carril.", timestamp: "14:41" },
                { id: 8, sender: 'client', content: "¡Impresionante! Creo que me gustaría programar una prueba de manejo. ¿Qué disponibilidad tienen esta semana?", timestamp: "14:43" },
                { id: 9, sender: 'employee', content: "¡Qué bueno escucharlo! Tenemos disponibilidad para pruebas de manejo el jueves por la tarde o el viernes por la mañana. ¿Cuál te vendría mejor?", timestamp: "14:45" },
                { id: 10, sender: 'client', content: "El jueves por la tarde sería perfecto. ¿Podemos decir alrededor de las 3 PM?", timestamp: "14:47" },
                { id: 11, sender: 'employee', content: "Te he programado para una prueba de manejo del EcoXplorer este jueves a las 3 PM. ¿Hay algo más que te gustaría saber antes de tu visita?", timestamp: "14:49" },
                { id: 12, sender: 'client', content: "No, eso es todo por ahora. ¡Gracias por tu ayuda!", timestamp: "14:51" },
                { id: 13, sender: 'employee', content: "¡De nada! Esperamos verte el jueves. Si tienes alguna pregunta antes de entonces, no dudes en contactarnos. ¡Que tengas un buen día!", timestamp: "14:52" },
            ]
        },
        {
            chatId: "2",
            employee: {
                name: "Sergio H.",
                avatar: "/dashboard/avatars/avatar1.png"
            },
            client: {
                name: "Sarah Johnson",
                avatar: "/placeholder.svg?height=40&width=40"
            },
            messages: [
                { id: 1, sender: 'employee', content: "¡Hola! Bienvenido a BMW Polanco. ¿En qué puedo ayudarte hoy?", timestamp: "09:15" },
                { id: 2, sender: 'client', content: "Hola, quiero saber más sobre el sedán híbrido que tienen.", timestamp: "09:16" },
                { id: 3, sender: 'employee', content: "Claro, el sedán híbrido es nuestro modelo más eficiente en consumo de combustible y combina potencia con sostenibilidad. ¿Te gustaría agendar una prueba de manejo?", timestamp: "09:18" },
                { id: 4, sender: 'client', content: "Sí, me gustaría probarlo este fin de semana. ¿Es posible?", timestamp: "09:20" },
                { id: 5, sender: 'employee', content: "¡Por supuesto! Podemos agendar la prueba para el sábado a las 10 AM. ¿Te viene bien?", timestamp: "09:21" },
                { id: 6, sender: 'client', content: "Perfecto, estaré ahí. Gracias.", timestamp: "09:23" },
                { id: 7, sender: 'employee', content: "¡Genial! Nos vemos el sábado. Que tengas un excelente día.", timestamp: "09:24" }
            ]
        },
        {
            chatId: "3",
            employee: {
                name: "Sergio H.",
                avatar: "/dashboard/avatars/avatar1.png"
            },
            client: {
                name: "Sarah Johnson",
                avatar: "/placeholder.svg?height=40&width=40"
            },
            messages: [
                { id: 1, sender: 'employee', content: "¡Hola! Bienvenido a BMW Polanco. ¿En qué puedo ayudarte hoy?", timestamp: "09:15" },
                { id: 2, sender: 'client', content: "Hola, quiero saber más sobre el sedán híbrido que tienen.", timestamp: "09:16" },
                { id: 3, sender: 'employee', content: "Claro, el sedán híbrido es nuestro modelo más eficiente en consumo de combustible y combina potencia con sostenibilidad. ¿Te gustaría agendar una prueba de manejo?", timestamp: "09:18" },
                { id: 4, sender: 'client', content: "Sí, me gustaría probarlo este fin de semana. ¿Es posible?", timestamp: "09:20" },
                { id: 5, sender: 'employee', content: "¡Por supuesto! Podemos agendar la prueba para el sábado a las 10 AM. ¿Te viene bien?", timestamp: "09:21" },
                { id: 6, sender: 'client', content: "Perfecto, estaré ahí. Gracias.", timestamp: "09:23" },
                { id: 7, sender: 'employee', content: "¡Genial! Nos vemos el sábado. Que tengas un excelente día.", timestamp: "09:24" }
            ]
        },
        {
            chatId: "4",
            employee: {
                name: "Sergio H.",
                avatar: "/dashboard/avatars/avatar1.png"
            },
            client: {
                name: "Sarah Johnson",
                avatar: "/placeholder.svg?height=40&width=40"
            },
            messages: [
                { id: 1, sender: 'employee', content: "¡Hola! Bienvenido a BMW Polanco. ¿En qué puedo ayudarte hoy?", timestamp: "09:15" },
                { id: 2, sender: 'client', content: "Hola, quiero saber más sobre el sedán híbrido que tienen.", timestamp: "09:16" },
                { id: 3, sender: 'employee', content: "Claro, el sedán híbrido es nuestro modelo más eficiente en consumo de combustible y combina potencia con sostenibilidad. ¿Te gustaría agendar una prueba de manejo?", timestamp: "09:18" },
                { id: 4, sender: 'client', content: "Sí, me gustaría probarlo este fin de semana. ¿Es posible?", timestamp: "09:20" },
                { id: 5, sender: 'employee', content: "¡Por supuesto! Podemos agendar la prueba para el sábado a las 10 AM. ¿Te viene bien?", timestamp: "09:21" },
                { id: 6, sender: 'client', content: "Perfecto, estaré ahí. Gracias.", timestamp: "09:23" },
                { id: 7, sender: 'employee', content: "¡Genial! Nos vemos el sábado. Que tengas un excelente día.", timestamp: "09:24" }
            ]
        },
        {
            chatId: "5",
            employee: {
                name: "Sergio H.",
                avatar: "/dashboard/avatars/avatar1.png"
            },
            client: {
                name: "Sarah Johnson",
                avatar: "/placeholder.svg?height=40&width=40"
            },
            messages: [
                { id: 1, sender: 'employee', content: "¡Hola! Bienvenido a BMW Polanco. ¿En qué puedo ayudarte hoy?", timestamp: "09:15" },
                { id: 2, sender: 'client', content: "Hola, quiero saber más sobre el sedán híbrido que tienen.", timestamp: "09:16" },
                { id: 3, sender: 'employee', content: "Claro, el sedán híbrido es nuestro modelo más eficiente en consumo de combustible y combina potencia con sostenibilidad. ¿Te gustaría agendar una prueba de manejo?", timestamp: "09:18" },
                { id: 4, sender: 'client', content: "Sí, me gustaría probarlo este fin de semana. ¿Es posible?", timestamp: "09:20" },
                { id: 5, sender: 'employee', content: "¡Por supuesto! Podemos agendar la prueba para el sábado a las 10 AM. ¿Te viene bien?", timestamp: "09:21" },
                { id: 6, sender: 'client', content: "Perfecto, estaré ahí. Gracias.", timestamp: "09:23" },
                { id: 7, sender: 'employee', content: "¡Genial! Nos vemos el sábado. Que tengas un excelente día.", timestamp: "09:24" }
            ]
        },
        {
            chatId: "6",
            employee: {
                name: "Sergio H.",
                avatar: "/dashboard/avatars/avatar1.png"
            },
            client: {
                name: "Sarah Johnson",
                avatar: "/placeholder.svg?height=40&width=40"
            },
            messages: [
                { id: 1, sender: 'employee', content: "¡Hola! Bienvenido a BMW Polanco. ¿En qué puedo ayudarte hoy?", timestamp: "09:15" },
                { id: 2, sender: 'client', content: "Hola, quiero saber más sobre el sedán híbrido que tienen.", timestamp: "09:16" },
                { id: 3, sender: 'employee', content: "Claro, el sedán híbrido es nuestro modelo más eficiente en consumo de combustible y combina potencia con sostenibilidad. ¿Te gustaría agendar una prueba de manejo?", timestamp: "09:18" },
                { id: 4, sender: 'client', content: "Sí, me gustaría probarlo este fin de semana. ¿Es posible?", timestamp: "09:20" },
                { id: 5, sender: 'employee', content: "¡Por supuesto! Podemos agendar la prueba para el sábado a las 10 AM. ¿Te viene bien?", timestamp: "09:21" },
                { id: 6, sender: 'client', content: "Perfecto, estaré ahí. Gracias.", timestamp: "09:23" },
                { id: 7, sender: 'employee', content: "¡Genial! Nos vemos el sábado. Que tengas un excelente día.", timestamp: "09:24" }
            ]
        },
       
    ]
    return (
        <InteractionChatComponent chatData={chatData[params.id-1]} />
    )
}