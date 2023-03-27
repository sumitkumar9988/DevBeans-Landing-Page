import React from "react";

import { Img, Text, Button, Input, List } from "components";

const MainPage = () => {
  return (
    <>
      <div className="bg-white_A701 font-catamaran h-[2854px] mx-[auto] overflow-auto relative w-[100%]">
        <div className="absolute bg-white_A701 flex flex-col gap-[48px] h-[max-content] inset-[0] items-center justify-center m-[auto] max-w-[1439px] w-[100%]">
          <div className="bg-white_A701 flex items-start justify-start sm:px-[20px] px-[233px] md:px-[40px] py-[45px] self-stretch md:w-[100%] w-[auto]">
            <div className="flex flex-col md:gap-[40px] gap-[86px] items-center justify-start max-w-[974px] mx-[auto] self-stretch w-[100%]">
              <Img
                src="images/img_coffeebeans1.svg"
                className="h-[122px] w-[122px]"
                alt="coffeebeansOne"
              />
              <div className="flex flex-col justify-start w-[100%]">
                <Text
                  className="font-catamaran leading-[74.00px] text-black_901 text-center tracking-[-0.08px]"
                  as="h1"
                  variant="h1"
                ></Text>
                <Text
                  className="font-inter font-normal md:ml-[0] ml-[228px] mt-[16px] not-italic text-black_901 text-center tracking-[-0.08px] w-[auto]"
                  variant="body4"
                >
                  <>
                    Turn Design Into Tailwind CSS Instantly with devbeans!&quot;
                  </>
                </Text>
                <Button
                  className="bg-gray_804 border-[1px] border-green_A700 border-solid cursor-pointer flex items-center justify-center min-w-[212px] md:ml-[0] ml-[357px] mr-[403px] mt-[48px] px-[35px] py-[16px] rounded-[4px] w-[auto]"
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
          </div>
          <div className="bg-white_A701 flex flex-col gap-[134px] md:gap-[40px] items-start justify-center px-[135px] sm:px-[20px] md:px-[40px] py-[131px] self-stretch md:w-[100%] w-[auto]">
            <div className="flex flex-col md:gap-[40px] gap-[94px] items-start justify-start max-w-[1170px] mx-[auto] w-[100%]">
              <div className="flex items-start justify-start self-stretch md:w-[100%] w-[auto]">
                <Text
                  className="leading-[60.00px] md:max-w-[100%] max-w-[676px] text-black_900 text-left tracking-[-0.08px]"
                  as="h4"
                  variant="h4"
                >
                  <>“The Ultimate Design to Code Conversion Tool&quot;</>
                </Text>
              </div>
              <div className="font-inter h-[646px] md:h-[688px] relative w-[100%]">
                <div className="absolute bottom-[0] flex h-[606px] sm:h-[646px] md:h-[688px] inset-x-[0] justify-end mx-[auto] w-[100%]">
                  <div className="bg-bluegray_800 h-[646px] mt-[auto] mx-[auto] rounded-[34px] w-[100%]"></div>
                  <div className="absolute bottom-[14%] flex md:flex-col flex-row gap-[40px] inset-x-[0] items-center justify-start mx-[auto] self-stretch w-[auto]">
                    <div className="flex flex-col md:gap-[40px] gap-[71px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
                      <div className="flex font-catamaran items-start justify-start self-stretch sm:w-[100%] w-[auto]">
                        <Text
                          className="font-bold leading-[70.00px] text-amber_300 text-left tracking-[0.45px]"
                          as="h3"
                          variant="h3"
                        >
                          <>
                            We’ve
                            <br />
                            cracked the code for teams
                          </>
                        </Text>
                      </div>
                      <Text
                        className="font-inter font-medium leading-[31.00px] md:max-w-[100%] max-w-[339px] text-left text-white_A700 tracking-[-0.08px]"
                        variant="body4"
                      >
                        The experience is almost like working in your office
                        with your colleagues.
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[28px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
                      <Input
                        wrapClassName="bg-white_A700 flex pl-[30px] pr-[35px] py-[17px] rounded-[15px] w-[100%]"
                        className="font-semibold p-[0] placeholder:text-black_901 sm:px-[20px] text-[14px] text-black_901 text-left tracking-[0.20px] w-[100%]"
                        name="div"
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
                        wrapClassName="bg-white_A700 flex pl-[30px] pr-[35px] py-[17px] rounded-[15px] w-[100%]"
                        className="font-semibold p-[0] placeholder:text-black_901 sm:px-[20px] text-[14px] text-black_901 text-left tracking-[0.20px] w-[100%]"
                        name="div_One"
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
                        wrapClassName="bg-white_A700 flex pl-[30px] pr-[35px] py-[17px] rounded-[15px] w-[100%]"
                        className="font-semibold p-[0] placeholder:text-black_901 sm:px-[20px] text-[14px] text-black_901 text-left tracking-[0.20px] w-[100%]"
                        name="div_Two"
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
                      <Button className="bg-amber_300 border-[1px] border-amber_300 border-solid cursor-pointer font-semibold min-w-[114px] sm:px-[20px] px-[28px] py-[14px] rounded-[4px] text-[16px] text-black_901 text-center tracking-[-0.08px] w-[auto]">
                        Explore
                      </Button>
                    </div>
                  </div>
                </div>
                <Img
                  src="images/img_spiralsvg.svg"
                  className="absolute h-[190px] right-[0] top-[0] w-[158px]"
                  alt="spiralsvg"
                />
              </div>
            </div>
            <div className="h-[419px] max-w-[1276px] mx-[auto] relative w-[100%]">
              <div className="absolute bg-black_917 flex h-[100%] inset-[0] items-center justify-center m-[auto] p-[81px] sm:px-[20px] md:px-[40px] rounded-[15px] w-[92%]">
                <div className="flex flex-col gap-[34px] items-center justify-start mb-[17px] self-stretch md:w-[100%] w-[auto]">
                  <Text
                    className="font-catamaran text-center text-white_A700 tracking-[0.45px] w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Pay as you grow
                  </Text>
                  <Text
                    className="font-inter font-medium leading-[31.00px] md:max-w-[100%] max-w-[673px] text-center text-white_A700 tracking-[-0.08px]"
                    variant="body4"
                  >
                    Wish we could give the product for free, but good things
                    come with a price tag. Our plan starts from $15 for 10 users
                    and $2 per additional user.
                  </Text>
                  <Button
                    className="bg-white_A700 border-[1px] border-solid border-white_A700 cursor-pointer flex items-center justify-center min-w-[154px] px-[28px] py-[13px] rounded-[4px] w-[auto]"
                    rightIcon={
                      <Img
                        src="images/img_arrowright_black_902.svg"
                        className="ml-[10px]"
                        alt="arrow_right"
                      />
                    }
                  >
                    <div className="font-inter font-medium leading-[normal] sm:px-[20px] text-[16px] text-black_902 text-center">
                      See plans
                    </div>
                  </Button>
                </div>
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
          </div>
          <div className="bg-black_900 flex font-inter items-center justify-center max-w-[1439px] pl-[117px] pr-[122px] sm:px-[20px] md:px-[40px] py-[43px] w-[100%]">
            <div className="flex flex-col gap-[24px] items-center justify-start max-w-[1185px] mx-[auto] self-stretch w-[100%]">
              <div className="border-b-[1px] border-solid border-white_A700_3d flex items-start justify-start py-[38px] self-stretch md:w-[100%] w-[auto]">
                <div className="flex md:flex-col flex-row md:gap-[40px] gap-[530px] items-start justify-start px-[15px] self-stretch md:w-[100%] w-[auto]">
                  <div className="flex sm:flex-col flex-row gap-[12px] items-center justify-start self-stretch sm:w-[100%] w-[auto]">
                    <Img
                      src="images/img_brutasklogoblacksvg.svg"
                      className="h-[106px] w-[80px]"
                      alt="brutasklogoblac"
                    />
                    <Text
                      className="font-normal leading-[22.00px] md:max-w-[100%] max-w-[368px] not-italic text-left text-white_A700_a2 tracking-[-0.08px]"
                      variant="body7"
                    >
                      Brutask is the simplest to-do list for small remote teams,
                      who want to increase efficiency by increasing individual
                      productivity.
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[16px] items-start justify-start px-[12px] py-[2px] self-stretch w-[auto]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 tracking-[-0.08px] w-[auto]"
                      variant="body5"
                    >
                      About us
                    </Text>
                    <Text
                      className="font-normal not-italic text-left text-white_A700 tracking-[-0.08px] w-[auto]"
                      variant="body5"
                    >
                      Contact Us
                    </Text>
                    <Text
                      className="font-medium text-center text-white_A700 w-[auto]"
                      variant="body5"
                    >
                      Spaces
                    </Text>
                    <Text
                      className="font-medium text-center text-white_A700 w-[auto]"
                      variant="body5"
                    >
                      Pricing
                    </Text>
                    <Text
                      className="font-normal not-italic text-left text-white_A700 tracking-[-0.08px] w-[auto]"
                      variant="body5"
                    >
                      Blog
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row gap-[195px] md:gap-[40px] items-center justify-start px-[15px] self-stretch md:w-[100%] w-[auto]">
                <div className="flex items-start justify-start self-stretch w-[auto]">
                  <Text
                    className="font-normal not-italic text-left text-white_A700_90 tracking-[-0.08px] w-[auto]"
                    variant="body5"
                  >
                    © Brutask 2023 All rights reserved
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-[24px] items-start justify-start py-[2px] self-stretch sm:w-[100%] w-[auto]">
                  <Text
                    className="font-normal not-italic text-left text-white_A700_90 tracking-[-0.08px] w-[auto]"
                    variant="body5"
                  >
                    Terms & conditions
                  </Text>
                  <Text
                    className="font-normal not-italic text-left text-white_A700_90 tracking-[-0.08px] w-[auto]"
                    variant="body5"
                  >
                    Privacy policy
                  </Text>
                  <Text
                    className="font-normal not-italic text-left text-white_A700_90 tracking-[-0.08px] w-[auto]"
                    variant="body5"
                  >
                    Refund Policy
                  </Text>
                </div>
                <div className="flex flex-row gap-[24px] items-start justify-start self-stretch w-[auto]">
                  <Img
                    src="images/img_camera.svg"
                    className="h-[20px] w-[20px]"
                    alt="camera"
                  />
                  <List
                    className="sm:flex-col flex-row gap-[24px] grid grid-cols-2 w-[60%]"
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
        <Img
          src="images/img_pseudo.svg"
          className="absolute h-[608px] right-[0] top-[3%] w-[auto]"
          alt="pseudo"
        />
        <Img
          src="images/img_pseudo_black_902.svg"
          className="absolute h-[608px] left-[0] top-[3%] w-[auto]"
          alt="pseudo_One"
        />
      </div>
    </>
  );
};

export default MainPage;
