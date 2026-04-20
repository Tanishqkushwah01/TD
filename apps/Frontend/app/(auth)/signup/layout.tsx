import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Sign Up — Tanix",
  description: "Create your free Tanix account. No credit card needed.",
};

export default function SignUpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}