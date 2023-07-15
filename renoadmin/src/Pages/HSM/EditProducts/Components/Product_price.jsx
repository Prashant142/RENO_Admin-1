import React from "react";

const Product_price = () => {
  return (
    <div>
      <div className="bg-[#EEEEEE] p-5 rounded-md drop-shadow-md border w-[80vh]">
        <p className="pb-5">Product Information</p>
        <hr />
        <form className="pt-5" action="submit">
          <div className="flex flex-col gap-5">
            <div className="flex flex-row justify-between">
              <label>Unit price :</label>
              <input
                className="px-4 py-2 drop-shadow-md rounded-md w-2/3"
                type="text"
              />
            </div>
            <div className="flex flex-row justify-between">
              <label>Discount Date Range : </label>
              <input
                className="px-4 py-2 drop-shadow-md rounded-md w-2/3"
                type="text"
              />
            </div>
            <div className="flex flex-row justify-between">
              <label>Discount :</label>
              <div className="flex flex-row gap-5">
                <input
                  className="px-4 py-2 drop-shadow-md rounded-md w-full"
                  type="text"
                />
                <select
                  name="discount"
                  className="rounded-md drop-shadow-md px-5 w-48"
                  id="">
                  <option value="amount">Amount</option>
                  <option value="percent">Percent</option>
                </select>
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <label>Quantity :</label>
              <input
                className="px-4 py-2 drop-shadow-md rounded-md w-2/3"
                type="text"
              />
            </div>
            <div className="flex flex-row justify-between">
              <label>SKU :</label>
              <input
                className="px-4 py-2 drop-shadow-md rounded-md w-2/3"
                type="text"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product_price;
