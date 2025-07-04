import { Link } from "react-router-dom";

export default function ConferenceTracks() {
    return (
        <>

            <div className="bg-cover  bg-center flex flex-col items-start justify-center pt-[50px] sm:pt-[60px] h-[250px] sm:h-[300px] md:h-[330px] lg:h-[330px] 2xl:h-[330px]" style={{ backgroundImage: "url('/assets/images/Banner.jpg')" }} >
                {/* Overlay */}
                {/* <div className="absolute inset-0 bg-[#000000] opacity-25"></div> */}
                {/* Centered Content */}
                <div className="xl:max-w-[1450px]  md:max-w-[920px] mx-auto w-full px-2 lg:mt-0 mt-5">
                    <p className="inter-semibold text-white lg:text-[30px] text-xl">The Core Tracks</p>
                    <p className="flex space-x-2 text-white   mt-4">

                        <Link to="/" className="hover:text-[#1B56FD] inter-regular  text-[18px]">
                            Home
                        </Link>
                        <p className="text-white text-[18px] inter-medium ">/</p>
                        <p className="text-[18px]  inter-medium">Conference Tracks</p>
                    </p>
                </div>
            </div>


            <div className="xl:max-w-[1450px]  md:max-w-[920px] px-4 mx-auto mt-8 lg:mt-10 ">
                <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] ">ICRAIS 2025 offers a diverse range of conference tracks designed to showcase pioneering research and practical advancements in robotics, artificial intelligence, and intelligent systems. These tracks provide participants with opportunities to delve deep into specialized areas, share innovative ideas, and engage with experts driving the future of smart technologies. From autonomous systems and intelligent control to AI ethics and machine learning applications, each track is crafted to inspire collaboration and spark impactful discussions among scholars, industry professionals, and researchers from around the globe.</p>

                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-15 mt-10">
                    <div>
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-row items-center gap-4">
                                <div className="bg-[#1B56FD] rounded-full h-14 w-14 flex justify-center items-center"><p className="text-white inter-semibold text-xl lg:text-2xl">01</p></div>
                                <div className="bg-[#1B56FD] h-[3px] w-72"></div>
                            </div>
                            <div className="space-y-2">
                                <p className="inter-semibold lg:text-[22px] text-gray-900 text-[20px]">Autonomous Robotics and Systems</p>
                                <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Exploring advances in self-driving vehicles, mobile robots, and autonomous navigation.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-row items-center gap-4">
                                <div className="bg-[#1B56FD] rounded-full h-14 w-14 flex justify-center items-center"><p className="text-white inter-semibold text-xl lg:text-2xl">02</p></div>
                                <div className="bg-[#1B56FD] h-[3px] w-72"></div>
                            </div>
                            <div className="space-y-2">
                                <p className="inter-semibold lg:text-[22px] text-gray-900 text-[20px]">Machine Learning</p>
                                <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Innovations in AI algorithms, deep learning, and neural networks for real-world applications.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-row items-center gap-4">
                                <div className="bg-[#1B56FD] rounded-full h-14 w-14 flex justify-center items-center"><p className="text-white inter-semibold text-xl lg:text-2xl">03</p></div>
                                <div className="bg-[#1B56FD] h-[3px] w-72"></div>
                            </div>
                            <div className="space-y-2">
                                <p className="inter-semibold lg:text-[22px] text-gray-900 text-[20px]"> Intelligent Control Systems</p>
                                <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Research on adaptive control, decision-making, and real-time intelligent system design.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-row items-center gap-4">
                                <div className="bg-[#1B56FD] rounded-full h-14 w-14 flex justify-center items-center"><p className="text-white inter-semibold text-xl lg:text-2xl">04</p></div>
                                <div className="bg-[#1B56FD] h-[3px] w-72"></div>
                            </div>
                            <div className="space-y-2">
                                <p className="inter-semibold lg:text-[22px] text-gray-900 text-[20px]">Human-Robot Interaction</p>
                                <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Design and development of collaborative robots, safety, and user experience studies.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-row items-center gap-4">
                                <div className="bg-[#1B56FD] rounded-full h-14 w-14 flex justify-center items-center"><p className="text-white inter-semibold text-xl lg:text-2xl">05</p></div>
                                <div className="bg-[#1B56FD] h-[3px] w-72"></div>
                            </div>
                            <div className="space-y-2">
                                <p className="inter-semibold lg:text-[22px] text-gray-900 text-[20px]">AI Ethics</p>
                                <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Addressing ethical considerations, governance, and societal impacts of intelligent technologies.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-row items-center gap-4">
                                <div className="bg-[#1B56FD] rounded-full h-14 w-14 flex justify-center items-center"><p className="text-white inter-semibold text-xl lg:text-2xl">06</p></div>
                                <div className="bg-[#1B56FD] h-[3px] w-72"></div>
                            </div>
                            <div className="space-y-2">
                                <p className="inter-semibold lg:text-[22px] text-gray-900 text-[20px]">Smart Sensors</p>
                                <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Applications of intelligent sensing, IoT frameworks, and data-driven automation.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-row items-center gap-4">
                                <div className="bg-[#1B56FD] rounded-full h-14 w-14 flex justify-center items-center"><p className="text-white inter-semibold text-xl lg:text-2xl">07</p></div>
                                <div className="bg-[#1B56FD] h-[3px] w-72"></div>
                            </div>
                            <div className="space-y-2">
                                <p className="inter-semibold lg:text-[22px] text-gray-900 text-[20px]">Robotics in Healthcare</p>
                                <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Robotics and AI solutions transforming healthcare, rehabilitation, and elder care.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-row items-center gap-4">
                                <div className="bg-[#1B56FD] rounded-full h-14 w-14 flex justify-center items-center"><p className="text-white inter-semibold text-xl lg:text-2xl">08</p></div>
                                <div className="bg-[#1B56FD] h-[3px] w-72"></div>
                            </div>
                            <div className="space-y-2">
                                <p className="inter-semibold lg:text-[22px] text-gray-900 text-[20px]">Swarm Robotics </p>
                                <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Design of distributed multi-agent systems and cooperative robotics.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-row items-center gap-4">
                                <div className="bg-[#1B56FD] rounded-full h-14 w-14 flex justify-center items-center"><p className="text-white inter-semibold text-xl lg:text-2xl">09</p></div>
                                <div className="bg-[#1B56FD] h-[3px] w-72"></div>
                            </div>
                            <div className="space-y-2">
                                <p className="inter-semibold lg:text-[22px] text-gray-900 text-[20px]"> Intelligent Systems</p>
                                <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Novel interdisciplinary topics, disruptive technologies, and future research directions.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
