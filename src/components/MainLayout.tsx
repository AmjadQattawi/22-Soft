import { Outlet } from "react-router-dom";
import Footer from "./footerComponents/Footer";
import Header from "./header/Header";

export default function MainLayout() {
  return (
    <>
      <Header />
      {/* <PageNavigationButtons /> */}
      <Outlet />
      <Footer />
    </>
  );
}
