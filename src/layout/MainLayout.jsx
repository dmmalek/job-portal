import { Outlet } from "react-router-dom";
import NavBar from "../shared/NavBar";

const MainLayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
