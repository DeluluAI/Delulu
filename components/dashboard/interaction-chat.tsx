'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ChatData, Message } from '@/app/interfaces/interfaces'



function ChatMessage({ message, sender, chatData }: { message: Message, sender: 'employee' | 'client', chatData: ChatData }) {
  return (
    <div className={`flex ${sender === 'employee' ? 'justify-start' : 'justify-end'} mb-4`}>
      <div className={`flex ${sender === 'employee' ? 'flex-row' : 'flex-row-reverse'} items-start max-w-3/4`}>
        <Avatar className="w-10 h-10">
          <AvatarImage
            src={message.sender === 'employee' ? chatData.employee.avatar : chatData.client.avatar}
            alt={message.sender === 'employee' ? chatData.employee.name : chatData.client.name}
            className="object-cover"
          />
          <AvatarFallback>
            {(message.sender === 'employee' ? chatData.employee.name : chatData.client.name).split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        </Avatar>
        <div className={`mx-2 ${message.sender === 'employee' ? 'bg-[#3F5FFF]/20' : 'bg-[#E13BA3]/20'} rounded-lg p-3`}>
          <p className="text-sm text-black/[.65]">{message.content}</p>
          <span className="text-xs text-black/[.65] mt-1 block">{message.timestamp}</span>
        </div>
      </div>
    </div>
  )
}

export function InteractionChatComponent({ chatData }: { chatData: ChatData }) {
  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Prueba manejo SUV eléctrico agendada</CardTitle>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Avatar className="w-8 h-8 mr-2">
              <AvatarImage src={chatData.employee.avatar} alt={chatData.employee.name} />
              <AvatarFallback>{chatData.employee.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium">{chatData.employee.name}</span>
          </div>
          <div className="flex items-center">
            <span className="text-sm font-medium mr-2">{chatData.client.name}</span>
            <Avatar className="w-8 h-8">
              <AvatarImage src={chatData.client.avatar} alt={chatData.client.name} />
              <AvatarFallback>{chatData.client.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[600px] pr-4">
          {chatData.messages.map((message, index) => (
            <ChatMessage key={index} message={message} sender={message.sender} chatData={chatData} />
          ))}
        </ScrollArea>
      </CardContent>
    </Card>
  )
}