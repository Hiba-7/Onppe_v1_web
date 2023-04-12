import React from "react";
import { navLinks } from "./NavDB";

function Navbar() {
  return (
    <nav className="col-span-2 border-r bg-[#59C55E] min-h-[100vh] w-[80px] xl:w-[250px] pt-8 px-1 flex flex-col items-start justify-between">
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
  );
}

export default Navbar;
