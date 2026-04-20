import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "dashboard",
  description: "Create your free Tanix account. No credit card needed.",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}