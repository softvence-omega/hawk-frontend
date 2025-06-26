import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout: React.FC = () => {
  const location = useLocation();
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      {location.pathname === "/" && <Footer />}
    </div>
  );
};

export default Layout;
