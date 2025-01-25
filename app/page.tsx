import { IoIosArrowForward } from "react-icons/io";
import { CiAlarmOn } from "react-icons/ci";
import { BsGraphUp } from "react-icons/bs";
import Image from 'next/image';

export default function Navbar() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative">
        <Image
          src="/hero.jpeg"
          alt="img"
          width={1920}
          height={716}
          className="w-full h-[716px] object-cover"
        />
        <div className="absolute top-[350px] left-[10%] md:left-[20%] text-center md:text-left text-white">
          <h2 className="font-bold">Summer 2020</h2>
          <h1 className="text-4xl md:text-6xl font-bold mt-4">NEW COLLECTION</h1>
          <p className="mt-4">We know how large objects will act, but things on a small scale.</p>
          <button className="mt-6 bg-green-500 text-white py-3 px-8 rounded-md font-semibold">
            SHOP NOW
          </button>
        </div>
      </section>

      {/* Editor's Pick Section */}
      <section className="bg-gray-50 py-12">
        <div className="text-center mb-10">
          <h1 className="text-2xl font-semibold text-blue-950">EDITOR&apos;S PICK</h1>
          <p className="text-gray-500 font-semibold mt-2">
            Problems trying to resolve the conflict between
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 md:px-32 px-6">
          <div className="relative">
            <Image
              src="/pic4.jpeg"
              alt="Men"
              width={500}
              height={500}
              className="w-full h-[500px] object-cover"
            />
            <button className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-white py-3 px-6 font-semibold">MEN</button>
          </div>
          <div className="relative">
            <Image
              src="/pic3.jpeg"
              alt="Women"
              width={500}
              height={500}
              className="w-full h-[500px] object-cover"
            />
            <button className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-white py-3 px-6 font-semibold">WOMAN</button>
          </div>
          <div className="relative">
            <Image
              src="/pic2.jpeg"
              alt="Accessories"
              width={500}
              height={242}
              className="w-full h-[242px] object-cover"
            />
            <button className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-white py-3 px-6 font-semibold">ACCESSORIES</button>
          </div>
          <div className="relative">
            <Image
              src="/pic1.jpeg"
              alt="Kids"
              width={500}
              height={242}
              className="w-full h-[242px] object-cover"
            />
            <button className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-white py-3 px-6 font-semibold">KIDS</button>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16">
        <div className="text-center mb-8">
          <h2 className="text-gray-500 font-semibold">Featured Products</h2>
          <h1 className="text-2xl font-semibold text-blue-950">BESTSELLER PRODUCTS</h1>
          <p className="text-gray-500 font-semibold mt-4">
            Problems trying to resolve the conflict between
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 md:px-32 px-6 mb-10">
          <Image
            src="/gp8.jpeg"
            alt="Product 1"
            width={500}
            height={427}
            className="w-full h-[427px] object-cover"
          />
          <Image
            src="/gp1.jpeg"
            alt="Product 2"
            width={500}
            height={427}
            className="w-full h-[427px] object-cover"
          />
          <Image
            src="/gp2.jpeg"
            alt="Product 3"
            width={500}
            height={427}
            className="w-full h-[427px] object-cover"
          />
          <Image
            src="/gp3.jpeg"
            alt="Product 4"
            width={500}
            height={427}
            className="w-full h-[427px] object-cover"
          />
        </div>

        <div className="grid md:grid-cols-4 gap-6 md:px-32 px-6">
          {['Graphic Design', 'Graphic Design', 'Graphic Design', 'Graphic Design'].map((title, index) => (
            <div key={index} className="text-center">
              <h1 className="font-semibold text-blue-950">{title}</h1>
              <p className="font-semibold text-gray-500 mt-4">English Department</p>
              <p className="mt-4 text-gray-400 font-semibold">$16.48 <span className="text-green-700">$6.48</span></p>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-6">
          {['sky-500', 'green-700', 'orange-500', 'black'].map((color) => (
            <div key={color} className={`w-5 h-5 rounded-full bg-${color}`} />
          ))}
        </div>
      </section>

      {/* New Section */}
      <section className="w-full bg-emerald-700 py-20 relative">
        <div className="container mx-auto flex justify-center items-center">
          <Image
            src="/hero2.png"
            alt="New Product"
            width={410}
            height={585}
            className="w-[410px] h-[585px] mr-8"
          />
          <div className="text-white text-center md:text-left">
            <h2 className="font-bold">SUMMER 2020</h2>
            <h1 className="text-4xl md:text-6xl font-bold mt-4">
              Vita Classic Product
            </h1>
            <p className="mt-4">
              We know how large objects will act, but things on a small scale.
            </p>
            <div className="flex justify-center md:justify-start items-center mt-6 gap-6">
              <p className="text-2xl font-semibold">$16.48</p>
              <button className="bg-emerald-500 text-white py-3 px-6 rounded-md font-semibold">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post Section */}
      <section className="py-16">
        <div className="text-center mb-10">
          <h2 className="text-sky-500 font-semibold">Practice Advise</h2>
          <h1 className="text-2xl font-semibold text-blue-950">Featured Posts</h1>
          <p className="text-gray-500 font-semibold mt-4">
            Problems trying to resolve the conflict between the two realms of Classical physics: Newtonian mechanics
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 px-6 md:px-32">
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="bg-white shadow-md">
              <Image
                src={`/pic${index + 1}.jpeg`}
                alt="Featured Post"
                width={500}
                height={300}
                className="w-full h-[300px] object-cover"
              />
              <div className="p-6">
                <ul className="flex gap-4 text-sky-500 mb-4">
                  <li>Google</li>
                  <li>Trending</li>
                  <li>New</li>
                </ul>
                <h1 className="text-2xl font-semibold">Loudest à la Madison #1 (L&apos;integral)</h1>
                <p className="text-gray-500 font-extralight mt-2">
                  We focus on ergonomics and meeting you where you work. It&apos;s only a keystroke away.
                </p>
                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center">
                    <CiAlarmOn className="w-6 h-6 text-sky-500" />
                    <p className="ml-2 text-gray-500">22 April 2021</p>
                  </div>
                  <div className="flex items-center">
                    <BsGraphUp className="w-6 h-6 text-green-800" />
                    <p className="ml-2 text-gray-500">10 Components</p>
                  </div>
                </div>
                <div className="flex justify-end mt-4 items-center">
                  <h1 className="text-gray-600 font-semibold">Learn More</h1>
                  <IoIosArrowForward className="text-sky-500 w-6 h-6 ml-2" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
