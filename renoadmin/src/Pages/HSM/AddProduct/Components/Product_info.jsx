import React, { useEffect, useState } from "react";

const Product_info = ({ selectedvalue }) => {
  let [checkcat, setCheckCat] = useState('')
  useEffect(() => {
    let itemCategory = document.getElementById('item-category');
    let prodCategory = document.getElementById('prodcat');
    let servCategory = document.getElementById('servcat');
    servCategory.style.display = 'none'
    prodCategory.style.display = 'none'
    itemCategory.addEventListener('change', () => {
      switch (itemCategory.value) {
        case 'servcat':
          servCategory.style.display = 'flex'
          prodCategory.style.display = 'none'
          break;
        case 'prodcat':
          prodCategory.style.display = 'flex'
          servCategory.style.display = 'none'
          break;
        default:
          prodCategory.style.display = 'none'
          servCategory.style.display = 'none'
          break;

      }
      selectedvalue(itemCategory.value);
      setCheckCat(itemCategory.value);
    })
  }, [])


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
              <label>Item Category : </label>
              <select id="item-category" className="px-4 py-2 drop-shadow-md rounded-md w-[65%] ">
                <option >Select Category</option>
                <option value="prodcat">Product Category</option>
                <option value="servcat">Service Category</option>
              </select>
            </div>
            <div id="prodcat" className="flex flex-row justify-between">
              <label>Product Category : </label>
              <select id="" className="px-4 py-2 drop-shadow-md rounded-md w-[65%] ">
                <option >Select Category</option>
                <option >Product Category 1</option>
                <option >Product Category 2</option>
              </select>
            </div>
            <div id="servcat" className="flex flex-row justify-between">
              <label>Services Category : </label>
              <select id="" className="px-4 py-2 drop-shadow-md rounded-md w-[65%] ">
                <option >Select Category</option>
                <option >Service Category 1</option>
                <option >Service Category 2</option>
              </select>
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
