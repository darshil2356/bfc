import React, { useState } from 'react';

const SelectionBar = () => {
  const [wantTo, setWantTo] = useState('');
  const [iam, setIam] = useState('');

  return (
    <div className="bg-[#003D82] py-4 md:py-6 my-2">
      <div className="container mx-auto px-3 md:px-8">
        <div className="flex flex-wrap items-center gap-3 md:gap-6">

          {/* I want to */}
          <div className="flex-1 min-w-[160px]">
            <label htmlFor="wantTo" className="block text-white text-xs md:text-sm font-medium mb-1 md:mb-2">
              I want to
            </label>
            <select
              id="wantTo"
              value={wantTo}
              onChange={(e) => setWantTo(e.target.value)}
              className="w-full px-3 py-2 md:px-4 md:py-3 rounded-md text-gray-800 text-xs md:text-sm font-medium bg-white border-none focus:outline-none focus:ring-2 focus:ring-teal-400 appearance-none cursor-pointer"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23374151' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 10px center',
                backgroundSize: '16px',
                paddingRight: '35px'
              }}
            >
              <option value="">Select</option>
              <option value="buy-policy">Buy a Policy</option>
              <option value="renew-policy">Renew My Policy</option>
              <option value="pay-premium">Pay Premium</option>
              <option value="register-claim">Register a Claim</option>
              <option value="track-claim">Track My Claim</option>
            </select>
          </div>

          {/* I am */}
          <div className="flex-1 min-w-[160px]">
            <label htmlFor="iam" className="block text-white text-xs md:text-sm font-medium mb-1 md:mb-2">
              I am
            </label>
            <select
              id="iam"
              value={iam}
              onChange={(e) => setIam(e.target.value)}
              className="w-full px-3 py-2 md:px-4 md:py-3 rounded-md text-gray-800 text-xs md:text-sm font-medium bg-white border-none focus:outline-none focus:ring-2 focus:ring-teal-400 appearance-none cursor-pointer"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23374151' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 10px center',
                backgroundSize: '16px',
                paddingRight: '35px'
              }}
            >
              <option value="">Select</option>
              <option value="individual">Individual Customer</option>
              <option value="corporate">Corporate Client</option>
              <option value="agent">Agent</option>
              <option value="employee">Employee</option>
            </select>
          </div>

          {/* Logo */}
          <div className="bg-white rounded-md px-4 py-2 md:px-6 md:py-3 flex items-center justify-center mx-auto md:ml-auto">
            <div className="text-center leading-tight">
              <div className="flex items-center gap-1 justify-center">
                <span className="text-[#003D82] font-bold text-base md:text-xl">BIMA</span>
                <span className="text-red-600 font-bold text-base md:text-xl">BHAROSA</span>
              </div>
              <div className="text-[8px] md:text-[10px] text-gray-700 font-medium">बीमा भरोसा</div>
              <div className="text-[7px] md:text-[9px] text-gray-600">Grievance redressal portal</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SelectionBar;
