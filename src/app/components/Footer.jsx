import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/logo1.png"

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-4 flex justify-between">
      <Link href={"/"}>
            <Image src={Logo} alt="Logo Icon" />
          </Link>
        <p className="text-slate-600">&copy; 2025 Pranaya Sainju - All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
