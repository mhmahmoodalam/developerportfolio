"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, FileText, Send, ChevronsUp } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function LeftComponent() {
  const jumpToReleventDiv = (id: string) => {
    const relevantDiv = document.getElementById(id);
    // behavior: "smooth" parameter for smooth movement
    console.log(" scrolling to", id, relevantDiv)
    relevantDiv?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="flex h-screen flex-col justify-between w-80 pt-24 pl-16 pr-8  pb-16 border-r-[3px] sticky top-0 left-0">
      <div className="flex flex-col justify-center items-end">
        <Avatar className="h-16 w-16">
          <AvatarImage src="/images/avatar.png" alt="@MuhammedMahmoodAlam" />
          <AvatarFallback>MA</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-col space-y-4 justify-center items-end">
        <Button
          className={`h-12 w-12 hover:border-2 flex items-center justify-center rounded-lg px-2 `}
          variant={"link"}
          onClick={() => jumpToReleventDiv("aboutDevDiv")}
        >
          <User />
        </Button>
        <Button
          className={`h-12 w-12 hover:border-2 flex items-center justify-center rounded-lg px-2 `}
          variant={"link"}
          onClick={() => jumpToReleventDiv("expDevDiv")}
        >
          <FileText />
        </Button>
        <Button
          className={`h-12 w-12 hover:border-2 flex items-center justify-center rounded-lg px-2 `}
          variant={"link"}
          onClick={() => jumpToReleventDiv("connectDevDiv")}
        >
          <Send />
        </Button>
      </div>

      <div className="flex flex-col space-y-4 justify-center items-end">
        <Button
          className="h-12 w-12 hover:border-2 flex items-center justify-center rounded-lg px-2"
          variant={"link"}
          onClick={() => jumpToReleventDiv("pageStart")}
        >
          <ChevronsUp />
        </Button>
      </div>
    </div>
  );
}
