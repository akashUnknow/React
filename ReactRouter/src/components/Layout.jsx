import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Fotter/Footer";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
