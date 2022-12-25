import React from "react";
import { Column, Text, Row,PagerIndicator, CircularProgressBar } from "components";
   
const PercentageInfoCard = (data) => {
   const { title, skills } = data
 return (
         <Column className="flex flex-col sm:mx-[0] md:p-[11px] p-[16px] sm:px-[0px] sm:py-[8px] sm:w-[100%] w-[49%]">
             <Text
               className="not-italic dark:text-primary_text text-primary_text_light md:tracking-ls1 sm:tracking-ls1 tracking-ls128 w-[auto]"
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
           className="not-italic dark:text-primary_text text-primary_text_light md:tracking-ls1 sm:tracking-ls1 tracking-ls128 w-[auto]"
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
                   activeCss="inline-block cursor-pointer w-[24px] mx-[4.00px] sm:mx-[2px] h-[8px] bg-primary_text_light dark:bg-primary_text"
                   activeIndex={skill.value}
                   inactiveCss="inline-block cursor-pointer w-[24px] mx-[4.00px] sm:mx-[2px] h-[8px] dark:bg-gray bg-gray_light"
                   
                 />
                 <Text
                   className=" sm:ml-[4px] md:ml-[5px] ml-[8px] dark:text-primary_text text-primary_text_light md:tracking-ls1 sm:tracking-ls1 tracking-ls112 w-[auto]"
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

 export { PercentageInfoCard, BarInfoCard }