import { IoIosAlarm } from "react-icons/io"
import { IoLocationSharp } from "react-icons/io5"
import { PiCalendarCheckFill } from "react-icons/pi"
import { TbCircleArrowRightFilled } from "react-icons/tb"
import { TfiEmail } from "react-icons/tfi"
import { Link } from "react-router-dom"


function Register() {
    return (
        <>
            <div className="xl:max-w-[1450px]  md:max-w-[920px] mx-auto px-3 mt-15 mb-15">
                <div className="bg-[url('/assets/images/Register.jpg')] bg-cover rounded-xl bg-right  flex justify-center items-center  ">
                    <div className="flex flex-col gap-5 justify-center items-center px-7 py-7">
                        <h2 className="inter-bold text-[25px] lg:text-[35px] text-white w-full">International Conference on Robotics, AI, and Intelligent Systems</h2>
                        <p className="inter-regular text-gray-200 sm:text-base md:text-lg lg:text-[16px]  leading-[30px] text-justify">Join leading experts, innovators, and researchers at ICRAIS 2025 to explore the cutting edge of robotics, artificial intelligence, and intelligent systems. This premier event brings together visionaries from academia, industry, and research institutions to discuss emerging trends, share pioneering ideas, and showcase practical advancements. Discover groundbreaking technologies, gain valuable insights from thought leaders, and engage in meaningful discussions that shape the future of smart, autonomous systems.</p>
                        <Link to="/paper-submission" >
                            <div className="group flex gap-2 bg-[#C1C2FF] w-fit py-3 px-2 rounded-lg items-center ">
                                <button className="text-black inter-semibold text-lg cursor-pointer">Register Here</button>
                                <TbCircleArrowRightFilled className="text-black text-2xl transform transition-all duration-300 -rotate-45 group-hover:rotate-45" />
                            </div>
                        </Link>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9 mt-4">
                            <div className="bg-[#C1C2FF] rounded-lg w-full py-3 px-4">
                                <div className="flex flex-row items-center gap-2">
                                    <IoLocationSharp className='text-4xl text-black flex-shrink-0' />
                                    <div className="flex flex-col gap-1">
                                        <p className="inter-regular sm:text-base md:text-lg lg:text-[16px] text-gray-700">Location</p>
                                        <p className="inter-semibold sm:text-base md:text-lg lg:text-[16px] text-black">Los Angeles, USA</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-[#C1C2FF] rounded-lg w-full py-3 px-4">
                                <div className="flex flex-row items-center gap-2">
                                    <PiCalendarCheckFill className='text-4xl text-black flex-shrink-0' />
                                    <div className="flex flex-col gap-1">
                                        <p className="inter-regular sm:text-base md:text-lg lg:text-[16px] text-gray-700">Date</p>
                                        <p className="inter-semibold sm:text-base md:text-lg lg:text-[16px] text-black">April 29, 2025 </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-[#C1C2FF] rounded-lg w-full py-3 px-4">
                                <div className="flex flex-row items-center gap-2">
                                    <IoIosAlarm className='text-4xl text-black flex-shrink-0' />
                                    <div className="flex flex-col gap-1">
                                        <p className="inter-regular sm:text-base md:text-lg lg:text-[16px] text-gray-700">Duration</p>
                                        <p className="inter-semibold sm:text-base md:text-lg lg:text-[16px] text-black">9:00 AM–5:00 PM</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-[#C1C2FF] rounded-lg w-full py-3 px-4">
                                <div className="flex flex-row items-center gap-2">
                                    <TfiEmail className='text-3xl text-black flex-shrink-0' />
                                    <div className="flex flex-col gap-1">
                                        <p className="inter-regular sm:text-base md:text-lg lg:text-[16px] text-gray-700">Mail us</p>
                                        <p className="inter-semibold sm:text-base md:text-lg lg:text-[16px] text-black wrap-anywhere">info.icrais@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Register



