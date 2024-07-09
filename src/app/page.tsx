import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Award, ChevronRight } from "lucide-react";
import GetProfileData from "@/data/profiledata";
import parse from "html-react-parser";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { BriefcaseBusiness } from "lucide-react";
import { ExperienceCard } from "@/components/ExperienceCard";
import { TechStackCard } from "@/components/TechStackCard";

export default function Home() {
  const { intro, description, experiences, skillSet, testimonials } =
    GetProfileData();

  const randomInspiration = Math.floor(
    Math.random() * intro.inspirational.length
  );
  return (
    <main
      className="flex flex-col justify-start items-center px-16 pt-8 h-full w-full gap-4 font-mono"
      id="pageStart"
    >
      <div className="flex justify-between gap-6 w-full" id="aboutDevDiv">
        <h1 className="scroll-m-20 text-3xl font-extrabold tracking-wider text-justify lg:text-3xl">
          {parse(`${intro.inspirational[randomInspiration]}`)}
        </h1>
        <Button variant={"outline"} className="font-bold text-lg">
          Connect / <ChevronRight />
        </Button>
      </div>
      <Separator />
      <div className="max-w-4xl justify-center items-center w-full">
        <div className="grid grid-flow-row w-full gap-6 mt-8 md:grid-flow-col">
          <div className="border-2 rounded-xl bg-gray-900 lg:w-64 lg:h-64 sm:h-32 sm:w-32">
            <Image
              src="/images/avatar.png"
              alt="Muhammed mahmood Alam"
              width={320}
              height={320}
              style={{ objectFit: "contain", width: "100%", height: "auto" }}
            />
          </div>
          <div className="flex flex-col w-full space-y-3 justify-center">
            <h3 className="text-lg">{intro.greeting}</h3>
            <h2 className="text-2xl font-bold">
              {intro.firstName} {intro.lastName}
            </h2>
            <p className="text-lg text-justify">{intro.titleWithDescription}</p>
          </div>
        </div>
        <div className="w-full  mt-8">
          <div className="flex flex-row flex-wrap w-full gap-3">
            {description.skills.map((value, key) => {
              return (
                <Badge
                  variant={"outline"}
                  className="text-base px-4 hover:bg-gray-900 border-2"
                  key={`skills_badge_${key}`}
                >
                  {value}
                </Badge>
              );
            })}
          </div>
        </div>
        <div className="w-full  mt-8">
          <div className="flex flex-row flex-wrap w-full justify-between p-4">
            {description.data.map((exp, key) => {
              return (
                <div
                  className="flex flex-col p-4 Justify-center items-center gap-2"
                  key={`work_highlights_${key}`}
                >
                  <h2 className="text-xl font-bold">{exp.value}+</h2>
                  <h2 className="text-base  ">{exp.title}</h2>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Separator />
      <ExperienceCard />
      <Separator />
      <TechStackCard/>
      <div className="m-24"/>
    </main>
  );
}
