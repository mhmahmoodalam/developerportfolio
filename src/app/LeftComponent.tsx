"use client";

import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, FileText, Send, ChevronsUp, Layers3, PartyPopper } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { jumpToReleventDiv } from "@/lib/utils";

import { Button } from "@/components/ui/button";

import ProfilePic from "@/assets/images/profile/avatar.png";

export default function LeftComponent() {
  
  return (
    <div className="flex h-screen flex-col justify-between w-80 pt-24 pl-16 pr-8  pb-16 border-r-[3px] sticky top-0 left-0">
      <div className="flex flex-col justify-center items-end">
        <Avatar className="h-16 w-16">
          <Image src={ProfilePic} alt="@MuhammedMahmoodAlam" className="w-16 h-16"/>
          <AvatarFallback>MA</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-col space-y-4 justify-center items-end">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                className={`h-12 w-12 hover:border-2 hover:bg-gray-600 hover:bg-opacity-40
           flex items-center justify-center rounded-lg px-2 `}
                variant={"link"}
                onClick={() => jumpToReleventDiv("aboutDevDiv")}
              >
                <User />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>About</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                className={`h-12 w-12 hover:border-2 flex hover:bg-gray-600 hover:bg-opacity-40 items-center justify-center rounded-lg px-2 `}
                variant={"link"}
                onClick={() => jumpToReleventDiv("expDevDiv")}
              >
                <FileText />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Experiences</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                className={`h-12 w-12 hover:border-2 flex hover:bg-gray-600 hover:bg-opacity-40 items-center justify-center rounded-lg px-2 `}
                variant={"link"}
                onClick={() => jumpToReleventDiv("techStack")}
              >
                <Layers3 />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Tech stack</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              
              <Button
                className={`h-12 w-12 hover:border-2 flex hover:bg-gray-600 hover:bg-opacity-40 items-center justify-center rounded-lg px-2 `}
                variant={"link"}
                onClick={() => jumpToReleventDiv("testimonials")}
              >
                <PartyPopper />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Testimonials</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                className={`h-12 w-12 hover:border-2 flex items-center hover:bg-gray-600 hover:bg-opacity-40 justify-center rounded-lg px-2 `}
                variant={"link"}
                onClick={() => jumpToReleventDiv("connectDevDiv")}
              >
                <Send />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Connect</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <div className="flex flex-col space-y-4 justify-center items-end">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                className="h-12 w-12 hover:border-2 flex items-center hover:bg-gray-600 hover:bg-opacity-40 justify-center rounded-lg px-2"
                variant={"link"}
                onClick={() => jumpToReleventDiv("pageStart")}
              >
                <ChevronsUp />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Scroll to top</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
}
