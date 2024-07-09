"use client";

import * as React from "react";
import GetProfileData from "@/data/profiledata";
import { Badge } from "./ui/badge";
import { Circle, Layers3 } from "lucide-react";
import Link from "next/link";

export const TechStackCard = () => {
  const { skillSet } = GetProfileData();

  return (
    <div className="flex flex-col max-w-4xl justify-center items-start  w-full mt-16 gap-8">
      <div className="flex flex-row gap-4">
        <Layers3 className="h-8 w-8" />
        <h3 className="text-2xl">{skillSet.title}</h3>
      </div>
      <h3 className="text-xl">{skillSet.description}</h3>
      <div className="flex flex-row w-full gap-12 mt-16 border-2 rounded-lg p-8">
        {skillSet.percentageFormat.map((exp, key) => {
          return (
            <div
              className="flex flex-row gap-4 border-2 rounded-lg p-4 w-1/2"
              key={`skills_card_${key}`}
            >
              <div className="flex flex-row gap-4 justify-between items-center w-full">
                <img className="h-auto w-10 rounded-lg"></img>
                <div className="flex flex-col justify-start items-start">
                  <p className="text-lg">Java</p>
                  <p className="text-md">Programming language</p>
                </div>
                <img className="h-auto w-10 rounded-lg"></img>
              </div>              
            </div>
          );
        })}
      </div>
    </div>
  );
};
