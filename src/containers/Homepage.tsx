import Navbar from "@/components/Navbar";
import React from "react";
import HeroImg from "../../public/images/HeroImg.png";
import ExperienceParentimg from "../../public/images/Experience-parental.png";
import Relationshipmanager from "../../public/images/Relationship-manager.png";
import UnlockMagic from "../../public/images/Unlock-magic.png";
import GraduateImg from "../../public/images/graduate.svg";
import PlaneImg from "../../public/images/plane.svg";
import HotelImg from "../../public/images/hotel.svg";
import GoPaddiIcon from "../../public/images/gopaddi-icon.svg";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function Homepage() {
  return (
    <main>
      <Navbar />
      {/* start hero */}
      <header className=" px-4 sm:px-6 md:px-[55px] py-5">
        <div className="container mx-auto flex items-center flex-col md:flex-row gap-y-5">
          <div className="md:w-5/12" data-aos="fade-right">
            <h1 className="relative w-fit text-app-blue text-5xl md:text-[100px] font-semibold">
              GoFamily
              <div className="absolute -top-4 -right-14">
                <svg
                  width="64"
                  height="83"
                  viewBox="0 0 64 83"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3 39L23 2" stroke="#0D6EFD" stroke-width="5" />
                  <path
                    d="M16.105 50.9711L51.4195 27.7399"
                    stroke="#0D6EFD"
                    stroke-width="5"
                  />
                  <path
                    d="M21.6786 67.1182L63.464 60.7324"
                    stroke="#0D6EFD"
                    stroke-width="5"
                  />
                </svg>
              </div>
            </h1>
            <h2 className="text-[40px] font-semibold mt-4">
              Go Global with GoFamily
            </h2>
            <p className="max-w-[732px] text-[#5E5E5E] mt-6 mb-8 font-medium">
              Lorem ipsum dolor sit amet. Qui veniam enim ut voluptatem facilis
              eum iusto eligendi eum magnam voluptas et perspiciatis sequi qui
              molestiae nostrum
            </p>
            <button className="w-[126px] h-[46px] bg-app-blue text-white rounded-[20px] font-medium">
              Sign Up
            </button>
          </div>
          <div className="md:w-7/12" data-aos="fade-left">
            <Image
              src={HeroImg}
              alt="hero"
              width={1005}
              height={924}
              priority
            />
          </div>
        </div>
      </header>
      {/* end hero */}

      {/* start unlock magic */}
      <section className=" px-4 sm:px-6 md:px-[55px]" data-aos="fade-bottom">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-14">
          <div>
            <Image
              src={UnlockMagic}
              alt="EXperience parental"
              width={1344}
              height={1179}
              priority
            />
          </div>
          <div>
            <div className="bg-white drop-shadow-[0px_2px_12px_#E8F1FF] px-4 md:px-14 py-8 md:py-24 rounded-2xl">
              <h1 className="text-[#383737] taxt-2xl md:text-[40px] leading-[normal] font-semibold mb-6">
                Unlocking The Magic of Family Travel
              </h1>
              <p className="text-[#5E5E5E] font-medium">
                Lorem ipsum dolor sit amet. Qui veniam enim ut voluptatem
                facilis eum iusto eligendi eum magnam voluptas et perspiciatis
                sequi qui molestiae nostrum
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* end unlock magic */}

      {/* start super discount */}
      <section
        className="relative z-10 bg-[url(/images/Supper-discount-bg.png)] bg-no-repeat bg-[length:100%_100%] px-4 sm:px-6 md:px-[55px] md:-mt-52"
        data-aos="fade-bottom"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto items-center gap-10 md:gap-14 pt-20 md:pt-36 pb-20">
          <div>
            <h1 className="text-app-blue taxt-2xl md:text-[40px] leading-[normal] font-semibold mb-6">
              Enjoy Special Family Deals
            </h1>
            <p className="text-[#5E5E5E] font-medium">
              Lorem ipsum dolor sit amet. Qui veniam enim ut voluptatem facilis
              eum iusto eligendi eum magnam voluptas et perspiciatis sequi qui
              molestiae nostrum
            </p>
          </div>
          <div>
            <div className="bg-white shadow-[-4px_4px_12px_3px_rgba(183,183,183,0.25)] px-4 md:px-10 py-5 rounded-2xl">
              <div className="flex items-center gap-3">
                <p className="text-black">Super-Discounts</p>
                <span className="bg-[#D5E5FF] text-[#0A6DE4] text-sm font-bold rounded-[30px] px-6 py-2">
                  Subcriber
                </span>
                <div className="ms-auto">
                  <Image
                    src={GoPaddiIcon}
                    alt="GodPaddi"
                    width={48}
                    height={48}
                    priority
                  />
                </div>
              </div>

              <div className="grid gap-4 shadow-[-4px_4px_12px_3px_rgba(183,183,183,0.25)] rounded-xl py-3 md:py-5 px-4 md:px-7 mt-6">
                {[
                  {
                    images: PlaneImg,
                    title: "Flight",
                    content: "5% Off your Flight ticket!",
                  },
                  {
                    images: GraduateImg,
                    title: "Study",
                    content: "15% Off your Agency Fees!",
                  },
                  {
                    images: HotelImg,
                    title: "Hotels",
                    content: "5% Off your Hotel Booking!",
                  },
                ].map((discount, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className=" grid place-items-center bg-[#E1EDFF] w-[60px] h-[60px] rounded-full">
                      <Image
                        src={discount.images}
                        alt={discount.title}
                        width={45}
                        height={45}
                      />
                    </div>
                    <div>
                      <p className="text-[#7D7D7D] text-sm mb-1">
                        {discount.title}
                      </p>
                      <p className="text-black font-semibold">
                        {discount.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end super discount */}

      {/* start experience parental */}
      <section
        className=" px-4 sm:px-6 md:px-[55px] py-12"
        data-aos="fade-bottom"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-14">
          <div>
            <Image
              src={ExperienceParentimg}
              alt="EXperience parental"
              width={971}
              height={531}
              priority
            />
          </div>
          <div>
            <div className="bg-white drop-shadow-[0px_2px_12px_#E8F1FF] px-4 md:px-14 py-8 md:py-24 rounded-2xl">
              <h1 className="text-[#383737] taxt-2xl md:text-[40px] leading-[normal] font-semibold mb-6">
                Experience Parental Control through Request and Approval
              </h1>
              <p className="text-[#5E5E5E] font-medium">
                Lorem ipsum dolor sit amet. Qui veniam enim ut voluptatem
                facilis eum iusto eligendi eum magnam voluptas et perspiciatis
                sequi qui molestiae nostrum
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* end experience parental */}

      {/* start relationship manager */}
      <section className=" px-4 sm:px-6 md:px-[55px] py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-14">
          <div>
            <div className="bg-white drop-shadow-[0px_2px_12px_#E8F1FF] px-4 md:px-14 py-8 md:py-24 rounded-2xl">
              <h1 className="text-[#383737] taxt-2xl md:text-[40px] leading-[normal] font-semibold mb-6">
                Get a Dedicated Relationship Management Team
              </h1>
              <p className="text-[#5E5E5E] font-medium">
                Lorem ipsum dolor sit amet. Qui veniam enim ut voluptatem
                facilis eum iusto eligendi eum magnam voluptas et perspiciatis
                sequi qui molestiae nostrum
              </p>
            </div>
          </div>
          <div>
            <Image
              src={Relationshipmanager}
              alt="EXperience parental"
              width={646}
              height={739}
              priority
            />
          </div>
        </div>
      </section>
      {/* end relationship manager */}

      {/* start register section */}
      <section
        className="min-h-[631px] grid place-items-center bg-[url(/images/RegisterBg.png)] bg-no-repeat bg-[length:100%_100%] px-4 sm:px-6 md:px-[55px] py-12"
        data-aos="fade-bottom"
      >
        <div className="max-w-[683px] mx-auto flex flex-col items-center text-center">
          <h1 className="text-app-blue text-[40px] font-medium mb-5">
            Register Now and Enjoy these Benefits!
          </h1>
          <button className="text-app-blue  rounded-xl opacity-70 border  border-app-blue py-2 px-7">
            Get Started
          </button>
        </div>
      </section>
      {/* end register section */}

      <Footer />
    </main>
  );
}
