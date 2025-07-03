import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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
<<<<<<< HEAD
    <nav className="bg-white/90 shadow-md sticky top-0 z-50">
     
        <div className="flex items-center justify-between h-20 px-4 md:px-4 lg:8">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 text-black font-bold text-xl"
          >
            <img src={logoImg} alt="Logo" className="w-8 h-8" />
            <span className="font-bricolage md:text-sm lg:text-lg">Az Deal Hub</span>
          </Link>
=======
    <nav className="bg-white/80 shadow-lg sticky top-0 z-100">
      <CommonWrapper>
        <div className=" mx-auto px-4 sm:px-6 lg:px-8 lg:py-[12px]">
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
>>>>>>> feature/auction

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
<<<<<<< HEAD
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
=======
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
              <Link
                to="/auction"
                className=" hover:bg-website-color-lightGray hover:text-black px-3 py-2 rounded-md text-sm font-medium"
              >
                Auction
              </Link>
            </div>
            <div>
              <div className="flex lg:gap-[10px]">
                <button
                  className="border hidden lg:block lg:px-[24px] py-[8px] rounded cursor-pointer"
                  onClick={handleLogin}
>>>>>>> feature/auction
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 mt-3">
                <button className="border px-4 py-2 rounded text-sm" onClick={handleLogin}>
                  Login/Register
                </button>
<<<<<<< HEAD
                <button className="px-4 py-2 rounded text-sm bg-gradient-to-r from-[#2F6DFD] to-[#0041D9] text-white">
=======
                <button className="border hidden lg:block px-[24px] py-[8px] rounded bg-linear-to-r from-[#2F6DFD] to-[#0041D9] text-white">
>>>>>>> feature/auction
                  Get Comp
                </button>
              </div>
            </div>
<<<<<<< HEAD
          </div>
        )}
     
=======

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
                  stroke="black"
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
                stroke="currentColor" // Use currentColor, not "black"
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
          <div className="flex flex-col px-6 py-6 space-y-4">
            <Link
              to="/"
              className="text-black text-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-black text-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/team"
              className="text-black text-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              Team
            </Link>
            <Link
              to="/contact"
              className="text-black text-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/blog"
              className="text-black text-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/auction"
              className="text-black text-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              Auction
            </Link>
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
>>>>>>> feature/auction
    </nav>
  );
};

export default Navbar;
