import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Blue Header with Breadcrumb */}
      <div className="bg-blue-700 text-white px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center text-sm sm:text-base space-x-2 mb-1">
            <a href="/" className="hover:underline">Home</a>
            <span>/</span>
            <span className="text-yellow-300 font-medium">About Us</span>
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Content Box with Yellow Left Border */}
        <div className="bg-white  border-gray-200 rounded-lg shadow-sm overflow-hidden">
          {/* Yellow Left Border + Title */}
          <div className=" p-6 sm:p-8 lg:p-10">
            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#00529C] mb-6 border-l-5 border-yellow-400">
              About Us
            </h1>

            {/* Content Paragraphs */}
            <div className="space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed">
              <p>
                Every day we wake up to the fact that more than 250 million lives are part of our family called 'LIC' Life Insurance Corporation.
              </p>
              <p>
                We are humbled by the magnitude of the responsibility we carry and realise the lives that are associated with us are very valuable indeed.
              </p>
              <p>
                Though this journey started over six decades ago, we are still conscious of the fact that, while insurance may be a business for us, being part of millions of lives every day for the past 69 years has been a process called TRUST.
              </p>
              <p className="font-medium">
                A true saga Of Trust.
              </p>
            </div>

            {/* Bottom Section */}
            <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-4 sm:space-y-0">
              {/* Back Button */}
              <button
                onClick={() => window.history.back()}
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-2.5 rounded-md transition-colors text-sm sm:text-base"
              >
                Back to Previous
              </button>

              {/* Last Update Date */}
              <p className="text-blue-700 font-medium text-sm sm:text-base">
                Page Last Update Date : 21/8/2025
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="bg-gray-200 border-t border-gray-300 px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-8 text-sm sm:text-base">
            <a href="#" className="text-blue-700 hover:underline font-medium">
              Plan NAV
            </a>
            <a href="#" className="text-blue-700 hover:underline font-medium flex items-center">
              Foreign Units
              <span className="ml-1">▼</span>
            </a>
            <a href="#" className="text-blue-700 hover:underline font-medium flex items-center">
              LIC Associates & Subsidiaries
              <span className="ml-1">▼</span>
            </a>
            <a href="#" className="text-blue-700 hover:underline font-medium">
              LIC Quick Tips
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
