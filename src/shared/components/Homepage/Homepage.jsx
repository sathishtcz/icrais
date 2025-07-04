import { PiCalendarCheckFill } from "react-icons/pi";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosAlarm } from "react-icons/io";
import { Link } from "react-router-dom";
import { TbCircleArrowRightFilled } from "react-icons/tb";

function Homepage() {

  return (
    <>
      <div className="bg-[#DFDBF2] xl:h-screen flex items-center">
        <div className="xl:max-w-[1450px]  md:max-w-[920px] mx-auto px-3">
          <div className="grid xl:grid-cols-2 grid-cols-1 gap-15 place-items-center py-3">
            <div>
              <div className="flex flex-col lg:gap-7 gap-4 xl:mt-15 mt-25">
                <h1 className="inter-bold lg:text-[50px] md:text-[40px] sm:text-[25px] text-[24px]">International Conference on <span className="text-[#1B56FD]">Robotics, AI,</span> and <span className="text-[#1B56FD]">Intelligent Systems</span></h1>
                <div className="block xl:hidden flex  justify-center">
                  <img src="assets/images/Hero.png" alt="AI and Robotics" className="w-[559px]" />
                </div>
                <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Join leading experts, innovators, and researchers at ICRAIS to explore the cutting edge of robotics, artificial intelligence, and intelligent systems. Discover breakthroughs, share insights, and shape the next generation of smart technologies.</p>
                <div className="flex md:flex-row flex-col gap-5 w-full">

                  <div className="bg-[#C1C2FF] rounded-lg w-full py-3 px-1">
                    <div className="flex flex-row items-center gap-2">
                      <IoLocationSharp className='text-4xl text-black' />
                      <div className="flex flex-col gap-1">
                        <p className="inter-regular sm:text-base md:text-lg lg:text-[16px] text-gray-700">Location</p>
                        <p className="inter-semibold sm:text-base md:text-lg lg:text-[16px] text-black">TamilNadu, Chennai</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#C1C2FF] rounded-lg w-full py-3 px-1">
                    <div className="flex flex-row items-center gap-2">
                      <PiCalendarCheckFill className='text-4xl text-black' />
                      <div className="flex flex-col gap-1">
                        <p className="inter-regular sm:text-base md:text-lg lg:text-[16px] text-gray-700">Date</p>
                        <p className="inter-semibold sm:text-base md:text-lg lg:text-[16px] text-black">August 20-25, 2025 </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#C1C2FF] rounded-lg w-full py-3 px-1">
                    <div className="flex flex-row items-center gap-2">
                      <IoIosAlarm className='text-4xl text-black' />
                      <div className="flex flex-col gap-1">
                        <p className="inter-regular sm:text-base md:text-lg lg:text-[16px] text-gray-700">Duration</p>
                        <p className="inter-semibold sm:text-base md:text-lg lg:text-[16px] text-black">9:00 AM–5:00 PM</p>
                      </div>
                    </div>
                  </div>

                </div>

                <div className="mt-2">
                  <Link to="/paper-submission" >
                    <div className="group flex gap-2 bg-[#C1C2FF] w-fit py-3 px-2 rounded-lg items-center ">
                      <button className="text-black inter-semibold text-lg cursor-pointer">Register Here</button>
                      <TbCircleArrowRightFilled className="text-black text-2xl transform transition-all duration-300 -rotate-45 group-hover:rotate-45" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="">
              <div className="flex flex-col justify-center items-center gap-10">
                <div className="hidden xl:block">
                  <img src="assets/images/Hero.png" alt="AI and Robotics" className="w-[559px]" />
                </div>
                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
                  <div className="flex flex-col items-center gap-2">
                    <img src="/assets/images/Robotics.png" alt="robotics" className="border-7 border-[#C1C2FF] rounded-full w-[170px]" />
                    <p className="inter-medium xl:text-[20px] text-[18px]">Robotics </p>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <img src="/assets/images/AI.png" alt="AI" className="border-7 border-[#C1C2FF] rounded-full w-[170px]" />
                    <p className="inter-medium xl:text-[20px] text-[18px]">Articial Intelligence </p>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <img src="/assets/images/IS.png" alt="IS" className="border-7 border-[#C1C2FF] rounded-full w-[170px]" />
                    <p className="inter-medium xl:text-[20px] text-[18px]">Intelligent System </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* About the Conference */}
      <div className="xl:max-w-[1450px]  md:max-w-[920px] mx-auto px-3 lg:mt-15 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center lg:gap-20 gap-10">
          <div className="lg:block hidden ">
            <div className="flex justify-center">
              <img src="/assets/images/About.jpg" alt="Aboutimage" className='w-[713px]' />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-3 ">
              <div className="bg-[#DFDBF2] rounded-lg px-2 py-2 w-fit">
                <h2 className="text-[#1B56FD] inter-semibold text-[20px]">About Our Conference</h2>
              </div>

              <p className="inter-bold text-[25px] lg:text-[40px] lg:leading-[48px]">Inside the Future of Robotics & Intelligent Systems</p>
            </div>
            <div className="lg:hidden block mt-5">
              <div className="flex justify-center">
                <img src="/assets/images/About.jpg" alt="Aboutimage" className='' />
              </div>
            </div>

            <div className="flex flex-col gap-4 mt-4 lg:mt-5">
              <div className="lg:mt-0 mt-4">
                <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] ">The <span className="inter-bold text-gray-900">International Conference on Robotics, AI, and Intelligent Systems</span> is a global platform dedicated to advancing cutting-edge research and innovation in robotics, artificial intelligence, and smart technologies.</p>
              </div>
              <div className="bg-[#C1C2FF] p-5 rounded-lg">
                <div className="flex flex-col gap-2">
                  <p className="inter-semibold text-[18px]">1. Shaping Smart Futures</p>
                  <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] ">Our conference creates a platform to exchange pioneering ideas, explore cutting-edge technologies, and inspire innovation for tomorrow’s world.</p>
                </div>
              </div>
              <div className="bg-[#C1C2FF] p-5 rounded-lg">
                <div className="flex flex-col gap-2">
                  <p className="inter-semibold text-[18px]">2. Global Collaboration Hub</p>
                  <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] ">Connect with researchers, industry leaders, and innovators from across the globe. We advance intelligent solutions that impact industries, and societies.</p>
                </div>
              </div>
            </div>
            <div className="mt-6 flex  justify-center">
              <Link to="/about" >
                <div className="group flex gap-2 bg-[#C1C2FF] w-fit py-2 px-2 rounded-lg items-center ">
                  <button className="text-black inter-semibold text-lg cursor-pointer">Read More</button>
                  <TbCircleArrowRightFilled className="text-black text-2xl transform transition-all duration-300 -rotate-45 group-hover:rotate-45" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>




      {/* Our mission */}
      <div className="xl:max-w-[1450px]  md:max-w-[920px] mx-auto px-3 lg:mt-15 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center lg:gap-20 gap-10">
          <div>
            <div className="flex flex-col gap-3 ">
              <div className="bg-[#DFDBF2] rounded-lg px-2 py-2 w-fit">
                <h2 className="text-[#1B56FD] inter-semibold text-[20px]">Scope of Our Conference</h2>
              </div>

              <p className="inter-bold text-[25px] lg:text-[40px] lg:leading-[48px]">Defining Our Technological Horizon</p>
            </div>
            <div className="lg:hidden block mt-5">
              <div className="flex justify-center">
                <img src="/assets/images/Scope.jpg" alt="Scopeimage" className='' />
              </div>
            </div>

            <div className="flex flex-col gap-4 mt-4 lg:mt-5">
              <div className="lg:mt-0 mt-4">
                <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] ">The <span className="inter-bold text-gray-900">International Conference on Robotics, AI, and Intelligent Systems</span> provides a dynamic platform to showcase groundbreaking research and practical developments across these rapidly evolving fields.</p>
              </div>
              <div className="bg-[#C1C2FF] p-5 rounded-lg">
                <div className="flex flex-col gap-2">
                  <p className="inter-semibold text-[18px]">1. Advancing Intelligent Frontiers</p>
                  <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] ">The conference welcomes work that redefines automation, smart devices, and adaptive technologies shaping the future of industries and society.</p>
                </div>
              </div>
              <div className="bg-[#C1C2FF] p-5 rounded-lg">
                <div className="flex flex-col gap-2">
                  <p className="inter-semibold text-[18px]">2. Bridging Disciplines and Industries</p>
                  <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] ">By bringing diverse expertise together, the conference drives real-world applications and solutions for next-generation intelligent ecosystems.</p>
                </div>
              </div>
            </div>
            <div className="mt-6 flex  justify-center">
              <Link to="/scope" >
                <div className="group flex gap-2 bg-[#C1C2FF] w-fit py-2 px-2 rounded-lg items-center ">
                  <button className="text-black inter-semibold text-lg cursor-pointer">Read More</button>
                  <TbCircleArrowRightFilled className="text-black text-2xl transform transition-all duration-300 -rotate-45 group-hover:rotate-45" />
                </div>
              </Link>
            </div>
          </div>

          <div className="lg:block hidden ">
            <div className="flex justify-center">
              <img src="/assets/images/Scope.jpg" alt="Scopeimage" className='w-[713px]' />
            </div>
          </div>
        </div>
      </div>


      <div className="px-3 lg:mt-15 mt-10 bg-[#DFDBF2]">
        <div className="xl:max-w-[1450px]  md:max-w-[920px] mx-auto py-10">
          <h3 className="inter-bold lg:text-[30px] text-[25px] text-center">Our Event Speakers</h3>
          <p className="inter-regular text-gray-900 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] mt-6">Our conference features distinguished speakers who are pioneers in robotics, artificial intelligence, and intelligent systems. From leading researchers and innovators to industry experts and visionaries, our speakers share valuable insights, breakthrough ideas, and practical solutions that inspire the community. Their diverse expertise and forward-thinking perspectives make each session an opportunity to learn, connect, and shape the future of intelligent technologies together.</p>
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2  lg:gap-20 gap-10 mt-13 max-w-[60rem] mx-auto">
            <div>
              <div className="flex flex-col gap-2 items-center">
                <img src="/assets/images/Speaker.png" alt="Event Speaker" className="w-[304px] border-20 border-[#C1C2FF] rounded-full" />
                <div className="text-center">
                  <p className="hanuman-bold lg:text-[25px] text-[20px]">John Mathews</p>
                  <p className="inter-regular text-[18px]">Senior Research Analyst</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-2 items-center">
                <img src="/assets/images/Speaker.png" alt="Event Speaker" className="w-[304px] border-20 border-[#C1C2FF] rounded-full" />
                <div className="text-center">
                  <p className="hanuman-bold lg:text-[25px] text-[20px]">John Mathews</p>
                  <p className="inter-regular text-[18px]">Senior Research Analyst</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-2 items-center">
                <img src="/assets/images/Speaker.png" alt="Event Speaker" className="w-[304px] border-20 border-[#C1C2FF] rounded-full" />
                <div className="text-center">
                  <p className="hanuman-bold lg:text-[25px] text-[20px]">John Mathews</p>
                  <p className="inter-regular text-[18px]">Senior Research Analyst</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* Join Us at INCOCSA 2025 */}
      <div className="xl:max-w-[1450px]  md:max-w-[920px] mx-auto px-3 lg:mt-15 mt-10">
        <h3 className="inter-bold lg:text-[30px] text-[25px] text-center">Join us at ICRAIS 2025</h3>
        <p className="inter-regular text-gray-900 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] mt-6">Be part of the International Conference on Robotics, AI, and Intelligent Systems and connect with a global community of innovators, researchers, and industry leaders. Whether you’re presenting cutting-edge research, exploring emerging trends, or seeking collaborations, ICRAIS 2025 is your platform to exchange ideas and drive progress. Don’t miss this chance to expand your network and contribute to the future of intelligent technologies.</p>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 place-items-center mt-10 mx-auto gap-5">
  <div className="flex gap-3 items-center w-full max-w-[200px]">
    <div className="bg-[#DFDBF2] p-2 rounded-lg flex-shrink-0">
      <img src="/assets/images/group.png" alt="Group" className="w-[65px] object-contain" />
    </div>
    <div className="flex flex-col flex-1">
      <p className="inter-bold lg:text-[30px] text-[25px]">500+</p>
      <p className="inter-regular text-[16px]">Attendees</p>
    </div>
  </div>
  <div className="flex gap-3 items-center w-full max-w-[200px]">
    <div className="bg-[#DFDBF2] p-2 rounded-lg flex-shrink-0">
      <img src="/assets/images/marketing.png" alt="Group" className="w-[65px] object-contain" />
    </div>
    <div className="flex flex-col flex-1">
      <p className="inter-bold lg:text-[30px] text-[25px]">50+</p>
      <p className="inter-regular text-[16px]">Speakers</p>
    </div>
  </div>
  <div className="flex gap-3 items-center w-full max-w-[200px]">
    <div className="bg-[#DFDBF2] p-2 rounded-lg flex-shrink-0">
      <img src="/assets/images/paper.png" alt="Group" className="w-[65px] object-contain" />
    </div>
    <div className="flex flex-col flex-1">
      <p className="inter-bold lg:text-[30px] text-[25px]">100+</p>
      <p className="inter-regular text-[16px]">Papers</p>
    </div>
  </div>
  <div className="flex gap-3 items-center w-full max-w-[200px]">
    <div className="bg-[#DFDBF2] p-2 rounded-lg flex-shrink-0">
      <img src="/assets/images/calendar.png" alt="Group" className="w-[65px] object-contain" />
    </div>
    <div className="flex flex-col flex-1">
      <p className="inter-bold lg:text-[30px] text-[25px]">5</p>
      <p className="inter-regular text-[16px]">Days</p>
    </div>
  </div>
</div>
      </div>
    </>
  )
}

export default Homepage