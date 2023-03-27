import React from "react";

import { Button, Img, Text, List, Input, SelectBox } from "components";

const HomePage = () => {
  return (
    <>
      <div className="flex font-inter h-[7986px] justify-end mx-[auto] relative w-[100%]">
        <Button className="absolute bg-indigo_A400 bottom-[0] flex h-[54px] items-center justify-center p-[10px] right-[1%] rounded-[50%] shadow-bs w-[54px]">
          <Img
            src="images/img_videocamera.svg"
            className="h-[34px]"
            alt="videocamera"
          />
        </Button>
        <div className="h-[73px] sm:h-[799px] md:h-[842px] mb-[736px] mt-[auto] mx-[auto] p-[5px] md:px-[20px] w-[100%]">
          <div className="absolute flex md:flex-col flex-row md:gap-[40px] h-[max-content] inset-[0] items-center justify-center m-[auto] w-[82%]">
            <div className="flex flex-row gap-[18px] items-center justify-start pb-[1.59px] self-stretch w-[auto]">
              <div className="flex flex-row items-start justify-evenly py-[3px] w-[66%]">
                <Img
                  src="images/img_mail.svg"
                  className="h-[18px] mt-[4px] w-[18px]"
                  alt="mail"
                />
                <Text
                  className="font-inter mt-[4px] text-black_901 text-center tracking-[0.20px] w-[auto]"
                  variant="body6"
                >
                  Spaces
                </Text>
                <Text
                  className="bg-amber_300 font-extrabold font-manrope h-[25px] justify-center px-[8px] py-[2px] rounded-[7px] text-bluegray_800 text-center tracking-[0.20px] w-[50px]"
                  variant="body7"
                >
                  Beta
                </Text>
              </div>
              <Text
                className="text-black_901 text-center tracking-[0.20px] w-[auto]"
                variant="body6"
              >
                Pricing
              </Text>
            </div>
            <div className="flex flex-row gap-[17px] items-center justify-between md:w-[100%] w-[13%]">
              <Text
                className="text-black_901 text-left tracking-[0.20px] w-[auto]"
                variant="body6"
              >
                Blog
              </Text>
              <Button className="border-[1px] border-green_A700 border-solid cursor-pointer font-medium min-w-[93px] pb-[3.59px] pl-[25px] pr-[26.7px] pt-[4px] sm:px-[20px] rounded-[16px] text-[16px] text-center text-green_A700 tracking-[-0.08px] w-[auto]">
                Login
              </Button>
            </div>
          </div>
          <Img
            src="images/img_brutasklogosvg.svg"
            className="absolute h-[63px] inset-[0] m-[auto] w-[50px]"
            alt="brutasklogosvg"
          />
        </div>
        <div className="absolute flex flex-col font-manrope h-[100%] inset-[0] items-center justify-center m-[auto] w-[100%]">
          <div className="flex flex-col items-center justify-start w-[100%]">
            <div className="bg-white_A701 flex items-center justify-start pt-[5px] w-[100%]">
              <div className="overflow-x-auto w-[100%]">
                <div className="md:h-[608px] h-[688px] md:px-[20px] relative w-[100%]">
                  <Img
                    src="images/img_brutasklogosvg_green_a700.svg"
                    className="absolute h-[125px] inset-x-[0] mx-[auto] top-[0] w-[auto]"
                    alt="brutasklogosvg_One"
                  />
                  <div className="absolute bottom-[0] h-[608px] inset-x-[0] mx-[auto] overflow-auto w-[100%]">
                    <div className="absolute flex inset-x-[0] items-center justify-start mx-[auto] sm:px-[20px] px-[212px] md:px-[40px] top-[12%] w-[auto]">
                      <Text
                        className="leading-[74.00px] text-black_901 text-center tracking-[-0.08px]"
                        as="h2"
                        variant="h2"
                      >
                        <>
                          Making
                          <br />
                          more human!
                        </>
                      </Text>
                    </div>
                    <div className="absolute bottom-[33%] flex flex-col font-inter gap-[34px] inset-x-[0] items-center justify-start mx-[auto] w-[47%]">
                      <Text
                        className="font-normal leading-[31.00px] not-italic text-black_901 text-center tracking-[-0.08px] w-[100%]"
                        variant="body4"
                      >
                        Brutask is the simplest collaboration tool for remote
                        teams looking to boost their efficiency by increasing
                        individual productivity.
                      </Text>
                      <Button
                        className="bg-green_A700 border-[1px] border-green_A700 border-solid cursor-pointer flex items-center justify-center min-w-[212px] px-[35px] py-[16px] rounded-[4px] w-[auto]"
                        rightIcon={
                          <Img
                            src="images/img_arrowright.svg"
                            className="ml-[10px] my-[3px]"
                            alt="arrow_right"
                          />
                        }
                      >
                        <div className="font-medium sm:px-[20px] text-[16px] text-center text-white_A700 tracking-[-0.08px]">
                          Get started
                        </div>
                      </Button>
                    </div>
                    <Img
                      src="images/img_pseudo.svg"
                      className="absolute h-[608px] inset-y-[0] my-[auto] right-[0] w-[auto]"
                      alt="pseudo_One"
                    />
                    <Img
                      src="images/img_pseudo_black_902.svg"
                      className="absolute h-[608px] inset-y-[0] left-[0] my-[auto] w-[auto]"
                      alt="pseudo_Two"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-amber_300 flex items-center justify-start py-[8px] w-[100%]">
              <div className="flex md:flex-col flex-row md:gap-[40px] items-end justify-between sm:pl-[20px] md:pl-[40px] pl-[63px] w-[100%]">
                <List
                  className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 w-[auto]"
                  orientation="horizontal"
                >
                  <div className="flex flex-row items-center justify-between sm:ml-[0] p-[2px] w-[100%]">
                    <Text
                      className="font-extrabold ml-[42px] text-bluegray_800 text-left tracking-[-0.08px] w-[auto]"
                      variant="body4"
                    >
                      Create to-do list
                    </Text>
                    <Img
                      src="images/img_star.svg"
                      className="h-[21px] mr-[58px] w-[22px]"
                      alt="star"
                    />
                  </div>
                  <div className="flex flex-row gap-[84px] items-start justify-center sm:ml-[0] pt-[5px] px-[5px] w-[100%]">
                    <Text
                      className="font-extrabold ml-[27px] text-bluegray_800 text-left tracking-[-0.08px] w-[auto]"
                      variant="body4"
                    >
                      Timebox and prioritise
                    </Text>
                    <Img
                      src="images/img_star.svg"
                      className="h-[21px] mr-[42px] w-[22px]"
                      alt="star"
                    />
                  </div>
                  <div className="flex flex-row items-center justify-between sm:ml-[0] p-[2px] w-[100%]">
                    <Text
                      className="font-extrabold ml-[36px] text-bluegray_800 text-left tracking-[-0.08px] w-[auto]"
                      variant="body4"
                    >
                      Add team members
                    </Text>
                    <Img
                      src="images/img_star.svg"
                      className="h-[21px] mr-[52px] w-[22px]"
                      alt="star"
                    />
                  </div>
                </List>
                <Text
                  className="font-extrabold md:mt-[0] mt-[5px] text-bluegray_800 text-left tracking-[-0.08px] w-[auto]"
                  variant="body4"
                >
                  Assign tasks
                </Text>
              </div>
            </div>
            <div className="bg-gray_100 flex font-inter items-center justify-end p-[77px] sm:px-[20px] md:px-[40px] w-[100%]">
              <div className="flex flex-col gap-[50px] items-center justify-start max-w-[1200px] mt-[33px] mx-[auto] px-[118px] sm:px-[20px] md:px-[40px] w-[100%]">
                <div className="flex flex-row items-center justify-center md:w-[100%] w-[20%]">
                  <Text
                    className="text-black_901 text-center tracking-[0.20px] w-[auto]"
                    variant="body6"
                  >
                    Tasks
                  </Text>
                  <Img
                    src="images/img_play.svg"
                    className="h-[40px] ml-[9px] rounded-[20px] w-[auto]"
                    alt="play"
                  />
                  <Text
                    className="ml-[10px] text-black_901 text-center tracking-[0.20px] w-[auto]"
                    variant="body6"
                  >
                    Spaces
                  </Text>
                </div>
                <div className="border-[2px] border-gray_300 border-solid h-[640px] rounded-[10px] w-[100%]"></div>
              </div>
            </div>
            <div className="bg-white_A701 flex font-manrope items-center justify-start p-[120px] sm:px-[20px] md:px-[40px] w-[100%]">
              <div className="flex flex-col gap-[22px] items-start justify-start max-w-[1200px] mb-[44px] mt-[26px] mx-[auto] pb-[15px] px-[15px] w-[100%]">
                <div className="flex items-start justify-start md:w-[100%] w-[auto]">
                  <Text
                    className="leading-[58.00px] text-black_900 text-left tracking-[-0.08px] sm:w-[100%] w-[94%]"
                    as="h5"
                    variant="h5"
                  ></Text>
                </div>
                <div className="font-inter sm:h-[627px] h-[646px] md:h-[862px] mb-[21px] relative w-[100%]">
                  <div className="md:h-[606px] h-[646px] m-[auto] w-[100%]">
                    <div className="absolute bg-bluegray_800 bottom-[0] h-[606px] inset-x-[0] mx-[auto] rounded-[34px] w-[100%]"></div>
                    <Img
                      src="images/img_spiralsvg.svg"
                      className="absolute h-[190px] right-[0] top-[0] w-[158px]"
                      alt="spiralsvg"
                    />
                  </div>
                  <div className="absolute bottom-[8%] flex md:flex-col flex-row md:gap-[20px] inset-x-[0] items-end justify-start mx-[auto] w-[92%]">
                    <div className="flex flex-col gap-[47px] items-start justify-start mb-[4px] px-[15px] md:w-[100%] w-[50%]">
                      <div className="flex font-manrope items-center justify-start md:w-[100%] w-[auto]">
                        <Text
                          className="font-semibold leading-[70.00px] text-amber_300 text-left tracking-[0.45px]"
                          as="h3"
                          variant="h3"
                        ></Text>
                      </div>
                      <Text
                        className="font-inter font-medium leading-[31.00px] text-left text-white_A700 tracking-[-0.08px] sm:w-[100%] w-[68%]"
                        variant="body4"
                      >
                        The experience is almost like working in your office
                        with your colleagues.
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start md:mt-[0] mt-[132px] px-[15px] md:w-[100%] w-[50%]">
                      <Input
                        wrapClassName="bg-white_A700 flex pl-[30px] pr-[35px] py-[17px] rounded-[15px] w-[100%]"
                        className="font-semibold p-[0] placeholder:text-black_901 sm:px-[20px] text-[14px] text-black_901 text-left tracking-[0.20px] w-[100%]"
                        name="div_One"
                        placeholder="Stay connected all-time, full-time!"
                        prefix={
                          <div className="h-[35px] mr-[11px] pl-[11px] pr-[10px] w-[35px] bg-green_A701 rounded-[17px] py-[12px] flex justify-center items-center">
                            <Img
                              src="images/img_checkmark.svg"
                              className="my-[auto]"
                              alt="checkmark"
                            />
                          </div>
                        }
                      ></Input>
                      <Input
                        wrapClassName="bg-white_A700 flex mt-[20px] pl-[30px] pr-[35px] py-[17px] rounded-[15px] w-[100%]"
                        className="font-semibold p-[0] placeholder:text-black_901 sm:px-[20px] text-[14px] text-black_901 text-left tracking-[0.20px] w-[100%]"
                        name="div_Two"
                        placeholder="Make meetings more exciting!"
                        prefix={
                          <div className="h-[35px] mr-[11px] pl-[11px] pr-[10px] w-[35px] bg-green_A701 rounded-[17px] py-[12px] flex justify-center items-center">
                            <Img
                              src="images/img_checkmark.svg"
                              className="my-[auto]"
                              alt="checkmark"
                            />
                          </div>
                        }
                      ></Input>
                      <Input
                        wrapClassName="bg-white_A700 flex mt-[20px] pl-[30px] pr-[35px] py-[17px] rounded-[15px] w-[100%]"
                        className="font-semibold p-[0] placeholder:text-black_901 sm:px-[20px] text-[14px] text-black_901 text-left tracking-[0.20px] w-[100%]"
                        name="div_Three"
                        placeholder="Hang out with the team during break times! 🤩"
                        prefix={
                          <div className="h-[35px] mr-[11px] pl-[11px] pr-[10px] w-[35px] bg-green_A701 rounded-[17px] py-[12px] flex justify-center items-center">
                            <Img
                              src="images/img_checkmark.svg"
                              className="my-[auto]"
                              alt="checkmark"
                            />
                          </div>
                        }
                      ></Input>
                      <Button
                        className="bg-amber_300 border-[1px] border-amber_300 border-solid cursor-pointer flex items-center justify-center min-w-[189px] mt-[44px] px-[28px] py-[16px] rounded-[4px] w-[auto]"
                        rightIcon={
                          <Img
                            src="images/img_mail.svg"
                            className="ml-[5px] my-[1px]"
                            alt="mail"
                          />
                        }
                      >
                        <div className="font-semibold sm:px-[20px] text-[16px] text-black_901 text-left tracking-[-0.08px]">
                          Check Spaces
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray_100 flex items-end justify-start pl-[120px] sm:pl-[20px] md:pl-[40px] py-[120px] w-[100%]">
              <div className="flex flex-col items-start justify-start mb-[80px] mt-[36px] overflow-auto pl-[15px] w-[100%]">
                <div className="flex font-manrope items-center justify-start sm:px-[20px] px-[359px] md:px-[40px] md:w-[100%] w-[auto]">
                  <Text
                    className="text-black_900 text-center tracking-[-0.08px] w-[auto]"
                    as="h5"
                    variant="h5"
                  ></Text>
                </div>
                <Text
                  className="font-inter font-normal leading-[31.00px] md:ml-[0] ml-[239px] mt-[14px] not-italic text-black_901 text-center tracking-[-0.08px] sm:w-[100%] w-[53%]"
                  variant="body4"
                >
                  Other task managers are all about project progress, Brutask
                  focuses on increasing individual productivity, that ultimately
                  improves team efficiency.
                </Text>
                <div className="flex items-center justify-start mt-[68px] w-[100%]">
                  <div className="flex md:flex-col flex-row gap-[30px] items-center justify-start sm:pr-[20px] pr-[297px] md:pr-[40px] w-[100%]">
                    <List
                      className="md:flex-1 sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 md:w-[100%] w-[60%]"
                      orientation="horizontal"
                    >
                      <div className="md:h-[267px] h-[280px] sm:ml-[0] relative w-[100%]">
                        <div className="absolute bg-white_A700 bottom-[0] flex flex-col gap-[12px] inset-x-[0] items-center justify-center mx-[auto] p-[30px] sm:px-[20px] rounded-[12px] w-[100%]">
                          <Text
                            className="font-manrope mt-[92px] text-black_901 text-center tracking-[-0.08px] w-[auto]"
                            variant="body3"
                          >
                            Add Tasks
                          </Text>
                          <Text
                            className="font-inter font-normal leading-[22.00px] mb-[14px] not-italic text-black_900 text-center tracking-[-0.08px] w-[100%]"
                            variant="body7"
                          >
                            <>
                              Add your tasks for the day & update them. Check
                              them once they&#39;re done.
                            </>
                          </Text>
                        </div>
                        <Img
                          src="images/img_taskssvg.svg"
                          className="absolute h-[160px] right-[17%] top-[0] w-[160px]"
                          alt="taskssvg"
                        />
                      </div>
                      <div className="md:h-[267px] h-[280px] sm:ml-[0] relative w-[100%]">
                        <div className="absolute bg-white_A700 bottom-[0] flex flex-col gap-[10px] inset-x-[0] items-center justify-center mx-[auto] p-[35px] sm:px-[20px] rounded-[12px] w-[100%]">
                          <Text
                            className="font-manrope mt-[89px] text-black_901 text-center tracking-[-0.08px] w-[auto]"
                            variant="body3"
                          >
                            Time Boxing
                          </Text>
                          <Text
                            className="font-inter font-normal leading-[22.00px] mb-[9px] not-italic text-black_900 text-center tracking-[-0.08px] w-[100%]"
                            variant="body7"
                          >
                            Allocate time for each task for better time
                            management & organization.
                          </Text>
                        </div>
                        <Img
                          src="images/img_timeboxsvg.svg"
                          className="absolute h-[160px] right-[17%] top-[0] w-[160px]"
                          alt="timeboxsvg"
                        />
                      </div>
                      <div className="md:h-[266px] h-[280px] sm:ml-[0] relative w-[100%]">
                        <div className="absolute bg-white_A700 bottom-[0] flex flex-col gap-[12px] inset-x-[0] items-center justify-center mx-[auto] p-[20px] rounded-[12px] w-[100%]">
                          <Text
                            className="font-manrope mt-[101px] text-black_901 text-center tracking-[-0.08px] w-[auto]"
                            variant="body3"
                          >
                            Prioritisation
                          </Text>
                          <Text
                            className="font-inter font-normal leading-[22.00px] mb-[24px] not-italic text-black_900 text-center tracking-[-0.08px] w-[100%]"
                            variant="body7"
                          >
                            Prioritise the most important tasks of the day to
                            the top, so you do what needs to be done first.
                          </Text>
                        </div>
                        <Img
                          src="images/img_prioritizationsvg.svg"
                          className="absolute h-[160px] right-[17%] top-[0] w-[160px]"
                          alt="prioritizations"
                        />
                      </div>
                    </List>
                    <div className="flex relative md:w-[100%] w-[39%]">
                      <div className="flex my-[auto] w-[54%]">
                        <div className="md:h-[267px] h-[280px] my-[auto] w-[89%]">
                          <div className="absolute bg-white_A700 bottom-[0] flex flex-col gap-[12px] inset-x-[0] items-center justify-center mx-[auto] p-[23px] sm:px-[20px] rounded-[12px] w-[100%]">
                            <Text
                              className="font-manrope mt-[99px] text-black_901 text-center tracking-[-0.08px] w-[auto]"
                              variant="body3"
                            >
                              Video Calls
                            </Text>
                            <Text
                              className="font-inter font-normal leading-[22.00px] mb-[21px] not-italic text-black_900 text-center tracking-[-0.08px] w-[100%]"
                              variant="body7"
                            >
                              Hop on video calls, present your screen, invite
                              external guests & collaborate with your entire
                              team.
                            </Text>
                          </div>
                          <Img
                            src="images/img_videocallssvg.svg"
                            className="absolute h-[160px] right-[17%] top-[0] w-[160px]"
                            alt="videocallssvg"
                          />
                        </div>
                        <Button className="bg-black_906 flex h-[48px] items-center justify-center mb-[98px] ml-[-14px] mt-[auto] p-[14px] rounded-[50%] w-[48px] z-[1]">
                          <Img
                            src="images/img_arrowright_gray_500.svg"
                            className=""
                            alt="arrowright"
                          />
                        </Button>
                      </div>
                      <div className="md:h-[266px] h-[280px] ml-[-4px] my-[auto] w-[48%] z-[1]">
                        <div className="absolute bg-white_A700 bottom-[0] flex flex-col gap-[12px] inset-x-[0] items-center justify-center mx-[auto] p-[29px] sm:px-[20px] rounded-[12px] w-[100%]">
                          <Text
                            className="font-manrope mt-[92px] text-black_901 text-center tracking-[-0.08px] w-[auto]"
                            variant="body3"
                          >
                            Connect Calendar
                          </Text>
                          <Text
                            className="font-inter font-normal leading-[22.00px] mb-[15px] not-italic text-black_900 text-center tracking-[-0.08px] w-[100%]"
                            variant="body7"
                          >
                            Integrate with Google Calendar, join and respond to
                            meetings directly on Brutask.
                          </Text>
                        </div>
                        <Img
                          src="images/img_calendarsvg.svg"
                          className="absolute h-[160px] right-[17%] top-[0] w-[160px]"
                          alt="calendarsvg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <Button
                  className="bg-green_A700 border-[1px] border-green_A700 border-solid cursor-pointer flex items-center justify-center min-w-[212px] md:ml-[0] ml-[478px] mt-[89px] px-[35px] py-[16px] rounded-[4px] w-[auto]"
                  rightIcon={
                    <Img
                      src="images/img_arrowright.svg"
                      className="ml-[10px] my-[3px]"
                      alt="arrow_right"
                    />
                  }
                >
                  <div className="font-inter font-medium sm:px-[20px] text-[16px] text-center text-white_A700 tracking-[-0.08px]">
                    Get started
                  </div>
                </Button>
              </div>
            </div>
            <div className="flex flex-col font-manrope md:px-[20px] relative w-[100%]">
              <div className="bg-white_A701 flex items-start justify-start mx-[auto] p-[135px] sm:px-[20px] md:px-[40px] w-[100%]">
                <Text
                  className="leading-[58.00px] mb-[972px] mt-[11px] text-black_900 text-left tracking-[-0.08px] sm:w-[100%] w-[49%]"
                  as="h5"
                  variant="h5"
                >
                  Add members, assign managers and supervise
                </Text>
              </div>
              <div className="h-[1097px] md:h-[1449px] sm:h-[884px] mt-[-210px] mx-[auto] w-[100%] z-[1]">
                <div className="absolute bg-gray_100 bottom-[0] h-[887px] inset-x-[0] mx-[auto] w-[100%]"></div>
                <div className="absolute flex flex-col gap-[100px] md:gap-[40px] h-[100%] inset-[0] items-center justify-center m-[auto] w-[89%]">
                  <div className="md:h-[416px] h-[419px] relative w-[100%]">
                    <div className="absolute bg-black_917 flex flex-col h-[100%] inset-[0] items-center justify-center m-[auto] p-[92px] sm:px-[20px] md:px-[40px] rounded-[15px] w-[92%]">
                      <Text
                        className="font-manrope text-center text-white_A700 tracking-[0.45px] w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Pay as you grow
                      </Text>
                      <Text
                        className="font-inter font-medium leading-[31.00px] mt-[20px] text-center text-white_A700 tracking-[-0.08px] sm:w-[100%] w-[69%]"
                        variant="body4"
                      >
                        Wish we could give the product for free, but good things
                        come with a price tag. Our plan starts from $15 for 10
                        users and $2 per additional user.
                      </Text>
                      <Button
                        className="bg-white_A700 border-[1px] border-solid border-white_A700 cursor-pointer flex items-center justify-center mb-[7px] min-w-[154px] mt-[39px] px-[28px] py-[13px] rounded-[4px] w-[auto]"
                        rightIcon={
                          <Img
                            src="images/img_arrowright_black_902.svg"
                            className="ml-[10px] my-[3px]"
                            alt="arrow_right"
                          />
                        }
                      >
                        <div className="font-inter font-medium leading-[normal] sm:px-[20px] text-[16px] text-black_902 text-center">
                          See plans
                        </div>
                      </Button>
                    </div>
                    <Img
                      src="images/img_decoration1svg.svg"
                      className="absolute bottom-[1%] h-[130px] left-[0] w-[145px]"
                      alt="decoration1svg"
                    />
                    <Img
                      src="images/img_decoration2svg.svg"
                      className="absolute h-[158px] right-[0] top-[0] w-[208px]"
                      alt="decoration2svg"
                    />
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-[58px] items-center justify-between px-[15px] md:w-[100%] w-[95%]">
                    <div className="h-[571px] relative md:w-[100%] w-[40%]">
                      <Img
                        src="images/img_testimonial1jpg.png"
                        className="h-[571px] m-[auto] object-cover w-[100%]"
                        alt="testimonial1jpg"
                      />
                      <Img
                        src="images/img_starblue8svg.svg"
                        className="absolute bottom-[0] h-[148px] left-[0] w-[auto]"
                        alt="starblue8svg"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-end mr-[6px] md:w-[100%] w-[auto]">
                      <Text
                        className="mt-[6px] text-black_900 text-left tracking-[-0.08px] w-[auto]"
                        variant="body1"
                      >
                        A tip to use Brutask
                      </Text>
                      <Text
                        className="mt-[4px] text-black_900 text-left tracking-[0.45px] w-[auto]"
                        variant="body2"
                      >
                        Siddhita Upare, Director Brutask
                      </Text>
                      <Text
                        className="leading-[51.00px] mt-[29px] text-black_900 text-left tracking-[0.45px] sm:w-[100%] w-[99%]"
                        variant="body1"
                      >
                        Onboard your entire team by sending the invite link or
                        adding their email IDs, & ask them to add their tasks
                        daily before beginning the day. The team can now connect
                        over Spaces & call out their tasks. At the end of the
                        day, re-connect on Spaces to check the progress & add
                        tasks for the next day.
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white_A701 flex font-manrope items-center justify-end mt-[154px] p-[96px] sm:px-[20px] md:px-[40px] w-[100%]">
              <div className="flex flex-col items-center justify-start max-w-[1200px] mt-[56px] mx-[auto] px-[15px] w-[100%]">
                <Img
                  src="images/img_binocularsvg.svg"
                  className="h-[129px] w-[200px]"
                  alt="binocularsvg"
                />
                <Text
                  className="mt-[20px] text-black_900 text-center tracking-[-0.08px] w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  FAQs
                </Text>
                <div className="flex flex-col gap-[28px] items-center justify-start mt-[34px] w-[100%]">
                  <div className="bg-amber_300 flex items-center justify-start p-[29px] sm:px-[20px] rounded-[45px] w-[100%]">
                    <SelectBox
                      className="font-extrabold text-[20px] text-bluegray_800 text-left tracking-[0.20px] sm:w-[100%] w-[93%]"
                      placeholderClassName="text-bluegray_800"
                      name="div_Four"
                      placeholder="How is Brutask useful for me?"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown.svg"
                          className="h-[12px] mr-[0] w-[16px]"
                          alt="arrow_down"
                        />
                      }
                    ></SelectBox>
                  </div>
                  <div className="bg-amber_300 flex items-center justify-start p-[29px] sm:px-[20px] rounded-[45px] w-[100%]">
                    <SelectBox
                      className="font-extrabold text-[20px] text-bluegray_800 text-left tracking-[0.20px] sm:w-[100%] w-[93%]"
                      placeholderClassName="text-bluegray_800"
                      name="div_Five"
                      placeholder="How Brutask is different from other tools?"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown.svg"
                          className="h-[12px] mr-[0] w-[16px]"
                          alt="arrow_down"
                        />
                      }
                    ></SelectBox>
                  </div>
                  <div className="bg-amber_300 flex items-center justify-start p-[29px] sm:px-[20px] rounded-[45px] w-[100%]">
                    <SelectBox
                      className="font-extrabold pt-[4px] text-[20px] text-bluegray_800 text-left tracking-[0.20px] sm:w-[100%] w-[93%]"
                      placeholderClassName="text-bluegray_800"
                      name="div_Six"
                      placeholder="How to get the most out of Brutask?"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown.svg"
                          className="h-[12px] mr-[0] w-[16px]"
                          alt="arrow_down"
                        />
                      }
                    ></SelectBox>
                  </div>
                  <div className="bg-amber_300 flex items-center justify-start p-[29px] sm:px-[20px] rounded-[45px] w-[100%]">
                    <SelectBox
                      className="font-extrabold pt-[4px] text-[20px] text-bluegray_800 text-left tracking-[0.20px] sm:w-[100%] w-[93%]"
                      placeholderClassName="text-bluegray_800"
                      name="div_Seven"
                      placeholder="What are the benefits of integrating my Google Calendar with Brutask?"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown.svg"
                          className="h-[12px] mr-[0] w-[16px]"
                          alt="arrow_down"
                        />
                      }
                    ></SelectBox>
                  </div>
                  <div className="bg-amber_300 flex items-center justify-start p-[29px] sm:px-[20px] rounded-[45px] w-[100%]">
                    <SelectBox
                      className="font-extrabold pt-[4px] text-[20px] text-bluegray_800 text-left tracking-[0.20px] sm:w-[100%] w-[93%]"
                      placeholderClassName="text-bluegray_800"
                      name="div_Eight"
                      placeholder="How do I integrate my Google Calendar with Brutask?"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown.svg"
                          className="h-[12px] mr-[0] w-[16px]"
                          alt="arrow_down"
                        />
                      }
                    ></SelectBox>
                  </div>
                  <div className="bg-amber_300 flex items-center justify-start p-[29px] sm:px-[20px] rounded-[45px] w-[100%]">
                    <SelectBox
                      className="font-extrabold pt-[4px] text-[20px] text-bluegray_800 text-left tracking-[0.20px] sm:w-[100%] w-[93%]"
                      placeholderClassName="text-bluegray_800"
                      name="div_Nine"
                      placeholder="How is Spaces useful?"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown.svg"
                          className="h-[12px] mr-[0] w-[16px]"
                          alt="arrow_down"
                        />
                      }
                    ></SelectBox>
                  </div>
                  <div className="bg-amber_300 flex items-center justify-start p-[29px] sm:px-[20px] rounded-[45px] w-[100%]">
                    <SelectBox
                      className="font-extrabold pt-[4px] text-[20px] text-bluegray_800 text-left tracking-[0.20px] sm:w-[100%] w-[93%]"
                      placeholderClassName="text-bluegray_800"
                      name="div_Ten"
                      placeholder="How do I access Spaces?"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown.svg"
                          className="h-[12px] mr-[0] w-[16px]"
                          alt="arrow_down"
                        />
                      }
                    ></SelectBox>
                  </div>
                  <div className="bg-amber_300 flex items-center justify-start p-[29px] sm:px-[20px] rounded-[45px] w-[100%]">
                    <SelectBox
                      className="font-extrabold pt-[4px] text-[20px] text-bluegray_800 text-left tracking-[0.20px] sm:w-[100%] w-[93%]"
                      placeholderClassName="text-bluegray_800"
                      name="div_Eleven"
                      placeholder="How do I share my room link with external guests or clients?"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown.svg"
                          className="h-[12px] mr-[0] w-[16px]"
                          alt="arrow_down"
                        />
                      }
                    ></SelectBox>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-black_900 flex font-inter items-center justify-end p-[43px] sm:px-[20px] md:px-[40px] w-[100%]">
            <div className="flex flex-col gap-[24px] items-center justify-start max-w-[1200px] mt-[5px] mx-[auto] w-[100%]">
              <div className="h-[185px] md:h-[295px] relative w-[100%]">
                <div className="absolute border-b-[1px] border-solid border-white_A700_3d h-[185px] inset-[0] justify-center m-[auto] w-[98%]"></div>
                <div className="absolute flex md:flex-col flex-row md:gap-[40px] inset-x-[0] items-start justify-between mx-[auto] px-[15px] top-[0] w-[100%]">
                  <div className="flex md:flex-1 sm:flex-col flex-row gap-[12px] items-start justify-start pr-[7px] md:w-[100%] w-[40%]">
                    <Img
                      src="images/img_brutasklogoblacksvg.svg"
                      className="h-[106px] w-[80px]"
                      alt="brutasklogoblac"
                    />
                    <Text
                      className="font-normal leading-[22.00px] sm:mt-[0] mt-[30px] not-italic text-left text-white_A700_a2 tracking-[-0.08px] sm:w-[100%] w-[80%]"
                      variant="body7"
                    >
                      Brutask is the simplest to-do list for small remote teams,
                      who want to increase efficiency by increasing individual
                      productivity.
                    </Text>
                  </div>
                  <div className="flex md:flex-1 flex-col items-start justify-start mr-[4px] pr-[2px] pt-[2px] md:w-[100%] w-[auto]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 tracking-[-0.08px] w-[auto]"
                      variant="body5"
                    >
                      About us
                    </Text>
                    <Text
                      className="font-normal mt-[11px] not-italic text-left text-white_A700 tracking-[-0.08px] w-[auto]"
                      variant="body5"
                    >
                      Contact Us
                    </Text>
                    <Text
                      className="font-medium mt-[13px] text-center text-white_A700 w-[auto]"
                      variant="body5"
                    >
                      Spaces
                    </Text>
                    <Text
                      className="font-medium mt-[11px] text-center text-white_A700 w-[auto]"
                      variant="body5"
                    >
                      Pricing
                    </Text>
                    <Text
                      className="font-normal mt-[12px] not-italic text-left text-white_A700 tracking-[-0.08px] w-[auto]"
                      variant="body5"
                    >
                      Blog
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between px-[15px] w-[100%]">
                <Text
                  className="font-normal md:mt-[0] mt-[3px] not-italic text-left text-white_A700_90 tracking-[-0.08px] w-[auto]"
                  variant="body5"
                >
                  © Brutask 2023 All rights reserved
                </Text>
                <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-[20px] items-start justify-center pr-[2px] pt-[2px] md:w-[100%] w-[auto]">
                  <Text
                    className="font-normal not-italic text-left text-white_A700_90 tracking-[-0.08px] w-[auto]"
                    variant="body5"
                  >
                    Terms & conditions
                  </Text>
                  <Text
                    className="font-normal sm:ml-[0] ml-[23px] not-italic text-left text-white_A700_90 tracking-[-0.08px] w-[auto]"
                    variant="body5"
                  >
                    Privacy policy
                  </Text>
                  <Text
                    className="font-normal sm:ml-[0] ml-[23px] mr-[68px] not-italic text-left text-white_A700_90 tracking-[-0.08px] w-[auto]"
                    variant="body5"
                  >
                    Refund Policy
                  </Text>
                </div>
                <div className="flex md:flex-1 flex-row gap-[24px] items-start justify-end mr-[2px] pl-[2px] pt-[2px] md:w-[100%] w-[auto]">
                  <Img
                    src="images/img_camera.svg"
                    className="h-[20px] w-[20px]"
                    alt="camera"
                  />
                  <List
                    className="sm:flex-col flex-row gap-[24px] grid grid-cols-2 w-[18%]"
                    orientation="horizontal"
                  >
                    <div className="flex items-start justify-start w-[100%]">
                      <Img
                        src="images/img_twitter.svg"
                        className="h-[20px] w-[20px]"
                        alt="twitter"
                      />
                    </div>
                    <div className="flex items-start justify-start w-[100%]">
                      <Img
                        src="images/img_linkedinsvg.svg"
                        className="h-[20px] w-[20px]"
                        alt="linkedinsvg"
                      />
                    </div>
                  </List>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
