import Image from "next/image";
import Hero from "./home/page";
import Navbar from "@/components/component-ui/Navbar";
import { AuroraBackground } from "@/components/ui/shadcn-io/aurora-background";

export default function Home() {
  return (
    <AuroraBackground>
      <Navbar />
      <Hero />
    </AuroraBackground>
  );
}
