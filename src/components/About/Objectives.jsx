import React from "react";

const ObjectivesOfLIC = ({ 
  pageTitle = "Objectives Of LIC", 
  breadcrumbs = ["Home", "About Us", "Objectives Of LIC"],
  lastUpdated = "29/9/2025"
}) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Blue Header with Breadcrumb */}
      <div className="bg-blue-700 text-white px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center text-xs sm:text-sm space-x-2">
            {breadcrumbs.map((item, index) => (
              <React.Fragment key={item}>
                {index > 0 && <span className="text-white">/</span>}
                <a 
                  href={index === 0 ? "/" : "#"} 
                  className={`hover:underline ${index === breadcrumbs.length - 1 ? 'text-yellow-300 font-medium' : ''}`}
                >
                  {item}
                </a>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
          {/* Yellow Left Border + Content */}
          <div className="p-6 sm:p-8 lg:p-12">
            {/* Title */}
            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold border-l-4 border-yellow-400  text-blue-700 mb-8">
              {pageTitle}
            </h1>

            {/* Objectives List */}
            <ul className="space-y-4 text-gray-700 text-xs sm:text-sm leading-relaxed">
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 bg-gray-700 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>
                  Spread Life Insurance widely and in particular to the rural areas and to the socially and economically backward classes with a view to reaching all insurable persons in the country and providing them adequate financial cover against death at a reasonable cost.
                </span>
              </li>
              
             
              
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 bg-gray-700 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>
                  Maximize mobilization of people's savings by making insurance-linked savings adequately attractive.
                </span>
              </li>
              
            
              
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 bg-gray-700 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>
                  Bear in mind, in the investment of funds, the primary obligation to its policyholders, whose money it holds in trust, without losing sight of the interest of the community as a whole; the funds to be deployed to the best advantage of the investors as well as the community as a whole, keeping in view national priorities and obligations of attractive return.
                </span>
              </li>
              
           
              
           

               <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 bg-gray-700 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>
                 Conduct business with utmost economy and with the full realization that the moneys belong to the policyholders.
                </span>
              </li>
              
             
              
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 bg-gray-700 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>
                  Act as trustees of the insured public in their individual and collective capacities.
                </span>
              </li>
              
              
              
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 bg-gray-700 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>
                  Meet the various life insurance needs of the community that would arise in the changing social and economic environment.
                </span>
              </li>
              
             
              
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 bg-gray-700 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>
                  Involve all people working in the Corporation to the best of their capability in furthering the interests of the insured public by providing efficient service with courtesy.
                </span>
              </li>
           
              
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 bg-gray-700 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>
                  Promote amongst all agents and employees of the Corporation a sense of participation, pride and job satisfaction through discharge of their duties with dedication towards achievement of Corporate Objective.
                </span>
              </li>
            </ul>

            {/* Bottom Section */}
            <div className="mt-10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-4 sm:space-y-0">
              {/* Back Button */}
              <button
                onClick={() => window.history.back()}
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-2.5 rounded-md transition-colors text-xs sm:text-sm inline-flex items-center border-2 border-gray-900"
              >
                Back to Previous
              </button>

              {/* Last Update Date */}
              <p className="text-blue-700 font-medium text-sm sm:text-base">
                Page Last Update Date : {lastUpdated}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="bg-gray-200 border-t border-gray-300 px-4 sm:px-6 lg:px-8 py-4 mt-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-8 text-xs sm:text-sm">
            <a href="#" className="text-blue-700 hover:underline font-medium">
              Plan NAV
            </a>
            <a href="#" className="text-blue-700 hover:underline font-medium flex items-center">
              Foreign Units
              <i className="fi fi-rr-angle-small-down ml-1"></i>
            </a>
            <a href="#" className="text-blue-700 hover:underline font-medium flex items-center">
              LIC Associates & Subsidiaries
              <i className="fi fi-rr-angle-small-down ml-1"></i>
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

export default ObjectivesOfLIC;
