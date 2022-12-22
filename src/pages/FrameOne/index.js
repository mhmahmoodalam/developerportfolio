import React from "react";

import { Column, Text, Row, Img, List, PagerIndicator, Line } from "components";

const FrameOnePage = () => {
  return (
    <>
      <Column className="bg-gradient  flex flex-col font-actor items-center justify-start mx-[auto] w-[100%]">
        <Column className="bg-gradient1  flex flex-col items-center justify-start md:p-[33px] p-[48px] sm:px-[15px] sm:py-[25px] w-[100%]">
          <Column className="flex flex-col justify-start max-w-[882px] sm:mb-[20px] md:mb-[26px] mb-[39px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Text
              className="sm:ml-[260px] md:ml-[336px] ml-[489px] not-italic text-gray_100 tracking-ls024 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
              as="h3"
              variant="h3"
            >
              Home About Portfolio{" "}
            </Text>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[4px] md:mt-[6px] mt-[9px] w-[100%]">
              <Img
                src="images/img_avaar202221.png"
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
                    Muhammed <br />
                    Mahmood Alam.
                  </Text>
                  <div className="bg-bluegray_300 sm:h-[4px] md:h-[5px] h-[7px] sm:mt-[12px] md:mt-[16px] mt-[24px] w-[10%]"></div>
                  <Text
                    className="font-actor leading-[normal] sm:mt-[12px] md:mt-[16px] mt-[24px] not-italic text-gray_100 md:tracking-ls1 sm:tracking-ls1 tracking-ls192 w-[100%]"
                    as="h3"
                    variant="h3"
                  >
                    Fullstack developer with expertise in microservices using
                    Spring and React
                  </Text>
                </Column>
              </Column>
            </Row>
          </Column>
        </Column>
        <Column className="bg-gray_901 border border-black_900_19 border-solid flex flex-col items-center justify-end sm:p-[15px] md:p-[51px] p-[75px] rounded-radius2 w-[100%]">
          <Column className="flex flex-col items-center justify-start max-w-[942px] ml-[auto] mr-[auto] md:mt-[10px] mt-[15px] sm:mt-[7px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Column className="flex flex-col items-center justify-start w-[100%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between p-[10px] sm:p-[5px] md:p-[6px] w-[100%]">
                <Text
                  className="leading-[normal] sm:mx-[0] not-italic text-white_A700 md:tracking-ls1 sm:tracking-ls1 tracking-ls128 sm:w-[100%] w-[45%]"
                  as="h5"
                  variant="h5"
                >
                  Enthusiastic & dedicated full stack software developer with
                  history of meeting company goals utilizing
                  <br />
                  <br />
                  consistent and organized practices.
                  <br /> <br />
                  Eager to contribute to team success through hard work,
                  attention to
                  <br />
                  <br />
                  detail and excellent organizational skills. <br />
                  <br />
                  Skilled in working under pressure and adapting to new
                  <br />
                  situations and challenges to best enhance the organizational
                  brand.
                </Text>
                <Text
                  className="leading-[normal] sm:mx-[0] not-italic text-white_A700 md:tracking-ls1 sm:tracking-ls1 tracking-ls128 sm:w-[100%] w-[49%]"
                  as="h5"
                  variant="h5"
                >
                  • Team Leadership
                  <br />• Web Development Life Cycle <br />• Responsive Website
                  Designing <br />• Client Relationship Management
                  <br />• Microservice and distributed system design <br />•
                  Mobile application
                </Text>
              </Row>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mt-[20px] md:mt-[26px] mt-[38px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[66%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] pt-[10px] sm:pt-[5px] md:pt-[6px] sm:px-[0] px-[10px] md:px-[6px] sm:w-[100%] w-[28%]">
                  <Text
                    className="flex items-center not-italic outline outline-[4px] outline-bluegray_300 md:px-[11px] sm:px-[15px] px-[16px] rounded-radius50 text-white_A700 md:tracking-ls1 sm:tracking-ls1 tracking-ls256 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    8
                  </Text>
                  <Text
                    className="leading-[normal] md:ml-[11px] ml-[16px] sm:mx-[0] not-italic text-white_A700 md:tracking-ls1 sm:tracking-ls1 tracking-ls128 sm:w-[100%] w-[57%]"
                    as="h5"
                    variant="h5"
                  >
                    Years of <br />
                    experience
                  </Text>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:ml-[22px] ml-[32px] sm:mx-[0] pt-[10px] sm:pt-[5px] md:pt-[6px] sm:px-[0] px-[10px] md:px-[6px] sm:w-[100%] w-[33%]">
                  <Text
                    className="flex items-center not-italic outline outline-[4px] outline-bluegray_300 md:px-[11px] sm:px-[15px] px-[17px] rounded-radius50 text-white_A700 md:tracking-ls1 sm:tracking-ls1 tracking-ls256 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    2
                  </Text>
                  <Text
                    className="md:ml-[11px] ml-[16px] sm:ml-[8px] not-italic text-white_A700 md:tracking-ls1 sm:tracking-ls1 tracking-ls128 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Organizations
                  </Text>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:ml-[22px] ml-[32px] sm:mx-[0] pt-[10px] sm:pt-[5px] md:pt-[6px] sm:px-[0] px-[10px] md:px-[6px] sm:w-[100%] w-[30%]">
                  <Text
                    className="flex items-center not-italic outline outline-[4px] outline-bluegray_300 px-[10px] sm:px-[5px] md:px-[6px] rounded-radius50 text-white_A700 md:tracking-ls1 sm:tracking-ls1 tracking-ls256 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    15
                  </Text>
                  <Text
                    className="leading-[normal] md:ml-[11px] ml-[16px] sm:mx-[0] not-italic text-white_A700 md:tracking-ls1 sm:tracking-ls1 tracking-ls128 sm:w-[100%] w-[60%]"
                    as="h5"
                    variant="h5"
                  >
                    Rewards &<br />
                    Recognition
                  </Text>
                </Row>
              </Row>
            </Column>
          </Column>
        </Column>
        <Column className="flex flex-col items-center justify-start w-[100%]">
          <Column className="bg-gradient2  border border-black_900_19 border-solid flex flex-col items-center justify-start md:p-[13px] p-[20px] sm:px-[15px] sm:py-[10px] rounded-radius2 w-[100%]">
            <Column className="flex flex-col items-center justify-start max-w-[836px] sm:mb-[10px] md:mb-[13px] mb-[20px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] md:p-[11px] p-[16px] sm:px-[15px] sm:py-[8px] sm:w-[100%] w-[87%]">
                <Column className="flex flex-col items-end sm:mx-[0] p-[10px] md:p-[6px] sm:px-[0] sm:py-[5px] sm:w-[100%] w-[48%]">
                  <Text
                    className="mt-[110px] sm:mt-[58px] md:mt-[75px] not-italic text-white_A700 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Jun 2014 -Aug 2018
                  </Text>
                  <Text
                    className="mt-[4px] not-italic text-white_A700 tracking-ls02 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Java Backend Developer
                  </Text>
                  <Text
                    className="mb-[110px] sm:mb-[58px] md:mb-[75px] mt-[4px] not-italic text-white_A700 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Infosys Ltd
                  </Text>
                </Column>
                <Img
                  src="images/img_frame54.svg"
                  className="max-w-[100%] md:ml-[11px] ml-[16px] sm:ml-[8px] w-[1%]"
                  alt="FrameFiftyFour"
                />
                <Column className="flex flex-col items-center md:ml-[11px] ml-[16px] sm:mx-[0] md:p-[11px] p-[16px] sm:px-[15px] sm:py-[8px] sm:w-[100%] w-[48%]">
                  <Text
                    className="leading-[normal] not-italic text-white_A700 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                    as="h5"
                    variant="h5"
                  >
                    Migration of SOAP based backend to Rest based spring boot
                    application
                    <br />
                    <br />
                    Developed solutions to manage customer and customer address
                    around Informatica MDM infrastructure
                    <br />
                    <br />
                    Proposed technical feasibility solutions for new system
                    designs and suggested options for
                    <br />
                    <br />
                    performance improvement of technical components.
                    <br />
                    Created manuals and taught training sessions to educate
                    co-workers on new systems.
                  </Text>
                </Column>
              </Row>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between mt-[10px] sm:mt-[5px] md:mt-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[97%]">
                <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[47%]">
                  <Text
                    className="leading-[normal] not-italic text-right text-white_A700 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                    as="h5"
                    variant="h5"
                  >
                    {`Revamped company's landing page and registration via deploying responsive design`}
                    <br />
                    Migrated Monolithic application to microservice architecture
                    <br />
                    Updated old code bases to modern development standards,
                    improving functionality.
                    <br />
                    Contributed new features by identifying scope of
                    improvements in existing system.
                    <br />
                    Worked with software development and testing team members to
                    design and develop robust solutions to meet client
                    requirements for functionality, scalability and performance.
                    <br />
                    Participated in architecture, design and implementation of
                    back-end & frontend features using Java, Xamarin and React
                    JS.
                    <br />
                    Reviewed project specifications and designed technology
                    solutions that met or exceeded performance expectations.
                    <br />
                    Developed robust, scalable, modular and API-centric
                    infrastructures.
                  </Text>
                </Column>
                <Img
                  src="images/img_frame54_bluegray_300.svg"
                  className="max-w-[100%] w-[3%]"
                  alt="FrameFiftyFour One"
                />
                <Column className="flex flex-col sm:mx-[0] md:p-[11px] p-[16px] sm:px-[15px] sm:py-[8px] sm:w-[100%] w-[49%]">
                  <Text
                    className="mt-[135px] sm:mt-[71px] md:mt-[92px] not-italic text-white_A700 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Aug 2018 - Jul 2022
                  </Text>
                  <Text
                    className="mt-[4px] not-italic text-white_A700 tracking-ls02 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Senior Software Developer
                  </Text>
                  <Text
                    className="mb-[135px] sm:mb-[71px] md:mb-[92px] mt-[4px] not-italic text-white_A700 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Siemens Technologies Ltd
                  </Text>
                </Column>
              </Row>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between mt-[10px] sm:mt-[5px] md:mt-[6px] pl-[10px] sm:pl-[5px] md:pl-[6px] py-[10px] sm:py-[5px] md:py-[6px] w-[100%]">
                <Column className="flex flex-col items-end sm:mx-[0] p-[10px] md:p-[6px] sm:px-[0] sm:py-[5px] sm:w-[100%] w-[47%]">
                  <Text
                    className="sm:mt-[40px] md:mt-[52px] mt-[76px] not-italic text-white_A700 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Jul 2022 - Present{" "}
                  </Text>
                  <Text
                    className="mt-[4px] not-italic text-white_A700 tracking-ls02 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Team Lead
                  </Text>
                  <Text
                    className="sm:mb-[40px] md:mb-[52px] mb-[76px] mt-[4px] not-italic text-white_A700 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Siemens Technologies Ltd
                  </Text>
                </Column>
                <Img
                  src="images/img_frame54_bluegray_300_242X20.svg"
                  className="max-w-[100%] w-[3%]"
                  alt="FrameFiftyFour Two"
                />
                <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[46%]">
                  <Text
                    className="leading-[normal] not-italic text-white_A700 tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                    as="h5"
                    variant="h5"
                  >
                    Managing team of 5 developers
                    <br />
                    Guiding team on architectural aspects <br />
                    Identifying Scope of improvement on existing system <br />
                    Tech sessions on various microservices and architectural
                    patterns
                  </Text>
                </Column>
              </Row>
            </Column>
          </Column>
        </Column>
        <Column className="bg-gray_901 border border-black_900_19 border-solid flex flex-col items-center justify-start sm:p-[15px] md:p-[49px] p-[72px] rounded-radius2 w-[100%]">
          <Column className="flex flex-col items-center justify-start max-w-[730px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Column className="flex flex-col items-center justify-end md:p-[11px] p-[16px] sm:px-[15px] sm:py-[8px] w-[100%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:mt-[11px] mt-[16px] sm:mt-[8px] sm:px-[0] w-[100%]">
                <Column className="flex flex-col sm:mx-[0] md:p-[11px] p-[16px] sm:px-[15px] sm:py-[8px] sm:w-[100%] w-[49%]">
                  <Text
                    className="not-italic text-white_A700 md:tracking-ls1 sm:tracking-ls1 tracking-ls128 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Design Skills
                  </Text>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-roboto items-center md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[25%]">
                    <Text
                      className="flex font-normal items-center not-italic outline outline-[4px] outline-bluegray_300 px-[2px] rounded-radius50 text-white_A700 md:tracking-ls1 sm:tracking-ls1 tracking-ls112 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      75%
                    </Text>
                    <Text
                      className="font-normal md:ml-[11px] ml-[16px] sm:ml-[8px] not-italic text-white_A700 md:tracking-ls1 sm:tracking-ls1 tracking-ls112 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Css
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-roboto items-center sm:mb-[14px] md:mb-[19px] mb-[28px] md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[44%]">
                    <Text
                      className="flex font-normal items-center not-italic outline outline-[4px] outline-bluegray_300 pl-[4px] pr-[1px] rounded-radius50 text-white_A700 md:tracking-ls1 sm:tracking-ls1 tracking-ls112 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      40%
                    </Text>
                    <Text
                      className="font-normal md:ml-[11px] ml-[16px] sm:ml-[8px] not-italic text-white_A700 md:tracking-ls1 sm:tracking-ls1 tracking-ls112 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Typography
                    </Text>
                  </Row>
                </Column>
                <Column className="flex flex-col sm:mx-[0] md:pt-[11px] pt-[16px] sm:pt-[8px] md:px-[11px] sm:px-[15px] px-[16px] sm:w-[100%] w-[49%]">
                  <Text
                    className="not-italic text-white_A700 md:tracking-ls1 sm:tracking-ls1 tracking-ls128 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Development Skills
                  </Text>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-roboto items-center mr-[auto] md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[46%]">
                    <Text
                      className="flex font-normal items-center not-italic outline outline-[4px] outline-bluegray_300 pl-[4px] pr-[1px] rounded-radius50 text-white_A700 md:tracking-ls1 sm:tracking-ls1 tracking-ls112 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      75%
                    </Text>
                    <Text
                      className="font-normal md:ml-[11px] ml-[16px] sm:ml-[8px] not-italic text-white_A700 md:tracking-ls1 sm:tracking-ls1 tracking-ls112 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Code quality
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-roboto items-center mr-[auto] md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[25%]">
                    <Text
                      className="flex font-normal items-center not-italic outline outline-[4px] outline-bluegray_300 pl-[4px] pr-[1px] rounded-radius50 text-white_A700 md:tracking-ls1 sm:tracking-ls1 tracking-ls112 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      60%
                    </Text>
                    <Text
                      className="font-normal md:ml-[11px] ml-[16px] sm:ml-[8px] not-italic text-white_A700 md:tracking-ls1 sm:tracking-ls1 tracking-ls112 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      LLD
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-roboto items-end mr-[auto] md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[26%]">
                    <Text
                      className="flex font-normal items-center not-italic outline outline-[4px] outline-bluegray_300 pl-[4px] pr-[1px] rounded-radius50 text-white_A700 md:tracking-ls1 sm:tracking-ls1 tracking-ls112 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      50%
                    </Text>
                    <Text
                      className="font-normal mb-[4px] md:ml-[11px] ml-[16px] sm:ml-[8px] sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-white_A700 md:tracking-ls1 sm:tracking-ls1 tracking-ls112 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      HLD
                    </Text>
                  </Row>
                </Column>
              </Row>
              <List
                className="md:gap-[11px] gap-[16px] sm:gap-[8px] grid sm:grid-cols-1 grid-cols-2 min-h-[auto] sm:mt-[17px] md:mt-[22px] mt-[32px] md:p-[11px] p-[16px] sm:px-[15px] sm:py-[8px] w-[100%]"
                orientation="horizontal"
              >
                <Column className="flex flex-col justify-start md:p-[11px] p-[16px] sm:px-[15px] sm:py-[8px] w-[100%]">
                  <Text
                    className="not-italic text-white_A700 md:tracking-ls1 sm:tracking-ls1 tracking-ls128 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Backend Skills
                  </Text>
                  <Column className="flex flex-col font-roboto justify-start sm:mb-[29px] md:mb-[38px] mb-[56px] md:mt-[11px] mt-[16px] sm:mt-[8px] sm:px-[0] w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
                      <PagerIndicator
                        className="h-[8px] sm:w-[100%] w-[max-content]"
                        count={5}
                        activeCss="inline-block cursor-pointer w-[24px] h-[8px] bg-bluegray_300"
                        activeIndex={1}
                        inactiveCss="inline-block cursor-pointer w-[24px] h-[8px] bg-white_A700"
                        selectedWrapperCss="inline-block md:mx-[2px] mx-[4.00px] sm:mx-[2px]"
                        unselectedWrapperCss="inline-block md:mx-[2px] mx-[4.00px] sm:mx-[2px]"
                      />
                      <Text
                        className="font-bold sm:ml-[4px] md:ml-[5px] ml-[8px] text-white_A700 md:tracking-ls1 sm:tracking-ls1 tracking-ls112 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Java, Spring boot
                      </Text>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center mt-[4px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[90%]">
                      <PagerIndicator
                        className="h-[8px] sm:w-[100%] w-[max-content]"
                        count={5}
                        activeCss="inline-block cursor-pointer w-[24px] h-[8px] bg-bluegray_300"
                        activeIndex={1}
                        inactiveCss="inline-block cursor-pointer w-[24px] h-[8px] bg-white_A700"
                        selectedWrapperCss="inline-block md:mx-[2px] mx-[4.00px] sm:mx-[2px]"
                        unselectedWrapperCss="inline-block md:mx-[2px] mx-[4.00px] sm:mx-[2px]"
                      />
                      <Text
                        className="font-bold sm:ml-[4px] md:ml-[5px] ml-[8px] text-white_A700 md:tracking-ls1 sm:tracking-ls1 tracking-ls112 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Hibernate, JPA
                      </Text>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center mt-[4px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[68%]">
                      <PagerIndicator
                        className="h-[8px] sm:w-[100%] w-[max-content]"
                        count={5}
                        activeCss="inline-block cursor-pointer w-[24px] h-[8px] bg-white_A700"
                        activeIndex={1}
                        inactiveCss="inline-block cursor-pointer w-[24px] h-[8px] bg-bluegray_300"
                        selectedWrapperCss="inline-block md:mx-[2px] mx-[4.00px] sm:mx-[2px]"
                        unselectedWrapperCss="inline-block md:mx-[2px] mx-[4.00px] sm:mx-[2px]"
                      />
                      <Text
                        className="font-bold sm:ml-[4px] md:ml-[5px] ml-[8px] text-white_A700 md:tracking-ls1 sm:tracking-ls1 tracking-ls112 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        OAuth
                      </Text>
                    </Row>
                  </Column>
                </Column>
                <Column className="flex flex-col justify-start md:p-[11px] p-[16px] sm:px-[15px] sm:py-[8px] w-[100%]">
                  <Text
                    className="not-italic text-white_A700 md:tracking-ls1 sm:tracking-ls1 tracking-ls128 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Frontend Skills
                  </Text>
                  <Column className="flex flex-col font-roboto justify-start sm:mb-[29px] md:mb-[38px] mb-[56px] md:mt-[11px] mt-[16px] sm:mt-[8px] sm:px-[0] w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[71%]">
                      <PagerIndicator
                        className="h-[8px] sm:w-[100%] w-[max-content]"
                        count={5}
                        activeCss="inline-block cursor-pointer w-[24px] h-[8px] bg-gradient3 "
                        activeIndex={1}
                        inactiveCss="inline-block cursor-pointer w-[24px] h-[8px] bg-white_A700"
                        selectedWrapperCss="inline-block md:mx-[2px] mx-[4.00px] sm:mx-[2px]"
                        unselectedWrapperCss="inline-block md:mx-[2px] mx-[4.00px] sm:mx-[2px]"
                      />
                      <Text
                        className="font-bold sm:ml-[4px] md:ml-[5px] ml-[8px] text-white_A700 md:tracking-ls1 sm:tracking-ls1 tracking-ls112 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        HTML
                      </Text>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center mt-[4px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[80%]">
                      <PagerIndicator
                        className="h-[8px] sm:w-[100%] w-[max-content]"
                        count={5}
                        activeCss="inline-block cursor-pointer w-[24px] h-[8px] bg-bluegray_300"
                        activeIndex={1}
                        inactiveCss="inline-block cursor-pointer w-[24px] h-[8px] bg-white_A700"
                        selectedWrapperCss="inline-block md:mx-[2px] mx-[4.00px] sm:mx-[2px]"
                        unselectedWrapperCss="inline-block md:mx-[2px] mx-[4.00px] sm:mx-[2px]"
                      />
                      <Text
                        className="font-bold sm:ml-[4px] md:ml-[5px] ml-[8px] text-white_A700 md:tracking-ls1 sm:tracking-ls1 tracking-ls112 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Javscript
                      </Text>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start mt-[4px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[71%]">
                      <PagerIndicator
                        className="h-[8px] sm:w-[100%] w-[max-content]"
                        count={5}
                        activeCss="inline-block cursor-pointer w-[24px] h-[8px] bg-bluegray_300"
                        activeIndex={1}
                        inactiveCss="inline-block cursor-pointer w-[24px] h-[8px] bg-white_A700"
                        selectedWrapperCss="inline-block md:mx-[2px] mx-[4.00px] sm:mx-[2px]"
                        unselectedWrapperCss="inline-block md:mx-[2px] mx-[4.00px] sm:mx-[2px]"
                      />
                      <Text
                        className="font-bold sm:ml-[4px] md:ml-[5px] ml-[8px] text-white_A700 md:tracking-ls1 sm:tracking-ls1 tracking-ls112 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        React
                      </Text>
                    </Row>
                  </Column>
                </Column>
              </List>
            </Column>
          </Column>
        </Column>
        <Column className="bg-gradient4  border border-black_900_19 border-solid flex flex-col items-center justify-start md:p-[48px] p-[70px] sm:px-[15px] sm:py-[37px] rounded-radius2 w-[100%]">
          <Column className="flex flex-col items-center justify-start max-w-[984px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Column className="flex flex-col items-center justify-start w-[100%]">
              <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[35%]">
                <Line className="bg-white_A700 h-[3px] w-[22%]" />
                <Text
                  className="mt-[13px] sm:mt-[6px] md:mt-[8px] not-italic text-white_A700 md:tracking-ls2 sm:tracking-ls2 tracking-ls4 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  WHAT THEY SAY ABOUT ME
                </Text>
              </Column>
              <List
                className="sm:gap-[16px] md:gap-[21px] gap-[31.5px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 min-h-[auto] sm:mt-[17px] md:mt-[22px] mt-[32px] pr-[1px] pt-[1px] w-[100%]"
                orientation="horizontal"
              >
                <Column className="flex flex-col items-center justify-start md:p-[11px] p-[16px] sm:px-[15px] sm:py-[8px] w-[100%]">
                  <Column className="flex flex-col items-center justify-start md:p-[13px] p-[20px] sm:px-[15px] sm:py-[10px] rounded-radius10 w-[100%]">
                    <Text
                      className="font-normal leading-[normal] not-italic text-center text-white_A700 md:tracking-ls1 sm:tracking-ls1 tracking-ls28000000000000003 w-[100%]"
                      as="h6"
                      variant="h6"
                    >
                      loreaum ipsum is the loreum ipsum is the loream ipsum is
                      the loream ipsum is the loreaum ipsum at a loreaum{" "}
                    </Text>
                  </Column>
                  <div className="bg-bluegray_100 h-[11px] sm:h-[6px] md:h-[8px] md:mt-[11px] mt-[16px] sm:mt-[8px] rounded-radius50 w-[11px] sm:w-[5px] md:w-[7px]"></div>
                  <Img
                    src="images/img_contrast.svg"
                    className="sm:h-[26px] md:h-[34px] h-[48px] max-w-[100%] md:mt-[11px] mt-[16px] sm:mt-[8px] sm:w-[25px] md:w-[33px] w-[48px]"
                    alt="contrast"
                  />
                  <Column className="flex flex-col items-center justify-start md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] md:p-[5px] p-[8px] sm:px-[0] sm:py-[4px] sm:w-[100%] w-[52%]">
                    <Text
                      className="not-italic text-white_A700 md:tracking-ls1 sm:tracking-ls1 tracking-ls2 w-[auto]"
                      variant="body1"
                    >
                      DEVELOPER
                    </Text>
                    <Text
                      className="mb-[4px] mt-[12px] sm:mt-[6px] md:mt-[8px] not-italic text-white_A700 md:tracking-ls1 sm:tracking-ls1 tracking-ls2 w-[auto]"
                      variant="body1"
                    >
                      Siemens
                    </Text>
                  </Column>
                </Column>
                <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                  <Column className="bg-bluegray_300 flex flex-col items-center justify-start md:p-[13px] sm:p-[15px] p-[20px] rounded-radius10 w-[100%]">
                    <Text
                      className="font-normal leading-[normal] not-italic text-center text-white_A700 md:tracking-ls1 sm:tracking-ls1 tracking-ls28000000000000003 w-[100%]"
                      as="h6"
                      variant="h6"
                    >
                      loreaum ipsum is the loreum ipsum is the loream ipsum is
                      the loream ipsum is the loreaum ipsum at a loreaum{" "}
                    </Text>
                  </Column>
                  <div className="bg-bluegray_100 h-[11px] sm:h-[6px] md:h-[8px] md:mt-[11px] mt-[16px] sm:mt-[8px] rounded-radius50 w-[11px] sm:w-[5px] md:w-[7px]"></div>
                  <Img
                    src="images/img_contrast.svg"
                    className="sm:h-[26px] md:h-[34px] h-[48px] max-w-[100%] md:mt-[11px] mt-[16px] sm:mt-[8px] sm:w-[25px] md:w-[33px] w-[48px]"
                    alt="contrast One"
                  />
                  <Column className="flex flex-col items-center justify-start md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] md:p-[5px] p-[8px] sm:px-[0] sm:py-[4px] sm:w-[100%] w-[39%]">
                    <Text
                      className="not-italic text-white_A700 md:tracking-ls1 sm:tracking-ls1 tracking-ls2 w-[auto]"
                      variant="body1"
                    >
                      DEVELOPER
                    </Text>
                    <Text
                      className="mb-[2px] mt-[12px] sm:mt-[6px] md:mt-[8px] not-italic text-white_A700 md:tracking-ls1 sm:tracking-ls1 tracking-ls2 w-[auto]"
                      variant="body1"
                    >
                      Siemens
                    </Text>
                  </Column>
                </Column>
                <Column className="flex flex-col items-center justify-start md:p-[11px] p-[16px] sm:px-[15px] sm:py-[8px] w-[100%]">
                  <Column className="flex flex-col items-center justify-start md:p-[13px] p-[20px] sm:px-[15px] sm:py-[10px] rounded-radius10 w-[100%]">
                    <Text
                      className="font-normal leading-[normal] not-italic text-center text-white_A700 md:tracking-ls1 sm:tracking-ls1 tracking-ls28000000000000003 w-[100%]"
                      as="h6"
                      variant="h6"
                    >
                      loreaum ipsum is the loreum ipsum is the loream ipsum is
                      the loream ipsum is the loreaum ipsum at a loreaum{" "}
                    </Text>
                  </Column>
                  <div className="bg-bluegray_100 h-[11px] sm:h-[6px] md:h-[8px] md:mt-[11px] mt-[16px] sm:mt-[8px] rounded-radius50 w-[11px] sm:w-[5px] md:w-[7px]"></div>
                  <Img
                    src="images/img_contrast.svg"
                    className="sm:h-[26px] md:h-[34px] h-[48px] max-w-[100%] md:mt-[11px] mt-[16px] sm:mt-[8px] sm:w-[25px] md:w-[33px] w-[48px]"
                    alt="contrast Two"
                  />
                  <Column className="flex flex-col items-center justify-start md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] md:p-[5px] p-[8px] sm:px-[0] sm:py-[4px] sm:w-[100%] w-[52%]">
                    <Text
                      className="not-italic text-white_A700 md:tracking-ls1 sm:tracking-ls1 tracking-ls2 w-[auto]"
                      variant="body1"
                    >
                      DEVELOPER
                    </Text>
                    <Text
                      className="mb-[4px] mt-[12px] sm:mt-[6px] md:mt-[8px] not-italic text-white_A700 md:tracking-ls1 sm:tracking-ls1 tracking-ls2 w-[auto]"
                      variant="body1"
                    >
                      Siemens
                    </Text>
                  </Column>
                </Column>
              </List>
              <Img
                src="images/img_frame82.svg"
                className="max-w-[100%] sm:mt-[17px] md:mt-[22px] mt-[32px] w-[11%]"
                alt="FrameEightyTwo"
              />
            </Column>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default FrameOnePage;
