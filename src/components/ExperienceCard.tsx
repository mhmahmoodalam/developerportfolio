"use client";
import Image from "next/image";
import * as React from "react";
import GetProfileData from "@/data/profiledata";
import { BriefcaseBusiness, Circle } from "lucide-react";

export const ExperienceCard = () => {
  const { experiences } = GetProfileData();

  return (
    <div
      className="flex flex-col max-w-4xl justify-center items-start  w-full mt-16 mb-10 gap-8"
      id="expDevDiv"
    >
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
      <div className="flex flex-col gap-2">
        <h3 className="text-xl">Achievements</h3>
        <ul className="space-y-2 px-6">
          {experiences.achievements.map((info, key) => {
            return (
              <li
                className="list-disc text-lg"
                key={`experience_achievements_${key}`}
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
              className="flex flex-col gap-4 border-2 rounded-lg p-8 bg-gray-600 bg-opacity-25"
              key={`experience_card_${key}`}
            >
              <div className="flex flex-row gap-4 justify-between items-center w-full">
                <div className="flex flex-row gap-4 justify-start items-center sm:flex-wrap md:flex-nowrap">
                  <Image
                    src={exp.logo}
                    alt={exp.company}
                    fill={false}
                    style={{ objectFit: "contain" }}
                    className="w-32 h-auto ml-2"
                  />
                  <p className="text-md px-2 py-1 bg-gray-900 border-2 rounded-lg h-9">
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
                <p className="font-normal">{exp.summary}</p>
              </div>
              <div className="flex flex-col mt-8 gap-4">
                <h2 className="text-xl font-bold">Role transitions</h2>
                <div>
                  {exp.roleChanges.map((changes, key) => {
                    return (
                      <div
                        className="flex flex-row items-center gap-2 sm:flex-wrap md:flex-nowrap"
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
                        <span className="sm:ml-6 md:ml-0">{changes.date}</span>
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
