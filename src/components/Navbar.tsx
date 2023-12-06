import Image from "next/image";
import React from "react";
import Logo from "../../public/images/GOPADDI_LOGO_MARINE_BLUE_ .svg";
import Emma from "../../public/images/Emma.png";
import Link from "next/link";
import type { MenuProps } from "antd";

import { IoChevronDownOutline } from "react-icons/io5";
// import "antd/dist/antd.css";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
const Dropdown = dynamic(async () => await import("antd/es/dropdown"), {
  ssr: false,
});

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.voyatekgroup.com"
      >
        1st menu item
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="/">
        2nd menu item
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="/">
        3rd menu item
      </a>
    ),
  },
];

export default function Navbar() {
  const router = useRouter();
  const path = router.pathname;

  return (
    <nav className="flex justify-between items-center px-4 sm:px-6 md:px-[55px] py-4 md:py-6">
      <Link href="/" passHref>
        <Image src={Logo} alt="GoPaddi" width={105} height={53} priority />
      </Link>

      <div className="hidden md:flex items-center gap-8">
        <Link href="/" passHref>
          <div
            className={`relative ${
              path === "/"
                ? "font-semibold text-app-blue nav-after"
                : "text-black "
            }`}
          >
            Home
          </div>
        </Link>
        <Dropdown menu={{ items }}>
          <a onClick={(e) => e.preventDefault()}>
            <span className="inline-flex items-center gap-2 cursor-default">
              Solutions
              <IoChevronDownOutline color="#8F8F8F" />
            </span>
          </a>
        </Dropdown>
        <Dropdown menu={{ items }}>
          <a onClick={(e) => e.preventDefault()}>
            <span className="inline-flex items-center gap-2 cursor-default">
              Products
              <IoChevronDownOutline color="#8F8F8F" />
            </span>
          </a>
        </Dropdown>
        <Dropdown menu={{ items }}>
          <a onClick={(e) => e.preventDefault()}>
            <span className="inline-flex items-center gap-2 cursor-default">
              Company
              <IoChevronDownOutline color="#8F8F8F" />
            </span>
          </a>
        </Dropdown>
      </div>

      {/* Profiel */}
      <Dropdown menu={{ items }}>
        <a
          onClick={(e) => e.preventDefault()}
          className="flex items-center border-[0.3px] rounded-[40px] py-3 px-5"
        >
          <Image
            className="rounded-full"
            src={Emma}
            alt="User"
            width={27}
            height={27}
            priority
          />
          <span className="text-sm ms-3 me-7">Emmanuel</span>
          <IoChevronDownOutline color="#8F8F8F" />
        </a>
      </Dropdown>
    </nav>
  );
}
