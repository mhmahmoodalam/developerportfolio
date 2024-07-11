"use client"
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ChevronRight } from "lucide-react";
import GetProfileData from "@/data/profiledata";
import parse from "html-react-parser";
import { ExperienceCard } from "@/components/ExperienceCard";
import { TechStackCard } from "@/components/TechStackCard";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { ContactForm } from "@/components/Connect";
import { jumpToReleventDiv } from "@/lib/utils";

export default function Home() {
  const { intro} =
    GetProfileData();

  const randomInspiration = Math.floor(
    Math.random() * intro.inspirational.length
  );
  return (
    <div
      className="flex flex-col justify-start items-center px-16 pt-8 h-full w-full gap-4 font-mono"
      id="pageStart"
    >
      <div className="flex justify-between gap-6 w-full" id="aboutDevDiv">
        <h1 className="scroll-m-20 text-3xl font-extrabold tracking-wider text-justify lg:text-3xl">
          {parse(`${intro.inspirational[randomInspiration]}`)}
        </h1>
        <Button
          variant={"outline"}
          className="font-bold text-lg bg-transparent"
          onClick={() => jumpToReleventDiv("connectDevDiv")}
        >
          Connect / <ChevronRight />
        </Button>
      </div>
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
      <div className="m-24" />
    </div>
  );
}
