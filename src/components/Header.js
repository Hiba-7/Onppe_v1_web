import React from "react";
import {
  BellIcon,
  ChevronDownIcon,
} from "@heroicons/react/outline";
import { useState } from "react";

function Header() {
  const [username] = useState("بن طالب فنال");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div  dir="rtl" lang="ar" className="font-mons flex flex-col mr-80  ">

    <div className="w-full py-3 items-center justify-between flex px-12">
      {/*welcome*/}
      <div className="flex items-center">
        
      </div>
      {/*profile*/}
      <div className="flex items-center justify-between">
        <BellIcon className="header-icon h-6 w-6 mr-10" />
        <p className="ml-2 font-regular mr-3">{username}</p>
        <div className="flex  flex-col">
        <ChevronDownIcon
          className="header-icon h-5 w-5 cursor-pointer self-start"
          onClick={handleMenuToggle}
        />
      
        </div>
      </div>
    </div>
    <div className="flex flex-col">
    {isMenuOpen && (
          <div className="dropdown dropdown-end dropdown-bottom">

          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-40">
                <li>
              

                </li>
                <li>
                 
                </li>
                <li>
                 
                </li>
              </ul>
              </div>

        )}
    </div>
    </div>

  );
}

export default Header;
