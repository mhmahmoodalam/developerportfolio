"use client"

import { Button } from "@/components/ui/button";
import GetProfileData from "@/data/profiledata";
import { jumpToReleventDiv } from "@/lib/utils";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@radix-ui/react-tooltip";
import { ChevronsUp } from "lucide-react";
import Link from "next/link";
export default function RightComponent({ isMobile }) {
  const { intro } = GetProfileData();
  const background = isMobile
    ? "bg-gray-600 bg-opacity-80 backdrop-blur-sm"
    : "";
  const orientation = isMobile
    ? "flex-row justify-between items-center w-full h-14 p-4 "
    : "flex-col justify-center items-start gap-4";
  const position = isMobile
    ? "fixed bottom-0 left-0 z-100"
    : "sticky top-0 left-0";
  return (
    <div
      className={`flex ${orientation} ${background} h-screen border-l-[3px]  ${position}  px-2 lg:w-80 lg:py-24 lg:pl-8 lg:pr-16`}
    >
      <div className={`flex ${orientation}  `}>
        {intro.socialLinks.map((link, key) => {
          return (
            <div key={`socialLinks_${key}`}>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      className={`h-8 w-8 lg:h-12 lg:w-12 hover:border-2 hover:bg-gray-600 hover:bg-opacity-40
           flex items-center justify-center rounded-lg px-2 `}
                      href={link.link}
                    >
                      {link.iconClass}
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{link.name}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          );
        })}
        {isMobile && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  className="h-8 w-8 lg:h-12 lg:w-12 hover:border-2 flex items-center hover:bg-gray-600 hover:bg-opacity-40 justify-center rounded-lg px-2"
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
        )}
      </div>
    </div>
  );
}
