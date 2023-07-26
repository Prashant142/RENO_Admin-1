import React, { useState, useEffect } from "react";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const Product_price = (prop) => {
  // let [selectedvalue, setSelectedValue] = useState('');
  let [heading, setHeading] = useState('Product');
  useEffect(() => {
    if (prop.checkedcat == 'prodcat') {
      setHeading('Product');
      document.getElementById('product-details').style.display = 'block';
    }
    else if (prop.checkedcat == 'servcat') {
      setHeading('Service')
      document.getElementById('product-details').style.display = 'none';
    }
    else {
      setHeading('Product');
      document.getElementById('product-details').style.display = 'block';
    }
  }, [prop])

  return (
    <div>
      <div className="bg-[#EEEEEE] p-5 rounded-md drop-shadow-md border w-[80vh]">
        <p className="pb-5">{heading} Information</p>
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
            <div id="product-details">
              <div className="flex flex-row justify-between">
                <label>Discount Date Range : </label>
                <div className="flex justify-between gap-3 ps-3">
                  <div>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={['DatePicker']}>
                        <DatePicker slotProps={{ textField: { size: 'small' } }} label="Start Date" />
                      </DemoContainer>
                    </LocalizationProvider>
                  </div>
                  <div>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={['DatePicker']}>
                        <DatePicker slotProps={{ textField: { size: 'small' } }} label="End Date" />
                      </DemoContainer>
                    </LocalizationProvider>
                  </div>
                </div>
              </div>
              <div className="flex flex-row mt-5 justify-between">
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
              <div className="flex flex-row mt-5 justify-between">
                <label>Quantity :</label>
                <input
                  className="px-4 py-2 drop-shadow-md rounded-md w-2/3"
                  type="text"
                />
              </div>
              <div className="flex flex-row mt-5 justify-between">
                <label>SKU :</label>
                <input
                  className="px-4 py-2 drop-shadow-md rounded-md w-2/3"
                  type="text"
                />
              </div>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Product_price;
