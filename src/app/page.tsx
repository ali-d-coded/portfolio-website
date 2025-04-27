import Hero from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ali D Coded - Home",
  description: "Ali Afthab aka ali-d-coded's personal portfolio website",
}
export default function Home() {
  return (
    <div className="h-full">
     <Hero />
    </div>
  );
}

