import { z } from "zod";

// Paso 1: Creación de Cuenta
const accountCreationSchema = z.object({
    email: z.string().email({ message: "Dirección de correo electrónico inválida." }),
    confirmEmail: z.string().email({ message: "Dirección de correo electrónico inválida." }),
    personalInfo: z.object({
        fullName: z.string().min(2, { message: "El nombre completo es obligatorio." }),
        phoneNumber: z.string().min(10, { message: "El número de teléfono debe tener al menos 10 dígitos." }),
        password: z.string().min(6, { message: "La contraseña debe tener al menos 6 caracteres." }),
        confirmPassword: z.string(),
    }).refine(data => data.password === data.confirmPassword, {
        message: "Las contraseñas no coinciden.",
        path: ["confirmPassword"],
    }),
    verificationCode: z.string().optional(), // Código de verificación para confirmar cuenta
}).refine(data => data.email === data.confirmEmail, {
    message: "Las direcciones de correo no coinciden.",
    path: ["confirmEmail"],
});

// Paso 2: Información de tu Empresa
const companyInfoSchema = z.object({
    companyName: z.string().min(2, { message: "El nombre de la empresa es obligatorio." }),
    numberOfEmployees: z.string().optional(),
    industry: z.string().min(1, { message: "Por favor seleccione una industria." }),
    crmIntegration: z.string(),
    primaryGoal: z.string().optional(),
});

// Paso 3: Datos Adicionales
const additionalInfoSchema = z.object({
    gender: z.string().optional(),
    ethnicity: z.string().optional(),
    ageRange: z.string().optional(),
    communicationPreferences: z.boolean().optional(),
});

export const formSchema = z.object({
    accountCreation: accountCreationSchema,
    companyInfo: companyInfoSchema,
    additionalInfo: additionalInfoSchema,
    howDidYouHear: z.string().optional(),
    communicationPreferences: z.boolean().optional(),
    termsAccepted: z.boolean().refine(val => val === true, { message: "Debe aceptar los términos." }),
}).refine(data => data.accountCreation.personalInfo.password === data.accountCreation.personalInfo.confirmPassword, {
    message: "Las contraseñas no coinciden.",
    path: ["confirmPassword"],
});

export const userSchema = z.object({
    id: z.string().uuid(), // Identificador único del usuario
    email: z.string().email({ message: "Correo electrónico no válido" }),
    password: z.string().min(6, { message: "La contraseña debe tener al menos 6 caracteres." }),
    role: z.enum(["Admin", "Gerente", "Cliente", "Operador"]), // Enum para los diferentes roles
    fullName: z.string().min(1, { message: "El nombre completo es obligatorio." }),
    phoneNumber: z.string().optional(),
    status: z.enum(["Active", "Inactive", "Pending"]), // Para gestionar el estado de la cuenta
    createdAt: z.date().default(new Date()), // Fecha de creación
    updatedAt: z.date().default(new Date()), // Última fecha de actualización
});

export const userProfileSchema = z.object({
    userId: z.string().uuid(), // Referencia al ID del usuario
    roleSpecificInfo: z.object({
        adminData: z.object({
            permissions: z.array(z.string()).optional(), // Permisos específicos para el Admin
        }).optional(),
        gerenteData: z.object({
            managedTeams: z.array(z.string()).optional(), // Equipos gestionados por el Gerente
        }).optional(),
        clienteData: z.object({
            companyId: z.string().uuid(), // Referencia a la empresa asociada
            purchasedServices: z.array(z.string()).optional(), // Servicios adquiridos por el cliente
        }).optional(),
        operadorData: z.object({
            assignedTasks: z.array(z.string()).optional(), // Tareas asignadas al Operador
        }).optional(),
    }),
    preferences: z.object({
        language: z.string().default("es"), // Preferencias de idioma
        notificationsEnabled: z.boolean().default(true), // Notificaciones activadas o desactivadas
    }).optional(),
});

export const companySchema = z.object({
    id: z.string().uuid(),
    name: z.string().min(2, { message: "El nombre de la empresa es obligatorio." }),
    industry: z.string().min(1, { message: "Por favor seleccione una industria." }),
    numberOfEmployees: z.number().optional(),
    address: z.object({
        street: z.string().min(1),
        city: z.string().min(1),
        state: z.string().min(1),
        postalCode: z.string().min(1),
        country: z.string().min(1),
    }),
    contactInfo: z.object({
        phone: z.string().optional(),
        email: z.string().email().optional(),
    }),
    createdAt: z.date().default(new Date()),
    updatedAt: z.date().default(new Date()),
});


// Para los servicios que vamos a dar de alta, Audio, Video, Datos, etc.
export const serviceSchema = z.object({
    id: z.string().uuid(),
    name: z.string().min(1, { message: "El nombre del servicio es obligatorio." }),
    description: z.string().min(1, { message: "La descripción del servicio es obligatoria." }),
    features: z.array(z.string()), // Lista de características del servicio
    price: z.number().min(0), // Precio del servicio
    isActive: z.boolean().default(true), // Estado del servicio
});

export const roleSchema = z.object({
    role: z.enum(["Admin", "Gerente", "Operador"]),
    permissions: z.array(
        z.enum([
            "create_user",
            "manage_teams",
            "view_reports",
            "access_dashboard",
            "manage_company_info",
        ])
    ),
});

export const activitySchema = z.object({
    id: z.string().uuid(),
    userId: z.string().uuid(), // ID del usuario que realiza la actividad
    action: z.string(), // Acción específica realizada
    timestamp: z.date().default(new Date()),
    details: z.record(z.string()).optional(), // Información adicional sobre la actividad
});

export const taskSchema = z.object({
    id: z.string().uuid(),
    assignedTo: z.string().uuid(), // ID del Operador o Cliente
    description: z.string().min(1, { message: "La descripción de la tarea es obligatoria." }),
    status: z.enum(["Pending", "In Progress", "Completed", "Cancelled"]),
    dueDate: z.date().optional(),
    createdAt: z.date().default(new Date()),
});

export const reportSchema = z.object({
    id: z.string().uuid(),
    title: z.string().min(1, { message: "El título del reporte es obligatorio." }),
    generatedBy: z.string().uuid(), // ID del usuario que genera el reporte
    data: z.record(z.any()), // Información sobre el análisis
    createdAt: z.date().default(new Date()),
});