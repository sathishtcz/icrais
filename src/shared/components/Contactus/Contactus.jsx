import { useState } from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";


export default function Contactus() {

    const [formData, setFormData] = useState({
        firstname: '',
        secondname: '',
        number: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        if (e.target.type === 'file') {
            setFormData({ ...formData, [e.target.name]: e.target.files[0] });
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        try {
            const formDataToSend = new FormData();
            formDataToSend.append('firstname', formData.firstname);
            formDataToSend.append('secondname', formData.secondname);
            formDataToSend.append('number', formData.number);
            formDataToSend.append('email', formData.email);
            formDataToSend.append('message', formData.message);

            // if (formData.Paper_File) {
            //     formDataToSend.append('Paper_File', formData.Paper_File);
            // }

            const response = await fetch('https://icrais.com/api/contact.php', {
                method: 'POST',
                body: formDataToSend,
            });

            if (response.ok) {
                const result = await response.text();
                setStatus(result);
                setFormData({
                    firstname: '',
                    secondname: '',
                    number: '',
                    email: '',
                    message: '',
                });
                toast.success("Form submitted successfully!");
            } else {
                setStatus('Failed to send submission. Please try again.');
                toast.error('Failed to send submission. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            setStatus('An error occurred. Please try again.');
            toast.error('An error occurred. Please try again.');
        }
    };

    return (
        <>
            <div className="bg-cover  bg-center flex flex-col items-start justify-center pt-[50px] sm:pt-[60px] h-[250px] sm:h-[300px] md:h-[330px] lg:h-[330px] 2xl:h-[330px]" style={{ backgroundImage: "url('/assets/images/Banner.jpg')" }} >
                {/* Overlay */}
                {/* <div className="absolute inset-0 bg-[#000000] opacity-25"></div> */}
                {/* Centered Content */}
                <div className="xl:max-w-[1450px]  md:max-w-[920px] mx-auto w-full px-2 lg:mt-0 mt-5">
                    <p className="inter-semibold text-white lg:text-[30px] text-xl">Contact Our Conference Team</p>
                    <p className="flex space-x-2 text-white   mt-4">

                        <Link to="/" className="hover:text-[#1B56FD] inter-regular  text-[18px]">
                            Home
                        </Link>
                        <p className="text-white text-[18px] inter-medium ">/</p>
                        <p className="text-[18px]  inter-medium">Contact Us</p>
                    </p>
                </div>
            </div>
            <div className="xl:max-w-[1450px]  md:max-w-[920px] px-4 mx-auto mt-8 lg:mt-10 ">
                <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] ">Have a question about paper submissions, registration, sponsorship, or any other aspect of ICRAIS 2025? Our organizing team is ready to assist researchers, industry partners, and attendees from around the world. Whether you need help with abstract guidelines, travel information, or collaboration opportunities, feel free to reach out — we’re just an email or a phone call away. Get in touch today and be part of shaping the future of Robotics, AI, and Intelligent Systems!
                </p>
            </div>

            {/* contact form */}

            <div className="bg-[#DFDBF2] px-4 py-10 lg:mt-10 mt-5">
                <div className="xl:max-w-[1400px]  md:max-w-[920px] mx-auto">
                    <div className="bg-[#ffffff] border-l-10 border-[#1B56FD] border-2 rounded-2xl rounded-r-2xl shadow-md ">
                        <div className="flex flex-col lg:flex-row-reverse gap-12">
                            <div className="lg:w-1/3 bg-[#DFDBF2] p-6 rounded-r-2xl shadow-md">
                                <h4 className="text-2xl font-bold text-[#1B56FD] mb-6 text-center">Contact Info</h4>
                                <div className="space-y-6 text-center">
                                    {/* <div className="flex  items-center gap-3">
                                        <BiSolidPhoneCall className="text-2xl text-[#1B56FD] flex-shrink-0" />
                                        <p className="text-lg text-gray-700"><span className="font-semibold text-gray-900">Phone:</span> +91-123-456-7890</p>
                                    </div> */}
                                    <div className="flex  items-center gap-3">
                                        <IoIosMail className="text-2xl text-[#1B56FD] flex-shrink-0" />
                                        <p className="text-lg text-gray-700"><span className="font-semibold text-gray-900">Email:</span> info.icrais@gmail.com</p>
                                    </div>
                                    <div className="flex  items-center gap-3">
                                        <FaLocationDot className="text-2xl text-[#1B56FD] flex-shrink-0" />
                                        <p className="text-lg text-gray-700"><span className="font-semibold text-gray-900">Location:</span> Mumbai, India</p>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:w-2/3   p-6 ">
                                <h4 className="text-2xl font-bold text-[#1B56FD] mb-6 text-center">Reach Out to Us</h4>
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-gray-700 text-base font-medium mb-2">First Name</label>
                                            <input type="text" name="firstname"
                                                onChange={handleChange}
                                                value={formData.firstname}
                                                required className="w-full p-3 border-2 border-gray-200 rounded-lg focus:outline-none" placeholder="Your first name" />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 text-base font-medium mb-2">Last Name</label>
                                            <input type="text" name="secondname"
                                                onChange={handleChange}
                                                value={formData.secondname}
                                                required className="w-full p-3 border-2 border-gray-200 rounded-lg focus:outline-none" placeholder="Your last name" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 text-base font-medium mb-2">Email</label>
                                        <input type="email" required
                                            name="email"
                                            onChange={handleChange}
                                            value={formData.email} className="w-full p-3 border-2 border-gray-200 rounded-lg focus:outline-none" placeholder="Your email address" />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 text-base font-medium mb-2">Phone No</label>
                                        <input type="tel" required
                                            name="number"
                                            onChange={handleChange}
                                            value={formData.number} className="w-full p-3 border-2 border-gray-200 rounded-lg focus:outline-none" placeholder="Your phone number" />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 text-base font-medium mb-2">message</label>
                                        <textarea required
                                            name="message"
                                            onChange={handleChange}
                                            value={formData.message} className="w-full p-3 border-2 border-gray-200 rounded-lg focus:outline-none h-28 " placeholder="Your message here"></textarea>
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" className="w-fit bg-[#1B56FD] text-white px-3 py-3 rounded-lg  cursor-pointer transition duration-300 inter-semibold">{status === 'Sending...' ? 'Sending...' : 'Send Your message'}</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


