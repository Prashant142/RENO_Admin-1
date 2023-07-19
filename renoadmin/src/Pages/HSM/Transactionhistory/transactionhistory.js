import React from "react";
import Table from "../../../UI/CommonTable/Table";
import { deleteIcon, images } from "../Assets/index";
import TopHeader from "../../../UI/TopHeader/TopHeader";
import { useDispatch, useSelector } from "react-redux";

import { useEffect, useState } from "react";
import { Grid } from "react-loader-spinner";
import { HSM_transaction } from "../../User_Management/features/userSlice";

const Action = () => {
  return (
    <div className="w-6 h-6 flex gap-3 cursor-pointer">
      {/* <img src={deleteIcon} alt="Delete" /> */}
    </div>
  );
};

const Photo = ({ picUrl }) => {
  return (
    <div>
      <img className="w-14 h-14 rounded" src={picUrl} alt="Photo" />
    </div>
  );
};

const Purchases = ({ setActiveTab, setExpand }) => {
  // setExpand("homeService");
  setActiveTab("transactionHistory");
  const head = "Transaction/Purchase History";
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const transactionData = useSelector(
    (state) => state.userManagement.hsm_transaction
  );

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      await dispatch(HSM_transaction());
      setLoading(false);
    };
    fetchUserData();
  }, [dispatch]);

  const Options = () => {
    return (
      <button
        className="bg-blue-500 px-2 py-2 rounded-l text-white coursor-pointer hover:bg-blue-600"
      // onClick={viewOrder}
      >
        View Order
      </button>
    );
  };

  const columns = [
    {
      header: "S No.",
      accessor: "serialno",
    },
    {
      header: "Date",
      accessor: "date",
    },
    {
      header: "Num of Products",
      accessor: "productcount",
    },
    {
      header: "Customer",
      accessor: "customer",
    },
    {
      header: "Amount",
      accessor: "amount",
    },
    {
      header: "Delivery Status",
      accessor: "delivery",
    },
    {
      header: "Payment Status",
      accessor: "paymentstatus",
    },
    {
      header: "Options",
      accessor: "options",
    },
  ];

  const data = transactionData.map((user) => ({
    serialno: 1,
    date: "13-Jun-2023 03:43 am",
    productcount: 2,
    customer: "johnaverps averps",
    amount: "$ 122",
    delivery: "Pending",
    paymentstatus: "Unpaid",
    options: <Options />,
    // action: <Action />,
  }));

  // Number of Pages to be display on a single page.
  const pageSize = 4;

  return (
    <div>
      <div className="flex fixed z-10">
        <TopHeader className="fixed" head={head} />
      </div>
      {loading ? (
        <div className="fixed inset-0 bg-gray-700 opacity-80 flex justify-center items-center z-50">
          <Grid
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="grid-loading"
            radius="12.5"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : null}
      <div className="  ml-72 mt-28 w-[75vw] relative">
        {transactionData.length > 0 ? (
          <Table columns={columns} data={data} pageSize={pageSize} />
        ) : (
          <>
            <Table columns={columns} data={data} pageSize={pageSize} />
            <div className="flex ml-5 justify-center w-full mt-40">
              <h2 className="text-4xl font-bold text-gray-500">No Data!</h2>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Purchases;
