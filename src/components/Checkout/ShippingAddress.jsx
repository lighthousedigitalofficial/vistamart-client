import { PhoneInput } from "react-international-phone";

const ShippingAddress = () => {
  return (
    <div>
      <div className=" mt-4 flex justify-center items-start">
        <div className=" w-full ">
          <h2 className="text-xl font-bold mb-6">Shipping Address</h2>
          <form className="space-y-6 ">
            {/* Contact Name and Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="input-label">Contact person name *</label>
                <input
                  type="text"
                  className="input"
                  placeholder="Aqib Ahmed"
                  required
                />
              </div>
              <div>
                <label className="input-label">Phone Number</label>
                <PhoneInput
                  defaultCountry="pk"
                  // {...register('phoneNumber')}
                  className="custom-phone-input"
                  inputClassName="custom-phone-input"
                />
                {/* {errors.phoneNumber && (
                        <p className="text-red-500 text-xs mt-1">
                            {errors.phoneNumber.message}
                        </p>
                    )} */}
              </div>
            </div>

            {/* Address Type */}
            <div>
              <label className="input-label">Address type</label>
              <select className="input">
                <option>Permanent</option>
                <option>Temporary</option>
              </select>
            </div>

            {/* Country, City, Zip Code */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="input-label">Country *</label>
                <input
                  type="text"
                  className="input"
                  placeholder="Pakistan"
                  required
                />
              </div>
              <div>
                <label className="input-label">City *</label>
                <input
                  type="text"
                  className="input"
                  placeholder="Islamabad"
                  required
                />
              </div>
              <div>
                <label className="input-label">Zip code *</label>
                <input
                  type="text"
                  className="input"
                  placeholder="45710"
                  required
                />
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="input-label">Address *</label>
              <input
                type="text"
                className="input"
                placeholder="Soan Garden"
                required
              />
            </div>

            {/* Save Address Checkbox */}
            <div className="mt-6">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                />
                <span className="ml-2 text-sm text-gray-700">
                  Save this Address
                </span>
              </label>
            </div>

            {/* Submit Button */}
            {/* <div className="flex justify-end">
              <button
                type="submit"
                className="py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-300 hover:bg-primary-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit
              </button>
            </div> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ShippingAddress;
