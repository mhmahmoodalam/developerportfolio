import React from "react";
import { Text, Row } from "components";
import CircularProgress from '@mui/material/CircularProgress';
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const CircularProgressBar = ({
  className,
  title =[],
  value = 0,
  textVariant="h2",
  descriptionVariant="h5",
  circularProgressSize=40
}) => {
  const { ref, inView } = useInView();
  const [progressValue, setProgressValue] = useState(0);
  const [dataValue, setDataValue] = useState(0);

  useEffect(() =>{
    if(inView){
      setTimeout(() => {
        if(dataValue < value){
          setDataValue(dataValue + 1);
        }
        if(progressValue<100){
          setProgressValue(progressValue +10);
        }
      }, 50);
    }else{
      setDataValue(0);
      setProgressValue(0);
    }


  },[inView, dataValue,progressValue])

  return (
    <div className={className} ref={ref}>
      <Row className="flex flex-row md:flex-wrap sm:flex-wrap  justify-space-between items-center sm:m-[4px] m-[8px]  sm:w-[100%] w-[auto]">
          <div className="relative inline-flex ">
            <CircularProgress variant="determinate" value={progressValue} size={circularProgressSize}/>
            <div className={`absolute bottom-0 left-0 bottom-0 right-0 flex items-center justify-center h-[100%] `}>
              <Text
                className=" not-italic text-primary_text md:tracking-ls1 sm:tracking-ls1 tracking-ls256 "
                as={textVariant}
                variant={textVariant}
              >
                {dataValue}
              </Text>
            </div>
          </div>
          {title && title.length > 0 &&
            <Text
                className="leading-[normal] md:ml-[11px] ml-[16px] sm:mx-[0] not-italic text-primary_text md:tracking-ls1 sm:tracking-ls1 tracking-ls128 sm:w-[100%] w-[57%]"
                as={descriptionVariant}
                variant={descriptionVariant}
            >
                {
                    title.map((text, key) => {
                        return (
                            <>{key > 0 ? <br /> : ""}{text}</>
                        )
                    })
                }
            </Text>
          }
        </Row>
    </div>
  );
};

export { CircularProgressBar };
