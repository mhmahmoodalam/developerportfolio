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
          bg-opacity-25 md:w-48 md:h-48 lg:w-64 lg:h-64 h-48 w-48"
        >
          <Image
            src={ProfilePic}
            alt="Muhammed mahmood Alam"
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="flex flex-col w-full lg:space-y-3 justify-center">
          <h3 className="text-base lg:text-xl">{intro.greeting}</h3>
          <h2 className="text-lg lg:text-2xl font-bold">
            {intro.firstName} {intro.lastName}
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-justify">{intro.titleWithDescription}</p>
        </div>
      </div>
      <div className="w-full  mt-8">
        <div className="flex flex-row flex-wrap w-full gap-3">
          {description.skills.map((value, key) => {
            return (
              <Badge
                variant={"outline"}
                className=" px-4 hover:bg-gray-900 border-2"
                key={`skills_badge_${key}`}
              >
                <span className="text-[10px] md:text-sm lg:text-base font-normal">{value}</span>
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
                className="flex flex-col p-4 Justify-center items-center gap-2 w-full md:w-auto"
                key={`work_highlights_${key}`}
              >
                <h2 className="text-xl font-bold text-center">{exp.value}+</h2>
                <h2 className="text-base text-center ">{exp.title}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
