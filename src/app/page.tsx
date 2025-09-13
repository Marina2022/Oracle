import Image from "next/image";
import Hero from "@/components/homePage/1-hero/Hero";
import Models from "@/components/homePage/2-models/Models";
import WorkingProcess from "@/components/homePage/3-working-process/WorkingProcess";

export default function Home() {
  return (

      <main>
        <Hero />
        <Models />
        <WorkingProcess />
      </main>


  );
}
