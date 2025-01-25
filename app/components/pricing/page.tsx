import { IoIosArrowForward } from "react-icons/io";
import { FaInstagram, FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import Image from 'next/image';

export default function Pricing() {
  return (
    <div>
      <h2 className="text-lg text-gray-500 mt-32 font-semibold md:flex md:items-center md:justify-center sm:ml-[100px] ml[100px]">PRICING</h2>
      <h1 className="text-3xl mt-4 text-blue-950 md:flex md:items-center md:justify-center sm:[100px] ml-[100px] font-semibold">SIMPLE PRICING</h1>

      <div className="flex items-center space-x-3 md:ml-[675px] ml-[100px] md:mt-[20px] mt-4">
        <p className="text-blue-950  font-semibold">HOME</p>
        <IoIosArrowForward className="text-gray-500" />
        <p className="text-gray-500  font-semibold">Pricing</p>
      </div>

      <div className="md:w-[1440px] md:h-[1562px] bg-gray-50 mt-16 py-16">
        <h1 className="text-3xl mt-4 text-blue-950 md:flex md:items-center md:ml-[665px] sm:[100px] ml-[100px] font-semibold">PRICING</h1>
        <p className="font-semibold text-gray-400 md:flex md:justify-center text-center md:mt-6">
          Problems trying to resolve the conflict between<br /> the two major realms of Classical physics: Newtonian mechanics
        </p>

        <div className="flex justify-center items-center mt-7 space-x-3">
          <p className="text-blue-950  font-semibold">Monthly</p>
          <label className="relative flex justify-between items-center group p-2 text-xl ">
            <input type="checkbox" className="absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md" />
            <span className="w-20 h-10 flex items-center flex-shrink-0 ml-4 p-1 bg-white border border-sky-500 rounded-full duration-300 ease-in-out peer-checked:bg-sky-400 after:w-8 after:h-8 after:bg-gray-300 after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-9 group-hover:after:translate-x-1"></span>
          </label>
          <p className="text-blue-950  font-semibold">Yearly</p>

          <button className="bg-sky-300 text-sky-500 font-semibold py-4 px-4 rounded-full">Save 25%</button>
        </div>

        <div className="md:flex justify-center mt-[200px]">

          {/* Free Plan */}
          <div className="">
            <div className="bg-white w-[327px] h-[664px] rounded-md border border-sky-500">
              <h1 className="text-black text-2xl ml-[130px] font-semibold mt-14">FREE</h1>
              <p className="text-gray-500 font-semibold text-center mt-4">Organize across all<br />apps by hand</p>

              <div className="flex items-center ml-[120px] mt-4">
                <p className="text-sky-500 font-bold text-4xl">0</p>
                <ul className="text-sky-500 font-bold ml-2">
                  <li className="text-2xl">$</li>
                  <li>Per Month</li>
                </ul>
              </div>

              <div className="ml-10 mt-8 flex items-center">
                <div className="bg-green-400 rounded-full w-[32px] h-[32px] flex items-center justify-center"><FaCheck className="text-white" /></div>
                <p className="text-black font-semibold ml-2">Unlimited product updates</p>
              </div>

              <div className="ml-10 mt-8 flex items-center">
                <div className="bg-green-400 rounded-full w-[32px] h-[32px] flex items-center justify-center"><FaCheck className="text-white" /></div>
                <p className="text-black font-semibold ml-2">Unlimited product updates</p>
              </div>

              <div className="ml-10 mt-8 flex items-center">
                <div className="bg-green-400 rounded-full w-[32px] h-[32px] flex items-center justify-center"><FaCheck className="text-white" /></div>
                <p className="text-black font-semibold ml-2">Unlimited product updates</p>
              </div>

              <div className="ml-10 mt-8 flex items-center">
                <div className="bg-gray-400 rounded-full w-[32px] h-[32px] flex items-center justify-center"><FaCheck className="text-white" /></div>
                <p className="text-black font-semibold ml-2">1GB Cloud Storage</p>
              </div>

              <div className="ml-10 mt-8 flex items-center">
                <div className="bg-gray-400 rounded-full w-[32px] h-[32px] flex items-center justify-center"><FaCheck className="text-white" /></div>
                <p className="text-black font-semibold ml-2">Email and Community<br />Support</p>
              </div>

              <button className="bg-blue-950 text-white font-semibold flex items-center justify-center w-[246px] h-[52px] ml-10 mt-6 rounded-md">Try for free</button>
            </div>
          </div>

          {/* Standard Plan */}
          <div className="">
            <div className="bg-blue-950 w-[327px] h-[664px] rounded-md border border-sky-500">
              <h1 className="text-white text-2xl ml-[90px] font-semibold mt-14">STANDARD</h1>
              <p className="text-white font-semibold text-center mt-4">Organize across all<br />apps by hand</p>

              <div className="flex items-center ml-[100px] mt-4">
                <p className="text-sky-500 font-bold text-4xl">9.99</p>
                <ul className="text-sky-500 font-bold ml-2">
                  <li className="text-2xl">$</li>
                  <li>Per Month</li>
                </ul>
              </div>

              <div className="ml-10 mt-8 flex items-center">
                <div className="bg-green-400 rounded-full w-[32px] h-[32px] flex items-center justify-center"><FaCheck className="text-white" /></div>
                <p className="text-white font-semibold ml-2">Unlimited product updates</p>
              </div>

              <div className="ml-10 mt-8 flex items-center">
                <div className="bg-green-400 rounded-full w-[32px] h-[32px] flex items-center justify-center"><FaCheck className="text-white" /></div>
                <p className="text-white font-semibold ml-2">Unlimited product updates</p>
              </div>

              <div className="ml-10 mt-8 flex items-center">
                <div className="bg-green-400 rounded-full w-[32px] h-[32px] flex items-center justify-center"><FaCheck className="text-white" /></div>
                <p className="text-white font-semibold ml-2">Unlimited product updates</p>
              </div>

              <div className="ml-10 mt-8 flex items-center">
                <div className="bg-gray-400 rounded-full w-[32px] h-[32px] flex items-center justify-center"><FaCheck className="text-white" /></div>
                <p className="text-white font-semibold ml-2">1GB Cloud Storage</p>
              </div>

              <div className="ml-10 mt-8 flex items-center">
                <div className="bg-gray-400 rounded-full w-[32px] h-[32px] flex items-center justify-center"><FaCheck className="text-white" /></div>
                <p className="text-white font-semibold ml-2">Email and Community<br />Support</p>
              </div>

              <button className="bg-white text-blue-950 font-semibold flex items-center justify-center w-[246px] h-[52px] ml-10 mt-6 rounded-md">Try for free</button>
            </div>
          </div>

          {/* Premium Plan */}
          <div>
            <div className="bg-white w-[327px] h-[664px] rounded-md border border-sky-500">
              <h1 className="text-black text-2xl ml-[100px] font-semibold mt-14">PREMIUM</h1>
              <p className="text-gray-500 font-semibold text-center mt-4">Organize across all<br />apps by hand</p>

              <div className="flex items-center ml-[100px] mt-4">
                <p className="text-sky-500 font-bold text-4xl">19.99</p>
                <ul className="text-sky-500 font-bold ml-2">
                  <li className="text-2xl">$</li>
                  <li>Per Month</li>
                </ul>
              </div>

              <div className="ml-10 mt-8 flex items-center">
                <div className="bg-green-400 rounded-full w-[32px] h-[32px] flex items-center justify-center"><FaCheck className="text-white" /></div>
                <p className="text-black font-semibold ml-2">Unlimited product updates</p>
              </div>

              <div className="ml-10 mt-8 flex items-center">
                <div className="bg-green-400 rounded-full w-[32px] h-[32px] flex items-center justify-center"><FaCheck className="text-white" /></div>
                <p className="text-black font-semibold ml-2">Unlimited product updates</p>
              </div>

              <div className="ml-10 mt-8 flex items-center">
                <div className="bg-green-400 rounded-full w-[32px] h-[32px] flex items-center justify-center"><FaCheck className="text-white" /></div>
                <p className="text-black font-semibold ml-2">Unlimited product updates</p>
              </div>

              <div className="ml-10 mt-8 flex items-center">
                <div className="bg-gray-400 rounded-full w-[32px] h-[32px] flex items-center justify-center"><FaCheck className="text-white" /></div>
                <p className="text-black font-semibold ml-2">1GB Cloud Storage</p>
              </div>

              <div className="ml-10 mt-8 flex items-center">
                <div className="bg-gray-400 rounded-full w-[32px] h-[32px] flex items-center justify-center"><FaCheck className="text-white" /></div>
                <p className="text-black font-semibold ml-2">Email and Community<br />Support</p>
              </div>

              <button className="bg-blue-950 text-white font-semibold flex items-center justify-center w-[246px] h-[52px] ml-10 mt-6 rounded-md">Try for free</button>
            </div>
          </div>
        </div>

        <p className="text-center text-gray-500 font-semibold mt-[150px]">Trusted by over 4000 Big Companies</p>

        <div className="md:grid md:grid-cols-5 grid grid-cols-1 md:gap-2 gap-6 mt-20 ml-[130px]">
          <Image src="/fa-brands-1.png" alt="" width={153} height={34} />
          <Image src="/fa-brands-2.png" alt="" width={146} height={59} />
          <Image src="/fa-brands-3.png" alt="" width={152} height={75} />
          <Image src="/fa-brands-4.png" alt="" width={151} height={42} />
          <Image src="/fa-brands-5.png" alt="" width={151} height={62} />
        </div>

      </div>

      <h1 className="text-3xl text-blue-950 md:flex md:items-center md:ml-[565px] sm:[100px] ml-[100px] font-semibold mt-14">PRICING FAQs</h1>
      <p className="font-semibold text-gray-400 md:flex md:ml-[486px] text-center md:mt-6">
        Problems trying to resolve the conflict between<br /> the two major realms of Classical physics
      </p>

      <div className="grid grid-cols-2 gap-4 ml-40 mt-24">
        {/* FAQ Content Here */}
      </div>

      <p className="text-gray-500 font-extralight mt-8 flex justify-center">Haven't got your answer? Contact our support</p>

      <h1 className="text-blue-950 font-semibold text-3xl flex justify-center mt-[200px]">Start your 14 days free trial</h1>
      <p className="text-gray-500 font-extralight mt-6 flex justify-center text-center">
        Met minim Mollie non desert Alamo est sit cliquey<br />
        dolor do met sent. RELIT official consequent.
      </p>

      <button className="bg-sky-500 text-white font-semibold flex items-center justify-center w-[200px] h-[52px] ml-[600px] mt-6 rounded-md">Try for free</button>

      <div className="flex space-x-2 text-blue-950 ml-[610px] mt-11 ">
        <FaInstagram className="w-10 h-10" />
        <FaYoutube className="w-10 h-10" />
        <FaFacebook className="w-10 h-10" />
        <FaTwitter className="w-10 h-10" />
      </div>
    </div>
  );
}
