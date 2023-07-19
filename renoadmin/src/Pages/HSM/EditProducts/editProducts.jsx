import { useState } from "react";
import React from "react";
import TopHeader from "../../../UI/TopHeader/TopHeader";
import Product_info from "./Components/Product_info";
import Product_img from "./Components/Product_img";
import Product_price from "./Components/Product_price";
import Description from "./Components/Description_sec";
import Other from "./Components/Other";

const EditProducts = ({ setExpand, setActiveTab }) => {
  // setExpand("homeService");
  setActiveTab("productList");
  const head = "Edit Product";

  return (
    <div>
      <div className="flex fixed z-10">
        <TopHeader className="fixed" head={head} />
      </div>

      <div className=" ml-80 mb-10 relative " style={{ marginTop: "120px" }}>
        <div className="flex gap-5 flex-row">
          <div className="flex flex-col gap-5">
            <Product_info />
            <Product_img />
            <Product_price />
            <Description />
          </div>
          <Other />
        </div>
        <div className="w-full bg-[#EEEEEE] drop-shadow-md mt-10 px-4 py-4 rounded-lg ">
          <button className="px-4 py-2 bg-[#8FC743] hover:bg-lime-600 drop-shadow-md cursor-pointer text-white rounded-md">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProducts;
