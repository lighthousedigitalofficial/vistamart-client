// import { useState } from 'react';
// import Leopord from './Shipping/Leopord';
// import Tracx from './Shipping/Tracx';
//  // Adjust the import path as necessary

// const ShippingMethod = () => {
//   const [selectedMethod, setSelectedMethod] = useState('');

//   const handleSelectMethod = (event) => {
//     setSelectedMethod(event.target.value);
//   };

//   return (
//     <div className="p-4">
//       <h1 className="text-xl font-bold mb-4">Select Shipping Method</h1>
//       <div className="mb-4">
//         <select
//           className="px-4 py-2 rounded bg-gray-200"
//           value={selectedMethod}
//           onChange={handleSelectMethod}
//         >
//           <option value="">Select a method</option>
//           <option value="leopord">Leopord</option>
//           <option value="tracx">Tracx</option>
//         </select>
//       </div>

//       {selectedMethod === 'leopord' && <Leopord />}
//       {selectedMethod === 'tracx' && <Tracx />}
//     </div>
//   );
// };

// export default ShippingMethod;

import { useState } from "react";

const ShippingMethod = () => {
  const [address, setAddress] = useState("");
  const [weight, setWeight] = useState("");
  const [shippingCost, setShippingCost] = useState(null);
  const [error, setError] = useState("");
  const [shippingMethod, setShippingMethod] = useState("leopards");

  const fetchShippingRate = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("/shipping/leopards", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ address, weight }),
      });

      if (!response.ok) throw new Error("Failed to fetch shipping cost");

      const data = await response.json();
      setShippingCost(data.rate); // Assuming 'rate' is returned from the API
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="">
      <h2 className="text-2xl font-bold mb-4">Shipping Method</h2>
      <form onSubmit={fetchShippingRate} className="space-y-4">
        <div>
          <label className="input-label">Address</label>
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            className="input"
            rows="4"
          />
        </div>
        <div>
          <label className="input-label">Weight (kg)</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
            className="input"
          />
        </div>
        <div>
          <label className="input-label">Shipping Method</label>
          <select
            value={shippingMethod}
            onChange={(e) => setShippingMethod(e.target.value)}
            className="input"
          >
            <option value="leopards">Leopards</option>
            <option value="trax">Trax</option>
          </select>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-300 hover:bg-primary-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </div>
        {error && <p className="text-red-500">{error}</p>}
      </form>
      {shippingCost && (
        <p className="mt-4 text-lg">Shipping Cost: {shippingCost}</p>
      )}
    </div>
  );
};

export default ShippingMethod;
