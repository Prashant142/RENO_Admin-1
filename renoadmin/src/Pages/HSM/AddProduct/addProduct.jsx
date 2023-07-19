import { useEffect, useState } from "react";
import React from "react";
import TopHeader from "../../../UI/TopHeader/TopHeader";
import Product_info from "./Components/Product_info";
import Product_img from "./Components/Product_img";
import Product_price from "./Components/Product_price";
import Description from "./Components/Description_sec";
import Other from "./Components/Other";

const AddProduct = ({ setExpand, setActiveTab }) => {
  // setExpand("homeService");
  setActiveTab("productList");
  const head = "Add Product";
  let [checkcat, setCheckCat] = useState('');
  const updateCheckCat = (value) => {
    setCheckCat(value);
  };


  return (
    <div className="flex-grow px-2 pe-4">
      <div className="flex sticky top-0 z-10">
        <TopHeader className="fixed" head={head} />
      </div>

      <div className=" ml-80 mb-10 relative " style={{ marginTop: "120px" }}>
        <div className="flex gap-5 flex-row">
          <div className="flex flex-col gap-5">
            <Product_info selectedvalue={updateCheckCat} />
            <Product_img />
            <Product_price checkedcat={checkcat} />
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

export default AddProduct;
