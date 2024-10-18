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
