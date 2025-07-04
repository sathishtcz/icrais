import { Link } from "react-router-dom";

export default function Organizingcommittee() {
  return (
    <>
      <div className="bg-cover  bg-center flex flex-col items-start justify-center pt-[50px] sm:pt-[60px] h-[250px] sm:h-[300px] md:h-[330px] lg:h-[330px] 2xl:h-[330px]" style={{ backgroundImage: "url('/assets/images/Banner.jpg')" }} >
        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-[#000000] opacity-25"></div> */}
        {/* Centered Content */}
        <div className="xl:max-w-[1450px]  md:max-w-[920px] mx-auto w-full px-2 lg:mt-0 mt-5">
          <p className="inter-semibold text-white lg:text-[30px] text-xl">Pillars of Coordination</p>
          <p className="flex space-x-2 text-white   mt-4">

            <Link to="/" className="hover:text-[#1B56FD] inter-regular  text-[18px]">
              Home
            </Link>

            <p className="text-white text-[18px] inter-medium ">/</p>
            <p className="text-[18px]  inter-medium">Organizing Committee</p>
          </p>

        </div>
      </div>


      <div className="xl:max-w-[1450px]  md:max-w-[920px] px-3 mx-auto mt-8 lg:mt-10 ">
        <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] ">The Organizing Committee of ICRAIS 2025 brings together experienced academics, industry leaders, and dedicated professionals committed to ensuring a world-class conference experience. This team oversees every detail — from coordinating keynote speakers and managing paper reviews to handling logistics and participant engagement. Their collective expertise and collaborative spirit ensure that every session, panel, and networking event runs smoothly and adds value for all attendees. Together, they work tirelessly to uphold the high standards and innovative spirit that define ICRAIS.</p>
      </div>

      <div className="bg-[#DFDBF2] px-3 py-8 lg:mt-10 mt-5">
        <h3 className="inter-bold lg:text-[30px] text-[25px] text-center">The Core Team of ICRAIS </h3>
        <div className="xl:max-w-[1450px] md:max-w-[920px] mx-auto mt-3  px-3">
          <p className="inter-regular text-gray-900 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] mb-10 ">The Core Organizing Committee of ICRAIS 2025 is composed of dedicated leaders, seasoned academics, and industry experts who are committed to delivering a world-class conference experience. Our team coordinates every aspect of the event - from technical program development and speaker invitations to seamless logistics and engaging delegate experiences. With diverse expertise across robotics, artificial intelligence, and intelligent systems, the committee works collaboratively to ensure that ICRAIS 2025 is an impactful, inclusive, and inspiring platform for sharing knowledge and fostering global connections.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              ["Chairman", "Dr John Smith", "Principal", "M.E., Ph.D.", "Chennai"],
              ["Convenors", "Dr John Smith", "Principal", "M.E., Ph.D.", "Chennai"],
              ["Coordinator", "Dr John Smith", "Principal", "M.E., Ph.D.", "Chennai"],
              ["Convenors", "Dr John Smith", "Principal", "M.E., Ph.D.", "Chennai"],
              ["Members", "Dr John Smith", "Principal", "M.E., Ph.D.", "Chennai"],
              ["Members", "Dr John Smith", "Principal", "M.E., Ph.D.", "Chennai"],
            ].map(([committee, Name, position, quali, place], index) => (
              <div key={index} className="bg-[#ffffff] border-l-10 border-[#1B56FD] border-2 rounded-2xl rounded-r-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col lg:flex-row items-center space-x-6">
                  <div className="overflow-hidden">
                    <img src="/assets/images/Speaker.png" alt="User" className="w-36 border-15 border-[#C1C2FF] rounded-full " />
                  </div>
                  <div className="flex-1 text-left">
                    <h4 className="text-xl font-bold text-[#1B56FD] mb-2 mt-4 lg:mt-0">{committee}</h4>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">{Name}</h3>
                    <div className="">
                      <p className="text-base text-gray-600 mb-1">Role: <span className="font-medium">{position}</span></p>
                      <p className="text-base text-gray-600 mb-1">Qualification: <span className="font-medium">{quali}</span></p>
                      <p className="text-base text-gray-600 mb-1">Location: <span className="font-medium">{place}</span></p>
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
