// import React from "react";
// import { ArrowRight, Calculator, Gauge } from "lucide-react";

// function CalculatorSection() {
//   return (
//     <section className="w-full bg-gradient-to-br from-gray-50 to-gray-100 py-12 md:py-20 px-4">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-8 md:mb-12">
//           <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3">
//             How much you need?
//           </h2>
//           <p className="text-base md:text-lg text-gray-600">
//             Calculate your premium and coverage
//           </p>
//         </div>

//         {/* Cards Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
//           {/* Coverage Calculator Card */}
//           <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-200">
//             <div className="p-6 md:p-8 flex flex-col h-full">
//               {/* Icon and Title Row */}
//               <div className="flex items-start justify-between mb-4">
//                 <div className="flex-1">
//                   <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
//                     Coverage Calculator
//                   </h3>
//                   <p className="text-sm md:text-base text-blue-700">
//                     Calculate the coverage as per your insurance needs
//                   </p>
//                 </div>
//                 <div className="ml-4 flex-shrink-0">
//                   <div className="bg-yellow-400 rounded-full p-3 md:p-4 group-hover:scale-110 transition-transform duration-300">
//                     <Gauge className="w-6 h-6 md:w-8 md:h-8 text-white" />
//                   </div>
//                 </div>
//               </div>

//               {/* Button */}
//               <div className="mt-auto pt-6">
//                 <button
//                   onClick={() => {
//                     // Navigate to coverage calculator page
//                     console.log("Navigate to Coverage Calculator");
//                   }}
//                   className="w-full md:w-auto flex items-center justify-center md:justify-start gap-2 text-blue-700 font-semibold text-base md:text-lg hover:text-blue-900 transition-colors group/btn"
//                 >
//                   <span>Calculate Coverage</span>
//                   <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Premium Calculator Card */}
//           <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-200">
//             <div className="p-6 md:p-8 flex flex-col h-full">
//               {/* Icon and Title Row */}
//               <div className="flex items-start justify-between mb-4">
//                 <div className="flex-1">
//                   <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
//                     Premium Calculator
//                   </h3>
//                   <p className="text-sm md:text-base text-blue-700">
//                     As per your policy & tenure calculate the premiums
//                   </p>
//                 </div>
//                 <div className="ml-4 flex-shrink-0">
//                   <div className="bg-yellow-400 rounded-full p-3 md:p-4 group-hover:scale-110 transition-transform duration-300">
//                     <Calculator className="w-6 h-6 md:w-8 md:h-8 text-white" />
//                   </div>
//                 </div>
//               </div>

//               {/* Button */}
//               <div className="mt-auto pt-6">
//                 <button
//                   onClick={() => {
//                     // Navigate to premium calculator page
//                     console.log("Navigate to Premium Calculator");
//                   }}
//                   className="w-full md:w-auto flex items-center justify-center md:justify-start gap-2 text-blue-700 font-semibold text-base md:text-lg hover:text-blue-900 transition-colors group/btn"
//                 >
//                   <span>Calculate Premium</span>
//                   <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default CalculatorSection;


import React from "react";

function CalculatorSection() {
  return (
    <section className="w-full bg-gradient-to-br from-gray-50 to-gray-100 py-12 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3">
            How much you need?
          </h2>
          <p className="text-base md:text-lg text-gray-600">
            Calculate your premium and coverage
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Coverage Calculator */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-200">
            <div className="p-6 md:p-8 flex flex-col h-full">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                    Coverage Calculator
                  </h3>
                  <p className="text-sm md:text-base text-blue-700">
                    Calculate the coverage as per your insurance needs
                  </p>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <div className="bg-yellow-400 rounded-full p-3 md:p-4 group-hover:scale-110 transition-transform duration-300">
                    <i className="fi fi-rr-gauge-high text-white text-2xl md:text-3xl"></i>
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-6">
                <button
                  onClick={() => console.log("Navigate to Coverage Calculator")}
                  className="w-full md:w-auto flex items-center justify-center md:justify-start gap-2 text-blue-700 font-semibold text-sm md:text-[16px] hover:text-blue-900 transition-colors group/btn"
                >
                  <span>Calculate Coverage</span>
                  <i className="fi fi-rr-arrow-right text-lg group-hover/btn:translate-x-1 transition-transform"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Premium Calculator */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-200">
            <div className="p-6 md:p-8 flex flex-col h-full">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                    Premium Calculator
                  </h3>
                  <p className="text-sm md:text-base text-blue-700">
                    As per your policy & tenure calculate the premiums
                  </p>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <div className="bg-yellow-400 rounded-full p-3 md:p-4 group-hover:scale-110 transition-transform duration-300">
                    <i className="fi fi-rr-calculator text-white text-2xl md:text-3xl"></i>
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-6">
                <button
                  onClick={() => console.log("Navigate to Premium Calculator")}
                  className="w-full md:w-auto flex items-center justify-center md:justify-start gap-2 text-blue-700 font-semibold text-sm md:text-[16px] hover:text-blue-900 transition-colors group/btn"
                >
                  <span>Calculate Premium</span>
                  <i className="fi fi-rr-arrow-right text-lg group-hover/btn:translate-x-1 transition-transform"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CalculatorSection;
