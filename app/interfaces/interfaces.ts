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

export interface CompanyRegistrationData {
    // Paso 1: Creación de Cuenta
    accountCreation: {
      email: string;
      confirmEmail: string;
      personalInfo: {
        fullName: string;
        phoneNumber: string;
        password: string;
        confirmPassword: string;
      };
      verificationCode?: string; // Campo para el código de verificación enviado por SMS
    };
  
    // Paso 2: Información de tu Empresa
    companyInfo: {
      companyName: string;
      numberOfEmployees?: string;
      industry: string;
      crmIntegration: string;
      primaryGoal?: string;
    };
  
    // Paso 3: Datos Adicionales
    additionalInfo: {
      gender?: string; // Campo para identificar el género (ej. masculino, femenino, no binario, etc.)
      ethnicity?: string; // Campo para identificar la etnia
      ageRange?: string; // Rango de edad
      communicationPreferences?: boolean; // Preferencias de comunicación
    };
  
    // Otros campos globales
    termsAccepted: boolean;
  }
  