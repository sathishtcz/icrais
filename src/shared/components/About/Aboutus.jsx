import { Link } from "react-router-dom";


function Aboutus() {
    return (
        <>
            <div className="bg-cover  bg-center flex flex-col items-start justify-center pt-[50px] sm:pt-[60px] h-[250px] sm:h-[300px] md:h-[330px] lg:h-[330px] 2xl:h-[330px]" style={{ backgroundImage: "url('/assets/images/Banner.jpg')" }} >
                {/* Overlay */}
                {/* <div className="absolute inset-0 bg-[#000000] opacity-25"></div> */}
                {/* Centered Content */}
                <div className="xl:max-w-[1450px]  md:max-w-[920px] mx-auto w-full px-2 lg:mt-0 mt-5">
                    <p className="inter-semibold text-white lg:text-[30px] text-xl">Revolutionizing Industries with Robotics & AI</p>
                    <p className="flex space-x-2 text-white   mt-4">

                        <Link to="/" className="hover:text-[#1B56FD] inter-regular  text-[18px]">
                            Home
                        </Link>

                        <p className="text-white text-[18px] inter-medium ">/</p>
                        <p className="text-[18px]  inter-medium">About us</p>
                    </p>

                </div>
            </div>


            <div className="xl:max-w-[1450px]  md:max-w-[920px] px-3 mx-auto mt-8 lg:mt-10 ">
                <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] ">ICRAIS 2025 is a premier international forum dedicated to advancing the frontiers of robotics, artificial intelligence, and intelligent systems. The conference brings together distinguished researchers, industry experts, and academic leaders to exchange groundbreaking ideas, showcase innovative solutions, and inspire collaboration across these rapidly evolving fields. From pioneering research papers to thought-provoking discussions, ICRAIS 2025 aims to foster a vibrant community that drives technological progress and shapes the intelligent future. </p>
                <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center lg:gap-20 gap-10 mt-10">
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
                    </div>
                </div>
            </div>

            <div className="bg-[#DFDBF2] px-3 py-8 lg:mt-15 mt-5">
                <div className="xl:max-w-[1450px]  md:max-w-[920px] mx-auto">

                    <div>
                        <div className="flex flex-col gap-3 ">
                          <h3 className="inter-bold lg:text-[30px] text-[25px] text-center">Why to be a part of ICRAIS </h3>
                            <p className="inter-regular text-gray-900 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] ">Join a global hub where the brightest minds in Robotics, Artificial Intelligence, and Intelligent Systems gather to share ideas, drive innovation, and shape the future of smart technologies. ICRAIS 2025 offers unparalleled opportunities for learning, networking, and contributing to advancements that redefine how we live and work.</p>
                            <li className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Engage with renowned researchers, industry pioneers, and academic experts from across the world.</li>
                            <li className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Gain exclusive insights into breakthrough developments in robotics, AI algorithms, and intelligent automation.</li>
                            <li className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Build meaningful collaborations with researchers, technologists, and businesses driving smart system advancements.</li>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Aboutus