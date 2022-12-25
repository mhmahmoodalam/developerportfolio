import React from "react";

export function Social(props) {
    const { socialLinks=[], handleExport } = props
    return (
      <div className="flex felx-row justify-start md:flex-wrap sm:flex-wrap items-center justify-between sm:w-[40%] md:w-[50%] w-[30%] mt-[10px]" >
        {
            socialLinks.map((socialLink,key)=> {
                return (
                    <a href={socialLink} key ={`social_link_`+key} className={"text-secondary_light dark:text-secondary hover:text-primary_light dark:hover:text-primary m-[5px]  text-xl"}>
                        <i className={socialLink.iconClass}></i>
                    </a>
                )
            })
        }
         <span onClick={handleExport} className={"text-secondary_light dark:text-secondary hover:text-primary_light dark:hover:text-primary m-[5px]  text-xl"}>
            <i className="fas fa-download"></i>
          </span>        
      </div>
    );
  }