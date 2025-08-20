import { useState, useRef, useEffect } from 'react';
import logo from "../../assets/logo.webp";
import { FaUser, FaFile, FaToolbox, FaChartLine, FaMoneyBill, FaBullhorn, FaStar, FaClock, FaMoneyCheckAlt, FaBlog, FaKey, FaQuestionCircle, FaMicrophone, FaDollarSign, FaComments } from 'react-icons/fa';
import { CgWebsite } from 'react-icons/cg';
import { PiUsersFill } from 'react-icons/pi';
import { MdPayment } from 'react-icons/md';
import { MdOutlineRepeatOn } from 'react-icons/md';
import { HiDocumentReport } from 'react-icons/hi';
import { IoCall } from 'react-icons/io5';
import { FaHouse } from 'react-icons/fa6';
import { FaVideo } from 'react-icons/fa6';
import { RiCustomerService2Fill, RiToolsFill } from 'react-icons/ri';

interface FeatureItem {
    title: string;
    description: string;
    icon: React.ReactNode;
}

interface NavigationData {
    [key: string]: FeatureItem[];
}

interface MainNavItem {
    key: string;
    label: string;
    data: FeatureItem[];
    isDirectLink?: boolean;
    href?: string;
}

const Header = () => {
    const [isHeaderVisible, setIsHeaderVisible] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [mobileView, setMobileView] = useState<'main' | 'submenu'>('main');
    const [activeSubmenu, setActiveSubmenu] = useState<MainNavItem | null>(null);
    const [hoveredNavItem, setHoveredNavItem] = useState<string | null>(null);
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        if (!isMobileMenuOpen) {
            setMobileView('main');
            setActiveSubmenu(null);
        }
    };

    const closeHeaderCompletely = () => {
        setIsHeaderVisible(false);
        setIsMobileMenuOpen(false);
        setMobileView('main');
        setActiveSubmenu(null);
    };

    const openSubmenu = (item: MainNavItem) => {
        setActiveSubmenu(item);
        setMobileView('submenu');
    };

    const goBackToMain = () => {
        setMobileView('main');
        setActiveSubmenu(null);
    };

    // Close dropdown when mouse leaves
    const handleMouseLeave = () => {
        setIsDropdownVisible(false);
        setTimeout(() => setHoveredNavItem(null), 300);
    };

    // Show dropdown when hovering
    const handleMouseEnter = (navKey: string) => {
        setHoveredNavItem(navKey);
        setIsDropdownVisible(true);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownVisible(false);
                setTimeout(() => setHoveredNavItem(null), 300);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Prevent background scrolling when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        };
    }, [isMobileMenuOpen]);

    // Close mobile menu on scroll
    useEffect(() => {
        if (!isMobileMenuOpen) return;

        const handleScroll = () => {
            setIsMobileMenuOpen(false);
            setMobileView('main');
            setActiveSubmenu(null);
        };

        window.addEventListener('scroll', handleScroll, { passive: false });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isMobileMenuOpen]);

    const navigationData: NavigationData = {
        "APPLICANTS & TENANTS": [
            { title: "Tenant Screening", description: "Get a complete picture of your applicants.", icon: <FaUser /> },
            { title: "Rental Application", description: "Share a listing and receive applications.", icon: <FaFile /> },
            { title: "Online Leases", description: "Create a lease and invite tenants to e-sign.", icon: <FaFile /> },
            { title: "Roommates", description: "Easily move-in multiple tenants.", icon: <PiUsersFill /> },
            { title: "Maintenance Requests", description: "Assign visual work orders to Service Pros.", icon: <FaToolbox /> },
            { title: "Rent Reporting", description: "Reporting to credit bureaus for tenants.", icon: <FaChartLine /> },
            { title: "Maintenance Bidding", description: "Get bids from local service pros.", icon: <FaMoneyBill /> }
        ],
        "MARKETING": [
            { title: "Listing Website", description: "Show off your properties and attract tenants.", icon: <CgWebsite /> },
            { title: "Automatic Listing Syndication", description: "Post vacancies to numerous listing partners.", icon: <FaBullhorn /> }
        ],
        "FINANCES": [
            { title: "Online Payments", description: "Receive and send payments online.", icon: <MdPayment /> },
            { title: "Accounting", description: "Store, sort, and summarize your finances.", icon: <FaMoneyCheckAlt /> },
            { title: "Reconciliation", description: "Match transactions with your bank statement.", icon: <MdOutlineRepeatOn /> },
            { title: "Reports", description: "Customize and view the data you need.", icon: <HiDocumentReport /> },
            { title: "Rentability Report", description: "Get the new prices for your rentals.", icon: <FaChartLine /> }
        ],
        "LEADS": [
            { title: "Premium Leads", description: "Get access to millions of potential tenants.", icon: <FaStar /> },
            { title: "Lead Tracking", description: "Don't miss any potential tenants.", icon: <FaClock /> },
            { title: "Auto Pay", description: "Recurring payments set up by tenants.", icon: <MdPayment /> },
            { title: "E-Sign", description: "E-sign a lease and send it to your tenants.", icon: <FaFile /> },
            { title: "Google Sync", description: "Synchronize your TC Calendar with Google.", icon: <IoCall /> },
            { title: "Smart8 + Tenant Turner", description: "List, schedule, fill rentals—hassle-free.", icon: <MdOutlineRepeatOn /> }
        ],
        "TEAM": [
            { title: "Team Management", description: "Manage rentals together with a team.", icon: <PiUsersFill /> },
            { title: "Property Message Board", description: "Send notices to all or some of your tenants.", icon: <FaBullhorn /> },
            { title: "Priority Support", description: "Call, text, chat. We are here to assist.", icon: <IoCall /> }
        ]
    };

    const mainNavItems: MainNavItem[] = [
        { key: "features", label: "Features", data: [] },
        {
            key: "useCases", label: "Use cases", data: [
                { title: "Property Managers", description: "Streamline operations and tenant management", icon: <PiUsersFill /> },
                { title: "Landlords", description: "Simplify rental property administration", icon: <FaHouse /> },
                { title: "Service Pros", description: "Find jobs and get paid from your area", icon: <RiToolsFill /> },
                { title: "Tenants", description: "Pay rent and manage your account", icon: <FaUser /> }
            ]
        },
        {
            key: "resources", label: "Resources", data: [
                { title: "Help Center", description: "Learn how to use smar8", icon: <RiCustomerService2Fill /> },
                { title: "Landlord Resources", description: "Blog, podcast, webinars, laws and guides", icon: <FaMicrophone /> },
                { title: "Landlord Forms", description: "All the documents you may need", icon: <FaFile /> },
                { title: "Affiliate Program", description: "Recommend us and get paid", icon: <FaDollarSign /> },
                { title: "Contact us", description: "Get in touch with us", icon: <FaComments /> }
            ]
        },
        {
            key: "pricing", label: "Pricing", data: [],
            isDirectLink: true,
            href: "/pricing"
        }
    ];

    // Don't render anything if header is completely closed
   

    return (
        <nav className="bg-white shadow-sm relative z-50" onMouseLeave={handleMouseLeave}>
            {/* Desktop Navigation */}
            <div className="hidden lg:block">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        {/* Logo */}
                        <div className="flex items-center">
                            <div className="flex-shrink-0 flex items-center">
                                <a href="/">
                                    <img src={logo} alt="Smar8 Solutions" className="h-20 py-2" />
                                </a>
                            </div>
                        </div>

                        {/* Desktop Navigation Items */}
                        <div className="flex lg:items-center lg:space-x-8">
                                                    {mainNavItems.map((item) => (
                            <div key={item.key} className="relative">
                                {item.isDirectLink ? (
                                    <a
                                        href={item.href}
                                        className="text-dark-700 hover:text-dark-900 px-3 py-2 text-sm font-medium transition-colors duration-200 hover:text-primary-500"
                                    >
                                        {item.label}
                                    </a>
                                ) : (
                                    <button
                                        className="text-dark-700 hover:text-dark-900 px-3 py-2 text-sm font-medium transition-colors duration-200 hover:text-primary-500"
                                        onMouseEnter={() => handleMouseEnter(item.key)}
                                    >
                                        {item.label}
                                    </button>
                                )}
                            </div>
                        ))}
                        </div>
                    </div>
                </div>

                {/* Desktop Dropdown */}
                {hoveredNavItem && (
                    <div
                        ref={dropdownRef}
                        className={`absolute left-0 right-0 bg-white border-t border-tertiary-200 shadow-lg transform transition-all duration-300 ease-out ${isDropdownVisible
                            ? 'translate-y-0 opacity-100'
                            : 'translate-y-[-20px] opacity-0'
                            }`}
                        style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}
                    >
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                            <div className="flex justify-between items-start">
                                {hoveredNavItem === 'features' ? (
                                    <div className="flex-1 grid grid-cols-5 gap-8">
                                        {Object.entries(navigationData).map(([category, items]) => (
                                            <div key={category} className="space-y-4">
                                                <h3 className="text-dark-700 font-bold text-sm uppercase tracking-wide">
                                                    {category}
                                                </h3>
                                                <div className="space-y-4">
                                                    {items.map((item, index) => (
                                                        <div key={index} className="flex items-start space-x-3 group cursor-pointer">
                                                            <span className="text-dark-700 text-lg mt-0.5 group-hover:scale-110 transition-transform duration-200">
                                                                {item.icon}
                                                            </span>
                                                            <div className="flex-1">
                                                                <p className="text-dark-700 font-semibold text-sm group-hover:text-dark-900 transition-colors duration-200">
                                                                    {item.title}
                                                                </p>
                                                                <p className="text-dark-400 text-xs mt-1 leading-relaxed">
                                                                    {item.description}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="flex-1 grid grid-cols-3 gap-8">
                                        {mainNavItems.find(item => item.key === hoveredNavItem)?.data.map((item, index) => (
                                            <div key={index} className="flex items-start space-x-3 group cursor-pointer">
                                                <span className="text-dark-700 text-lg mt-0.5 group-hover:scale-110 transition-transform duration-200">
                                                    {item.icon}
                                                </span>
                                                <div className="flex-1">
                                                    <p className="text-dark-700 font-semibold text-sm group-hover:text-dark-900 transition-colors duration-200">
                                                        {item.title}
                                                    </p>
                                                    <p className="text-dark-400 text-xs mt-1 leading-relaxed">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                                <button
                                    className="text-dark-700 hover:text-dark-900 p-2 transition-colors duration-200"
                                    onClick={() => {
                                        setIsHeaderVisible(true);
                                    }}
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Mobile Header */}
            <div className="lg:hidden">
                <div className="px-4 py-4">
                    {/* Main Menu Layout: [ Logo ] [ Hamburger ] */}
                    {mobileView === 'main' && (
                        <div className="flex justify-between items-center">
                            {/* Logo */}
                            <div className="flex-shrink-0">
                                <a href="/">
                                    <img src={logo} alt="Smar8 Solutions" className="h-16" />
                                </a>
                            </div>

                            {/* Hamburger Button */}
                            <button
                                type="button"
                                className="inline-flex items-center justify-center p-2 rounded-md text-dark-700 hover:text-dark-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 transition-all duration-200"
                                onClick={toggleMobileMenu}
                                aria-controls="mobile-menu"
                                aria-expanded={isMobileMenuOpen}
                            >
                                <span className="sr-only">{isMobileMenuOpen ? 'Close main menu' : 'Open main menu'}</span>
                                <div className="w-6 h-6 flex items-center justify-center relative">
                                    {/* Top line - rotates to become top-right of X */}
                                    <span className={`absolute w-5 h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out ${
                                        isMobileMenuOpen 
                                            ? 'rotate-45 translate-y-0' 
                                            : '-translate-y-2'
                                    }`}></span>
                                    
                                    {/* Middle line - fades out when open */}
                                    <span className={`absolute w-5 h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out ${
                                        isMobileMenuOpen 
                                            ? 'opacity-0 scale-0' 
                                            : 'opacity-100 scale-100'
                                    }`}></span>
                                    
                                    {/* Bottom line - rotates to become bottom-left of X */}
                                    <span className={`absolute w-5 h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out ${
                                        isMobileMenuOpen 
                                            ? '-rotate-45 translate-y-0' 
                                            : 'translate-y-2'
                                    }`}></span>
                                </div>
                            </button>
                        </div>
                    )}

                    {/* Submenu Layout: [ Back ] [ Heading ] [ Hamburger ] */}
                    {mobileView === 'submenu' && (
                        <div className="flex items-center justify-between">
                            {/* Back Button - Left Aligned */}
                            <div className="flex-shrink-0">
                                <button
                                    onClick={goBackToMain}
                                    className="flex items-center text-dark-700 hover:text-dark-900 transition-colors duration-200 p-2"
                                >
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                    <span className="text-sm font-medium">Back</span>
                                </button>
                            </div>

                            {/* Submenu Heading - Center */}
                            <div className="flex-1 flex justify-center">
                                <h2 className="text-lg font-semibold text-dark-700 text-center">
                                    {activeSubmenu?.label}
                                </h2>
                            </div>

                            {/* X Button - Right Aligned */}
                            <div className="flex-shrink-0">
                                <button
                                    type="button"
                                    className="inline-flex items-center justify-center p-2 rounded-md text-dark-700 hover:text-dark-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 transition-all duration-200"
                                    onClick={closeHeaderCompletely}
                                    aria-label="Close navigation"
                                >
                                    <span className="sr-only">Close navigation</span>
                                    <div className="w-6 h-6 flex items-center justify-center">
                                        <svg
                                            className="w-5 h-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </div>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`lg:hidden fixed inset-0 top-24 z-40 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                {/* Backdrop */}
                <div
                    className={`absolute inset-0 bg-black transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-50' : 'opacity-0'}`}
                    onClick={toggleMobileMenu}
                ></div>

                {/* Menu Content */}
                <div className={`absolute top-0 left-0 right-0 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
                    <div className="px-4 py-6 max-h-[calc(100vh-6rem)] overflow-y-auto">
                        {/* Mobile Main Menu */}
                        {mobileView === 'main' && (
                            <div className="space-y-4">
                                {mainNavItems.map((item) => (
                                    <div key={item.key} className="border-b border-tertiary-200 last:border-b-0">
                                        {item.isDirectLink ? (
                                            <a
                                                href={item.href}
                                                className="w-full text-left py-4 text-base font-medium text-dark-700 hover:text-dark-900 flex items-center justify-between transition-colors duration-200"
                                            >
                                                {item.label}
                                                <svg
                                                    className="h-5 w-5 text-primary-500 transform transition-transform duration-200"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </a>
                                        ) : (
                                            <button
                                                onClick={() => openSubmenu(item)}
                                                className="w-full text-left py-4 text-base font-medium text-dark-700 hover:text-dark-900 flex items-center justify-between transition-colors duration-200"
                                            >
                                                {item.label}
                                                <svg
                                                    className="h-5 w-5 text-primary-500 transform transition-transform duration-200"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </button>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Mobile Submenu */}
                        {mobileView === 'submenu' && activeSubmenu && (
                            <div className="space-y-4">
                                {/* Submenu Items */}
                                <div className="space-y-4">
                                    {activeSubmenu.key === 'features' ? (
                                        // Features submenu with categories
                                        Object.entries(navigationData).map(([category, items]) => (
                                            <div key={category} className="space-y-3">
                                                <h4 className="text-sm font-semibold text-dark-700 uppercase tracking-wide">
                                                    {category}
                                                </h4>
                                                <div className="space-y-3">
                                                    {items.map((subItem, index) => (
                                                        <div key={index} className="flex items-start space-x-3 pl-4">
                                                            <span className="text-dark-700 text-base mt-0.5">
                                                                {subItem.icon}
                                                            </span>
                                                            <div className="flex-1">
                                                                <p className="text-sm font-medium text-dark-700">
                                                                    {subItem.title}
                                                                </p>
                                                                <p className="text-xs text-dark-400 mt-1 leading-relaxed">
                                                                    {subItem.description}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        // Other navigation items submenu
                                        activeSubmenu.data.map((subItem, index) => (
                                            <div key={index} className="flex items-start space-x-3 pl-4">
                                                <span className="text-dark-700 text-base mt-0.5">
                                                    {subItem.icon}
                                                </span>
                                                <div className="flex-1">
                                                    <p className="text-sm font-medium text-dark-700">
                                                        {subItem.title}
                                                    </p>
                                                    <p className="text-xs text-dark-400 mt-1 leading-relaxed">
                                                        {subItem.description}
                                                    </p>
                                                </div>
                                            </div>
                                        ))
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
