import { Button, Img, Text } from "components";

const MainPage = () => {
  return (
    <>
      <div className="bg-white_A701 font-catamaran  mx-[auto] overflow-auto relative w-screen h-full">
        <div className=" bg-white_A701 flex flex-col gap-[48px]  items-center justify-center m-[auto] ">
          <div className="bg-white_A701 flex items-start justify-start sm:px-[20px] mx-auto px-auto px-8 xl:px-[233px] md:px-[40px] py-[45px] self-stretch ">
            <div className="flex flex-col md:gap-[40px] gap-[86px] items-center justify-start ">
              <Img
                src="images/img_coffeebeans1.svg"
                className="h-[122px] w-[122px]"
                alt="coffeebeansOne"
              />
              <div className="flex flex-col justify-center items-center">
                <Text
                  className="font-catamaran leading-[74.00px] text-black_901 text-center tracking-[-0.08px]"
                  as="h1"
                  variant="h1"
                >
                  Design to <br />{" "}
                  <div className="text-[#0EB770]">Tailwind CSS </div>
                </Text>
                <Text
                  className="font-inter font-normal  mt-[16px] not-italic text-black_901 text-center tracking-[-0.08px] w-[auto]"
                  variant="body4"
                >
                  <>
                    Turn Design Into Tailwind CSS Instantly with devbeans!&quot;
                  </>
                </Text>
                <Button
                  className="bg-[#0EB770]  border-solid cursor-pointer flex items-center justify-center min-w-[212px] mt-[48px]  py-[16px] rounded-[4px] w-80"
                  rightIcon={
                    <Img
                      src="images/img_arrowright.svg"
                      className="ml-[10px] my-[3px]"
                      alt="arrow_right"
                    />
                  }
                >
                  <a
                    href="https://forms.gle/toJwzgmAvoJAA6oo9"
                    target="_blank"
                    rel="noreferrer"
                    className="font-inter font-medium sm:px-[20px] text-[16px] text-center text-white_A700 tracking-[-0.08px]"
                  >
                    Get started
                  </a>
                </Button>
              </div>
            </div>
          </div>
          <div className="bg-white_A701 py-30 w-full flex flex-col gap-[134px]  items-start justify-center px-8 lg:px-[140px] py-12 lg:py-40 ">
            <div className="flex flex-col w-full gap-[94px] items-start justify-start ">
              <div className="flex items-start  justify-start ">
                <Text
                  className="leading-[70px] max-w-2xl  text-black_900 text-left tracking-[-0.08px]"
                  as="h4"
                  variant="h4"
                >
                  “The Ultimate Design to Code Conversion Tool"
                </Text>
              </div>
              <div className="font-inter  relative w-full">
                <div className="relative bg-bluegray_800 rounded-[34px]   bottom-[0] flex h-full px-4 lg:px-20  px-auto mx-auto w-full">
                  <div className="flex  flex-col lg:flex-row gap-[40px] justify-center items-center  mx-auto px-auto py-40">
                    <div className="flex flex-col gap-[40px] lg:gap-[71px] items-start justify-center  w-[auto]">
                      <div className="flex font-catamaran items-start justify-start  w-[auto]">
                        <Text
                          className="font-bold leading-[30.00px] lg:leading-[80.00px] text-amber_300 text-left tracking-[0.45px]"
                          as="h3"
                          variant="h3"
                        >
                          Streamline Your Workflow with Codebeans
                        </Text>
                      </div>
                      <Text
                        className="font-inter font-medium leading-[31.00px] md:max-w-[100%] max-w-[339px] text-left text-white_A700 tracking-[-0.08px]"
                        variant="body4"
                      >
                        Effortlessly Convert Your Designs to Tailwind CSS Code
                        with Our User-Friendly Tool
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[28px] items-start justify-start w-full">
                      <div class="flex items-start  justify-center  px-2 py-4 bg-white rounded-2xl w-full">
                        <p class="text-sm text-start font-semibold leading-loose text-gray-900">
                          Clean and consistent code
                        </p>
                      </div>
                      <div class="flex items-start  justify-center  px-2 py-4 bg-white rounded-2xl w-full">
                        <p class="text-sm text-start font-semibold leading-loose text-gray-900">
                          Proper flex layout
                        </p>
                      </div>{" "}
                      <div class="flex items-start  justify-center  px-2 py-4 bg-white rounded-2xl w-full">
                        <p class="text-sm text-start font-semibold leading-loose text-gray-900">
                          Easy to import assets
                        </p>
                      </div>
                      <Button className="bg-amber_300 border-[1px] border-amber_300 border-solid cursor-pointer font-semibold min-w-[114px] sm:px-[20px] px-[28px] py-[14px] rounded-[4px] text-[16px] text-black_901 text-center tracking-[-0.08px] w-[auto]">
                        Explore
                      </Button>
                    </div>
                  </div>
                </div>
                <Img
                  src="images/img_spiralsvg.svg"
                  className="absolute h-[190px] hidden lg:block right-[0] top-[0] w-[158px]"
                  alt="spiralsvg"
                />
              </div>
            </div>
            <div className="h-full max-w-[1276px] mx-[auto] relative w-[100%]">
              <div className=" bg-black_917 h-full flex  inset-[0] items-center justify-center m-[auto] p-[81px] sm:px-[20px] md:px-[40px] rounded-[15px] w-[92%]">
                <div className="flex flex-col gap-[34px] items-center justify-start py-12">
                  <Text
                    className="font-catamaran text-center text-white_A700 tracking-[0.45px] w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Sign Up Now for Free!
                  </Text>
                  <Text
                    className="font-inter font-medium leading-[31.00px] md:max-w-[100%] max-w-[673px] text-center text-white_A700 tracking-[-0.08px]"
                    variant="body4"
                  >
                    Sign up now for free and start converting your designs to
                    Tailwind CSS code in just a few clicks!
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
                    <a
                      href="https://forms.gle/toJwzgmAvoJAA6oo9"
                      target="_blank"
                      rel="noreferrer"
                      className="font-inter font-medium leading-[normal] sm:px-[20px] text-[16px] text-black_902 text-center"
                    >
                      Explore{" "}
                    </a>
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
          <div className="bg-black_900 flex font-inter items-center justify-center px-2 lg:px-[40px] py-[43px] w-full overflow-hidden">
            <div className="border-b-[1px] border-solid border-white_A700_3d flex flex-col px-20 items-center justify-arouned py-[38px] mx-auto px-auto w-full">
              <div className="flex flex-col lg:flex-row  py-2 gap-8 lg:gap-40  items-start justify-start px-[15px]  w-full">
                <div className="flex flex-col gap-4  items-start justify-between   w-full">
                  <Img
                    src="images/img_coffeebeans1.svg"
                    className="h-[106px] w-[80px]"
                    alt="brutasklogoblac"
                  />
                  <Text
                    className="font-normal leading-[22.00px]  max-w-[368px] not-italic text-left text-white_A700_a2 tracking-[-0.08px]"
                    variant="body7"
                  >
                    Codebeans - the easy and efficient way to convert your
                    designs to Tailwind CSS code.
                  </Text>
                </div>
                <div className="flex flex-col gap-[16px] items-start justify-center px-2 lg:px-[12px] py-[2px] w-full">
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
          </div>
        </div>
        <div className="hidden lg:block">
          <Img
            src="images/img_pseudo_black_902.svg"
            className=" h-[608px] left-[0] top-[3%] w-[auto] absolute"
            alt="pseudo_One"
          />
          <Img
            src="images/img_pseudo.svg"
            className="absolute h-[608px] right-[0] top-[3%] w-[auto] "
            alt="pseudo"
          />
        </div>
      </div>
    </>
  );
};

export default MainPage;
