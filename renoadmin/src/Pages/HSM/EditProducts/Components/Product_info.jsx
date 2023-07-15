import React from "react";

const Product_info = () => {
  return (
    <div>
      <div className="bg-[#EEEEEE] p-5 rounded-md drop-shadow-md border w-[80vh]">
        <p className="pb-5">Product Information</p>
        <hr />
        <form className="pt-5" action="submit">
          <div className="flex flex-col gap-5">
            <div className="flex flex-row justify-between">
              <label>Product Name :</label>
              <input
                className="px-4 py-2 drop-shadow-md rounded-md w-[75%]"
                type="text"
              />
            </div>
            <div className="flex flex-row justify-between">
              <label>Category : </label>
              <input
                className="px-4 py-2 drop-shadow-md rounded-md w-[75%]"
                type="text"
              />
            </div>
            <div className="flex flex-row justify-between">
              <label>Unit :</label>
              <input
                className="px-4 py-2 drop-shadow-md rounded-md w-[75%]"
                type="text"
              />
            </div>
            <div className="flex flex-row justify-between">
              <label>Tags :</label>
              <input
                className="px-4 py-2 drop-shadow-md rounded-md w-[75%]"
                type="text"
              />
            </div>
            <div className="flex flex-row justify-between">
              <label>Reward Points :</label>
              <input
                className="px-4 py-2 drop-shadow-md rounded-md w-[75%]"
                type="text"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product_info;
