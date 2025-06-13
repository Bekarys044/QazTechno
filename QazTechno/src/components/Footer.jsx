import {
  TvMinimal,
  Briefcase,
  CreditCard,
  Leaf,
  Truck,
  Warehouse,
  CalendarDays,
} from "lucide-react";

import {
  aboutLinks,
  earnWithOzonLinks,
  helpLinks,
} from "../constant/GenerList";


import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import QrCode from "../assets/images/qr-code.png";

import Apple from '../assets/images/apple.png'
import PlayMarket from '../assets/images/playMarket.png'
import Huawai from '../assets/images/Huawai.png'

function Footer() {
  return (
    <footer className="w-full footer ">
      <div className="container-custom mt-6 rounded-md p-4 bg-[#e0e8f0] grid grid-cols-[1fr_3fr]">
        <div>
          <h2 className="text-2xl font-pop text-red-500 font-semibold">
            QazTechno
          </h2>
        </div>
        <div className="flex gap-[60px] items-center">
          <div className="flex gap-1 items-center">
            <TvMinimal className="text-[#99a3ae]" />
            <p className="font-pop text-[1rem] font-medium text-[#101820]">
              IT
            </p>
          </div>
          <div className="flex gap-1 items-center">
            <Briefcase className="text-[#99a3ae]" />
            <p className="font-pop text-[1rem] font-medium text-[#101820]">
              Office
            </p>
          </div>
          <div className="flex gap-1 items-center">
            <CreditCard className="text-[#99a3ae]" />
            <p className="font-pop text-[1rem] font-medium text-[#101820]">
              Fintech
            </p>
          </div>
          <div className="flex gap-1 items-center">
            <Leaf className="text-[#99a3ae]" />
            <p className="font-pop text-[1rem] font-medium text-[#101820]">
              Fresh
            </p>
          </div>
          <div className="flex gap-1 items-center">
            <Truck className="text-[#99a3ae]" />
            <p className="font-pop text-[1rem] font-medium text-[#101820]">
              Logistics
            </p>
          </div>
          <div className="flex gap-1 items-center">
            <Warehouse className="text-[#99a3ae]" />
            <p className="font-pop text-[1rem] font-medium text-[#101820]">
              Warehouse work
            </p>
          </div>
          <div className="flex gap-1 items-center">
            <CalendarDays className="text-[#99a3ae]" />
            <p className="font-pop text-[1rem] font-medium text-[#101820]">
              Events
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom   mt-10 flex justify-between ">
        <div className="py-4 px-10 border rounded-2xl mt-10 text-center">
          <img
            src={QrCode}
            alt="QR code for QazTechno app"
            className="w-[200px] mx-auto mb-4"
          />
          <p className="text-[1rem] leading-relaxed">
            Point your camera and download <br /> the free QazTechno app.
          </p>

          <div className="flex   gap-6  pl-8 p-4">
              <img src={Apple}       className="w-10" />
              <img src={PlayMarket}  className="w-10" />
              <img src={Huawai}      className="w-10" />
          </div>
        </div>

        <div className="w-[80%] grid grid-cols-3 p-10">
          <div className="pl-20">
            <h3 className="text-[1rem] font-semibold">Ozon Marketplace</h3>
            {aboutLinks.map((item, index) => (
              <li key={index} className="mb-2 list-none">
                <a
                  href={item.href}
                  className="pl-4 text-[14px] font-pop font-normal text-[#A0B6CC] hover:underline hover:underline-offset-6 hover:text-primary transition-[var(--transition-fast)]"
                >
                  {item.text}
                </a>
              </li>
            ))}
          </div>
          <div className="pl-20">
            <h3 className="text-[1rem] font-semibold">Earn with Ozon</h3>
            {earnWithOzonLinks.map((item, index) => (
              <li key={index} className="mb-2 list-none">
                <a
                  href={item.href}
                  className="pl-4 text-[#A0B6CC] hover:underline hover:underline-offset-6 hover:text-primary transition-[var(--transition-fast)] "
                >
                  {item.text}
                </a>
              </li>
            ))}
          </div>
          <div className="pl-20">
            <h3 className="text-[1rem] font-semibold">Help</h3>
            {helpLinks.map((item, index) => (
              <li key={index} className="mb-2 list-none">
                <a
                  href={item.href}
                  className="pl-4 text-[#A0B6CC] hover:underline hover:underline-offset-6 hover:text-primary transition-[var(--transition-fast)]"
                >
                  {item.text}
                </a>
              </li>
            ))}
          </div>
        </div>
      </div>
      <div className="container-custom  flex justify-end ">
        <div className=" p-2">
          <div className="w-[400px] pl-[60px]">
            <p className="text-[0.875rem]  pl-16 text-[#A0B6CC]">
              {" "}
              2024 - 2025 © "QazTechno Marketplace Kazakhstan". All rights
              reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="flex mt-6 gap-2">
              <div className="group p-2 rounded-xl border border-gray-300 transition-all duration-300 hover:border-transparent hover:bg-white hover:shadow-md">
                <TelegramIcon className="text-white transition-colors duration-300 group-hover:text-[#1877F2]" />
              </div>
              <div className="group p-2 rounded-xl border border-gray-300 transition-all duration-300 hover:border-transparent hover:bg-white hover:shadow-md">
                <WhatsAppIcon className="text-white transition-colors duration-300 group-hover:text-[#1877F2]" />
              </div>
              <div className="group p-2 rounded-xl border border-gray-300 transition-all duration-300 hover:border-transparent hover:bg-white hover:shadow-md">
                <InstagramIcon className="text-white transition-colors duration-300 group-hover:text-[#1877F2]" />
              </div>
            </div>
            <button className="btn-primary mt-4">Have any questions?</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
