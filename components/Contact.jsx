import React from "react";
import { Oswald } from "next/font/google";
import { RiMessage2Line } from "react-icons/ri";
import { IoIosPhonePortrait } from "react-icons/io";
import { MdOutlinePersonPinCircle, MdAutoAwesome } from "react-icons/md";

const oswald = Oswald({
  weight: "400",
  subsets: ["latin"],
});

const oswald200 = Oswald({
  weight: "200",
  subsets: ["latin"],
});

const Contact = () => {
  return (
    <>
      <div id="contact" className="pt-12">
        <div className="container mx-auto px-2 md:px-5">
          <div
            className={` flex justify-center items-center align-middle flex-col ${oswald.className}`}
          >
            <hr className="md:w-[500px] w-full px-2 md:px-5" />
            <p className=" font-bold text-[#530FFE] bg-blue-50 px-3 py-2 -mt-[23px] md:text-2xl sm:text-xl text-lg">
              We're All Ears
            </p>
            <div className="">
              <p className="font-bold md:text-5xl sm:text-4xl text-3xl text-[#34383A]">
                Get In Touch
              </p>
            </div>
          </div>

          <div className=" mt-8 md:mt-10 flex justify-center items-center align-middle flex-col">
            <p className="md:w-[700px] lg:w-[900px] sm:w-[550px] w-full sm:text-base text-xs px-2 sm:px-3 md:px-10 text-center md:leading-5 text-[#6A7280] ">
              Feel free to reach out! Our team is here to help. You can contact
              us via phone, email, or through our website's live chat feature.
              We look forward to hearing from you!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-8 md:mt-10">
            <div className="col-start-1 col-span-1 flex justify-center items-center align-middle flex-col gap-2">
              <MdOutlinePersonPinCircle className=" text-[#530FFE] text-4xl" />
              <div
                className={`${oswald.className} flex justify-center items-center align-middle flex-col gap-2`}
              >
                <p className={` text-xl md:text-2xl`}>Come And Meet Us</p>
                <p className=" w-[300px] md:w-full sm:text-base text-xs text-center uppercase text-[#6A7280]">
                  NO.69, Room(2E), 3<sup className=" lowercase">rd</sup>{" "}
                  Floor,Kan Myint Mo Street, Kan Myint Mo Condo, HLAING
                  TOWNSHIP, YANGON, MYANMAR.
                </p>
              </div>
            </div>

            <div className=" md:col-start-2 col-span-1 flex justify-center items-center align-middle flex-col gap-2">
              <IoIosPhonePortrait className=" text-[#530FFE] text-4xl" />
              <div
                className={`${oswald.className} flex justify-center items-center align-middle flex-col gap-2`}
              >
                <p className={` text-xl md:text-2xl`}>Give Us A Call</p>
                <p className="sm:text-base text-xs text-center text-[#6A7280]">
                  <a href="tel:+959883353253"> +959 88 33 532 53 </a>
                  <br />
                  <a href="tel:+959791314792"> +959 79 131 47 92 </a>
                </p>
              </div>
            </div>

            <div className=" md:col-start-1 lg:col-start-3 col-span-1 flex justify-center items-center align-middle flex-col gap-2">
              <RiMessage2Line className=" text-[#530FFE] text-4xl" />
              <div
                className={`${oswald.className} flex justify-center items-center align-middle flex-col gap-2`}
              >
                <p className={` text-xl md:text-2xl`}>Send Us A Message</p>
                <p className=" sm:text-base text-xs text-center text-[#6A7280]">
                  <a href="mailto:info@yolodigitalmyanmar.com">
                    {" "}
                    info@yolodigitalmyanmar.com{" "}
                  </a>
                  <br />
                  <a href="mailto:info.yolomyanmar@gmail.com">
                    {" "}
                    info.yolomyanmar@gmail.com{" "}
                  </a>
                </p>
              </div>
            </div>

            <div className=" md:col-start-2 lg:col-start-4 col-span-1 flex justify-center items-center align-middle flex-col gap-2">
              <MdAutoAwesome className=" text-[#530FFE] text-4xl" />
              <div
                className={`${oswald.className} flex justify-center items-center align-middle flex-col gap-2`}
              >
                <p className={` text-xl md:text-2xl`}>Something Else</p>
                <p className="sm:text-base text-xs text-center uppercase text-[#6A7280]">
                  Felling Really Good
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:h-[500px] w-full h-[300px] mt-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3200.111309660228!2d96.12724877391254!3d16.835922289821738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1958a8a7ead15%3A0x452eab30b4c3a218!2sKan%20Myint%20Mo%20Condo!5e0!3m2!1sen!2smm!4v1707213373826!5m2!1sen!2smm"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className=" w-full h-full border-0"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Contact;
