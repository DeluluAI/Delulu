import { DashboardLayoutComponent } from "@/components/dashboard/dashboard-layout";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Delulu",
  description: "Transforma tus interacciones con tus clientes en insights con Delulu.",
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (   
    <DashboardLayoutComponent>
        <main>
        {children}
        </main>
    </DashboardLayoutComponent>
  );
}
