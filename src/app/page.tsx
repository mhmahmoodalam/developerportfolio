import { Separator } from "@/components/ui/separator";
import { ExperienceCard } from "@/components/ExperienceCard";
import { TechStackCard } from "@/components/TechStackCard";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { ContactForm } from "@/components/Connect";
import { InspirationalHeader } from "@/components/InpirationalHeader";

export default function Home() {  
  return (
    <div
      className="flex flex-col justify-start items-center px-4 md:px-8 lg:px-16 pt-8 h-full w-full md:w-full gap-4 font-mono"
      id="pageStart"
    >
      <InspirationalHeader />
      <Separator />
      <About />
      <Separator />
      <ExperienceCard />
      <Separator />
      <TechStackCard />
      <Separator />
      <Testimonials />
      <Separator />
      <ContactForm />
      <div className="mt-20" />
    </div>
  );
}
