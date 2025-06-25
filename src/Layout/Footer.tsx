import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0041D914] border-t border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Us Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600 text-sm">
                  2861 62nd Ave, Oakland, CA 94605
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gray-500 flex-shrink-0" />
                <span className="text-gray-600 text-sm">+1234567890</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-500 flex-shrink-0" />
                <span className="text-gray-600 text-sm">
                  Support@azdeals.com
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Quick Links</h3>
            <div className="space-y-2">
              <a
                href="#"
                className="block text-gray-600 text-sm hover:text-gray-900 transition-colors"
              >
                About Us
              </a>
              <a
                href="#"
                className="block text-gray-600 text-sm hover:text-gray-900 transition-colors"
              >
                Team
              </a>
              <a
                href="#"
                className="block text-gray-600 text-sm hover:text-gray-900 transition-colors"
              >
                Contact
              </a>
              <a
                href="#"
                className="block text-gray-600 text-sm hover:text-gray-900 transition-colors"
              >
                Blogs
              </a>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">AZ</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                AZ Deal Hub
              </h3>
            </div>
            <p className="text-gray-600 text-sm">
              Get the latest updates, reach out to us, and follow our journey.
            </p>
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-gray-900">
                Subscribe our newsletter
              </h4>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Type your email"
                  className="flex-1 text-sm"
                />
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-purple-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright and Social Media */}
            <div className="flex flex-col md:flex-row items-center gap-4">
              <p className="text-gray-600 text-sm">
                © 2025 azdeals.com. All rights reserved.
              </p>

              {/* Social Media Icons */}
              <div className="flex items-center gap-3">
                <span className="text-gray-600 text-sm hidden md:block">
                  Follow Us on Social Media
                </span>
                <div className="flex gap-2">
                  <a
                    href="#"
                    className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                  >
                    <FaInstagram className="w-4 h-4 text-gray-600" />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                  >
                    <FaFacebook className="w-4 h-4 text-gray-600" />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                  >
                    <FaLinkedin className="w-4 h-4 text-gray-600" />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                  >
                    <FaTwitter className="w-4 h-4 text-gray-600" />
                  </a>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            <div className="flex gap-6">
              <a
                href="#"
                className="text-gray-600 text-sm hover:text-gray-900 transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-600 text-sm hover:text-gray-900 transition-colors"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
