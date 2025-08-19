
import { Route, Routes } from "react-router";
import LandingPage from "./pages/LandingPage";
import Layout from "./pages/Layout";
import ErrorFile from './pages/ErrorFile';
import AboutUs from './pages/AboutUs';
import WhyUs from './pages/Why-us';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="*" element={<ErrorFile />} />
        <Route path="/" element={<LandingPage />} />

        <Route
          path="/about-us"
          element={<AboutUs />}
        />
        <Route
          path="/why-smar8"
          element={<WhyUs />}
        />
        <Route
          path="/pricing"
          element={<Pricing />}
        />
        <Route
          path="/contact-us"
          element={<Contact />}
        />
        <Route
          path="/terms-of-service"
          element={<TermsOfService />}
        />

<Route
  path="/privacy-policy"
  element={<PrivacyPolicy />}
/>
        
        {/* <Route
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
        /> */}


      </Route>
    </Routes>
  );
};

export default App;
