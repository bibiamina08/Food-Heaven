import { Outlet } from "react-router-dom";
import Newsletter from "../components/Newsletter";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Layout() {
  return (
    <div>
      <Navbar /> 
      <Outlet />
      <Newsletter/>
       <Footer/>
    </div>
  );
}