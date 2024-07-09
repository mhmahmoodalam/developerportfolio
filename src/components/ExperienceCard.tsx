"use client";

import * as React from "react";
import GetProfileData from "@/data/profiledata";
import { Badge } from "./ui/badge";
import { BriefcaseBusiness, Circle } from "lucide-react";
import Link from "next/link";

export const ExperienceCard = () => {
  const { experiences } = GetProfileData();

  return (
    <div className="flex flex-col max-w-4xl justify-center items-start  w-full mt-16 gap-8">
      <div className="flex flex-row gap-4">
        <BriefcaseBusiness className="h-8 w-8" />
        <h3 className="text-2xl">{experiences.title}</h3>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-xl">Highlights</h3>
        <ul className="space-y-2 px-6">
          {experiences.about.map((info, key) => {
            return (
              <li
                className="list-disc text-lg"
                key={`experience_highlights_${key}`}
              >
                {" "}
                {info}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex flex-col w-full gap-12 mt-16">
        {experiences.history.map((exp, key) => {
          return (
            <div
              className="flex flex-col gap-4 border-2 rounded-lg p-8"
              key={`experience_card_${key}`}
            >
              <div className="flex flex-row gap-4 justify-between items-center w-full">
                <div className="flex flex-row gap-2 justify-start items-center">
                  <img
                    className="h-auto w-36 rounded-lg"
                    src={exp.logo}
                    alt={exp.company}
                  ></img>
                  <p className="text-lg px-2 py-1 hover:bg-gray-900 border-2 rounded-lg h-10">
                    {exp.type}
                  </p>
                </div>
                <div className="text-lg font-bold">
                  {exp.startDate} - {exp.endDate || "Present"}
                </div>
              </div>
              <div className="flex text-xl flex-col gap-2 justify-start items-start w-full pl-2">
                <p>{exp.company}</p>
                <a href={exp.url}>{exp.url.replace("https://", "")} </a>
                <p>Partner Company - {exp.partnerCompany.name}</p>
              </div>
              <div className="border-2 text-xl rounded-lg p-8 space-y-4">
                <h2 className="font-bold">{exp.role}</h2>
                <p className="font-normal">
                  {exp.responsibilities.flatMap((x, key) => {
                    return x + ". ";
                  })}
                </p>
              </div>
              <div className="flex flex-col mt-8 gap-4">
                <h2 className="text-xl font-bold">Role transitions</h2>
                <div>
                  {exp.roleChanges.map((changes, key) => {
                    return (
                      <div
                        className="flex flex-row items-center gap-2"
                        key={`role_transitions_${key}`}
                      >
                        <Circle
                          className={`h-4 w-4 ${
                            key === 0
                              ? "fill-gray-100 text-gray-100"
                              : "fill-gray-600 text-gray-600"
                          }`}
                        />
                        <span>{changes.title}</span>
                        <span>{changes.date}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
