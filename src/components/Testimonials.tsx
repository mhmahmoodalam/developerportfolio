
import GetProfileData from "@/data/profiledata";
import { PartyPopper , MapPin, Linkedin} from "lucide-react";

export const Testimonials = () => {
  const { testimonials } = GetProfileData();
  return (
    <div
      className="flex flex-col max-w-4xl justify-center items-start  w-full mt-16 gap-8 mb-12"
      id="testimonials"
    >
      <div className="flex flex-row gap-4 items-center">
        <PartyPopper className="h-8 w-8" />
        <h3 className="text-2xl">{testimonials.title}</h3>
      </div>
      <h3 className="text-xl">{testimonials.description}</h3>
      <div className="flex w-full gap-12 flex-wrap mt-8">
        {testimonials.data.map((people, key) => {
          return (
            <div
              className="flex w-full gap-6 flex-wrap border-2 justify-start items-center rounded-lg md:p-12 p-6 bg-gray-300 bg-opacity-15"
              key={`testimonials_${key}`}
            >
              <div className="flex flex-row gap-4 justify-between items-start w-full">
                <div className="flex flex-row flex-nowrap md:gap-2 gap-4 justify-start items-center">
                  <img
                    className="h-auto md:w-24 w-16 rounded-full"
                    src={people.profilePic}
                    alt={people.name}
                  ></img>
                  <div className="flex md:text-base text-[10px] flex-col md:gap-0 gap-1 justify-start items-start w-full md:pl-4">
                    <p className="md:text-xl text-[12px]">{people.name}</p>
                    <p >{people.role}</p>
                    <p >{people.company}</p>
                    <div className="flex flex-row flex-nowrap gap-2">
                      <MapPin className="h-auto w-3 md:w-4" />
                      {people.location}
                    </div>
                  </div>
                </div>
                <div className="text-lg font-bold rounded-lg border-2 p-2 hover:bg-gray-600 hover:bg-opacity-40 ">
                  <a href={people.socialLink}>
                    <Linkedin className="w-3 md:w-8 h-auto" />
                  </a>
                </div>
              </div>

              <div>
                <p className="font-normal md:text-lg text-sm">{people.comment}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
