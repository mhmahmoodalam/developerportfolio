import React, { useRef } from "react";
import GetProfileData from "data/profiledata";
import ExperienceView from "./Experience";
import { PercentageInfoCard, BarInfoCard } from "./Info";
import { useReactToPrint } from 'react-to-print';


const FrameOnePage = () => {
  const data = GetProfileData();
  const componentRef = useRef();
  const {  intro, description, experiences, skillSet, testimonials  } = data
  const handleExport = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <div ref={componentRef}>
      <FloatingSocial socialLinks={intro.socialLinks} handleExport={handleExport}/>
      <Column className="dark:bg-gradient bg-gradient_light  flex flex-col font-actor items-center justify-start mx-[auto] w-[100%]">
       
        <Column className="flex flex-col items-center justify-start md:p-[33px] p-[48px] sm:px-[15px] sm:py-[25px] w-[100%]">
          <Column className="flex flex-col justify-start max-w-[882px] sm:mb-[20px] md:mb-[26px] mb-[39px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <DarkModeSwitch />
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[4px] md:mt-[6px] mt-[9px] w-[100%]">
              <Img
                src={intro.logo}
                className="max-w-[100%] sm:w-[100%] w-[47%]"
                alt="avaar202221"
                { ...transition("fade-in") }
              />
              <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[47%]"
                { ...transition("fade-in-up") }
              >
                <Column className="flex flex-col justify-start w-[100%]">
                  <Text
                    className="font-roboto leading-[normal] sm:mx-[0] text-gray_100 md:tracking-ls2 sm:tracking-ls2 tracking-ls384 sm:w-[100%] w-[99%]"
                    as="h1"
                    variant="h1"
                  >
                    {intro.firstName} <br />
                    {intro.lastName}
                  </Text>
                  <div className=" bg-secondary_light dark:bg-secondary sm:h-[4px] md:h-[5px] h-[7px] sm:mt-[12px] md:mt-[16px] mt-[24px] w-[10%]"></div>
                  <Text
                    className="font-actor leading-[normal] sm:mt-[12px] md:mt-[16px] mt-[24px] not-italic text-gray_100 md:tracking-ls1 sm:tracking-ls1 tracking-ls192 w-[100%]"
                    as="h3"
                    variant="h3"
                  >
                    {intro.titleWithDescription}
                  </Text>
                </Column>
              </Column>
            </Row>
          </Column>
        </Column>
        <Column className="dark:bg-primary bg-primary_light  flex flex-col items-center justify-end sm:p-[15px] md:p-[51px] p-[75px] rounded-radius2 w-[100%]">
          <Column className="flex flex-col items-center justify-start max-w-[1024px] ml-[auto] mr-[auto] md:mt-[10px] mt-[15px] sm:mt-[7px] sm:mx-[0] sm:px-[0] w-[100%]">
            
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between p-[10px] sm:p-[5px] md:p-[6px] w-[100%]">
                <Column className="flex flex-col items-center justify-start w-[100%] sm:m-[10px] m-[20px]"
                 { ...transition("fade-up") }
                >
                  {
                    description.about.map((value,key) => {
                      return (
                        <Text
                          className="leading-[1.5] sm:mx-[0] not-italic dark:text-primary_text text-primary_text_light md:tracking-ls1 sm:tracking-ls1 tracking-ls128 sm:w-[100%] w-[100%] p-[10px] sm:p-[5px] md:p-[6px]"
                          as="h4"
                          variant="h4"
                          key={`desc_about_`+key}
                        >
                        {value}
                        </Text>
                      )                
                    })
                  }
                </Column>
                <Column className="flex flex-col items-center justify-start w-[100%] sm:m-[10px] m-[20px]"
                { ...transition("fade-up") }
                >
                {
                  description.skills.map((value,key) => {
                    return (
                        <Text
                          className="leading-[normal] sm:mx-[0] not-italic dark:text-primary_text text-primary_text_light md:tracking-ls1 sm:tracking-ls1 tracking-ls128 sm:w-[100%] w-[100%] p-[8px] sm:p-[4px] md:p-[5px]"
                          as="h4"
                          variant="h4"
                          key={`desc_skillset_`+key}
                        >
                          - {value}
                        </Text>
                    )}
                  )
                }
                </Column>
              </Row>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mt-[20px] sm:mx-[30px] md:mt-[26px] mt-[38px]  sm:px-[0] sm:w-[100%] w-[66%]"
              { ...transition("fade-up") }
              >
                
                {
                  description.data.map((data,key) =>{
                    return (
                      <CircularProgressBar 
                        key= {`exp_data_`+key}
                        {...data}                         
                        textVariant="h2"
                        descriptionVariant="h5"
                        circularProgressSize={50}
                      />
                    )
                  })
                }
              </Row>
          </Column>
        </Column>
        <Column className="dark:bg-gradient bg-gradient_light flex flex-col items-center justify-start w-[100%]">
          <Column className=" flex flex-col items-center justify-start md:p-[13px] p-[20px] sm:px-[15px] sm:py-[10px] rounded-radius2 w-[100%]">
            <Column className="flex flex-col items-center justify-start max-w-[1024px] sm:mb-[10px] md:mb-[13px] mb-[20px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]"
              
            >
              {
                  experiences.map((exp,key) => {
                    return (<ExperienceView exp={exp} index={key} />)                
              })
            }              
            </Column>
          </Column>
        </Column>
        <Column className="dark:bg-primary bg-primary_light  flex flex-col items-center justify-start sm:p-[15px] md:p-[49px] p-[72px] rounded-radius2 w-[100%]">
          <Column className="flex flex-col items-center justify-center max-w-[1024px] ml-[auto] mr-[auto] sm:mx-[0]  sm:px-[0] w-[100%]">
            <Column className="flex flex-col items-center justify-center md:p-[11px] p-[16px] sm:p-[0px] w-[100%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap   justify-between md:mt-[11px] mt-[16px] sm:mt-[8px] md:p-[11px] p-[16px] sm:p-[15px] sm:py-[8px] w-[100%]"
              {...transition("fade-up")}
              >
                {
                  skillSet.percentageFormat.map((card, key) => {
                    return <PercentageInfoCard {...card} key={`percentformat_skill_card_`+key}/>
                  })
                }
              </Row>
              <Row
                className="md:gap-[11px] gap-[16px] sm:gap-[8px] grid sm:grid-cols-1 grid-cols-2 min-h-[auto] sm:mt-[17px] md:mt-[22px] mt-[32px] md:p-[11px] p-[16px] sm:px-[15px] sm:py-[8px] w-[100%]"
                {...transition("fade-up")}
              >
                {
                  skillSet.barFormat.map((card,key) => {
                    return <BarInfoCard {...card} />
                  })
                }
              </Row>
            </Column>
          </Column>
        </Column>
        <Column className="dark:bg-gradient bg-gradient_light  flex flex-col items-center justify-start md:p-[48px] p-[70px] sm:px-[15px] sm:py-[37px] rounded-radius2 w-[100%]">
          <Column className="flex flex-col items-center justify-start max-w-[984px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Column className="flex flex-col items-center justify-start w-[100%]"
              {...transition("zoom-in")}
             >
              <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[35%]">
                <Line className="bg-white_A700 h-[3px] w-[22%]" />
                <Text
                  className="uppercase mt-[13px] sm:mt-[6px] md:mt-[8px] not-italic dark:text-primary_text text-primary_text_light md:tracking-ls2 sm:tracking-ls2 tracking-ls4 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  {testimonials.title}
                </Text>
              </Column>
              <Testimonial data={testimonials.data}/>
            </Column>
          </Column>
        </Column>
      </Column>
    </div>
  );
};

export default FrameOnePage;
