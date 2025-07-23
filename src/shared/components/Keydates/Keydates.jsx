import { GrUploadOption } from "react-icons/gr";
import { IoLocationSharp, IoNewspaperOutline } from "react-icons/io5";
import { MdAccountBalance, MdDateRange, MdOutlineNotificationsActive, MdOutlineNumbers } from "react-icons/md";
import { TfiWrite } from "react-icons/tfi";
import { Link } from "react-router-dom";

export default function Keydates() {
  return (
    <>
      <div className="bg-cover  bg-center flex flex-col items-start justify-center pt-[50px] sm:pt-[60px] h-[250px] sm:h-[300px] md:h-[330px] lg:h-[330px] 2xl:h-[330px]" style={{ backgroundImage: "url('/assets/images/Banner.jpg')" }} >
        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-[#000000] opacity-25"></div> */}
        {/* Centered Content */}
        <div className="xl:max-w-[1450px]  md:max-w-[920px] mx-auto w-full px-2 lg:mt-0 mt-5">
          <p className="inter-semibold text-white lg:text-[30px] text-xl">Countdown to ICRAIS 2025</p>
          <p className="flex space-x-2 text-white   mt-4">

            <Link to="/" className="hover:text-[#1B56FD] inter-regular  text-[18px]">
              Home
            </Link>
            <p className="text-white text-[18px] inter-medium ">/</p>
            <p className="text-[18px]  inter-medium">Keydates</p>
          </p>
        </div>
      </div>

      <div className="xl:max-w-[1450px]  md:max-w-[920px] px-4 mx-auto mt-8 lg:mt-10 ">
        <p className="inter-semibold lg:text-[30px] text-[25px]">Stay Ahead with Important Deadlines</p>
        <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] mt-3 ">Keep track of crucial milestones for ICRAIS 2025. Mark your calendar with submission deadlines, notifications, and registration dates to ensure you don’t miss out on presenting your research or joining this leading global event in Robotics, AI, and Intelligent Systems.</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-15 mt-10">
          <div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-4">
                <div className="bg-[#1B56FD] rounded-full h-14 w-14 flex justify-center items-center"><GrUploadOption className="text-white text-xl lg:text-2xl" /></div>
                <div className="bg-[#1B56FD] h-[3px] w-72"></div>
              </div>
              <div className="space-y-2">
                <p className="inter-semibold lg:text-[22px] text-gray-900 text-[20px]">Abstract Submission Deadline</p>
                <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">July 07, 2025</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-4">
                <div className="bg-[#1B56FD] rounded-full h-14 w-14 flex justify-center items-center"><IoNewspaperOutline className="text-white text-xl lg:text-2xl" /></div>
                <div className="bg-[#1B56FD] h-[3px] w-72"></div>
              </div>
              <div className="space-y-2">
                <p className="inter-semibold lg:text-[22px] text-gray-900 text-[20px]">Full Paper Submission Deadline</p>
                <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">July 18, 2025</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-4">
                <div className="bg-[#1B56FD] rounded-full h-14 w-14 flex justify-center items-center"><MdOutlineNotificationsActive className="text-white text-xl lg:text-2xl" /></div>
                <div className="bg-[#1B56FD] h-[3px] w-72"></div>
              </div>
              <div className="space-y-2">
                <p className="inter-semibold lg:text-[22px] text-gray-900 text-[20px]">Notification of Acceptance</p>
                <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">July 24, 2025</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-4">
                <div className="bg-[#1B56FD] rounded-full h-14 w-14 flex justify-center items-center"><IoNewspaperOutline className="text-white text-xl lg:text-2xl" /></div>
                <div className="bg-[#1B56FD] h-[3px] w-72"></div>
              </div>
              <div className="space-y-2">
                <p className="inter-semibold lg:text-[22px] text-gray-900 text-[20px]">Final Paper Submission</p>
                <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">July 30, 2025</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-4">
                <div className="bg-[#1B56FD] rounded-full h-14 w-14 flex justify-center items-center"><TfiWrite className="text-white text-xl lg:text-2xl" /></div>
                <div className="bg-[#1B56FD] h-[3px] w-72"></div>
              </div>
              <div className="space-y-2">
                <p className="inter-semibold lg:text-[22px] text-gray-900 text-[20px]">Registration Deadline</p>
                <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Augest 01, 2025</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-4">
                <div className="bg-[#1B56FD] rounded-full h-14 w-14 flex justify-center items-center"><MdDateRange className="text-white text-xl lg:text-2xl" /></div>
                <div className="bg-[#1B56FD] h-[3px] w-72"></div>
              </div>
              <div className="space-y-2">
                <p className="inter-semibold lg:text-[22px] text-gray-900 text-[20px]">Conference Dates</p>
                <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">August 06, 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>





      <div className="xl:max-w-[1450px]  md:max-w-[920px] px-4 mx-auto mt-8 lg:mt-10 ">
        <p className="inter-semibold lg:text-[30px] text-[25px]">Registration Details</p>
        <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] mt-3 ">Join a vibrant community of researchers, innovators, and industry leaders. Our simple registration process ensures your place at one of the most anticipated conferences in Robotics, AI, and Intelligent Systems. Choose the right category, complete your payment, and get ready to engage with global thought leaders.</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-15 mt-10">
          <div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-4">
                <div className="bg-[#1B56FD] rounded-full h-14 w-14 flex justify-center items-center"><MdAccountBalance  className="text-white text-xl lg:text-2xl" /></div>
                <div className="bg-[#1B56FD] h-[3px] w-72"></div>
              </div>
              <div className="space-y-2">
                <p className="inter-semibold lg:text-[22px] text-gray-900 text-[20px]">Account Name</p>
                <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">ICRAIS Conference</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-4">
                <div className="bg-[#1B56FD] rounded-full h-14 w-14 flex justify-center items-center"><MdOutlineNumbers  className="text-white text-xl lg:text-2xl" /></div>
                <div className="bg-[#1B56FD] h-[3px] w-72"></div>
              </div>
              <div className="space-y-2">
                <p className="inter-semibold lg:text-[22px] text-gray-900 text-[20px]">Account Number</p>
                <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">123456789</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-4">
                <div className="bg-[#1B56FD] rounded-full h-14 w-14 flex justify-center items-center"><IoLocationSharp className="text-white text-xl lg:text-2xl" /></div>
                <div className="bg-[#1B56FD] h-[3px] w-72"></div>
              </div>
              <div className="space-y-2">
                <p className="inter-semibold lg:text-[22px] text-gray-900 text-[20px]">Branch</p>
                <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">xxxxxx</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-4">
                <div className="bg-[#1B56FD] rounded-full h-14 w-14 flex justify-center items-center"><p className="text-white inter-semibold text-xl lg:text-2xl">IF</p></div>
                <div className="bg-[#1B56FD] h-[3px] w-72"></div>
              </div>
              <div className="space-y-2">
                <p className="inter-semibold lg:text-[22px] text-gray-900 text-[20px]">IFSC Code</p>
                <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">ABCD03000045</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-4">
                <div className="bg-[#1B56FD] rounded-full h-14 w-14 flex justify-center items-center"><p className="text-white inter-semibold text-xl lg:text-2xl">MI</p></div>
                <div className="bg-[#1B56FD] h-[3px] w-72"></div>
              </div>
              <div className="space-y-2">
                <p className="inter-semibold lg:text-[22px] text-gray-900 text-[20px]">MICR</p>
                <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">123456789</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
