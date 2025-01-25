import { IoIosArrowForward } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import Image from 'next/image';

export default function Blog() {
    return (
        <div>
            <h2 className="text-lg text-gray-500 mt-32 font-semibold md:flex md:items-center md:ml-[670px] sm:ml-[100px] ml[100px]">WHAT WE DO</h2>
            <h1 className="text-3xl mt-4 text-blue-950 md:flex md:items-center md:ml-[550px] sm:[100px] ml-[100px] font-semibold">Innovation tailored for you</h1>

            <div className="flex items-center space-x-3 md:ml-[675px] ml-[100px] md:mt-[20px] mt-4">
                <p className="text-blue-950 font-semibold">HOME</p>
                <IoIosArrowForward className="text-gray-500" />
                <p className="text-gray-500 font-semibold">Blog</p>
            </div>

            <div className="w-[1440px] h-[530px] bg-white mt-20">
                <div className="flex">
                    <Image src="/blg5.jpeg" alt="Blog Image 1" width={700} height={530} />

                    <div className="grid grid-cols-2 ml-2 gap-2">
                        <Image src="/blg1.jpeg" alt="Blog Image 2" width={361} height={260} />
                        <Image src="/blg2.jpeg" alt="Blog Image 3" width={361} height={260} />
                        <Image src="/blg3.jpeg" alt="Blog Image 4" width={361} height={260} />
                        <Image src="/blg4.jpeg" alt="Blog Image 5" width={361} height={260} />
                    </div>
                </div>
            </div>

            <div className="mt-48 text-center">
                <h1 className="text-blue-950 text-4xl font-semibold">Meet Our Team</h1>
            </div>

            <div className="md:flex items-center justify-evenly mt-20 mb-44 grid grid-cols-1 ml-10">
                <div>
                    <Image src="/abt1.jpeg" alt="Team Member 1" width={316} height={231} />
                    <h1 className="text-blue-950 font-semibold text-center mt-5">Username</h1>
                    <p className="text-gray-500 text-center mt-2">Profession</p>
                    <div className="flex space-x-2 text-sky-500 mt-2 items-center justify-center">
                        <FaInstagram className="w-7 h-7" />
                        <FaFacebook className="w-7 h-7" />
                        <FaTwitter className="w-7 h-7" />
                    </div>
                </div>
                <div>
                    <Image src="/abt2.jpeg" alt="Team Member 2" width={316} height={231} />
                    <h1 className="text-blue-950 font-semibold text-center mt-5">Username</h1>
                    <p className="text-gray-500 text-center mt-2">Profession</p>
                    <div className="flex space-x-2 text-sky-500 mt-2 items-center justify-center">
                        <FaInstagram className="w-7 h-7" />
                        <FaFacebook className="w-7 h-7" />
                        <FaTwitter className="w-7 h-7" />
                    </div>
                </div>
                <div>
                    <Image src="/abt3.jpeg" alt="Team Member 3" width={316} height={231} />
                    <h1 className="text-blue-950 font-semibold text-center mt-5">Username</h1>
                    <p className="text-gray-500 text-center mt-2">Profession</p>
                    <div className="flex space-x-2 text-sky-500 mt-2 items-center justify-center">
                        <FaInstagram className="w-7 h-7" />
                        <FaFacebook className="w-7 h-7" />
                        <FaTwitter className="w-7 h-7" />
                    </div>
                </div>
            </div>

            <div className="md:flex items-center justify-evenly mt-20 mb-44 grid grid-cols-1 ml-10">
                <div>
                    <Image src="/abt4.jpeg" alt="Team Member 4" width={316} height={231} />
                    <h1 className="text-blue-950 font-semibold text-center mt-5">Username</h1>
                    <p className="text-gray-500 text-center mt-2">Profession</p>
                    <div className="flex space-x-2 text-sky-500 mt-2 items-center justify-center">
                        <FaInstagram className="w-7 h-7" />
                        <FaFacebook className="w-7 h-7" />
                        <FaTwitter className="w-7 h-7" />
                    </div>
                </div>
                <div>
                    <Image src="/abt5.jpeg" alt="Team Member 5" width={316} height={231} />
                    <h1 className="text-blue-950 font-semibold text-center mt-5">Username</h1>
                    <p className="text-gray-500 text-center mt-2">Profession</p>
                    <div className="flex space-x-2 text-sky-500 mt-2 items-center justify-center">
                        <FaInstagram className="w-7 h-7" />
                        <FaFacebook className="w-7 h-7" />
                        <FaTwitter className="w-7 h-7" />
                    </div>
                </div>
                <div>
                    <Image src="/abt6.jpeg" alt="Team Member 6" width={316} height={231} />
                    <h1 className="text-blue-950 font-semibold text-center mt-5">Username</h1>
                    <p className="text-gray-500 text-center mt-2">Profession</p>
                    <div className="flex space-x-2 text-sky-500 mt-2 items-center justify-center">
                        <FaInstagram className="w-7 h-7" />
                        <FaFacebook className="w-7 h-7" />
                        <FaTwitter className="w-7 h-7" />
                    </div>
                </div>
            </div>

            <div className="md:flex items-center justify-evenly mt-20 mb-44 grid grid-cols-1 ml-10">
                <div>
                    <Image src="/abt7.jpeg" alt="Team Member 7" width={316} height={231} />
                    <h1 className="text-blue-950 font-semibold text-center mt-5">Username</h1>
                    <p className="text-gray-500 text-center mt-2">Profession</p>
                    <div className="flex space-x-2 text-sky-500 mt-2 items-center justify-center">
                        <FaInstagram className="w-7 h-7" />
                        <FaFacebook className="w-7 h-7" />
                        <FaTwitter className="w-7 h-7" />
                    </div>
                </div>
                <div>
                    <Image src="/abt8.jpeg" alt="Team Member 8" width={316} height={231} />
                    <h1 className="text-blue-950 font-semibold text-center mt-5">Username</h1>
                    <p className="text-gray-500 text-center mt-2">Profession</p>
                    <div className="flex space-x-2 text-sky-500 mt-2 items-center justify-center">
                        <FaInstagram className="w-7 h-7" />
                        <FaFacebook className="w-7 h-7" />
                        <FaTwitter className="w-7 h-7" />
                    </div>
                </div>
                <div>
                    <Image src="/abt9.jpeg" alt="Team Member 9" width={316} height={231} />
                    <h1 className="text-blue-950 font-semibold text-center mt-5">Username</h1>
                    <p className="text-gray-500 text-center mt-2">Profession</p>
                    <div className="flex space-x-2 text-sky-500 mt-2 items-center justify-center">
                        <FaInstagram className="w-7 h-7" />
                        <FaFacebook className="w-7 h-7" />
                        <FaTwitter className="w-7 h-7" />
                    </div>
                </div>
            </div>

            <h1 className="text-blue-950 font-semibold text-3xl flex justify-center mt-[200px]">Start your 14 days free trial</h1>

            <p className="text-gray-500 font-extralight mt-6 flex justify-center text-center">
                Met minim Mollie non desert Alamo est sit cliquey<br />
                dolor do met sent. RELIT official consequent.
            </p>

            <button className="bg-sky-500 text-white font-semibold flex items-center justify-center w-[200px] h-[52px] ml-[600px] mt-6 rounded-md">Try for free</button>

            <div className="flex space-x-2 text-blue-950 ml-[610px] mt-11">
                <FaInstagram className="w-10 h-10" />
                <FaYoutube className="w-10 h-10" />
                <FaFacebook className="w-10 h-10" />
                <FaTwitter className="w-10 h-10" />
            </div>
        </div>
    );
}
