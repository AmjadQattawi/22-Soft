import Clients from "./components/clients/Clients";
import ContactUs from "./components/contactus/ContactUs";

import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import HomePage from "./components/HomePage";
import AboutUs from "./components/aooutUs/AboutUs";
import GoldDXLandingPage from "./components/landingpage/GoldDXLandingPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="clients" element={<Clients />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="Products" element={<GoldDXLandingPage/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
