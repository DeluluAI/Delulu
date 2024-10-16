"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";

const formSchema = z.object({
  companyName: z.string().min(2, { message: "El nombre de la empresa es obligatorio." }),
  numberOfEmployees: z.string().optional(),
  industry: z.string().min(1, { message: "Por favor seleccione una industria." }),
  fullName: z.string().min(2, { message: "El nombre completo es obligatorio." }), 
  email: z.string().email({ message: "Dirección de correo electrónico inválida." }),
  phoneNumber: z.string().optional(),
  jobTitle: z.string().optional(),
  username: z.string().optional(),
  password: z.string().min(6, { message: "La contraseña debe tener al menos 6 caracteres." }),
  confirmPassword: z.string(),
  crmIntegration: z.string(),
  primaryGoal: z.string().optional(),
  howDidYouHear: z.string().optional(),
  communicationPreferences: z.boolean().optional(),
  termsAccepted: z.boolean().refine(val => val === true, { message: "Debe aceptar los términos." }),
}).refine(data => data.password === data.confirmPassword, {
  message: "Las contraseñas no coinciden.",
  path: ["confirmPassword"],
});

export function CompanySignUpForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: "",
      numberOfEmployees: "",
      industry: "",
      fullName: "",
      email: "",
      phoneNumber: "",
      jobTitle: "",
      username: "",
      password: "",
      confirmPassword: "",
      crmIntegration: "",
      primaryGoal: "",
      howDidYouHear: "",
      communicationPreferences: false,
      termsAccepted: false,
    },
  });

  function onSubmit( data: z.infer<typeof formSchema>) {
    toast({
      title: "Formulario enviado",
      description: (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="companyName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre de la empresa</FormLabel>
              <FormControl>
                <Input placeholder="Ingrese el nombre de su empresa" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="numberOfEmployees"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Número de empleados (Opcional)</FormLabel>
              <FormControl>
                <Input placeholder="Opcional" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="industry"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Industria</FormLabel>
              <Select onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccione industria" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="automotive">Automotriz</SelectItem>
                  <SelectItem value="finance">Finanzas</SelectItem>
                  <SelectItem value="retail">Comercio Minorista</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* User Contact Information */}
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre completo</FormLabel>
              <FormControl>
                <Input placeholder="Ingrese su nombre completo" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Dirección de correo electrónico</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Ingrese su correo electrónico" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Número de teléfono (Opcional)</FormLabel>
              <FormControl>
                <Input placeholder="Opcional" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Account Setup */}
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre de usuario (Opcional)</FormLabel>
              <FormControl>
                <Input placeholder="Elija un nombre de usuario" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contraseña</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Ingrese la contraseña" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirmar contraseña</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Confirme la contraseña" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* CRM Integration */}
        <FormField
          control={form.control}
          name="crmIntegration"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Integración con CRM</FormLabel>
              <Select onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccione un CRM" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="salesforce">Salesforce</SelectItem>
                  <SelectItem value="hubspot">HubSpot</SelectItem>
                  <SelectItem value="zoho">Zoho</SelectItem>
                  <SelectItem value="none">No uso un CRM</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Optional Information */}
        <FormField
          control={form.control}
          name="howDidYouHear"
          render={({ field }) => (
            <FormItem>
              <FormLabel>¿Cómo se enteró de nosotros? (Opcional)</FormLabel>
              <FormControl>
                <Input placeholder="Opcional" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Terms Acceptance */}
        <FormField
          control={form.control}
          name="termsAccepted"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-3">
                <Checkbox {...field} value={field.value.toString()} />
                Acepto los términos y condiciones
              </FormLabel>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Enviar</Button>
      </form>
    </Form>
  );
}
