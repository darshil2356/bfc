import React from 'react';

const InsurancePlans = () => {
  const plans = [
    {
      name: 'New Tech Term',
      features: [
        'Choose between Level Sum Assured and Increasing Sum Assured.',
        'Flexible premium options (Single, Regular, Limited), policy term, and the choice to receive benefits in instalments.'
      ]
    },
    {
      name: 'Jeevan Utsav',
      features: [
        'Guaranteed annual payout of 10% of Sum Assured starts 3-6 years after premium payment term.',
        'Guaranteed Additions during premium payment term provide added benefits.'
      ]
    },
    {
      name: 'Amritbal',
      features: [
        'Attractive guaranteed additions throughout the policy term.',
        'Maturity age options between 18-25 years with flexible payment terms.'
      ]
    },
    {
      name: 'Digi Term',
      features: [
        'Choose Level or Increasing Sum Assured.',
        'Benefit of Attractive High Sum Assured Rebate.'
      ]
    }
  ];

  const categories = [
    { label: 'Protect my Family', active: true },
    { label: 'Wealth Creation', active: false },
    { label: "Children's Future Planning", active: false },
    { label: 'Retirement Planning', active: false }
  ];

  return (
    <div className="bg-white py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">

        {/* Heading */}
        <div className="mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#003D82] mb-2">
            Buy LIC plans tailored for you!
          </h2>
          <p className="text-gray-700 text-base lg:text-lg">
            Discover insurance plans as per your needs
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 lg:px-6 py-2 rounded-full text-sm lg:text-base font-medium transition-all ${
                category.active
                  ? 'bg-[#003D82] text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:border-[#003D82] hover:text-[#003D82]'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Plans Grid */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
            >
             
              <div className="p-6 lg:p-8 flex-1 flex flex-col">
                <div className="mb-4">
                  <p className="text-xs lg:text-sm text-gray-600 font-medium mb-1">LIC's</p>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900">{plan.name}</h3>
                </div>

                <div className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[#003D82] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                        <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.2" />
                        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <p className="text-sm lg:text-base text-gray-700 leading-relaxed">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#003D82] px-6 lg:px-8 py-4 mt-auto">
                <button className="w-full flex items-center justify-center gap-2 text-white font-semibold text-sm lg:text-base hover:gap-3 transition-all">
                  Buy Online
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div> */}


        {/* Mobile Carousel (visible only on <768px) */}
{/* Mobile Carousel (visible only on <768px) */}
<div className="md:hidden overflow-x-auto  flex gap-4 snap-x scroll-smooth pb-4 -mx-4 px-4">
  {plans.map((plan, index) => (
    <div
      key={index}
      className="max-w-[500px] bg-gray-50 border border-gray-200 rounded-xl snap-center flex-shrink-0 overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <div className="p-6 flex flex-col h-full justify-between">
        <div>
          <div className="mb-4">
            <p className="text-xs text-gray-600 font-medium mb-1">LIC's</p>
            <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
          </div>

          <div className="space-y-3 mb-6">
            {plan.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#003D82] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="10" opacity="0.2"/>
                  <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>

                {/* ✅ TEXT WRAPS LIKE DESKTOP NOW */}
                <p className="text-sm text-gray-700 leading-relaxed whitespace-normal break-words">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>

        <button className="bg-[#003D82] text-white py-3 rounded-lg text-sm font-semibold w-full">
          Buy Online
        </button>
      </div>
    </div>
  ))}
</div>


{/* Desktop Grid (hidden on <768px) */}
<div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-8">
  {plans.map((plan, index) => (
    <div
      key={index}
      className="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
    >
      <div className="p-6 lg:p-8 flex-1 flex flex-col">
        <div className="mb-4">
          <p className="text-xs lg:text-sm text-gray-600 font-medium mb-1">LIC's</p>
          <h3 className="text-xl lg:text-2xl font-bold text-gray-900">{plan.name}</h3>
        </div>

        <div className="space-y-3 mb-6">
          {plan.features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <svg className="w-5 h-5 text-[#003D82]" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="10" opacity="0.2"/>
                <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p className="text-sm lg:text-base text-gray-700 leading-relaxed">{feature}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#003D82] px-6 lg:px-8 py-4 mt-auto">
        <button className="w-full flex items-center justify-center gap-2 text-white font-semibold text-sm lg:text-base hover:gap-3 transition-all">
          Buy Online
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  ))}
</div>



        {/* View All */}
        <div className="flex justify-end">
          <button className="px-6 py-2.5 border-2 border-gray-300 text-gray-700 rounded-lg text-sm lg:text-base font-medium hover:border-[#003D82] hover:text-[#003D82] transition-all">
            View All
          </button>
        </div>

      </div>
    </div>
  );
};

export default InsurancePlans;
