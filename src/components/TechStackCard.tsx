"use client";

import Image from "next/image";
import GetProfileData from "@/data/profiledata";
import { Layers3 } from "lucide-react";
import ApolloSvg from "@/assets/images/skills/apollo-graphql.svg"
import AzureSvg from "@/assets/images/skills/azure.svg";
import JavaSvg from "@/assets/images/skills/java.svg";
import HtmlSvg from "@/assets/images/skills/html.svg";
import CSS3Svg from "@/assets/images/skills/css.svg";
import DockerSvg from "@/assets/images/skills/docker.svg";
import GraphQLSvg from "@/assets/images/skills/graphql.svg";
import HibernateSvg from "@/assets/images/skills/hibernate.svg";
import JSSvg from "@/assets/images/skills/javascript.svg";
import KubernetsSvg from "@/assets/images/skills/kubernets.svg";
import NextSvg from "@/assets/images/skills/next.svg";
import ReactSvg from "@/assets/images/skills/react.svg";
import SpringSvg from "@/assets/images/skills/spring.svg";
import TailwindSvg from "@/assets/images/skills/tailwindcss.svg";
import XamarinSvg from "@/assets/images/skills/xamarin.svg";
import CsharpSvg from "@/assets/images/skills/csharp.svg";
import HelmSvg from "@/assets/images/skills/helm.svg";
import MongoDbSvg from "@/assets/images/skills/mongodb.svg";
import PostgresSvg from "@/assets/images/skills/postgresql.svg";
import PostmanSvg from "@/assets/images/skills/postman.svg";
import FigmaSvg from "@/assets/images/skills/figma.svg";



export const TechStackCard = () => {
  const { skillSet } = GetProfileData();

  return (
    <div
      className="flex flex-col max-w-4xl justify-center items-start  w-full mt-16 gap-8"
      id="techStack"
    >
      <div className="flex flex-row gap-4">
        <Layers3 className="h-8 w-8" />
        <h3 className="text-2xl">{skillSet.title}</h3>
      </div>
      <h3 className="text-xl">{skillSet.description}</h3>
      <div className="flex w-full gap-12 flex-wrap mt-10 mb-10 border-2 justify-start items-center rounded-lg p-12 bg-gray-300 bg-opacity-15">
        <div className="w-16 h-auto">
          <Image
            src={HtmlSvg}
            alt="html5"
            fill={false}
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="w-16 h-auto">
          <Image
            src={TailwindSvg}
            alt="tailwind"
            fill={false}
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="w-16 h-auto">
          <Image
            src={CSS3Svg}
            alt="css3"
            fill={false}
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="w-16 h-auto">
          <Image
            src={JSSvg}
            alt="javascript"
            fill={false}
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="w-16 h-auto">
          <Image
            src={ReactSvg}
            alt="reactjs"
            fill={false}
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="w-24 h-auto">
          <Image
            src={NextSvg}
            alt="nextjs"
            fill={false}
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="w-16 h-auto">
          <Image
            src={JavaSvg}
            alt="java"
            fill={false}
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="w-16 h-auto">
          <Image
            src={SpringSvg}
            alt="spring boot"
            fill={false}
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="w-16 h-auto">
          <Image
            src={HibernateSvg}
            alt="hibernate"
            fill={false}
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="w-16 h-auto">
          <Image
            src={PostgresSvg}
            alt="postgres"
            fill={false}
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="w-16 h-auto">
          <Image
            src={MongoDbSvg}
            alt="mongodb"
            fill={false}
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="w-16 h-auto">
          <Image
            src={DockerSvg}
            alt="docker"
            fill={false}
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="w-16 h-auto">
          <Image
            src={KubernetsSvg}
            alt="kubernetes"
            fill={false}
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="w-16 h-auto">
          <Image
            src={HelmSvg}
            alt="helm"
            fill={false}
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="w-16 h-auto">
          <Image
            src={GraphQLSvg}
            alt="graphql"
            fill={false}
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="w-48 h-auto">
          <Image
            src={ApolloSvg}
            alt="Apollo-Link-State"
            fill={false}
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="w-16 h-auto">
          <Image
            src={AzureSvg}
            alt="azure"
            fill={false}
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="w-16 h-auto">
          <Image
            src={CsharpSvg}
            alt="c#"
            fill={false}
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="w-16 h-auto">
          <Image
            src={XamarinSvg}
            alt="xamarin"
            fill={false}
            style={{ objectFit: "contain" }}
          />
        </div>

        <div className="w-16 h-auto">
          <Image
            src={PostmanSvg}
            alt="postman"
            fill={false}
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="w-12 h-auto">
          <Image
            src={FigmaSvg}
            alt="figma"
            fill={false}
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
};
