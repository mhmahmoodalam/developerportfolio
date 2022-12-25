import React from "react";
import { Column, Text, Row, Img } from "components";

  
const ExpCompanyDetails = (props) => {
    const { period, role, company, align  } = props
    const textAlign = align === "left" ? "text-left" : "text-right"
    return (
      <Column className={`flex flex-col item-center sm:mx-[0] p-[10px] md:p-[6px] sm:px-[0] sm:py-[5px] sm:w-[100%] w-[50%] ` }>
                        
          <Text
            className={`mt-[16px] sm:mt-[8px] md:mt-[8px] not-italic dark:text-primary_text text-primary_text_light tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto] ` + textAlign }
            as="h5" 
            variant="h5"
          >
            {period}
          </Text>
          <Text
            className={`mt-[4px] not-italic dark:text-primary_text text-primary_text_light tracking-ls02 md:tracking-ls1 sm:tracking-ls1 w-[auto] ` + textAlign}
            as="h4"
            variant="h4"
          >
            {role}
          </Text>
          <Text
            className={`mb-[16px] sm:mb-[8px] md:mb-[16px] mt-[4px] not-italic dark:text-primary_text text-primary_text_light tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto] ` + textAlign }
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
                  className={`leading-[normal] not-italic dark:text-primary_text text-primary_text_light tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[100%] p-[8px] sm:p-[4px] md:p-[5px] ` + textAlign }
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
          className="max-w-[100%] w-[2.5%] variant2_light dark:variant2"
          alt="FrameFiftyFour One"
        /> 
    )
  }
  
  const ExperienceView = (exp, key) => {
   return (
    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] md:p-[11px] p-[16px] sm:px-[15px] sm:py-[8px] sm:w-[100%] w-[100%]" key={`exp_row_`+key}>
      {
        key % 2 === 0
        ? <><ExpCompanyDetails {...exp} align={"right"} /><ExpDivider /><ExpRolesDetails {...exp} align={"left"}/></>
        : <><ExpRolesDetails {...exp} align={"right"} /><ExpDivider /><ExpCompanyDetails {...exp} align={"left"}/></>
      }
    </Row>
   )
  }

  export default ExperienceView