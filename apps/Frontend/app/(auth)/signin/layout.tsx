import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tanix — The whiteboard you actually want",
  description:
    "Tanix is a hand-drawn virtual whiteboard. Infinite space, real-time collab, zero setup — and yes, it's free forever.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;

}