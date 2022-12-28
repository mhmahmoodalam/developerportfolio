import React from "react";

const FloatingSocial = (props) => {
  const { socialLinks=[], handleExport } = props
  return (
    <div class="fixed left-[35px]  w-[20px] h-[350px] sm:w-full  sm:left-[0] bottom-0 sm:h-[auto] z-50 bg-transparent sm:bg-primary dark:sm:bg-primary_light">
      <div class="absolute top-0 left-0 sm:relative z-50 p-0 sm:p-4 w-auto sm:w-max">
        {
              socialLinks.map((socialLink,key)=> {
                  return (
                      <a 
                        href={socialLink.link} 
                        key ={`social_link_`+key} 
                        className="text-secondary_light dark:text-variant1 hover:text-primary_text_light dark:hover:text-primary_text inline-block mb-3 mr-0 sm:mr-4 sm:mb-0 text-xl"
                        target="_blank"
                        rel="noreferrer"
                      >
                          <i className={socialLink.iconClass}></i>
                      </a>
                  )
              })
          }          
         <span onClick={handleExport} className={"text-secondary_light dark:text-variant1 hover:text-primary_text_light dark:hover:text-primary_text inline-block  mb-3 mr-0 sm:mr-4 sm:mb-0  text-xl"}>
            <i className="fas fa-download"></i>
          </span>
      </div>
      <span class="absolute bottom-0 left-1/2 sm:translate-x-[50px] top-auto top-1/2 sm:-translate-y-[25px] translate-y-[240px] w-[2px] h-full sm:w-full sm:h-[2px] bg-secondary_light dark:bg-variant1"></span>
    </div>
  );
}

const  Social = (props) => {
    const { socialLinks=[], handleExport } = props
    
  console.log(socialLinks)
    return (
      <div className="flex felx-row justify-start md:flex-wrap sm:flex-wrap items-center justify-start sm:w-[auto] md:w-[auto] w-[auto] mt-[10px]" >
        {
            socialLinks.map((socialLink,key)=> {
                return (
                    <a href={socialLink.link} key ={`social_link_`+key} className={"text-secondary_light dark:text-secondary hover:text-primary_light dark:hover:text-primary m-[5px]  text-xl"}>
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

export { Social , FloatingSocial }