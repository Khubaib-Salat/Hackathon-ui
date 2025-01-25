import { IoCallOutline } from "react-icons/io5";
import { TiMail } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { CgArrowLongDownR } from "react-icons/cg";
import Image from 'next/image';

export default function Contact() {
    return (
        <div className="bg-white">
            <div className="md:flex grid grid-cols-1">
                <div className="ml-[100px]">
                    <h2 className="text-blue-950 mt-32 font-semibold">CONTACT US</h2>
                    <h1 className="text-blue-950 mt-7 font-semibold text-4xl">Get in touch<br />today!</h1>
                    <p className="mt-7 text-gray-500">we know how large objects will act,<br />but things on a small scale.</p>
                    <h2 className="text-blue-950 mt-6 font-semibold text-2xl">Phone:+451 215 215</h2>
                    <h2 className="text-blue-950 mt-4 font-semibold text-2xl">Fax:+415 215 215</h2>

                    <div className="flex space-x-4 text-blue-950 mt-11 ">
                        <FaInstagram className="w-7 h-7" />
                        <FaYoutube className="w-7 h-7" />
                        <FaFacebook className="w-7 h-7" />
                        <FaTwitter className="w-7 h-7" />
                    </div>
                </div>

                <div className="md:w-[484px] md:h-[484px] w-[200px] h-[200px] bg-red-100 rounded-full md:ml-[500px] ml-[100px] mt-9">
                    <Image
                        src="/family.png"
                        alt="Family Image"
                        width={571}
                        height={668}
                        className="md:pb-16 w-[171px] h-[268px]"
                    />
                </div>
            </div>

            <div className="mt-32">
                <h2 className="text-blue-950 font-semibold flex justify-center items-center">VISIT OUR OFFICE</h2>
                <h1 className="text-blue-950 font-semibold flex justify-center items-center text-3xl text-center mt-4">We help small businesses<br />with big idea</h1>

                <div className="md:flex md:ml-52 mt-14">
                    <div className="bg-white w-[327px] h-[403px]">
                        <IoCallOutline className="w-[72px] h-[72px] text-sky-500 ml-[120px] mt-20" />
                        <p className="text-black font-semibold text-center mt-4">georgia.young@exapmle.com<br />georgia.young@ple.com</p>
                        <h1 className="text-black text-lg font-semibold mt-4 ml-[100px]">Get Support</h1>
                        <button className="bg-white text-sky-500 font-semibold border border-sky-500 w-[200px] h-[52px] ml-[50px] mt-6 rounded-full">Submit Request</button>
                    </div>

                    <div className="bg-blue-950 w-[327px] h-[403px]">
                        <FaLocationDot className="w-[72px] h-[72px] text-sky-500 ml-[120px] mt-20" />
                        <p className="text-white font-semibold text-center mt-4">georgia.young@exapmle.com<br />georgia.young@ple.com</p>
                        <h1 className="text-white text-lg font-semibold mt-4 ml-[100px]">Get Support</h1>
                        <button className="bg-blue-950 text-sky-500 font-semibold border border-sky-500 w-[200px] h-[52px] ml-[60px] mt-6 rounded-full">Submit Request</button>
                    </div>

                    <div className="bg-white w-[327px] h-[403px]">
                        <TiMail className="w-[72px] h-[72px] text-sky-500 ml-[120px] mt-20" />
                        <p className="text-black font-semibold text-center mt-4">georgia.young@exapmle.com<br />georgia.young@ple.com</p>
                        <h1 className="text-black text-lg font-semibold mt-4 ml-[100px]">Get Support</h1>
                        <button className="bg-white text-sky-500 font-semibold border border-sky-500 w-[200px] h-[52px] ml-[60px] mt-6 rounded-full">Submit Request</button>
                    </div>
                </div>
            </div>

            <div className="mt-24">
                <CgArrowLongDownR className="text-sky-500 w-[112px] h-[68px] md:ml-[650px]" />
                <h1 className="text-blue-950 font-semibold mt-6 uppercase md:ml-[600px]">We can&apos;t wait to meet you</h1>
                <h1 className="text-blue-950 font-semibold mt-6 text-5xl md:ml-[610px]">Let&apos;s Talk</h1>
                <button className="bg-sky-500 text-white font-semibold flex items-center justify-center w-[200px] h-[52px] md:ml-[620px] mt-6 rounded-md">Try for free now</button>
            </div>
        </div>
    );
}
