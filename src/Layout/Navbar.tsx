import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// import { useAppDispatch } from "@/hooks/useRedux";
// import { logout } from "@/store/Slices/AuthSlice/authSlice";
import logoImg from "@/assets/navbar/Union.png";
import CommonWrapper from "@/common/CommonWrapper";

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

  // const handleLogout = () => {
  //   dispatch(logout());
  //   navigate("/login");
  // };

  return (
    <nav className="bg-white/80 shadow-lg sticky top-0">
      <CommonWrapper>
        <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-[12px]">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link
                to="/"
                className="text-black text-2xl font-bold flex items-center gap-3"
              >
                <img src={logoImg} alt="" className="w-8 h-8" />
                <span className="font-bricolage">Az Deal Hub</span>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-4">
              <Link
                to="/"
                className=" hover:bg-website-color-lightGray hover:text-black px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <Link
                to="/about"
                className=" hover:bg-website-color-lightGray hover:text-black px-3 py-2 rounded-md text-sm font-medium"
              >
                About Us
              </Link>
              <Link
                to="/team"
                className=" hover:bg-website-color-lightGray hover:text-black px-3 py-2 rounded-md text-sm font-medium"
              >
                Team
              </Link>
              <Link
                to="/contact"
                className=" hover:bg-website-color-lightGray hover:text-black px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </Link>
              <Link
                to="/blog"
                className=" hover:bg-website-color-lightGray hover:text-black px-3 py-2 rounded-md text-sm font-medium"
              >
                Blog
              </Link>
            </div>
            <div>
              <div className="flex gap-[10px]">
                <button
                  className="border px-[24px] py-[8px] rounded cursor-pointer"
                  onClick={handleLogin}
                >
                  Login/Register
                </button>
                <button className="border px-[24px] py-[8px] rounded bg-linear-to-r from-[#2F6DFD] to-[#0041D9] text-white">
                  Get Comp
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                type="button"
                className="text-white hover:text-gray-300 focus:outline-none"
              >
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
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="text-white block hover:bg-purple-700 px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white block hover:bg-purple-700 px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </Link>
            <Link
              to="/services"
              className="text-white block hover:bg-purple-700 px-3 py-2 rounded-md text-base font-medium"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="text-white block hover:bg-purple-700 px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
