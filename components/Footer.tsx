import { socialMedia } from "@/data";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const copyrightText = `Copyright © ${currentYear} Md Tofaal Ahmed`;
  return (
    <footer className="w-full  pb-10" id="contact">
     
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          {copyrightText}
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <Link key={info.id} href={info.link}>
              <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                <img src={info.img} alt="icons" width={20} height={20} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
