
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
import TenentScreen from "./pages/header/TenentScreen";
import RentelApplication from "./pages/header/RentelApplication";
import OnlineLease from "./pages/header/OnlineLease";
import RoomMates from "./pages/header/RoomMates";
import MaintenanceRequests from "./pages/header/MaintenanceRequests";
import RentReporting from "./pages/header/RentReporting";
import MaintenanceBidding from "./pages/header/MaintenanceBidding";
import ListingWebsite from "./pages/header/ListingWebsite";
import AutomaticListingSyndication from "./pages/header/AutomaticListingSyndication";
import OnlinePayment from "./pages/header/OnlinePayment";
import Accounting from "./pages/header/Accounting";
import Reconciliation from "./pages/header/Reconciliation";
import Reports from "./pages/header/Reports";
import RentabilityReport from "./pages/header/RentabilityReport";
import PremiumLeads from "./pages/header/PremiumLeads";
import LeadTracking from "./pages/header/LeadTracking";
import AutoPay from "./pages/header/AutoPay";
import ESign from "./pages/header/ESign";
import GoogleSync from "./pages/header/GoogleSync";
import Smart8TenantTurner from "./pages/header/Smart8TenantTurner";
import TeamManagement from "./pages/header/TeamManagement";
import PropertyMessageBoard from "./pages/header/PropertyMessageBoard";
import PrioritySupport from "./pages/header/PrioritySupport";
import PropertyManagers from "./pages/header/PropertyManagers";
import ServicePros from "./pages/header/ServicePros";
import Tenants from "./pages/header/Tenants";
import HelpCenter from "./pages/header/HelpCenter";
import LandlordResources from "./pages/header/LandlordResources";
import LandlordForms from "./pages/header/LandlordForms";
import AffiliateProgram from "./pages/header/AffiliateProgram";
import ContactUs from "./pages/header/ContactUs";
import Landlords from "./pages/header/Landlords";

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

        {/* APPLICANTS & TENANTS Section */}
        <Route
          path="/features/tenant-screening"
          element={<TenentScreen />}
        />
        <Route
          path="/features/rental-application"
          element={<RentelApplication />}
        />
        <Route
          path="/features/online-leases"
          element={<OnlineLease />}
        />
        <Route
          path="/features/roommates"
          element={<RoomMates />}
        />
        <Route
          path="/features/maintenance-requests"
          element={<MaintenanceRequests />}
        />
        <Route
          path="/features/rent-reporting"
          element={<RentReporting />}
        />
        <Route
          path="/features/maintenance-bidding"
          element={<MaintenanceBidding />}
        />
        <Route
          path="/features/listing-website"
          element={<ListingWebsite />}
        />
        <Route
          path="/features/automatic-listing-syndication"
          element={<AutomaticListingSyndication />}
        />

        {/* FINANCES Section */}
        <Route
          path="/features/online-payments"
          element={<OnlinePayment />}
        />
        <Route
          path="/features/accounting"
          element={<Accounting />}
        />
        <Route
          path="/features/reconciliation"
          element={<Reconciliation />}
        />
        <Route
          path="/features/reports"
          element={<Reports />}
        />
        <Route
          path="/features/rentability-report"
          element={<RentabilityReport />}
        />

        {/* LEADS Section */}
        <Route
          path="/features/premium-leads"
          element={<PremiumLeads />}
        />
        <Route
          path="/features/lead-tracking"
          element={<LeadTracking />}
        />
        <Route
          path="/features/auto-pay"
          element={<AutoPay />}
        />
        <Route
          path="/features/e-sign"
          element={<ESign />}
        />
        <Route
          path="/features/google-sync"
          element={<GoogleSync />}
        />
        <Route
          path="/features/smart8-tenant-turner"
          element={<Smart8TenantTurner />}
        />

        {/* TEAM Section */}
        <Route
          path="/features/team-management"
          element={<TeamManagement />}
        />
        <Route
          path="/features/property-message-board"
          element={<PropertyMessageBoard />}
        />
        <Route
          path="/features/priority-support"
          element={<PrioritySupport />}
        />

        {/* USE CASES Section */}
        <Route
          path="/useCases/property-managers"
          element={<PropertyManagers />}
        />
        <Route
          path="/useCases/landlords"
          element={<Landlords />}
        />
        <Route
          path="/useCases/service-pros"
          element={<ServicePros />}
        />
        <Route
          path="/useCases/tenants"
          element={<Tenants />}
        />

        {/* RESOURCES Section */}
        <Route
          path="/resources/help-center"
          element={<HelpCenter />}
        />
        <Route
          path="/resources/landlord-resources"
          element={<LandlordResources />}
        />
        <Route
          path="/resources/landlord-forms"
          element={<LandlordForms />}
        />
        <Route
          path="/resources/affiliate-program"
          element={<AffiliateProgram />}
        />
        <Route
          path="/resources/contact-us"
          element={<ContactUs />}
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
