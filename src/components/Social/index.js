import React from "react";

export function Social(props) {
    const { socialLinks=[], handleExport } = props
    return (
      <div className="flex felx-row justify-start md:flex-wrap sm:flex-wrap items-center justify-between w-[25%] mt-[10px]" >
        {
            socialLinks.map((socialLink,key)=> {
                return (
                    <a href={socialLink} key ={`social_link_`+key} className={"text-secondary_light dark:text-secondary hover:text-primary_light dark:hover:text-primary m-[5px] sm:text-base md:text-xl text-xl"}>
                        <i className={socialLink.iconClass}></i>
                    </a>
                )
            })
        }
         <span onClick={handleExport} className={"text-secondary_light dark:text-secondary hover:text-primary_light dark:hover:text-primary m-[5px] sm:text-base md:text-xl text-xl"}>
            <i className="fas fa-download"></i>
          </span>        
      </div>
    );
  }