"use client"

import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import GetProfileData from "@/data/profiledata";
import parse from "html-react-parser";

import { jumpToReleventDiv } from "@/lib/utils";
import { useState, useEffect } from "react";

export const InspirationalHeader = () => {
  const { intro} = GetProfileData();

  const [inspirationalText, setInspirationalText] = useState(
    intro.inspirational[0]
  );

   useEffect(() => {
    const randomInspiration = Math.floor(
      Math.random() * intro.inspirational.length
    );
    setInspirationalText(intro.inspirational[randomInspiration])
  }, []) 
  
  return (
    <div className="flex justify-between gap-6 w-full" id="aboutDevDiv">
      <h1
        className="scroll-m-20 text-xl font-extrabold tracking-wider  lg:text-3xl"
        suppressHydrationWarning
      >
        {parse(`${inspirationalText}`)}
      </h1>
      <Button
        variant={"outline"}
        className="font-bold text-base lg:text-lg bg-transparent"
        onClick={() => jumpToReleventDiv("connectDevDiv")}
      >
        Connect / <ChevronRight />
      </Button>
    </div>
  );
};
