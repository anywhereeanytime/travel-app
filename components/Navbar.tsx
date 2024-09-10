"use client";

import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
import { useState } from "react";
import CloseIcon from "/public/close.svg";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleClick = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="./hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="hidden lg:flexCenter">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      <button onClick={handleClick}>
        <Image
          src="menu.svg"
          alt="menu"
          width={32}
          height={32}
          className={`inline-block cursor-pointer lg:hidden ${
            isNavOpen ? "hidden" : ""
          }`}
        />
      </button>

      {/* Mobile */}
      {isNavOpen && (
        <div className="flex flex-col justify-start  bg-blue-400 z-40 pt-4 pr-4 fixed right-0 top-0 h-full w-[300px] transition-transform duration-100">
          <button className="self-end" onClick={handleClick}>
            <CloseIcon
              width={38}
              height={38}
              className="text-black cursor-pointer lg:hidden"
            />
          </button>
          <ul className="flex flex-col p-6">
            {NAV_LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className="regular-16 text-gray-900 py-4 cursor-pointer transition-all hover:font-bold"
              >
                {link.label}
              </Link>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
