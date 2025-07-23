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
                            ["Dr. A. Abuthaheer", "Sri Ramakrishna Engineering College", "India"],
                            ["Dr. A. Gabriel", " Sharda University","Uzbekistan"],
                            ["Dr. Deevi Radha Rani ", " VFSTR Deemed to be University","India"],                          
                            ["Dr. Ashok Kumar", "Skyline university "," Nigeria"],                          
                            ["Dr. A.Karthikeyan ", "Sathy Rd, SNS Kalvi Nagar, ","India"],                          
                            ["Dr. Login Credentials ", "wasit university ","Iraq"],                          
                            ["Dr. Hua Qu ", "Tianjin Medical University "," China"],                          
                            ["Dr. B. Padmavathy ", " Anna University "," India"],                          
                            ["Dr. Bawar Mohammed Faraj ", " University of Halabja  "," Iraq"],                          
                            ["Dr. Asma Sbeih", "Palestine Ahliya university ","Palestine"],                          
                            ["Dr. Johan Hendri Prasetyo", " Universitas Nusa Mandiri"," Indonesia"],                          
                            ["Dr. Zhao Qianyi", "Jinan University ","China"],                          
                            ["Dr. Vijay Anand R", "vellore institute of technology","India"],                          
                            ["Dr. D. KAYATHRI DEVI", " AMITY UNIVERSITY","Uzbekistan"],                          
                            ["Dr. Ziquan Feng", "Hanyang University","South Korea"],                          
                            ["Dr. Zonghai Wang", "Nanjing Agricultural University ","China"],                          
                            ["Dr. V. Maheshwari", "Vellore institute of technology","India"],                          
                            ["Dr. M. Rajalakshmi", "Jyothi Engineering College ","India"],                          
                            ["Dr. Junaid Ahmed", "Zhengzhou University","China"],                          
                            ["Dr. P. Hemalatha", " IFET College of Engineering ","India"],                          
                            ["Dr. Twana A. Hamad", "Harran  University","Turkiye"],                          
                            ["Dr. Zhao Qianyi", "Jinan University","China"],                          
                            ["Dr. Brahim Issaoui", " Qassim University","Saudi Arabia"],                          
                            ["Dr. Qian Liu", " Krirk University","Thailand"],                          
                            ["Dr. Jhanghiz Syahrivar", " President University","Indonesia"],                          
                            ["Dr. Shakar Ahmed Aziz", "Duhok University","Iraq"],                          
                            ["Dr. Kushal Kanwar", "Shoolini University","India"],                          
                            // [" Savitha V", "SNS College of Technology","India"],                          
                            // ["Dr E Kusuma kumari", "Vasavi engineering college","India"],                          
                            // [" Zhihao Li", "Nanjing Agricultural University","China"],                          
                            // ["Dr. Chhavi Dhiman", "Delhi Technological University","India"],                          
                            // ["Wu Xiaojun", "Third Military Medical","China"],                          
                            // [" Ali Rizwan", "King Abdulaziz University","Saudi Arabia"],                          
                            // [" Daban Kadhim Omar DABBAGH", "Salahaddin University-Erbil","Iraq"],                          
                        ].map(([Name, position,place], index) => (
                            <div key={index} className="group  bg-[#ffffff] border-x-10 flex justify-center hover:border-[#ffffff] hover:border-5 border-[#1B56FD] border-5 rounded-2xl rounded-r-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
                                <div className="flex flex-col lg:flex-row items-center  space-x-6">
                                    {/* <div className="overflow-hidden">
                                        <img src="/assets/images/Speaker.png" alt="User" className="w-36 border-15 border-[#C1C2FF] rounded-full " />
                                    </div> */}
                                    <div className="flex-1 text-center">
                                        {/* <h4 className="text-xl font-bold text-[#1B56FD] mb-2 mt-4 lg:mt-0">{committee}</h4> */}
                                        <h3 className="text-2xl font-semibold text-gray-800 mb-2">{Name}</h3>
                                        <div className=" ">
                                            <p className="text-base text-gray-600 mb-1"><span className="font-medium">{position}</span></p>
                                            {/* <p className="text-base text-gray-600 mb-1">Qualification: <span className="font-medium">{quali}</span></p> */}
                                            <p className="text-base text-gray-600 mb-1"><span className="font-medium text-gray-800">{place}</span></p>
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
