import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";


const menu = [
  {
    title: "About Us",
    path: "/about",
    children: [
      { label: "History", path: "/about/history" },
      { label: "Objectives Of LIC", path: "/about/objectives" },
      { label: "Mission/Vision", path: "/about/mission" },
      { label: "Who’s who", path: "/about/whos-who" },
      { label: "Operations", path: "/about/operations" },
      { label: "Know About Your Life Insurance", path: "/about/know-about-your-policy" },
      { label: "Help us to serve you better", path: "/about/help" },
      { label: "Information Technology and LIC", path: "/about/it" },
      { label: "Awards", path: "/about/awards" },
      { label: "Archives Awards and Achievements", path: "/about/archives-awards" },
    ],
  },
  {
    title: "Products",
    path: "/products",
    children: [
      { label: "Insurance Plans", path: "/products/insurance-plans" },
      { label: "Endowment Plans", path: "/products/endowment-plans" },
      { label: "Whole Life Plans", path: "/products/whole-life-plans" },
      { label: "Money Back Plans", path: "/products/money-back-plans" },
      { label: "Term Assurance Plans", path: "/products/term-assurance-plans" },
      { label: "Riders", path: "/products/riders" },
      { label: "Pension Plans", path: "/products/pension-plans" },
      { label: "Unit Linked Plans", path: "/products/unit-linked-plans" },
      { label: "Micro Insurance Plans", path: "/products/micro-insurance-plans" },
      { label: "Withdrawn Plans", path: "/products/withdrawn-plans" },
    ],
  },
  {
    title: "Group Business",
    path: "/group-business",
    children: [
      { label: "Contact for Group Insurance Scheme", path: "/group-business/contact" },
      { label: "Group Customer/Annuitant Login", path: "/group-business/customer-login" },
      { label: "87A Declaration for Group Annuity", path: "/group-business/87a-declaration" },
      { label: "Pension & Group Schemes New Product", path: "/group-business/new-product" },
      { label: "Pension & Group Schemes Withdrawn Products", path: "/group-business/withdrawn-products" },
      { label: "Gratuity Plus NAV", path: "/group-business/gratuity-plus-nav" },
    ],
  },
  {
    title: "Customer Services",
    path: "/customer-services",
    children: [
      { label: "Customer Corner", path: "/customer-services/customer-corner" },
      { label: "Claims settlement requirements", path: "/customer-services/claims-settlement" },
      { label: "Spurious Calls", path: "/customer-services/spurious-calls" },
      { label: "Update Your Contact details - Offline", path: "/customer-services/update-contact" },
      { label: "Unclaimed Amounts of Policyholders", path: "/customer-services/unclaimed-amounts" },
      { label: "Bonus Information", path: "/customer-services/bonus-information" },
      { label: "Policy Status", path: "/customer-services/policy-status" },
      { label: "NRI Center", path: "/customer-services/nri-center" },
      { label: "Phone Help Line", path: "/customer-services/phone-help-line" },
      { label: "Insurance Selector", path: "/customer-services/insurance-selector" },
      { label: "Policy Guidelines & Helpline", path: "/customer-services/policy-guidelines" },
      { label: "Tax Benefit", path: "/customer-services/tax-benefit" },
    ],
  },
  {
    title: "NRI",
    path: "/nri",
    children: [
      { label: "NRI Centre", path: "/nri/centre" },
      { label: "NRI Customers", path: "/nri/customers" },
      { label: "QuickPay-Premium", path: "/nri/quickpay" },
      { label: "FATCA/CRS", path: "/nri/fatca-crs" },
    ],
  },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const [clickedIndex, setClickedIndex] = useState(null);


  useEffect(() => {
  const handleClickOutside = () => {
    setClickedIndex(null);
    setOpenIndex(null);
  };

  document.addEventListener("click", handleClickOutside);
  return () => document.removeEventListener("click", handleClickOutside);
}, []);


  return (
    <>
      <header className="bg-white border-b border-gray-200">
        <div className="px-4 lg:px-8 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-blue-800 text-white p-2 rounded-full flex items-center justify-center w-10 h-10">
              <i className="fi fi-rr-shield"></i>
            </div>
            <div className="leading-tight">
              <div className="text-3xl lg:text-4xl font-bold text-yellow-500 tracking-wider">
                LIC
              </div>
              <div className="text-[8px] lg:text-[9px] text-gray-800 font-medium -mt-1">
                भारतीय जीवन बीमा निगम <br /> LIFE INSURANCE CORPORATION OF INDIA
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
{/* Desktop Menu */}
<nav className="hidden lg:flex items-center gap-6 relative">
  {menu.map((item, i) => (
    <div
      key={i}
      className="relative"
      onMouseEnter={() => setOpenIndex(i)}     // open dropdown on hover
    >
      <Link
        to={item.path ?? "#"}
        className="text-gray-800 flex items-center gap-1 text-sm font-medium hover:text-teal-600 transition"
        onClick={(e) => {
          e.stopPropagation(); // prevent closing when clicking inside
          setOpenIndex(i); // ensure current dropdown stays open
        }}
      >
        {item.title}
        <i className="fi fi-rr-angle-small-down text-xs"></i>
      </Link>

      {/* Dropdown */}
      {openIndex === i && (
        <div
          className="absolute left-0 bg-white shadow-lg border rounded-md mt-2 w-56 z-50"
          onMouseEnter={() => setOpenIndex(i)} // keep open when hovering dropdown
          onMouseLeave={() => {}} // do nothing here, let click outside handle close
        >
          {item.children.map((c, idx) => (
            <Link
              to={c.path}
              key={idx}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer"
              onClick={() => setOpenIndex(null)} // close on click inside item
            >
              {c.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  ))}
</nav>



          {/* Desktop Buttons */}
          <div className="hidden lg:flex gap-3">
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2 rounded-md text-sm">
              Pay Premium
            </button>
            <button className="border border-gray-300 hover:border-gray-400 px-5 py-2 rounded-md text-sm">
              Login
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <i className="fi fi-rr-menu-burger text-xl"></i>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pb-4 bg-white border-b border-gray-200">
          {menu.map((item, i) => (
            <div key={i}>
              <button
                className="w-full flex justify-between py-3 text-gray-800 font-medium border-b"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="flex items-center gap-2">
                  <i className={`${item.icon}`}></i> {item.title}
                </span>
                <i className={`fi fi-rr-angle-small-${openIndex === i ? "up" : "down"}`}></i>
              </button>

              {openIndex === i && (
                <div className="pl-6 py-2 flex flex-col gap-2">
                  {item.children.map((c, idx) => (
                    <span key={idx} className="text-sm text-gray-700">
                      {c}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="mt-4 flex flex-col gap-3">
            <button className="bg-orange-600 text-white px-5 py-2 rounded-md text-sm">
              Pay Premium
            </button>
            <button className="border border-gray-300 px-5 py-2 rounded-md text-sm">
              Login
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
