import footerImage from "@/assets/footer-image/footer-art.svg.png";
import logo from "@/assets/navbar/Union.png";
import footerIcon1 from "@/assets/footer-icons/SocialIcons1.svg";
import footerIcon2 from "@/assets/footer-icons//SocialIcons2.svg";
import footerIcon3 from "@/assets/footer-icons/SocialIcons3.svg";
import footerIcon4 from "@/assets/footer-icons/SocialIcons4.svg";

const LoginFooter = () => {
  return (
    <div className="mt-96">
      <div className="mb-24 flex justify-center items-center gap-4">
        <img src={logo} alt="" />
        <span className="text-xl font-semibold">AZ Deal Hub</span>
        <div className="text-sm text-gray-500 flex items-center gap-2">
          <h1>Follow us on:</h1>
          <img src={footerIcon1} alt="" />
          <img src={footerIcon2} alt="" />
          <img src={footerIcon3} alt="" />
          <img src={footerIcon4} alt="" />
          <p>© 2006-2025 AZ Deal Hub</p>
        </div>
      </div>
      <img src={footerImage} alt="" className="w-full" />
    </div>
  );
};

export default LoginFooter;
