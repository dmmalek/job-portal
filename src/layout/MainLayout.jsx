import { Outlet } from "react-router-dom";
import NavBar from "../shared/NavBar";
import Footer from "../shared/Footer";

const MainLayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
