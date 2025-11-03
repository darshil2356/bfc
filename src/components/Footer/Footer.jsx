import React from "react";

const Footer = () => {
  const footerLinks = {
    column1: [
      "Anti-Bribery And Anti-Corruption",
      "Aarogya",
      { text: "App ki punji app ka Adhikar 2024 Fraud Policy", highlight: "NEW" },
      "Bima Bharosa",
      "Careers",
      "Citizen Charter",
      "Copyright Policy",
      "CSR Policy",
      "Central Vigilance Commission",
      "Website Link",
      "Download Forms",
      "View our ADS",
    ],
    column2: [
      "Employees Corner",
      "Enquiry of Outstanding Claims to the Current Year",
      "Equal Opportunity Policy",
      "Frequently Asked Questions",
      "Feedback",
      "Glossary",
      "Golden Jubilee Foundation - Scholarship Scheme",
      "Grievance Redressal",
      "Help",
      "Disclaimer",
    ],
    column3: [
      "Health Insurance",
      "Jeevan Akshay VI",
      "International Operations Associate",
      "Investor eXIHRT",
      "IRDAI Consumer Education",
      "Jain Aur Hum",
      "LIC Act",
      "News",
      "NTTH",
      "NRI Centre",
    ],
    column4: [
      "Photo Gallery",
      "Protection of interests of policyholders",
      "Press Release",
      "Privacy Policy",
      "Property",
      "Registration Points",
      "Retired Employees Portal",
      "Sitemap",
      "Stewardship Policy & Disclosure",
    ],
    column5: [
      "Seventh Bharat Campaign",
      "Samadharitha",
      "Tender - Award",
      "Tenders",
      "Terms & Conditions",
      "Unclaimed Amounts of Policyholders",
      "Vidhi Avam Nitiyanuwad",
      "Welcome Kit",
      "LIC Housing Finance Private Limited",
      "LIC Cards Services Limited",
      "LIC Mutual Fund",
      "LIC Mutual Fund Asset Management Limited",
      "LIC Housing Finance Limited",
      "LICNFL Asset Management Company Limited",
    ],
  };

  const topLinks = [
    { icon: "📞", text: "Contact Us" },
    { icon: "📞", text: "+91-22-68276827" },
    { icon: "💬", text: "+91-8976862090" },
    { icon: "📍", text: "Branch Locator" },
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200 text-gray-600">
      {/* Top Contact Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-3 flex flex-wrap items-center justify-center gap-6 text-sm">
          {topLinks.map((link, i) => (
            <a key={i} href="#" className="flex items-center gap-2 hover:text-[#0B5394] transition">
              <span className="text-base">{link.icon}</span> {link.text}
            </a>
          ))}
        </div>
      </div>

      {/* Footer Columns */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {Object.values(footerLinks).map((column, colIndex) => (
            <ul key={colIndex} className="space-y-2">
              {column.map((item, i) => (
                <li key={i}>
                  {typeof item === "string" ? (
                    <a href="#" className="block text-sm hover:text-[#0B5394] transition">
                      {item}
                    </a>
                  ) : (
                    <a href="#" className="flex items-center text-sm hover:text-[#0B5394] transition">
                      <span className="bg-yellow-300 text-gray-900 text-[10px] font-semibold px-1.5 py-[1px] rounded mr-2">
                        {item.highlight}
                      </span>
                      {item.text}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      {/* Bottom Credit */}
      <div className="bg-gray-100 border-t border-gray-200 py-4 text-center text-sm">
        © 2025 Life Insurance Corporation of India. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
