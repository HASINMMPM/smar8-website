
import { Route, Routes } from "react-router";
import ErrorFile from "./pages/ErrorFile";
import LandingPage from "./pages/LandingPage";
import TermsOfService from "./pages/TermsOfService";
import HelpCenter from "./pages/HelpCenter";
import Careers from "./pages/Careers";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import MobileApp from "./pages/MobileApp";
import WebPlatform from "./pages/WebPlatform";
import Api from "./pages/Api";
import Pricing from "./pages/Pricing";
import Layout from "./pages/Layout";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="*" element={<ErrorFile />} />
        <Route path="/" element={<LandingPage />} />

        <Route
          path="/terms-of-service"
          element={<TermsOfService />}
        />
        <Route
          path="/helpcenter"
          element={<HelpCenter />}
        />
        <Route
          path="/career"
          element={<Careers />}
        />
        <Route
          path="/about-us"
          element={<AboutUs />}
        />
        <Route
          path="/contact-us"
          element={<ContactUs />}
        />
        <Route
          path="/privacy-policy"
          element={<PrivacyPolicy />}
        />
        <Route
          path="/mobile-app"
          element={<MobileApp />}
        />
        <Route
          path="/web-platform"
          element={<WebPlatform />}
        />
        <Route
          path="/api"
          element={<Api />}
        />
        <Route
          path="/pricing"
          element={<Pricing />}
        />


      </Route>
    </Routes>
  );
};

export default App;
