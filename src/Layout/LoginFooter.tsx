import footerImage from "@/assets/footer-image/footer-art.svg.png";
import logo from "@/assets/navbar/Union.png";
import footerIcon1 from "@/assets/footer-icons/SocialIcons1.svg";
import footerIcon2 from "@/assets/footer-icons/SocialIcons2.svg";
import footerIcon3 from "@/assets/footer-icons/SocialIcons3.svg";
import footerIcon4 from "@/assets/footer-icons/SocialIcons4.svg";

const LoginFooter = () => {
  return (
    <div className="mt-20">
      <div className="mb-12 px-4 flex flex-col items-center gap-4 lg:flex-row lg:justify-center lg:items-center lg:gap-6 text-center lg:text-left">
        {/* Logo + Brand */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="AZ Deal Hub Logo" className="w-8 h-8" />
          <span className="text-xl font-semibold">AZ Deal Hub</span>
        </div>

        {/* Social Links */}
        <div className="text-sm text-gray-500 flex flex-wrap justify-center items-center gap-2">
          <span>Follow us on:</span>
          <img src={footerIcon1} alt="Social 1" className="w-5 h-5" />
          <img src={footerIcon2} alt="Social 2" className="w-5 h-5" />
          <img src={footerIcon3} alt="Social 3" className="w-5 h-5" />
          <img src={footerIcon4} alt="Social 4" className="w-5 h-5" />
          <p className="w-full lg:w-auto mt-2 lg:mt-0">
            © 2006-2025 AZ Deal Hub
          </p>
        </div>
      </div>

      {/* Footer Background Image */}
      <img src={footerImage} alt="Footer art" className="w-full object-cover" />
    </div>
  );
};

export default LoginFooter;
