import React from "react";
import { Outlet } from "react-router-dom";  // adjust path if needed
import Footer from "../components/commen/Footer";
import Header from "../components/commen/Header";

const Layout: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />

            <main className="flex-grow">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
};

export default Layout;
