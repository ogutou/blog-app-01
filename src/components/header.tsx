import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <div className="bg-[#04D9D9]">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <Link
            href="/"
            aria-label="Company"
            title="Company"
            className="inline-flex items-center"
          >
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
              OgutO's diary
            </span>
          </Link>
          <ul className="flex items-center space-x-2 lg:flex ">
            <li>
              <Link href="/blogs/new">
                <Button
                  variant="outline"
                  className="bg-[#C2E5F2] cursor-pointer"
                >
                  post
                </Button>
              </Link>
            </li>
            <li>
              <Link href="/">
                <Button
                  variant="outline"
                  className="bg-[#C2E5F2] cursor-pointer"
                >
                  sign in
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
