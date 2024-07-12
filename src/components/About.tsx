import GetProfileData from "@/data/profiledata";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import ProfilePic from "@/assets/images/profile/avatar.png"

export const About = () => {
    const { intro, description } =
      GetProfileData();
  return (
    <div className="max-w-4xl justify-center items-center w-full">
      <div className="grid grid-flow-row w-full gap-6 mt-8 md:grid-flow-col">
        <div
          className="border-2 rounded-xl  bg-gray-600
          bg-opacity-25 lg:w-64 lg:h-64 sm:h-32 sm:w-32"
        >
          <Image
            src={ProfilePic}
            alt="Muhammed mahmood Alam"
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="flex flex-col w-full space-y-3 justify-center">
          <h3 className="text-lg">{intro.greeting}</h3>
          <h2 className="text-2xl font-bold">
            {intro.firstName} {intro.lastName}
          </h2>
          <p className="text-lg text-justify">{intro.titleWithDescription}</p>
        </div>
      </div>
      <div className="w-full  mt-8">
        <div className="flex flex-row flex-wrap w-full gap-3">
          {description.skills.map((value, key) => {
            return (
              <Badge
                variant={"outline"}
                className="text-base px-4 hover:bg-gray-900 border-2"
                key={`skills_badge_${key}`}
              >
                {value}
              </Badge>
            );
          })}
        </div>
      </div>
      <div className="w-full  mt-8">
        <div className="flex flex-row flex-wrap w-full justify-between p-4">
          {description.data.map((exp, key) => {
            return (
              <div
                className="flex flex-col p-4 Justify-center items-center gap-2"
                key={`work_highlights_${key}`}
              >
                <h2 className="text-xl font-bold">{exp.value}+</h2>
                <h2 className="text-base  ">{exp.title}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
