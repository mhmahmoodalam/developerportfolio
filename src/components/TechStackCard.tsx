"use client";

import Image from "next/image";
import GetProfileData from "@/data/profiledata";
import { Layers3 } from "lucide-react";
import ApolloSvg from "@/assets/images/apollo-graphql.svg"
import AzureSvg from "@/assets/images/azure.svg";
import JavaSvg from "@/assets/images/java.svg";
import HtmlSvg from "@/assets/images/html.svg";
import CSS3Svg from "@/assets/images/css.svg";
import DockerSvg from "@/assets/images/docker.svg";
import GraphQLSvg from "@/assets/images/graphql.svg";
import HibernateSvg from "@/assets/images/hibernate.svg";
import JSSvg from "@/assets/images/javascript.svg";
import KubernetsSvg from "@/assets/images/kubernets.svg";
import NextSvg from "@/assets/images/next.svg";
import ReactSvg from "@/assets/images/react.svg";
import SpringSvg from "@/assets/images/spring.svg";
import TailwindSvg from "@/assets/images/tailwindcss.svg";
import XamarinSvg from "@/assets/images/xamarin.svg";
import CsharpSvg from "@/assets/images/csharp.svg";
export const TechStackCard = () => {
  const { skillSet } = GetProfileData();

  return (
    <div className="flex flex-col max-w-4xl justify-center items-start  w-full mt-16 gap-8">
      <div className="flex flex-row gap-4">
        <Layers3 className="h-8 w-8" />
        <h3 className="text-2xl">{skillSet.title}</h3>
      </div>
      <h3 className="text-xl">{skillSet.description}</h3>
      <div className="flex w-full gap-12 flex-wrap mt-16 border-2 justify-start items-center rounded-lg p-12">
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
      </div>
    </div>
  );
};
