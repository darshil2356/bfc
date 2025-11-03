import { useState } from "react";
import { useEffect } from "react";

const menu = [
  {
    title: "About Us",
    children: [
      "History",
      "Objectives Of LIC",
      "Mission/Vision",
      "Who’s who",
      "Operations",
      "Know About Your Life Insurance",
      "Help us to serve you better",
      "Information Technology and LIC",
      "Awards",
      "Archives Awards and Achievements",
    ],
  },
  {
    title: "Products",
    children: [
      "Insurance Plans",
      "Endowment Plans",
      "Whole Life Plans",
      "Money Back Plans",
      "Term Assurance Plans",
      "Riders",
      "Pension Plans",
      "Unit Linked Plans",
      "Micro Insurance Plans",
      "Withdrawn Plans",
    ],
  },
  {
    title: "Group Business",
    children: [
      "Contact for Group Insurance Scheme",
      "Group Customer/Annuitant Login",
      "87A Declaration for Group Annuity",
      "Pension & Group Schemes New Product",
      "Pension & Group Schemes Withdrawn Products",
      "Gratuity Plus NAV",
    ],
  },
  {
    title: "Customer Services",
    children: [
      "Customer Corner",
      "Claims settlement requirements",
      "Spurious Calls",
      "Update Your Contact details - Offline",
      "Unclaimed Amounts of Policyholders",
      "Bonus Information",
      "Policy Status",
      "NRI Center",
      "Phone Help Line",
      "Insurance Selector",
      "Policy Guidelines & Helpline",
      "Tax Benefit",
    ],
  },
  {
    title: "NRI",
    children: ["NRI Centre", "NRI Customers", "QuickPay-Premium", "FATCA/CRS"],
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
      onMouseEnter={() => clickedIndex === null && setOpenIndex(i)}
      onMouseLeave={() => clickedIndex === null && setOpenIndex(null)}
    >
      <button
        className="text-gray-800 flex items-center gap-1 text-sm font-medium hover:text-teal-600 transition"
        onClick={(e) => {
          e.stopPropagation(); // prevent closing instantly
          setClickedIndex(clickedIndex === i ? null : i);
          setOpenIndex(i);
        }}
      >
        <i className={`${item.icon} text-base`}></i> {item.title}
        <i className="fi fi-rr-angle-small-down text-xs"></i>
      </button>

      {(openIndex === i) && (
        <div className="absolute left-0 bg-white shadow-lg border rounded-md mt-2 w-56 z-50">
          {item.children.map((c, idx) => (
            <a key={idx} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer">
              {c}
            </a>
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
