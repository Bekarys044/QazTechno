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
import Apple from "../assets/images/apple.png";
import PlayMarket from "../assets/images/playMarket.png";
import Huawai from "../assets/images/Huawai.png";

function Footer() {
  return (
    <footer className="w-full">
      {/* Category Icons */}
      <div className="hidden md:grid container-custom mt-6 rounded-md p-4 bg-[#e0e8f0] grid-cols-[1fr_3fr]">
        <h2 className="text-2xl font-pop text-red-500 font-semibold">QazTechno</h2>
        <div className="flex flex-wrap gap-6 items-center">
          {[
            { icon: TvMinimal, text: "IT" },
            { icon: Briefcase, text: "Office" },
            { icon: CreditCard, text: "Fintech" },
            { icon: Leaf, text: "Fresh" },
            { icon: Truck, text: "Logistics" },
            { icon: Warehouse, text: "Warehouse work" },
            { icon: CalendarDays, text: "Events" },
          // eslint-disable-next-line no-unused-vars
          ].map(({ icon: Icon, text }, index) => (
            <div key={index} className="flex gap-2 items-center">
              <Icon className="text-[#99a3ae]" />
              <p className="font-pop text-[1rem] font-medium text-[#101820]">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* QR Section + Links */}
      <div className="container-custom mt-10 flex flex-col md:flex-row justify-between gap-10">
        {/* QR Section */}
        <div className="py-6 px-10 border rounded-2xl text-center max-w-[300px] mx-auto md:mx-0">
          <img src={QrCode} alt="QR code" className="w-[200px] mx-auto mb-4" />
          <p className="text-[1rem] text-white leading-relaxed mb-4">
            Point your camera and download <br /> the free QazTechno app.
          </p>
          <div className="flex justify-center gap-6">
            {[Apple, PlayMarket, Huawai].map((img, i) => (
              <img key={i} src={img} className="w-10" alt="store" />
            ))}
          </div>
        </div>

        {/* Useful Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
          {[{ title: "Ozon Marketplace", items: aboutLinks },
            { title: "Earn with Ozon", items: earnWithOzonLinks },
            { title: "Help", items: helpLinks }].map((section, i) => (
            <div key={i} className="pl-6">
              <h3 className="text-[1rem] text-white font-semibold mb-2">{section.title}</h3>
              <ul>
                {section.items.map((item, idx) => (
                  <li key={idx} className="mb-2 list-none">
                    <a
                      href={item.href}
                      className="pl-4 text-[13px] font-pop text-[#A0B6CC] hover:text-primary hover:underline hover:underline-offset-4 transition"
                    >
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="container-custom mt-10 flex flex-col sm:flex-row justify-between items-center gap-4 p-4 border-t border-gray-300">
        <p className="text-[0.875rem] text-[#A0B6CC] text-center sm:text-left">
          2024 - 2025 © "QazTechno Marketplace Kazakhstan". All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          {/* Social Icons */}
          {[TelegramIcon, WhatsAppIcon, InstagramIcon].map((Icon, i) => (
            <div
              key={i}
              className="group p-2 rounded-xl border border-gray-300 hover:border-transparent hover:bg-white hover:shadow-md transition"
            >
              <Icon className="text-white group-hover:text-[#1877F2] transition-colors duration-300" />
            </div>
          ))}
          {/* Button */}
          <button className="btn-primary ml-4">Have any questions?</button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
