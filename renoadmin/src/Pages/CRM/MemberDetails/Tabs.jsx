import { useState } from "react";
import Table from "../../../UI/CommonTable/Table";
import InputField from "./InternalNote";
import { useNavigate } from "react-router-dom";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const ProfilePhoto = ({ picUrl }) => {
    return (
      <div>
        <img className="w-12 h-12 rounded-full" src={picUrl} alt="photo" />
      </div>
    );
  };
  const order_history = [
    {
      pic_url: "somepic.png",
      product_name: "Test Product",
      amount: "199",
      payment_method: "Demopay",
      status: "Delivered",
      date: "19-02-2023",
    },
    {
      pic_url: "somepic.png",
      product_name: "Test Product",
      amount: "199",
      payment_method: "Demopay",
      status: "Delivered",
      date: "19-02-2023",
    },
    {
      pic_url: "somepic.png",
      product_name: "Test Product",
      amount: "199",
      payment_method: "Demopay",
      status: "Delivered",
      date: "19-02-2023",
    },
  ];

  const reward_history = [
    {
      items: "Demo Item",
      date: "19-02-2023",
      redeem_points: "199",
      status: "Redeemed",
    },
    {
      items: "Demo Item",
      date: "19-02-2023",
      redeem_points: "199",
      status: "Redeemed",
    },
    {
      items: "Demo Item",
      date: "19-02-2023",
      redeem_points: "199",
      status: "Redeemed",
    },
    {
      items: "Demo Item",
      date: "19-02-2023",
      redeem_points: "199",
      status: "Redeemed",
    },
    {
      items: "Demo Item",
      date: "19-02-2023",
      redeem_points: "199",
      status: "Redeemed",
    },
  ];

  const columns_order = [
    {
      header: "Photo",
      accessor: "pic_url",
    },
    {
      header: "Product Name",
      accessor: "product_name",
    },
    {
      header: "Amount",
      accessor: "amount",
    },
    {
      header: "Payment Method",
      accessor: "payment_method",
    },
    {
      header: "Status",
      accessor: "status",
    },
    {
      header: "Date",
      accessor: "date",
    },
    {
      header: "Action",
      accessor: "action",
    },
  ];

  const columns_reward = [
    {
      header: "Items",
      accessor: "items",
    },
    {
      header: "Date",
      accessor: "date",
    },
    {
      header: "Redeem Points",
      accessor: "redeem_points",
    },
    {
      header: "Status",
      accessor: "status",
    },
  ];

  const navigate = useNavigate();
  const viewOrder = () => {
    navigate("/home/viewOrder");
  };

  const OrderDetails = () => {
    return (
      <button
        className="bg-blue-500 px-2 py-2 rounded-l text-white coursor-pointer hover:bg-blue-600"
        onClick={viewOrder}>
        View Order
      </button>
    );
  };

  const data_order = order_history.map((user) => ({
    pic_url: <ProfilePhoto picUrl={user.pic_url} />,
    product_name: user.product_name,
    amount: `$ ${user.amount}`,
    payment_method: user.payment_method,
    status: user.status,
    date: user.date,
    action: <OrderDetails />,
  }));

  const data_reward = reward_history.map((user) => ({
    items: user.items,
    date: user.date,
    redeem_points: user.redeem_points,
    status: user.status,
  }));

  const pageSize_order = 4;
  const pageSize_reward = 4;

  return (
    <div className="p-4">
      <div className="flex space-x-4">
        <button
          className={`py-2 px-4 rounded ${activeTab === 1
            ? "bg-[#8FC743] text-white"
            : "bg-gray-200 text-gray-700"
            }`}
          onClick={() => handleTabClick(1)}>
          Order History
        </button>
        <button
          className={`py-2 px-4 rounded ${activeTab === 2
            ? "bg-[#8FC743] text-white"
            : "bg-gray-200 text-gray-700"
            }`}
          onClick={() => handleTabClick(2)}>
          Reward Point History
        </button>
        <button
          className={`py-2 px-4 rounded ${activeTab === 3
            ? "bg-[#8FC743] text-white"
            : "bg-gray-200 text-gray-700"
            }`}
          onClick={() => handleTabClick(3)}>
          Internal Notes
        </button>
      </div>

      {activeTab === 1 && (
        <div className="mt-4 mb-10 border overflow-y-auto">
          <div className="mb-10">
            <Table columns={columns_order} data={data_order} />
          </div>
        </div>
      )}
      {activeTab === 2 && (
        <div className="mt-4 mb-10 border overflow-y-auto">
          <div className="mb-10">
            <Table columns={columns_reward} data={data_reward} />
          </div>
        </div>
      )}
      {activeTab === 3 && (
        <div className="mt-4 mb-10 border">
          <InputField />
        </div>
      )}
    </div>
  );
};

export default Tabs;
