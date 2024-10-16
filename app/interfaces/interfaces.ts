export interface Employee {
    id: string;
    name: string;
    position: string;
    avatar: string;
    email: string;
    phone: string;
    location: string;
    totalInteractions: number;
    resolutionRate: number;
    conversionRate: number;
    averageSentiment: number;
    specializations: string[];
    topAchievements: string[];
}

export interface Interaction {
    id: number;
    date: string;
    summary: string;
    employee: {
        name: string;
        avatar: string;
    };
    duration: number;
    topics: string[];
}

export interface ChatMessage { 
    sender: 'employee' | 'client';
    content: string;
    timestamp: string;
}

export interface Message {
    id: number;
    sender: 'employee' | 'client';
    content: string;
    timestamp: string;
}

export interface ChatData {
    chatId: string;
    employee: {
        name: string;
        avatar: string;
    };
    client: {
        name: string;
        avatar: string;
    };
    messages: Message[];
}