"use client";

import Image from "next/image";
import GetProfileData from "@/data/profiledata";
import { PartyPopper , MapPin, Linkedin} from "lucide-react";
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

export const Testimonials = () => {
  const { testimonials } = GetProfileData();
  return (
    <div
      className="flex flex-col max-w-4xl justify-center items-start  w-full mt-16 gap-8 mb-8"
      id="testimonials"
    >
      <div className="flex flex-row gap-4">
        <PartyPopper className="h-8 w-8" />
        <h3 className="text-2xl">{testimonials.title}</h3>
      </div>
      <h3 className="text-xl">{testimonials.description}</h3>
      <div className="flex w-full gap-12 flex-wrap mt-8">
        {testimonials.data.map((people, key) => {
          return (
            <div
              className="flex w-full gap-6 flex-wrap border-2 justify-start items-center rounded-lg md:p-12 sm:p-6 bg-gray-300 bg-opacity-15"
              key={`testimonials_${key}`}
            >
              <div className="flex flex-row gap-4 justify-between items-start w-full">
                <div className="flex flex-row sm:flex-wrap md:flex-nowrap md:gap-2 sm:gap-4 justify-start items-center">
                  <img
                    className="h-auto md:w-24 sm:w-16 rounded-full"
                    src={people.profilePic}
                    alt={people.name}
                  ></img>
                  <div className="flex md:text-base sm:text-sm flex-col md:gap-0 sm:gap-1 justify-start items-start w-full pl-4 sm:pl-2">
                    <p className="md:text-xl sm:text-lg">{people.name}</p>
                    <p >{people.role}</p>
                    <p >{people.company}</p>
                    <div className="flex flex-row flex-nowrap gap-2">
                      <MapPin className="h-auto w-4" />
                      {people.location}
                    </div>
                  </div>
                </div>
                <div className="text-lg font-bold rounded-lg border-2 p-2 hover:bg-gray-600 hover:bg-opacity-40 ">
                  <a href={people.socialLink}>
                    <Linkedin className="w-8 h-auto" />
                  </a>
                </div>
              </div>

              <div>
                <p className="font-normal md:text-lg sm:text-sm">{people.comment}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
