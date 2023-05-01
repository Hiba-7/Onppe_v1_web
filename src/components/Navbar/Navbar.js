import React from "react";
import { navLinks } from "./NavDB";

function Navbar() {
  return (
    <html dir="rtl" lang="ar" className="font-mons">
      <body>
        <nav className=" border-r bg-[#ededed] min-h-[100vh] w-[80px] xl:w-[250px] pt-8 px-0  flex items-start justify-between ">
        <img src="./assets/logo.png" alt="Logo" width="24" height="24" />
          <div className="space-y-8 w-full ">
            {navLinks.map((link) => (
              <div
                key={link.id}
                className="w-full flex items-center justify-start space-x-8 px-5 cursor-pointer group hover:border-gray-900"
              >
                <span>{link.icon}</span>
                <h1 className="text-white-600 group-hower:text-black xl:flex hidden">{link.title}</h1>
              </div>
            ))}
          </div>
        </nav>
       
      </body>
    </html>
  );
}

export default Navbar;
