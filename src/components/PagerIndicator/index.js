import React from "react";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const PagerIndicator = ({
  className,
  activeCss,
  inactiveCss,
  count,
  activeIndex
}) => {
  const { ref, inView } = useInView();
  const [dataValue, setDataValue] = useState(0);

  useEffect(() =>{
    if(inView){
      setTimeout(() => {
        if(dataValue < activeIndex){
          setDataValue(dataValue + 1);
        }
      }, 200);
    }else{
      setDataValue(0);
    }


  },[inView, dataValue])

  return (
    <div className={className} ref={ref}>
      {Array(count)
        .fill(0)
        .map((_, i) => {
          let isActive = false;
          if (
            i+1 <= dataValue
          ) {
            isActive = true;
          }

          return (
             <span
                key= {`barformat_skill_card_entry`+i}
                className={`${
                  isActive ? activeCss : inactiveCss
                } slider-indicator`}
              />
          );
        })}
    </div>
  );
};

export { PagerIndicator };
