import { Link } from "react-router-dom";

export default function Editorboard() {
    return (
        <>

            <div className="bg-cover  bg-center flex flex-col items-start justify-center pt-[50px] sm:pt-[60px] h-[250px] sm:h-[300px] md:h-[330px] lg:h-[330px] 2xl:h-[330px]" style={{ backgroundImage: "url('/assets/images/Banner.jpg')" }} >
                {/* Overlay */}
                {/* <div className="absolute inset-0 bg-[#000000] opacity-25"></div> */}
                {/* Centered Content */}
                <div className="xl:max-w-[1450px]  md:max-w-[920px] mx-auto w-full px-2 lg:mt-0 mt-5">
                    <p className="inter-semibold text-white lg:text-[30px] text-xl">Guiding Academic Excellence</p>
                    <p className="flex space-x-2 text-white   mt-4">

                        <Link to="/" className="hover:text-[#1B56FD] inter-regular  text-[18px]">
                            Home
                        </Link>

                        <p className="text-white text-[18px] inter-medium ">/</p>
                        <p className="text-[18px]  inter-medium">Editorial Board</p>
                    </p>

                </div>
            </div>

            <div className="xl:max-w-[1450px]  md:max-w-[920px] px-3 mx-auto mt-8 lg:mt-10 ">
                <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] ">The Editorial Board of ICRAIS 2025 comprises renowned scholars, experienced researchers, and industry pioneers dedicated to upholding the highest standards of academic integrity and excellence. Our board members guide the peer-review process, ensure the quality and relevance of accepted papers, and help shape the conference’s technical direction. With deep expertise spanning robotics, artificial intelligence, and intelligent systems, the Editorial Board plays a pivotal role in maintaining the conference’s reputation as a trusted platform for cutting-edge research and meaningful discourse.</p>
            </div>

            <div className="bg-[#DFDBF2] px-3 py-8 lg:mt-10 mt-5">
                <h3 className="inter-bold lg:text-[30px] text-[25px] text-center"> Academic Guardians of ICRAIS </h3>
                <div className="xl:max-w-[1450px] md:max-w-[920px] mx-auto mt-3  px-3">
                    <p className="inter-regular text-gray-900 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] mb-10 ">Our Editorial Board, the Academic Guardians of ICRAIS, brings together a panel of esteemed scholars, experienced researchers, and industry experts dedicated to maintaining the highest standards of research integrity. They ensure every submission is rigorously reviewed, relevant, and impactful in the evolving fields of robotics, artificial intelligence, and intelligent systems. By upholding strict peer-review processes and providing valuable guidance, our board plays a vital role in shaping the quality, relevance, and academic credibility of ICRAIS 2025.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            ["Karthik Kushala", "Celer Systems Inc", "California, USA"],
                            ["Zainab Binti Asus", "Faculty of Mechanical Engineering (University of Technology Malaysia)","Malaysia"],
                            ["A.L.S Saabith", "Senior Lecturer (Eastern University)","Sri Lanka"],                          
                        ].map(([Name, position,place], index) => (
                            <div key={index} className="bg-[#ffffff] border-l-10 border-[#1B56FD] border-2 rounded-2xl rounded-r-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
                                <div className="flex flex-col lg:flex-row items-center space-x-6">
                                    <div className="overflow-hidden">
                                        <img src="/assets/images/Speaker.png" alt="User" className="w-36 border-15 border-[#C1C2FF] rounded-full " />
                                    </div>
                                    <div className="flex-1 text-left">
                                        {/* <h4 className="text-xl font-bold text-[#1B56FD] mb-2 mt-4 lg:mt-0">{committee}</h4> */}
                                        <h3 className="text-2xl font-semibold text-gray-800 mb-2">{Name}</h3>
                                        <div className=" ">
                                            <p className="text-base text-gray-600 mb-1"><span className="font-medium">{position}</span></p>
                                            {/* <p className="text-base text-gray-600 mb-1">Qualification: <span className="font-medium">{quali}</span></p> */}
                                            <p className="text-base text-gray-600 mb-1">Location: <span className="font-medium text-gray-800">{place}</span></p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
