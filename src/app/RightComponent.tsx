import GetProfileData from "@/data/profiledata";
import { jumpToReleventDiv } from "@/lib/utils";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@radix-ui/react-tooltip";
import { User, FileText, Layers3, PartyPopper, Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function RightComponent() {
  const { intro } = GetProfileData();
  return (
    <div className="flex h-screen flex-row justify-between w-80 py-24 pl-8 pr-16 border-l-[3px] sticky top-0 left-0">
      <div className="flex flex-col space-y-4 justify-center items-end">
        {
          intro.socialLinks.map((link,key)=> {

            return (
              <div key={`socialLinks_${key}`}>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        className={`h-12 w-12 hover:border-2 hover:bg-gray-600 hover:bg-opacity-40
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
          })
        }
      </div>
    </div>
  );
}
