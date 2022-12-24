import React from "react";
import GetProfileData from "data/profiledata";
import { Column, Text, Row, Img, List, PagerIndicator, Line, CircularProgressBar, Testimonial } from "components";


const ExpCompanyDetails = (props) => {
  const { period, role, company, align  } = props
  const textAlign = align === "left" ? "text-left" : "text-right"
  return (
    <Column className={`flex flex-col item-center sm:mx-[0] p-[10px] md:p-[6px] sm:px-[0] sm:py-[5px] sm:w-[100%] w-[50%] ` }>
                      
        <Text
          className={`mt-[16px] sm:mt-[8px] md:mt-[8px] not-italic text-white_A700 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto] ` + textAlign }
          as="h5" 
          variant="h5"
        >
          {period}
        </Text>
        <Text
          className={`mt-[4px] not-italic text-white_A700 tracking-ls02 md:tracking-ls1 sm:tracking-ls1 w-[auto] ` + textAlign}
          as="h4"
          variant="h4"
        >
          {role}
        </Text>
        <Text
          className={`mb-[16px] sm:mb-[8px] md:mb-[16px] mt-[4px] not-italic text-white_A700 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto] ` + textAlign }
          as="h5"
          variant="h5"
        >
          {company}
        </Text>
    </Column>   
  )
}

const ExpRolesDetails = (props) => {
  const { responsibilities, align  } = props
  const textAlign = align === "left" ? "text-left" : "text-right"
  return (
    <Column className="flex flex-col items-center md:ml-[11px] ml-[16px] sm:mx-[0] md:p-[11px] p-[16px] sm:px-[15px] sm:py-[8px] sm:w-[100%] w-[48%]">
        {
          responsibilities.map((resp,key) => {
            return (
              <Text
                className={`leading-[normal] not-italic text-white_A700 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[100%] p-[8px] sm:p-[4px] md:p-[5px] ` + textAlign }
                as="h5"
                variant="h5"
                key={`exp_resp_`+key}
              >     
               {resp}                   
              </Text>
            )}
          )
        }
    </Column>
  )
}

const ExpDivider = () => {
  return (
    <Img
        src="images/img_frame54_bluegray_300.svg"
        className="max-w-[100%] w-[2.5%]"
        alt="FrameFiftyFour One"
      /> 
  )
}

const ExperienceView = (exp, key) => {
 return (
  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] md:p-[11px] p-[16px] sm:px-[15px] sm:py-[8px] sm:w-[100%] w-[100%]" key={`exp_row_`+key}>
    {
      key % 2 == 0
      ? <><ExpCompanyDetails {...exp} align={"right"} /><ExpDivider /><ExpRolesDetails {...exp} align={"left"}/></>
      : <><ExpRolesDetails {...exp} align={"right"} /><ExpDivider /><ExpCompanyDetails {...exp} align={"left"}/></>
    }
  </Row>
 )
}

const PercentageInfoCard = (data) => {
  const { title, skills } = data
return (
        <Column className="flex flex-col sm:mx-[0] md:p-[11px] p-[16px] sm:px-[15px] sm:py-[8px] sm:w-[100%] w-[49%]">
            <Text
              className="not-italic text-white_A700 md:tracking-ls1 sm:tracking-ls1 tracking-ls128 w-[auto]"
              as="h4"
              variant="h4"
            >
              {title}
            </Text>
            {
              skills.map((skill, key) => {
                return (
                  <CircularProgressBar 
                        key= {`ercentformat_skill_card_entry`+key}
                        title={[skill.name]}
                        value = {skill.percentage}                      
                        textVariant="h5"
                        descriptionVariant="h5"
                      />
                )
              })
            }
        </Column>
)
}


const BarInfoCard = (data) => {
  const {title , skills} = data
  return (
    <Column className="flex flex-col justify-center md:p-[11px] p-[16px] sm:px-[15px] sm:py-[8px] w-[100%]">
        <Text
          className="not-italic text-white_A700 md:tracking-ls1 sm:tracking-ls1 tracking-ls128 w-[auto]"
          as="h4"
          variant="h4"
        >
          {title}
        </Text>
        {
          skills.map((skill, key) => {
            return(
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[100%]"
                key= {`barformat_skill_card_entry`+key}
              >
                <PagerIndicator
                  className="sm:w-[100%] w-[auto]"
                  count={5}
                  activeCss="inline-block cursor-pointer w-[24px] mx-[4.00px] sm:mx-[2px] h-[8px] bg-white_A700"
                  activeIndex={skill.value}
                  inactiveCss="inline-block cursor-pointer w-[24px] mx-[4.00px] sm:mx-[2px] h-[8px] bg-bluegray_300"
                  
                />
                <Text
                  className=" sm:ml-[4px] md:ml-[5px] ml-[8px] text-white_A700 md:tracking-ls1 sm:tracking-ls1 tracking-ls112 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  {skill.name}
                </Text>
            </Row>
            )
          })
        }
      </Column>
  )
}
const FrameOnePage = () => {
  const data = GetProfileData();
  const {  intro, description, experiences, skillSet, testimonials  } = data
  return (
    <>
      <Column className="bg-gradient  flex flex-col font-actor items-center justify-start mx-[auto] w-[100%]">
        <Column className="bg-gradient1  flex flex-col items-center justify-start md:p-[33px] p-[48px] sm:px-[15px] sm:py-[25px] w-[100%]">
          <Column className="flex flex-col justify-start max-w-[882px] sm:mb-[20px] md:mb-[26px] mb-[39px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[4px] md:mt-[6px] mt-[9px] w-[100%]">
              <Img
                src={intro.logo}
                className="max-w-[100%] sm:w-[100%] w-[47%]"
                alt="avaar202221"
              />
              <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[47%]">
                <Column className="flex flex-col justify-start w-[100%]">
                  <Text
                    className="font-roboto leading-[normal] sm:mx-[0] text-gray_100 md:tracking-ls2 sm:tracking-ls2 tracking-ls384 sm:w-[100%] w-[99%]"
                    as="h1"
                    variant="h1"
                  >
                    {intro.firstName} <br />
                    {intro.lastName}
                  </Text>
                  <div className="bg-bluegray_300 sm:h-[4px] md:h-[5px] h-[7px] sm:mt-[12px] md:mt-[16px] mt-[24px] w-[10%]"></div>
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
        <Column className="bg-gray_901 border border-black_900_19 border-solid flex flex-col items-center justify-end sm:p-[15px] md:p-[51px] p-[75px] rounded-radius2 w-[100%]">
          <Column className="flex flex-col items-center justify-start max-w-[1024px] ml-[auto] mr-[auto] md:mt-[10px] mt-[15px] sm:mt-[7px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between p-[10px] sm:p-[5px] md:p-[6px] w-[100%]">
                <Column className="flex flex-col items-center justify-start w-[100%] m-[20px]">
                  {
                    description.about.map((value,key) => {
                      return (
                        <Text
                          className="leading-[1.5] sm:mx-[0] not-italic text-white_A700 md:tracking-ls1 sm:tracking-ls1 tracking-ls128 sm:w-[100%] w-[100%] p-[10px] sm:p-[5px] md:p-[6px]"
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
                <Column className="flex flex-col items-center justify-start w-[100%] m-[20px]">
                {
                  description.skills.map((value,key) => {
                    return (
                        <Text
                          className="leading-[normal] sm:mx-[0] not-italic text-white_A700 md:tracking-ls1 sm:tracking-ls1 tracking-ls128 sm:w-[100%] w-[100%] p-[8px] sm:p-[4px] md:p-[5px]"
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
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mt-[20px] md:mt-[26px] mt-[38px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[66%]">
                
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
        <Column className="flex flex-col items-center justify-start w-[100%]">
          <Column className="bg-gradient2  border border-black_900_19 border-solid flex flex-col items-center justify-start md:p-[13px] p-[20px] sm:px-[15px] sm:py-[10px] rounded-radius2 w-[100%]">
            <Column className="flex flex-col items-center justify-start max-w-[1024px] sm:mb-[10px] md:mb-[13px] mb-[20px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              {
                  experiences.map((exp,key) => {
                    return (
                      ExperienceView(exp,key)
                )                
              })
            }              
            </Column>
          </Column>
        </Column>
        <Column className="bg-gray_901 border border-black_900_19 border-solid flex flex-col items-center justify-start sm:p-[15px] md:p-[49px] p-[72px] rounded-radius2 w-[100%]">
          <Column className="flex flex-col items-center justify-center max-w-[1024px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Column className="flex flex-col items-center justify-center md:p-[11px] p-[16px] sm:px-[15px] sm:py-[8px] w-[100%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap   justify-between md:mt-[11px] mt-[16px] sm:mt-[8px] md:p-[11px] p-[16px] sm:px-[15px] sm:py-[8px] w-[100%]">
                {
                  skillSet.percentageFormat.map((card, key) => {
                    return <PercentageInfoCard {...card} key={`percentformat_skill_card_`+key}/>
                  })
                }
              </Row>
              <Row
                className="md:gap-[11px] gap-[16px] sm:gap-[8px] grid sm:grid-cols-1 grid-cols-2 min-h-[auto] sm:mt-[17px] md:mt-[22px] mt-[32px] md:p-[11px] p-[16px] sm:px-[15px] sm:py-[8px] w-[100%]"
                
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
        <Column className="bg-gradient4  border border-black_900_19 border-solid flex flex-col items-center justify-start md:p-[48px] p-[70px] sm:px-[15px] sm:py-[37px] rounded-radius2 w-[100%]">
          <Column className="flex flex-col items-center justify-start max-w-[984px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Column className="flex flex-col items-center justify-start w-[100%]">
              <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[35%]">
                <Line className="bg-white_A700 h-[3px] w-[22%]" />
                <Text
                  className="uppercase mt-[13px] sm:mt-[6px] md:mt-[8px] not-italic text-white_A700 md:tracking-ls2 sm:tracking-ls2 tracking-ls4 w-[auto]"
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
    </>
  );
};

export default FrameOnePage;
