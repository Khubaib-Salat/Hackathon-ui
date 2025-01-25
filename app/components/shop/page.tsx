import { IoIosArrowDown } from "react-icons/io";
import { TfiMenuAlt } from "react-icons/tfi";
import { MdWindow } from "react-icons/md";
import Image from 'next/image';

const products = [
  { image: "/gp8.jpeg", title: "Graphic Design", department: "English Department", price: 16.48, salePrice: 6.48 },
  { image: "/gp1.jpeg", title: "Graphic Design", department: "English Department", price: 16.48, salePrice: 6.48 },
  { image: "/gp2.jpeg", title: "Graphic Design", department: "English Department", price: 16.48, salePrice: 6.48 },
  { image: "/gp3.jpeg", title: "Graphic Design", department: "English Department", price: 16.48, salePrice: 6.48 },
  // Add more product objects as needed...
];

export default function Shop() {
  return (
    <main>
      <section className="w-full bg-gray-50 py-8">
        <h1 className="text-2xl font-bold text-blue-950 text-center">Shop</h1>

        <div className="grid md:grid-cols-5 gap-6 mt-12 px-6">
          {products.map((product, index) => (
            <div key={index} className="relative">
              <Image
                src={product.image}
                alt={product.title}
                width={205}
                height={233}
                className="mx-auto"
              />
              <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-white bg-black bg-opacity-40">
                <div className="text-center">
                  <h2 className="text-xl font-extrabold">{product.title}</h2>
                  <p className="font-semibold">5 Items</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="flex items-center justify-between mt-10 px-6">
        <p className="text-gray-500 font-semibold">Showing all 12 results</p>

        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 border border-gray-400 flex items-center justify-center">
            <TfiMenuAlt className="w-6 h-6" />
          </div>
          <div className="w-12 h-12 border border-gray-400 flex items-center justify-center">
            <MdWindow className="w-6 h-6" />
          </div>
          <button className="flex items-center justify-center px-4 py-2 border border-gray-400 rounded-sm">
            Popularity <IoIosArrowDown />
          </button>
          <button className="bg-sky-500 text-white px-4 py-2 rounded-sm">
            Filter
          </button>
        </div>
      </section>

      <div className="w-full justify-center">
        <section className="mt-12 px-6">
          <div className="grid md:grid-cols-5 gap-4">
            {products.map((product, index) => (
              <div key={index} className="text-center">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={239}
                  height={427}
                  className="mx-auto"
                />
                <h3 className="text-blue-950 font-semibold mt-4">{product.title}</h3>
                <p className="text-gray-500">{product.department}</p>
                <p className="mt-4 text-gray-400 font-semibold">
                  ${product.price} <span className="text-green-700">${product.salePrice}</span>
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 px-6">
          <div className="grid md:grid-cols-5 gap-4">
            {products.map((product, index) => (
              <div key={index} className="text-center">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={239}
                  height={427}
                  className="mx-auto"
                />
                <h3 className="text-blue-950 font-semibold mt-4">{product.title}</h3>
                <p className="text-gray-500">{product.department}</p>
                <p className="mt-4 text-gray-400 font-semibold">
                  ${product.price} <span className="text-green-700">${product.salePrice}</span>
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 px-6">
          <div className="grid md:grid-cols-5 gap-4">
            {products.map((product, index) => (
              <div key={index} className="text-center">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={239}
                  height={427}
                  className="mx-auto"
                />
                <h3 className="text-blue-950 font-semibold mt-4">{product.title}</h3>
                <p className="text-gray-500">{product.department}</p>
                <p className="mt-4 text-gray-400 font-semibold">
                  ${product.price} <span className="text-green-700">${product.salePrice}</span>
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="mt-12 flex justify-center">
        <div className="w-[313px] h-[74px] border border-gray-400 rounded-lg shadow-md flex">
          <p className="text-gray-400 py-6 w-20 text-center bg-gray-100">First</p>
          <p className="text-sky-500 py-6 w-12 text-center bg-white">1</p>
          <p className="text-white py-6 w-14 text-center bg-sky-500">2</p>
          <p className="text-sky-500 py-6 w-12 text-center bg-white">3</p>
          <p className="text-sky-500 py-6 w-20 text-center bg-white">Next</p>
        </div>
      </section>
    </main>
  );
}
