import React from "react";
import LogoWhite from "../../public/images/Logo-white.svg";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#4A84D6] px-4 sm:px-6 md:px-[55px] py-14">
      <div className="grid md:grid-cols-12 gap-10">
        <div className="md:col-span-3">
          <Link href="/" passHref>
            <Image
              src={LogoWhite}
              alt="gopaddi"
              width={140}
              height={72}
              priority
            />
          </Link>
          <p className="text-white text-xs md:text-sm font-bold my-10">
            Gopaddi is a travel network that connects and strengthens people’s
            relationships with a world of beautiful, happy people who are able
            to reach out for their dreams and be who they want to be.
          </p>
          <p className="text-white text-xs md:text-sm font-bold">
            This network is a community of individuals, families, and
            organisations who have chosen to take control of their travel
            desires and freely explore a world of limitless possibilities.
          </p>
        </div>
        <div className="md:col-span-6 md:pt-10">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {[
              {
                title: "Quick Links",
                links: [
                  "Home",
                  "About Us",
                  "Contact Us",
                  "Terms and Conditions",
                  "Become An Affiliate",
                ],
              },
              {
                title: "Business Links",
                links: [
                  "GoPal",
                  "GoBusiness",
                  "GoFamily",
                  "GoAgent",
                  "GoSchool",
                ],
              },
              {
                title: "Bussiness Links",
                links: ["Facebook", "Twitter", "Instagram", "LinkedIn"],
              },
            ].map((link, index) => (
              <div key={index}>
                <p className="text-white font-bold mb-4 md:mb-10">
                  {link.title}
                </p>
                <div className="grid gap-4">
                  {link.links.map((sublink, i) => (
                    <Link key={i} href="" passHref>
                      <div className="text-white font-extralight">
                        {sublink}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="md:col-span-3 md:pt-10">
          <p className="text-white font-bold mb-4 md:mb-10">
            Subscribe to Our Newsletter
          </p>
          <input
            className="w-full bg-[#82B4FF] text-white placeholder:text-white font-bold border-0 outline-none px-3 md:px-5 py-2"
            type="email"
            placeholder="Email"
          />
          <div className="flex gap-3 mt-6">
            <div>
              <input type="checkbox" name="" id="" />
            </div>
            <div className="text-white text-sm">
              By subscribing you are accepting to receive marketing information
              from Aero and agree to the terms of Aero’s Privacy Policy.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
