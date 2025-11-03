import React from "react";

const AboutLifeInsurance = ({ 
  pageTitle = "Know About Your Life Insurance", 
  breadcrumbs = ["Home", "About Us", "Know About Your Life Insurance"] 
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
            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-700 mb-6 border-l-4 border-yellow-400 ">
              {pageTitle}
            </h1>

            {/* Intro Paragraph */}
            <div className="text-gray-700 text-sm sm:text-base leading-relaxed space-y-4 mb-8">
              <p>
                Life insurance in India made its debut well over 100 years ago. In our country, which is one of the most populated in the world, the prominence of insurance is not as widely understood, as it ought to be. What follows is an attempt to acquaint readers with some of the concepts of life insurance, with special reference to LIC. It should, however, be clearly understood that the following content is by no means an exhaustive description of the terms and conditions of an LIC policy or its benefits or privileges. For more details, please contact our branch or divisional office. Any LIC Agent will be glad to help you choose the life insurance plan to meet your needs and render policy servicing.
              </p>
            </div>

            {/* Section: What Is Life Insurance? */}
            <div className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                What Is Life Insurance?
              </h2>
              <div className="text-gray-700 text-sm sm:text-base leading-relaxed space-y-3">
                <p>
                  Life insurance is a contract that pledges payment of an amount to the person assured (or his nominee) on the happening of the event insured against.
                </p>
                <p>The contract is valid for payment of the insured amount during:</p>
                <ul className="list-disc list-inside pl-4 space-y-1">
                  <li>The date of maturity, or</li>
                  <li>Specified dates at periodic intervals, or</li>
                  <li>Unfortunate death, if it occurs earlier.</li>
                </ul>
                <p>
                  Among other things, the contract also provides for the payment of premium periodically to the Corporation by the policyholder. Life insurance is universally acknowledged to be an institution, which eliminates 'risk', substituting certainty for uncertainty and comes to the timely aid of the family in the unfortunate event of death of the breadwinner.
                </p>
                <p>
                  By and large, life insurance is civilisation's partial solution to the problems caused by death. Life insurance, in short, is concerned with two hazards that stand across the life-path of every person:
                </p>
                <ul className="list-disc list-inside pl-4 space-y-1">
                  <li>That of dying prematurely leaving a dependent family to fend for itself.</li>
                  <li>That of living till old age without visible means of support.</li>
                </ul>
              </div>
            </div>

            {/* Section: Life Insurance Vs. Other Savings */}
            <div className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                Life Insurance Vs. Other Savings
              </h2>
              
              <div className="space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Contract Of Insurance:</h3>
                  <p>
                    A contract of insurance is a contract of utmost good faith technically known as uberrima fides. The doctrine of disclosing all material facts is embodied in this important principle, which applies to all forms of insurance. At the time of taking a policy, policyholder should ensure that all questions in the proposal form are correctly answered. Any misrepresentation, non-disclosure or fraud in any document leading to the acceptance of the risk would render the insurance contract null and void.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Protection:</h3>
                  <p>
                    Savings through life insurance guarantee full protection against risk of death of the saver. Also, in case of demise, life insurance assures payment of the entire amount assured (with bonuses wherever applicable) whereas in other savings schemes, only the amount saved (with interest) is payable.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Aid To Thrift:</h3>
                  <p>
                    Life insurance encourages 'thrift'. It allows long-term savings since payments can be made effortlessly because of the 'easy instalment' facility built into the scheme. (Premium payment for insurance is either monthly, quarterly, half yearly or yearly). For example: The Salary Saving Scheme popularly known as SSS, provides a convenient method of paying premium each month by deduction from one's salary. In this case the employer directly pays the deducted premium to LIC. The Salary Saving Scheme is ideal for any institution or establishment subject to specified terms and conditions.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Liquidity:</h3>
                  <p>
                    In case of insurance, it is easy to acquire loans on the sole security of any policy that has acquired loan value. Besides, a life insurance policy is also generally accepted as security, even for a commercial loan.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Tax Relief:</h3>
                  <p>
                    Life Insurance is the best way to enjoy tax deductions on income tax and wealth tax. This is available for amounts paid by way of premium for life insurance subject to income tax rates in force. Assessees can also avail of provisions in the law for tax relief. In such cases the assured in effect pays a lower premium for insurance than otherwise.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Money When You Need It:</h3>
                  <p>
                    A policy that has a suitable insurance plan or a combination of different plans can be effectively used to meet certain monetary needs that may arise from time-to-time. Children's education, start-in-life or marriage provision or even periodical needs for cash over a stretch of time can be less stressful with the help of these policies. Alternatively, policy money can be made available at the time of one's retirement from service and used for any specific purpose, such as, purchase of a house or for other investments. Also, loans are granted to policyholders for house building or for purchase of flats (subject to certain conditions).
                  </p>
                </div>
              </div>
            </div>

            {/* Section: Who Can Buy A Policy? */}
            <div className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                Who Can Buy A Policy?
              </h2>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Any person who has attained majority and is eligible to enter into a valid contract can insure himself/herself and those in whom he/she has insurable interest. Policies can also be taken, subject to certain conditions, on the life of one's spouse or children. While underwriting proposals, certain factors such as the policyholder's state of health, the proponent's income and other relevant factors are considered by the Corporation.
              </p>
            </div>

            {/* Section: Insurance For Women */}
            <div className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                Insurance For Women:
              </h2>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Prior to nationalisation (1956), many private insurance companies would offer insurance to female lives with some extra premium or on restrictive conditions. However, after nationalisation of life insurance, the terms under which life insurance is granted to female lives have been reviewed from time-to-time. At present, women who work and earn an income are treated at par with men. In other cases, a restrictive clause is imposed, only if the age of the female is up to 30 years and if she does not have an income attracting Income Tax.
              </p>
            </div>

            {/* Section: Medical And Non-Medical Schemes */}
            <div className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                Medical And Non-Medical Schemes:
              </h2>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Life insurance is normally offered after a medical examination of the life to be assured. However, to facilitate greater spread of insurance and also to avoid inconvenience, LIC has been extending insurance cover without any medical examination, subject to certain conditions.
              </p>
            </div>

            {/* Section: With Profit And Without Profit Plans */}
            <div className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                With Profit And Without Profit Plans:
              </h2>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                An insurance policy can be 'with' or 'without' profit. In the former, bonuses disclosed, if any, after periodical valuations are allotted to the policy and are payable along with the contracted amount. In 'without' profit plan the contracted amount is paid without any addition. The premium rate charged for a 'with' profit policy is therefore higher than for a 'without' profit policy.
              </p>
            </div>

            {/* Section: Keyman Insurance */}
            <div className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                Keyman Insurance:
              </h2>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Keyman insurance is taken by a business firm on the life of key employee(s) to protect the firm against financial losses, which may occur due to the premature demise of the Keyman.
              </p>
            </div>

            {/* Bottom Section - Back Button */}
            <div className="pt-6 border-t border-gray-200">
              <button
                onClick={() => window.history.back()}
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-2.5 rounded-md transition-colors text-sm sm:text-base inline-flex items-center"
              >
                <i className="fi fi-rr-arrow-small-left mr-2"></i>
                Back to Previous
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links - Gray */}
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

export default AboutLifeInsurance;
