import { useState } from "react";
import { FiUploadCloud } from "react-icons/fi";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function PaperSub() {

    const [fileName, setFileName] = useState('Click to Upload Paper');

    // const handleFileChange = (e) => {
    //     if (e.target.files.length > 0) {
    //         setFileName(e.target.files[0].name);
    //     }
    // };

    const [formData, setFormData] = useState({
        Paper_Title: '',
        Author_FUll_Name: '',
        Email_Address: '',
        Institution_Name: '',
        Paper_Track: '',
        Paper_File: null,
    });
    const [status, setStatus] = useState('');

    // const handleChange = (e) => {
    //     if (e.target.type === 'file') {
    //         setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    //     } else {
    //         setFormData({ ...formData, [e.target.name]: e.target.value });
    //     }
    // };

    const handleFileInputChange = (e) => {
        const { name, type, files, value } = e.target;

        // For file preview display
        if (files && files.length > 0) {
            setFileName(files[0].name); // update UI
            setFormData((prev) => ({
                ...prev,
                [name]: files[0], // update actual form data
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };


   const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    
    const journalName = 'icrais';
    // Generate unique ID: journalName + YYYYMMDD + HHMMSS
    const now = new Date();
    const dateStr = now.toISOString().slice(0, 10).replace(/-/g, ''); // YYYYMMDD
    const timeStr = now.toTimeString().slice(0, 8).replace(/:/g, ''); // HHMMSS
    const uniqueId = `${journalName}_${dateStr}_${timeStr}`;
    
    try {
        const formDataToSend = new FormData();
        formDataToSend.append('Submission_ID', uniqueId);
        formDataToSend.append('Paper_Title', formData.Paper_Title);
        formDataToSend.append('Author_FUll_Name', formData.Author_FUll_Name);
        formDataToSend.append('Email_Address', formData.Email_Address);
        formDataToSend.append('Institution_Name', formData.Institution_Name);
        formDataToSend.append('Paper_Track', formData.Paper_Track);
        
        if (formData.Paper_File) {
            formDataToSend.append('Paper_File', formData.Paper_File);
        }

        const googleSheetsParams = new URLSearchParams();
        googleSheetsParams.append('Submission_ID', uniqueId);
        googleSheetsParams.append('journal_name', journalName);
        googleSheetsParams.append('Paper_Title', formData.Paper_Title);
        googleSheetsParams.append('Author_FUll_Name', formData.Author_FUll_Name);
        googleSheetsParams.append('Email_Address', formData.Email_Address);
        googleSheetsParams.append('Institution_Name', formData.Institution_Name);
        googleSheetsParams.append('Paper_Track', formData.Paper_Track);

        const mailPromise = fetch('http://icrais.com/api/mail.php', {
            method: 'POST',
            body: formDataToSend,
        });

        const sheetsPromise = fetch('https://script.google.com/macros/s/AKfycbwZ_TtKUqAfcue9TNCKy57hTrCKDUP5dTQnWbpSxBDzlRMllEuOoaxzRDl0kQPah5pZ/exec', {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: googleSheetsParams.toString(),
        });

        const [mailResponse, sheetsResponse] = await Promise.allSettled([mailPromise, sheetsPromise]);

        const mailSuccess = mailResponse.status === 'fulfilled' && mailResponse.value.ok;
        const sheetsSuccess = sheetsResponse.status === 'fulfilled';
        
        if (sheetsResponse.status === 'rejected') {
            console.error('Sheets request failed:', sheetsResponse.reason);
        }

        if (mailSuccess && sheetsSuccess) {
            setStatus(`Submission successful! Data sent to both email and Google Sheets (${journalName}). Submission ID: ${uniqueId}`);
            
            setFormData({
                Paper_Title: '',
                Author_FUll_Name: '',
                Email_Address: '',
                Institution_Name: '',
                Paper_Track: '',
                Paper_File: null,
            });
            const fileInput = document.getElementById('Paper_File');
            if (fileInput) {
                fileInput.value = '';
            } else {
                console.error('Element with ID "Paper_File" not found.');
            }
            toast.success(`Paper submitted successfully! `);
            
        } else if (mailSuccess && !sheetsSuccess) {
            setStatus('Email sent successfully, but there might be an issue with Google Sheets.');
            toast.warning('Email sent successfully. Please check if data was saved to Google Sheets.');
            
        } else if (!mailSuccess && sheetsSuccess) {
            setStatus('Data likely saved to Google Sheets, but failed to send email.');
            toast.warning('Data might be saved to Google Sheets, but failed to send email.');
            
        } else {
            setStatus('There might be issues with the submission. Please check manually.');
            toast.error('Submission completed, but please verify the results manually.');
        }

    } catch (error) {
        console.error('Error:', error);
        setStatus('An error occurred during submission. Please try again.');
        toast.error('An error occurred. Please try again.');
    }
}

    return (
        <>

            <div className="bg-cover  bg-center flex flex-col items-start justify-center pt-[50px] sm:pt-[60px] h-[250px] sm:h-[300px] md:h-[330px] lg:h-[330px] 2xl:h-[330px]" style={{ backgroundImage: "url('/assets/images/Banner.jpg')" }} >
                {/* Overlay */}
                {/* <div className="absolute inset-0 bg-[#000000] opacity-25"></div> */}
                {/* Centered Content */}
                <div className="xl:max-w-[1450px]  md:max-w-[920px] mx-auto w-full px-2 lg:mt-0 mt-5">
                    <p className="inter-semibold text-white lg:text-[30px] text-xl">Be a Part of ICRAIS 2025</p>
                    <p className="flex space-x-2 text-white   mt-4">

                        <Link to="/" className="hover:text-[#1B56FD] inter-regular  text-[18px]">
                            Home
                        </Link>
                        <p className="text-white text-[18px] inter-medium ">/</p>
                        <p className="text-[18px]  inter-medium">Paper Submission</p>
                    </p>
                </div>
            </div>
            <div className="xl:max-w-[1450px]  md:max-w-[920px] px-4 mx-auto mt-8 lg:mt-10 ">
                <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] ">We invite original, high-quality research papers that advance knowledge and innovation in Robotics, Artificial Intelligence, and Intelligent Systems. Submit your latest findings, case studies, or conceptual frameworks to share with a global audience of peers and experts. All submissions will undergo a rigorous peer-review process to ensure academic excellence and relevance. Accepted papers will be presented at the conference and considered for publication in reputed journals and conference proceedings.
                </p>
            </div>


            <div className="xl:max-w-[1400px]  md:max-w-[920px] mx-auto lg:mt-10 mt-5 px-4">
                <div className="bg-[#ffffff] border-l-10 border-[#1B56FD] border-2 rounded-2xl rounded-r-2xl shadow-md ">
                    <div className="grid grid-cols-1 lg:grid-cols-2  lg:h-full lg:items-stretch">
                        <div className=" bg-[#DFDBF2] p-6 rounded-l-lg   shadow-md h-full">
                            <div className="flex flex-col gap-5">
                                <p className="text-2xl font-bold text-[#1B56FD] text-center">Submission Guidelines:</p>
                                <li className="inter-regular text-gray-800 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Provide the title of your paper, which should be descriptive and concise.</li>
                                <li className="inter-regular text-gray-800 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Enter the full name of the first author as it appears on the paper.</li>
                                <li className="inter-regular text-gray-800 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Enter a valid mobile number (10-15 digits, country code optional).</li>
                                <li className="inter-regular text-gray-800 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Provide a working email address for the first author to receive notifications.</li>
                                <li className="inter-regular text-gray-800 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Enter the name of the institution the first author is affiliated with.</li>
                                <li className="inter-regular text-gray-800 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Choose the relevant category for the first author.</li>
                                <li className="inter-regular text-gray-800 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Ensure your paper is in PDF or DOC format and does not exceed 5MB in size.</li>
                            </div>
                            <div className="flex flex-col gap-5 mt-7">
                                <p className="text-2xl font-bold text-[#1B56FD] text-center">Important Notes:</p>
                                <li className="inter-regular text-gray-800 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">All papers undergo a double-blind peer review process.</li>
                                <li className="inter-regular text-gray-800 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">At least one author must register for the conference.</li>
                                <li className="inter-regular text-gray-800 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Plagiarism checks will be performed.</li>
                                <li className="inter-regular text-gray-800 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Multiple submissions are not allowed.</li>
                                <li className="inter-regular text-gray-800 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Authors must present accepted papers at the conference.</li>
                                <li className="inter-regular text-gray-800 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Papers will be published in the conference proceedings.</li>
                            </div>
                        </div>

                        <div className="p-6 shadow-md h-full rounded-br-lg rounded-tr-lg">
                            <h2 className="text-2xl font-bold text-[#1B56FD] mb-8 text-center">Submit Your Paper</h2>
                            <form onSubmit={handleSubmit} className="space-y-10">
                                <input
                                    type="text"
                                    name='Paper_Title'
                                    value={formData.Paper_Title}
                                    onChange={handleFileInputChange}
                                    required
                                    placeholder="Enter Your Paper Title"
                                    className="w-full border-2 border-gray-300 focus:outline-none  rounded-xl px-3 py-4"
                                />
                                <input
                                    type="text"
                                    name='Institution_Name'
                                    value={formData.Institution_Name}
                                    onChange={handleFileInputChange}
                                    required
                                    placeholder="Enter Your Institution Name"
                                    className="w-full border-2 border-gray-300 focus:outline-none  rounded-xl px-3 py-4"
                                />
                                <div className="flex flex-col xl:flex-row gap-4">
                                    <input
                                        type="text"
                                        name='Author_FUll_Name'
                                        value={formData.Author_FUll_Name}
                                        onChange={handleFileInputChange}
                                        required
                                        placeholder="Enter Author’s Full Name"
                                        className="flex-1 border-2 border-gray-300 focus:outline-none  rounded-xl px-3 py-4"
                                    />
                                    <input
                                        type="email"
                                        name='Email_Address'
                                        value={formData.Email_Address}
                                        onChange={handleFileInputChange}
                                        required
                                        placeholder="Enter Author’s Email"
                                        className="flex-1 border-2 border-gray-300 focus:outline-none  rounded-xl px-3 py-4"
                                    />
                                </div>
                                <select name='Paper_Track' value={formData.Paper_Track} onChange={handleFileInputChange}
                                    required className="w-full border-2 border-gray-300 focus:outline-none  rounded-xl px-3 py-4 text-gray-500">
                                    <option value=''>Select Your Category</option>
                                    <option value='Autonomous Robotics and Systems'>Autonomous Robotics and Systems</option>
                                    <option value='Machine Learning'>Machine Learning</option>
                                    <option value='Intelligent Control Systems'>Intelligent Control Systems</option>
                                    <option value='Human-Robot Interaction'>Human-Robot Interaction</option>
                                    <option value='AI Ethics'>AI Ethics</option>
                                    <option value='Smart Sensors'>Smart Sensors</option>
                                    <option value='Robotics in Healthcare'>Robotics in Healthcare</option>
                                    <option value='Swarm Robotics'>Swarm Robotics</option>
                                    <option value='Intelligent Systems'>Intelligent Systems</option>
                                </select>
                                <div className="relative w-full border-2 border-dashed border-gray-400 rounded-xl py-10 flex flex-col items-center justify-center text-center text-gray-500 overflow-hidden cursor-pointer">
                                    <input
                                        name='Paper_File'
                                        // onChange={handleChange}
                                        accept=".pdf,.doc,.docx"
                                        type="file"
                                        onChange={handleFileInputChange}
                                        className="absolute inset-0 opacity-0 cursor-pointer z-10"
                                    />
                                    <FiUploadCloud className="text-3xl text-[#1B56FD] mb-2 z-0" />
                                    <p className="z-0">{fileName || "Click to Upload Paper"}</p>
                                </div>
                                <div className="text-center">
                                    <button
                                        type="submit"
                                        disabled={status === 'Sending...'}
                                        className="w-fit bg-[#1B56FD] text-white px-3 py-3 rounded-lg  inter-semibold mt-4 cursor-pointer"
                                    >
                                        {status === 'Sending...' ? 'Submitting...' : 'Submit Your Paper'}
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
