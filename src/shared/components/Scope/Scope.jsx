import { Link } from "react-router-dom";

export default function Scope() {
    return (
        <>

            <div className="bg-cover  bg-center flex flex-col items-start justify-center pt-[50px] sm:pt-[60px] h-[250px] sm:h-[300px] md:h-[330px] lg:h-[330px] 2xl:h-[330px]" style={{ backgroundImage: "url('/assets/images/Banner.jpg')" }} >
                {/* Overlay */}
                {/* <div className="absolute inset-0 bg-[#000000] opacity-25"></div> */}
                {/* Centered Content */}
                <div className="xl:max-w-[1450px]  md:max-w-[920px] mx-auto w-full px-2 lg:mt-0 mt-5">
                    <p className="inter-semibold text-white lg:text-[30px] text-xl">Expanding the Horizons of Robotics & AI</p>
                    <p className="flex space-x-2 text-white   mt-4">

                        <Link to="/" className="hover:text-[#1B56FD] inter-regular  text-[18px]">
                            Home
                        </Link>

                        <p className="text-white text-[18px] inter-medium ">/</p>
                        <p className="text-[18px]  inter-medium">Our Scope</p>
                    </p>

                </div>
            </div>

            <div className="xl:max-w-[1450px]  md:max-w-[920px] px-3 mx-auto mt-8 lg:mt-10 ">
                <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] ">ICRAIS 2025 is dedicated to pushing the boundaries of robotics, artificial intelligence, and intelligent systems through cutting-edge research, real-world applications, and forward-thinking discussions. Our scope covers advancements in autonomous robotics, machine learning, smart sensors, intelligent automation, and human–machine collaboration. By bringing together experts from academia, industry, and research institutions, we aim to foster impactful innovations, bridge knowledge gaps, and shape technologies that will redefine how machines interact, learn, and transform our daily lives.</p>
                <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center lg:gap-20 gap-10 mt-10">
                    <div>
                        <div className="flex flex-col gap-3 ">
                            <div className="bg-[#DFDBF2] rounded-lg px-2 py-2 w-fit">
                                <h2 className="text-[#1B56FD] hanuman-bold text-[20px]">Scope of Our Conference</h2>
                            </div>

                            <p className="inter-bold text-[25px] lg:text-[40px] lg:leading-[48px]">Defining Our Technological Horizon</p>
                        </div>
                        <div className="lg:hidden block mt-5">
                            <div className="flex justify-center">
                                <img src="/assets/images/Scope.jpg" alt="Scopeimage" className='' loading="lazy" />
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
                    </div>

                    <div className="lg:block hidden ">
                        <div className="flex justify-center">
                            <img src="/assets/images/Scope.jpg" alt="Scopeimage" className='w-[713px]' loading="lazy" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#DFDBF2]  py-8 lg:mt-15 mt-5">
                <div className="xl:max-w-[1450px] px-3  md:max-w-[920px] mx-auto">

                    <div>
                        <div className="flex flex-col gap-3 ">
                            <h3 className="inter-bold lg:text-[30px] text-[25px] text-center">Key Research Areas </h3>
                            <p className="inter-regular text-gray-900 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] ">ICRAIS 2025 is dedicated to pushing the boundaries of robotics, artificial intelligence, and intelligent systems through focused research areas that tackle real-world challenges and unlock future opportunities. Our key research areas invite innovative contributions and fresh perspectives from academics, professionals, and industry leaders alike.</p>
                            <li className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]"><span className="inter-medium text-gray-900">Swarm Robotics</span>  - Explore multi-robot coordination, self-organizing systems, and cooperative autonomous behavior.</li>
                            <li className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]"><span className="inter-medium text-gray-900">Human–Robot Interaction </span>- Advance intuitive, safe, and efficient ways humans and robots collaborate in shared environments.</li>
                            <li className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]"><span className="inter-medium text-gray-900">Autonomous Vehicles & Drones</span> - Develop smart navigation, perception, and control systems for land, air, and marine robotics.</li>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

