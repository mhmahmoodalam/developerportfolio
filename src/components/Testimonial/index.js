import React from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
//import MobileStepper from "@mui/material/MobileStepper";
import { isMobile } from 'react-device-detect';
import { Column, Text, Img } from "components";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const TestimonialBox = (props) => {
    return (
        <div className="sm:wd-[360px]">
            <Column className="flex flex-col items-center justify-start md:p-[11px] p-[16px] sm:px-[15px] sm:py-[8px] w-[100%]">
              <Column className="flex flex-col items-center justify-start md:p-[13px] p-[20px] sm:px-[15px] sm:py-[10px] rounded-radius10 w-[100%]">
                <Text
                  className="sm:wd-[360px] font-normal leading-[normal] not-italic text-center dark:text-primary_text text-primary_text_light md:tracking-ls1 sm:tracking-ls1 tracking-ls28000000000000003 w-[100%]"
                  as="h4"
                  variant="h4"
                >
                  {`"`+props.comment+`"`}
                </Text>
              </Column>
              <div className="variant4_light dark:variant4 h-[11px] sm:h-[6px] md:h-[8px] md:mt-[11px] mt-[16px] sm:mt-[8px] rounded-radius50 w-[11px] sm:w-[5px] md:w-[7px]"></div>
              <Img
                src={props.profilePic}
                className="sm:h-[32px] md:h-[40px] h-[64px] max-w-[100%] md:mt-[11px] mt-[16px] sm:mt-[8px] sm:w-[32px] md:w-[40px] w-[64px] rounded-full"
                alt="contrast"
              />
              <Column className="flex flex-col items-center justify-start md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] md:p-[5px] p-[8px] sm:px-[0] sm:py-[4px] sm:w-[100%] w-[52%]">
                <Text
                  className="not-italic dark:text-primary_text text-primary_text_light md:tracking-ls1 sm:tracking-ls1 tracking-ls2 w-[auto]"
                  variant="h4"
                >
                  {props.name}
                </Text>
                <Text
                  className="mb-[4px] mt-[12px] sm:mt-[6px] md:mt-[8px] not-italic dark:text-primary_text text-primary_text_light md:tracking-ls1 sm:tracking-ls1 tracking-ls2 w-[auto]"
                  variant="h5"
                >
                  {props.role}
                </Text>
                <Text
                  className=" not-italic dark:text-primary_text text-primary_text_light md:tracking-ls1 sm:tracking-ls1 tracking-ls2 w-[auto]"
                  variant="h5"
                >
                  {props.company}
                </Text>
              </Column>
            </Column>
        </div>
    )
}
const Testimonial= (testimonials) =>{
    const{ data } = testimonials
    const [activeStep, setActiveStep] = React.useState(0);
    //const maxSteps = data.length;

    //for later overied the mobile stepper for better look
    /*<MobileStepper
            steps={maxSteps}
            position="center"
            activeStep={activeStep}
          />*/
    const style = {
      width : isMobile ? "360px" : "720px",
      padding: isMobile ? "10px" : "20px",
      margin: isMobile ? "10px" : "20px",
    }
    return (
        <div className="mt-[24px] sm:mt-[8px] md:mt-[16px] sm:wd-[360px]">
          <AutoPlaySwipeableViews
            axis={"x"}
            index={activeStep}
            onChangeIndex={setActiveStep}
            interval={4000}
            style={style}
          >
            {data.map((step, index) => (
              <div key={`testimonial_`+index} className="sm:wd-[360px]">
                {Math.abs(activeStep - index) <= 2 ? (
                  <TestimonialBox {...step}/>
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
          
        </div>
    )
}



export { Testimonial };