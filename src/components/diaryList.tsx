import React from "react";
import Image from "next/image";
import Link from "next/link";

const DiaryList = () => {
  return (
    <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 flex">
      <div className="w-full lg:w-[928px] columns-1 sm:columns-2 lg:columns-[18.333rem] gap-6">
        <div className="h-100 mb-6 break-inside-avoid overflow-hidden transition-shadow duration-300 bg-[#88DFF2] rounded-md shadow-md">
          <Image
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
            alt="Green double couch with wooden legs"
            width={800}
            height={500}
            className="w-full h-48 object-cover"
          />
          <div className="p-5 border-t">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
              <Link
                href="/"
                className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                aria-label="Category"
                title="traveling"
              >
                traveling
              </Link>
              <span className="text-gray-600">— 28 Dec 2020</span>
            </p>
            <Link
              href="/"
              aria-label="Category"
              title="Visit the East"
              className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              Visit the East
            </Link>
            <p className="mb-2 text-gray-700">
              Sed ut perspiciatis unde omnis iste natus error sit sed quia
              consequuntur magni voluptatem doloremque.
            </p>
            <Link
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </Link>
          </div>
        </div>
        <div className="h-100 mb-6 break-inside-avoid overflow-hidden transition-shadow duration-300 bg-[#88DFF2] rounded-md shadow-md">
          <Image
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
            alt="Green double couch with wooden legs"
            width={800}
            height={500}
            className="w-full h-48 object-cover"
          />
          <div className="p-5 border-t">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
              <Link
                href="/"
                className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                aria-label="Category"
                title="traveling"
              >
                traveling
              </Link>
              <span className="text-gray-600">— 28 Dec 2020</span>
            </p>
            <Link
              href="/"
              aria-label="Category"
              title="Simple is better"
              className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              Simple is better
            </Link>
            <p className="mb-2 text-gray-700">
              Sed ut perspiciatis unde omnis iste natus error sit sed quia
              consequuntur magni voluptatem doloremque.
            </p>
            <Link
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </Link>
          </div>
        </div>
        <div className="h-100 mb-6 break-inside-avoid overflow-hidden transition-shadow duration-300 bg-[#88DFF2] rounded-md shadow-md">
          <Image
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
            alt="Green double couch with wooden legs"
            width={800}
            height={500}
            className="w-full h-48 object-cover"
          />
          <div className="p-5 border-t">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
              <Link
                href="/"
                className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                aria-label="Category"
                title="traveling"
              >
                traveling
              </Link>
              <span className="text-gray-600">— 28 Dec 2020</span>
            </p>
            <Link
              href="/"
              aria-label="Category"
              title="Film It!"
              className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              Film It!
            </Link>
            <p className="mb-2 text-gray-700">
              Sed ut perspiciatis unde omnis iste natus error sit sed quia
              consequuntur magni voluptatem doloremque.
            </p>
            <Link
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
      <div className="w-64 h-800 ml-8 px-8 bg-[#88DFF2] shrink-0">リスト</div>
    </div>
  );
};

export default DiaryList;
