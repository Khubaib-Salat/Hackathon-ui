import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { RxTriangleRight } from "react-icons/rx";

export default function About() {
  return (
    <main className="grid grid-cols-1">
      <div className="md:flex grid grid-cols-1">
        <div className="ml-[100px]">
          <h2 className="text-blue-950 mt-32 font-semibold">ABOUT COMPANY</h2>
          <h1 className="text-blue-950 mt-7 font-semibold text-4xl">ABOUT US</h1>
          <p className="mt-7 text-gray-500">
            we know how large objects will act,&lt;br /&gt;but things on a small scale.
          </p>
          <button className="w-[200px] h-[48px] text-white font-semibold bg-sky-500 rounded-sm mt-7 flex items-center justify-center">
            Get Qoute Now
          </button>
        </div>

        <div className="md:w-[484px] md:h-[484px] w-[200px] h-[200px] bg-red-100 rounded-full md:ml-[500px] ml-[100px] mt-9">
          <Image
            src="/aboutgirl.png"
            alt="About Girl"
            width={571}
            height={668}
            className="md:pb-16"
          />
        </div>
      </div>

      <div>
        <p className="md:ml-[100px] ml-[150px] text-red-600 mt-36">
          Problems trying
        </p>
        <div className="md:flex items-center text-center">
          <h1 className="text-blue-950 text-2xl font-semibold md:ml-[100px] ml-0 md:mt-4 mt-2">
            Met minim Mollie non desert<br />Alamo est sit cliquey dolor do<br /> met sent.
          </h1>
          <p className="font-semibold text-gray-400 md:ml-[200px] ml-0">
            Problems trying to resolve the conflict between the two major realms of<br /> Classical physics: Newtonian mechanics
          </p>
        </div>
      </div>

      <div className="md:grid md:grid-cols-4 md:ml-[100px] mt-24 grid grid-cols-1 text-center">
        <div>
          <h1 className="text-4xl text-blue-950 font-bold ">15K</h1>
          <p className="text-gray-500 font-semibold">Happy Customers</p>
        </div>
        <div>
          <h1 className="text-4xl text-blue-950 font-bold ">150K</h1>
          <p className="text-gray-500 font-semibold">Monthly Visitors</p>
        </div>
        <div>
          <h1 className="text-4xl text-blue-950 font-bold ">15</h1>
          <p className="text-gray-500 font-semibold">Countries Worldwide</p>
        </div>
        <div>
          <h1 className="text-4xl text-blue-950 font-bold ">100+</h1>
          <p className="text-gray-500 font-semibold">Top partners</p>
        </div>
      </div>

      <div className="mt-44 flex items-center justify-center relative">
        <Image
          src="/scene.jpeg"
          alt="Scene"
          width={989}
          height={540}
          className="w-full h-full rounded-lg"
        />
        <div className="w-20 h-20 bg-sky-600 rounded-full absolute" />
        <RxTriangleRight className="absolute text-white w-14 h-14" />
      </div>

      <div className="mt-48 text-center">
        <h1 className="text-blue-950 text-2xl font-semibold">Meet Our Team</h1>
        <p className="text-center text-gray-500 font-semibold mt-4">
          Problems trying to resolve the conflict between<br />the two realms of Classical physics: Newtonian mechanics
        </p>
      </div>

      <div className="md:flex items-center justify-evenly mt-20 mb-44 grid grid-cols-1 ml-10">
        <div>
          <Image
            src="/abt1.jpeg"
            alt="Team member 1"
            width={316}
            height={231}
          />
          <h1 className="text-blue-950 font-semibold text-center mt-5">Username</h1>
          <p className="text-gray-500 text-center mt-2">Profession</p>
          <div className="flex space-x-2 text-sky-500 mt-2 items-center justify-center">
            <FaInstagram className="w-7 h-7" />
            <FaFacebook className="w-7 h-7" />
            <FaTwitter className="w-7 h-7" />
          </div>
        </div>
        <div>
          <Image
            src="/abt2.jpeg"
            alt="Team member 2"
            width={316}
            height={231}
          />
          <h1 className="text-blue-950 font-semibold text-center mt-5">Username</h1>
          <p className="text-gray-500 text-center mt-2">Profession</p>
          <div className="flex space-x-2 text-sky-500 mt-2 items-center justify-center">
            <FaInstagram className="w-7 h-7" />
            <FaFacebook className="w-7 h-7" />
            <FaTwitter className="w-7 h-7" />
          </div>
        </div>
        <div>
          <Image
            src="/abt3.jpeg"
            alt="Team member 3"
            width={316}
            height={231}
          />
          <h1 className="text-blue-950 font-semibold text-center mt-5">Username</h1>
          <p className="text-gray-500 text-center mt-2">Profession</p>
          <div className="flex space-x-2 text-sky-500 mt-2 items-center justify-center">
            <FaInstagram className="w-7 h-7" />
            <FaFacebook className="w-7 h-7" />
            <FaTwitter className="w-7 h-7" />
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-20">
        <h1 className="text-blue-950 font-semibold text-center md:text-4xl text-3xl">
          Big Companies are here
        </h1>
        <p className="text-center text-gray-500 font-semibold mt-4">
          Problems trying to resolve the conflict between<br />the two realms of Classical physics: Newtonian mechanics
        </p>

        <div className="md:grid md:grid-cols-5 grid grid-cols-1 md:gap-3 gap-8 mt-20 ml-[130px]">
          <Image
            src="/fa-brands-1.png"
            alt="Brand 1"
            width={153}
            height={34}
          />
          <Image
            src="/fa-brands-2.png"
            alt="Brand 2"
            width={146}
            height={59}
          />
          <Image
            src="/fa-brands-3.png"
            alt="Brand 3"
            width={152}
            height={75}
          />
          <Image
            src="/fa-brands-4.png"
            alt="Brand 4"
            width={151}
            height={42}
          />
          <Image
            src="/fa-brands-5.png"
            alt="Brand 5"
            width={151}
            height={62}
          />
        </div>
      </div>

      <div className="md:grid md:grid-cols-3 md:w-full md:ml-[100px] md:mb-20">
        <div className="bg-blue-500 md:w-[1440px] md:h-[636px] md:col-span-2 w-[500px] h-[900px]">
          <h2 className="text-white md:ml-[200px] md:mt-[150px] ml-32 font-semibold">WORK WITH US</h2>
          <h1 className="text-white md:ml-[200px] mt-6 font-semibold text-3xl ml-10">Now Let&apos;s grow Yours</h1>
          <p className="text-gray-300 md:ml-[200px] mt-6">
            The gradual accumulation of information about atomic and<br />small-scale behavior during the first quarter of the 20th
          </p>
          <button className="w-[212px] h-[52px] text-white mt-11 flex items-center justify-center border border-white font-semibold rounded-sm md:ml-[200px] ml-20">
            Button
          </button>
        </div>
        <Image
          src="/pinkgirl.jpeg"
          alt="Pink Girl"
          width={1440}
          height={636}
        />
      </div>
    </main>
  );
}
