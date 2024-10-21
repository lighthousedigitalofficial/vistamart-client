

import { useState } from 'react';

const EmailVerification = () => {
  const [otp, setOtp] = useState(new Array(4).fill(""));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    // Focus on next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Entered OTP: ", otp.join(""));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <div className="text-center">
          {/* Email icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-green-500 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12l4-4m0 0l-4-4m4 4H4m16 0v10a2 2 0 01-2 2H6a2 2 0 01-2-2V8m16 0L12 12M4 8l8 4" />
          </svg>
          
          <h2 className="text-2xl font-semibold mb-4">Please check your email</h2>
          <p className="text-gray-500 mb-6">
            We have sent a code to <strong>contact@curfcode.com</strong>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex justify-center space-x-4">
            {otp.map((data, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                className="w-12 h-12 text-2xl font-bold text-green-600 border border-gray-300 rounded-lg text-center focus:outline-none focus:ring-2 focus:ring-green-500"
                value={data}
                onChange={(e) => handleChange(e.target, index)}
              />
            ))}
          </div>

          <div className="text-center text-sm mt-4">
            Did not get the code? <a href="#" className="text-green-500 font-semibold">Click to resend.</a>
          </div>

          <div className="flex justify-between mt-6">
            <button
              type="button"
              className="w-1/2 py-3 mr-4 bg-white border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-1/2 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600"
            >
              Verify
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmailVerification;
