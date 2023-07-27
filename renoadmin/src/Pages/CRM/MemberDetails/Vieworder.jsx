import React, { useState } from "react";
import TopHeader from "../../../UI/TopHeader/TopHeader";

const Vieworder = () => {
  const [selectedOption1, setSelectedOption1] = useState("");

  const handleOptionChange1 = (e) => {
    setSelectedOption1(e.target.value);
  };
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };
  const deliveryOptions = [
    "Pending",
    "Confirmed",
    "Picked Up",
    "On The Way",
    "Delivered",
    "Cancle",
  ];

  const head = "View Order";
  return (
    <div className="w-[95vw]">
      <div className="fixed flex" style={{ zIndex: "10" }}>
        <TopHeader className="fixed" head={head} />
      </div>
      <div className="ml-80 mt-20 relative flex flex-col">
        {/* Top Section */}
        <div>
          <form action="">
            <div className="bg-[#EEEEEE] mt-8 w-full drop-shadow-md border flex flex-row gap-28 px-3 py-4">
              <div>
                <label>Payment Status</label>
                <div className="mt-2">
                  <select
                    id="select"
                    value={selectedOption1}
                    onChange={handleOptionChange1}
                    className="w-full px-4 py-2 border rounded focus:outline-none "
                  >
                    <option value="paid">Paid</option>
                    <option value="unpaid">Unpaid</option>
                    <option value="refunded">Refunded</option>
                  </select>
                </div>
              </div>
              <div>
                <label>Delivery Status</label>
                <div className="mt-2">
                  <select
                    id="select"
                    value={selectedOption}
                    onChange={handleOptionChange}
                    className="w-full px-4 py-2 border rounded focus:outline-none "
                  >
                    {deliveryOptions.map((item) => (
                      <option value={item}>{item}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label>Tracking Code (optional)</label>
                <div className="mt-2">
                  <input
                    className="w-full px-4 py-2 border rounded focus:outline-none"
                    type="text"
                  />
                </div>
              </div>

              <div className="flex items-center justify-center">
                <button className="bg-blue-500 hover:bg-blue-600 rounded-xl font-semibold mt-5" style={{ height: "5vh", width: "15vh", color: "white" }}>Update</button>
              </div>
            </div>
          </form>
        </div>
        {/* Order Summary Section */}
        <div className="bg-[#EEEEEE] mt-8 w-full drop-shadow-md border flex flex-col gap-8 px-3 py-4">
          <h2 className="font-bold text-lg">Order Summary</h2>
          <div className="flex flex-row justify-between">
            <table className="w-full mr-5 mb-20">
              <tbody>
                <tr>
                  <td className="border border-black px-6 py-4">Order Code:</td>
                  <td className="border border-black px-6 py-4">
                    Demo order summary data
                  </td>
                </tr>
                <tr>
                  <td className="border border-black px-6 py-4">Customer:</td>
                  <td className="border border-black px-6 py-4">
                    Demo order summary data
                  </td>
                </tr>
                <tr>
                  <td className="border border-black px-6 py-4">Email:</td>
                  <td className="border border-black px-6 py-4">
                    Demo order summary data
                  </td>
                </tr>
                <tr>
                  <td className="border border-black px-6 py-4">
                    Shipping address:
                  </td>
                  <td className="border border-black px-6 py-4">
                    Demo order summary data
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="w-full">
              <tbody>
                <tr>
                  <td className="border border-black px-6 py-4">Order date:</td>
                  <td className="border border-black px-6 py-4">
                    Demo order summary data
                  </td>
                </tr>
                <tr>
                  <td className="border border-black px-6 py-4">
                    Delivery status:
                  </td>
                  <td className="border border-black px-6 py-4">
                    Demo order summary data
                  </td>
                </tr>
                <tr>
                  <td className="border border-black px-6 py-4">
                    Payment status:
                  </td>
                  <td className="border border-black px-6 py-4">
                    Demo order summary data
                  </td>
                </tr>
                <tr>
                  <td className="border border-black px-6 py-4">
                    Total order amount:
                  </td>
                  <td className="border border-black px-6 py-4">
                    Demo order summary data
                  </td>
                </tr>
                <tr>
                  <td className="border border-black px-6 py-4">Contact:</td>
                  <td className="border border-black px-6 py-4">
                    Demo order summary data
                  </td>
                </tr>
                <tr>
                  <td className="border border-black px-6 py-4">
                    Payment method:
                  </td>
                  <td className="border border-black px-6 py-4">
                    Demo order summary data
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* Order Details */}
        <div className="flex flex-row w-full gap-5">
          <div className="bg-[#EEEEEE] mt-8 mb-10 w-[60vw] drop-shadow-md border flex flex-col gap-8 px-3 py-4">
            <h2 className="font-bold text-lg">Order Details</h2>
            <div className="flex flex-row justify-between">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="border border-black  p-2">#</th>
                    <th className="border border-black p-2">Photo</th>
                    <th className="border border-black p-2">Product</th>
                    <th className="border border-black p-2">Variation</th>
                    <th className="border border-black p-2">Quantity</th>
                    <th className="border border-black p-2">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-black px-6 py-4">1</td>
                    <td className="border border-black px-6 py-4">
                      <img
                        src="https://hips.hearstapps.com/hmg-prod/images/mid-century-double-pop-up-coffee-table-walnut-white-marble-2-c-1592928072.jpg"
                        alt="photo"
                      />
                    </td>
                    <td className="border border-black px-6 py-4">
                      L shaped sofa set
                    </td>
                    <td className="border border-black px-6 py-4">demo</td>
                    <td className="border border-black px-6 py-4">1</td>
                    <td className="border border-black px-6 py-4">$121</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* Order Amount */}
          <div className="bg-[#EEEEEE] mt-8 mb-10 w-[40vh] drop-shadow-md border flex flex-col gap-8 px-3 py-4">
            <h2 className="font-bold text-lg">Order Amount</h2>
            <div className="flex flex-row justify-between">
              <table className="w-full">
                <tbody>
                  <tr>
                    <td className="border border-black px-6 py-4">
                      Subtotal :
                    </td>
                    <td className="border border-black px-6 py-4">$121</td>
                  </tr>
                  <tr>
                    <td className="border border-black px-6 py-4">
                      Shipping :
                    </td>
                    <td className="border border-black px-6 py-4">$0</td>
                  </tr>
                  <tr>
                    <td className="border border-black px-6 py-4">Tax :</td>
                    <td className="border border-black px-6 py-4">$0</td>
                  </tr>
                  <tr>
                    <td className="border border-black px-6 py-4">Coupon :</td>
                    <td className="border border-black px-6 py-4">$0</td>
                  </tr>
                  <tr>
                    <td className="border border-black px-6 py-4">Total :</td>
                    <td className="border border-black text-xl text-red-800 px-6 py-4">
                      $121
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vieworder;
