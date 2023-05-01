import React from "react";
import logo from "../assets/logo.png";
import profilepicture from "../assets/profilepicture.jpg";
import {
  BellIcon,
  GlobeAltIcon,
  ChevronDownIcon,
} from "@heroicons/react/outline";
import { useState } from "react";

function Header() {
  const [username, setUsername] = useState("بن طالب فنال");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-col">

    <div className="w-full py-3 items-center justify-between flex px-12">
         
      {/*profile*/}
      <div className="flex items-center justify-between">
        
        <img src={profilepicture} className="w-9 h-9 rounded-full mr-3" />
        <p className="ml-2 font-regular mr-3">{username}</p>
        <div className="flex  flex-col">
        <ChevronDownIcon
          className="header-icon h-5 w-5 cursor-pointer self-start"
          onClick={handleMenuToggle}
        />
        </div>
        <BellIcon className="header-icon h-6 w-6 mr-10" />
      </div>
    </div>
    <div className="flex flex-col">
    {isMenuOpen && (
          <div className="dropdown dropdown-end dropdown-bottom">

          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-40">
                <li>
                <a>profile</a>

                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
              </div>

        )}
    </div>
    </div>

  );
}

export default Header;
