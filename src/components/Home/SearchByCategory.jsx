import React from 'react';

const SearchByCategory = () => {
  const categories = [
    {
      title: 'Insurance Plans',
      plansCount: 29,
      badge: '29',
      badgeColor: 'bg-yellow-400'
    },
    {
      title: 'Pension Schemes',
      plansCount: 4,
      badge: '4',
      badgeColor: 'bg-yellow-400'
    },
    {
      title: 'Unit Linked Plans',
      plansCount: 6,
      badge: '6',
      badgeColor: 'bg-yellow-400'
    },
    {
      title: 'Micro Insurance Plans',
      plansCount: 1,
      badge: '1',
      badgeColor: 'bg-yellow-400'
    },
    {
      title: 'Withdrawn Plans',
      plansCount: 219,
      badge: '219',
      badgeColor: 'bg-yellow-400'
    }
  ];

  const onlineServices = [
    'Retired Employees Portal',
    "Agent's Helpline",
    'Merchant Portal',
    'Agents/CLIA/Chief Organiser/IMF',
    'eNACH (eMANDATE)',
    'Group Customer/Annuitant Portal',
    'Online Agent Mock Test Portal',
    'ANANDA',
    'LICIA Portal',
    'Online Loan',
    'Bill Pay Enquiry',
    'SSS PA Portal',
    'Dev Officer Portal'
  ];

  return (
    <div className="bg-gradient-to-br from-[#0B5394] to-[#1E73BE] py-12 lg:py-16 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-white opacity-5 rounded-full -mr-48 -mb-48"></div>
      <div className="absolute right-32 bottom-32 w-64 h-64 bg-white opacity-5 rounded-full"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Categories Section */}
        <div className="mb-8 lg:mb-0">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl lg:text-3xl font-bold text-white">
              Search by category
            </h2>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg text-sm font-semibold transition-colors lg:hidden">
              Buy Online
            </button>
          </div>

          {/* Mobile - Horizontal Scroll */}
          <div className="lg:hidden overflow-x-auto scrollbar-hide -mx-4 px-4">
            <div className="flex gap-4 pb-4">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg min-w-[280px] flex-shrink-0 hover:shadow-xl transition-shadow"
                >
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {category.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className={`${category.badgeColor} text-gray-900 font-bold text-xs px-2 py-1 rounded-full`}>
                        {category.badge}
                      </span>
                      <span className="text-gray-500 text-sm">Plans Available</span>
                    </div>
                  </div>
                  <button className="text-[#0B5394] font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                    View Plans
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:flex lg:gap-12">
            {/* Desktop - Grid */}
            <div className="flex-1">
              <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-6">
                {categories.map((category, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="mb-4">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {category.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className={`${category.badgeColor} text-gray-900 font-bold text-xs px-2 py-1 rounded-full`}>
                          {category.badge}
                        </span>
                        <span className="text-gray-500 text-sm">Plans Available</span>
                      </div>
                    </div>
                    <button className="text-[#0B5394] font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                      View Plans
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                ))}
              </div>

              {/* View All Button - Desktop Only */}
              <div className="flex justify-end">
                <button className="bg-white hover:bg-gray-100 text-gray-900 px-6 py-2.5 rounded-lg text-sm font-medium transition-colors">
                  View All
                </button>
              </div>
            </div>

            {/* Desktop - Online Services Sidebar */}
            <div className="w-80 xl:w-96">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-blue">
                    Other Online Services
                  </h3>
                  <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                    Buy Online
                  </button>
                </div>
                
                <div className="space-y-2 max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-white scrollbar-track-transparent">
                  {onlineServices.map((service, index) => (
                    <button
                      key={index}
                      className="w-full bg-white hover:bg-gray-50 text-gray-900 text-left px-4 py-3 rounded-lg text-sm font-medium transition-all hover:shadow-md"
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile - Online Services (Full Width Below Categories) */}
        <div className="lg:hidden mt-8">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-blue">
                Other Online Services
              </h3>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                Buy Online
              </button>
            </div>
            
            <div className="space-y-2">
              {onlineServices.map((service, index) => (
                <button
                  key={index}
                  className="w-full bg-white hover:bg-gray-50 text-gray-900 text-left px-4 py-3 rounded-lg text-sm font-medium transition-all hover:shadow-md"
                >
                  {service}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom scrollbar styles */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 3px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5);
        }
      `}</style>
    </div>
  );
};

export default SearchByCategory;
