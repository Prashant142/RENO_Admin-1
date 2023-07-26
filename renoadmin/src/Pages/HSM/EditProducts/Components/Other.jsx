import React from "react";

const Other = () => {
  return (
    <div className="flex flex-col gap-5 ">
      <div className="bg-[#EEEEEE] p-5 rounded-md drop-shadow-md border">
        <p className="pb-5">Low Stock Quantity Warning</p>
        <hr />
        <form className="flex  flex-col gap-3 mt-3">
          <label>Quantity</label>
          <input
            className="px-4 py-2 drop-shadow-md rounded-md w-full"
            type="text"
          />
        </form>
      </div>
      <div className="bg-[#EEEEEE] p-5 rounded-md drop-shadow-md border">
        <p className="pb-5">Featured</p>
        <hr />
        <form className="flex  flex-row  gap-10 mt-3">
          <label>Status</label>
          <input type="checkbox" />
        </form>
      </div>
      <div className="bg-[#EEEEEE] p-5 rounded-md drop-shadow-md border">
        <p className="pb-5">Estimate Shipping Time</p>
        <hr />
        <form className="flex  flex-col gap-3 mt-3">
          <label>Shipping Days</label>
          <input
            placeholder="Shipping days"
            className="px-4 py-2 drop-shadow-md rounded-md w-full"
            type="text"
          />
        </form>
      </div>
    </div>
  );
};

export default Other;
