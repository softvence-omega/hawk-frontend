import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CommonWrapper from "@/common/CommonWrapper";

// import { useAppDispatch } from "@/hooks/useRedux";
// import { logout } from "@/store/Slices/AuthSlice/authSlice";
import logoImg from "@/assets/navbar/Union.png";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  // const dispatch = useAppDispatch();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const menuItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/team", label: "Team" },
    { to: "/contact", label: "Contact" },
    { to: "/blog", label: "Blog" },
    { to: "/auction", label: "Auction" },
  ];

  return (
    <nav className="bg-white/80 shadow-lg sticky top-0 z-50">
      <CommonWrapper>
        <div className="mx-auto px-4 sm:px-6 lg:px-8 lg:py-[12px]">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link
                to="/"
                className="text-black text-2xl font-bold flex items-center gap-3"
              >
                <img src={logoImg} alt="" className="w-8 h-8" />
                <span className="font-bricolage hidden lg:block">
                  Az Deal Hub
                </span>
              </Link>
            </div>

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
              <button className="border md:px-2 lg:px-6 py-2 rounded text-sm hover:bg-gray-100" onClick={handleLogin}>
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
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </CommonWrapper>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-full bg-white z-50">
          <div className="flex justify-between items-center px-4 py-4 border-b">
            <Link
              to="/"
              className="text-black text-2xl font-bold flex items-center gap-3"
              onClick={() => setIsOpen(false)}
            >
              <img src={logoImg} alt="" className="w-8 h-8" />
              <span className="font-bricolage">Az Deal Hub</span>
            </Link>
            <button
              onClick={toggleMenu}
              type="button"
              className="text-black hover:text-gray-700 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-col px-6 py-6 space-y-4">
            {menuItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-black text-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <button
              className="border px-[24px] py-[8px] rounded cursor-pointer mt-4"
              onClick={() => {
                setIsOpen(false);
                handleLogin();
              }}
            >
              Login/Register
            </button>
            <button className="border px-[24px] py-[8px] rounded bg-gradient-to-r from-[#2F6DFD] to-[#0041D9] text-white">
              Get Comp
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;