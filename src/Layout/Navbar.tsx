import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/hooks/useRedux";
import { logout } from "@/store/Slices/AuthSlice/authSlice";
import logoImg from "@/assets/navbar/Union.png";
import CommonWrapper from "@/common/CommonWrapper";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const menuItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/team", label: "Team" },
    { to: "/contact", label: "Contact" },
    { to: "/blog", label: "Blog" },
  ];

  return (
    <nav className="bg-white/90 shadow-md sticky top-0 z-50">
     
        <div className="flex items-center justify-between h-20 px-4 md:px-8">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 text-black font-bold text-xl"
          >
            <img src={logoImg} alt="Logo" className="w-8 h-8" />
            <span className="font-bricolage md:text-sm lg:text-lg">Az Deal Hub</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:gap-1 lg:gap-6 items-center">
            {menuItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-gray-700 hover:text-black text-sm font-medium px-3 py-2 hover:bg-website-color-lightGray rounded-md"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Buttons */}
          <div className="hidden md:flex gap-4">
            <button className="border md:px-2 lg:px-6 py-2 rounded text-sm hover:bg-gray-100">
              Login/Register
            </button>
            <button className="md:px-2 lg:px-6 py-2 rounded text-sm bg-gradient-to-r from-[#2F6DFD] to-[#0041D9] text-white">
              Get Comp
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-black">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 pt-4 pb-2 space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setIsOpen(false)}
                  className="block text-black px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 mt-3">
                <button className="border px-4 py-2 rounded text-sm">
                  Login/Register
                </button>
                <button className="px-4 py-2 rounded text-sm bg-gradient-to-r from-[#2F6DFD] to-[#0041D9] text-white">
                  Get Comp
                </button>
              </div>
            </div>
          </div>
        )}
     
    </nav>
  );
};

export default Navbar;
