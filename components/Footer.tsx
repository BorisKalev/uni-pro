import Image from "next/image";
import logo from "@/app/images/logo-unipro.png";
import SocialX from "@/app/images/social-x.svg";
import SocialInsta from "@/app/images/social-insta.svg";
import SocialLinkedIn from "@/app/images/social-linkedin.svg";
import SocialPin from "@/app/images/social-pin.svg";
import SocialYoutube from "@/app/images/social-youtube.svg";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center mt-10">
      <div className="container">
        <div className="inline-flex relative">
          <Image src={logo} alt="Saas logo" height={40} className="relative" />
        </div>
        <nav className="flex md:flex-row md:justify-center flex-col gap-6 mt-6">
          <a href="#">À propos</a>
          <a href="#">Nos services</a>
          <a href="#">Clients</a>
          <a href="#">Prix</a>
          <a href="#">Aide</a>
          <a href="#">Carrières</a>
        </nav>

        <div className="flex justify-center gap-6 mt-6">
          <Image src={SocialX} alt="Social X Icon" width={24} height={24} />
          <Image src={SocialInsta} alt="Social X Icon" width={24} height={24} />
          <Image
            src={SocialLinkedIn}
            alt="Social X Icon"
            width={24}
            height={24}
          />
          <Image src={SocialPin} alt="Social X Icon" width={24} height={24} />
          <Image
            src={SocialYoutube}
            alt="Social X Icon"
            width={24}
            height={24}
          />
        </div>
        <p className="mt-6">
          &copy; 2024 Your Company, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
