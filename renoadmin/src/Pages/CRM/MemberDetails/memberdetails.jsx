import React from "react";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import TopHeader from "../../../UI/TopHeader/TopHeader";
import { useDispatch, useSelector } from "react-redux";
import { useLoaderData, useLocation } from "react-router-dom";
import Tabs from "./Tabs";

const MemberDetails = ({ setActiveTab, setExpand }) => {
  setActiveTab("customerRelationship");
  const head = "Member Details";
  const location = useLocation();
  const memData = location.state;

  const handleExport = () => {
    console.log("Clicked export");
    fetch(
      `http://139.59.236.50:8000/exportmember?usname=${memData.username}&file_format=json`
    )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="fixed flex" style={{ zIndex: "10" }}>
        <TopHeader className="fixed" head={head} />
      </div>

      <div
        className="ml-72 mt-20 relative flex"
        style={{ marginTop: "107px", zIndex: "2" }}>
        <div className="pr-10">
          <div
            className="rounded"
            style={{
              width: "175px",
              height: "220px",
              border: "2px solid #EFEFEF",
              backgroundColor: "#FFFFFF",
              filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
            }}>
            <img
              style={{ width: "150px", marginLeft: "10px", marginTop: "10px" }}
              src={`${memData.picUrl}`}
              alt=""
            />
            <div
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "2px",
                fontWeight: "bold",
                display: "flex",
                justifyContent: "center",
              }}>
              {memData.username}
            </div>
            <div
              className="text-xs text-gray-500"
              style={{ marginLeft: "33px" }}>
              Hair Loss Problem
            </div>
          </div>
        </div>

        {/* Members details data */}
        <div className="flex flex-col gap-16">
          <div className="flex flex-row justify-center gap-8 items-center">
            <div className="flex flex-row gap-2">
              <label>Name :</label>
              <p>{memData.username}dummy name</p>
            </div>
            <div className="flex flex-row gap-2">
              <label>Phone No :</label>
              <p>{memData.contact}+91 921681268</p>
            </div>
            <div className="flex flex-row gap-2">
              <label>Email :</label>
              <p>{memData.email}dummy123@gmail.com</p>
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-2">
              <label>Purchased item :</label>
              <p>{memData.purchase}12</p>
            </div>
            <div className="flex flex-row gap-2">
              <label>Payment History :</label>
              <p>{memData.payment}$1213</p>
            </div>
            <div className="flex flex-row gap-2">
              <label>Reward Points :</label>
              <p>{memData.points}1212</p>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-2">
              <label>Cashback Points :</label>
              <p>{memData.about}122</p>
            </div>
            <div className="flex flex-row gap-2">
              <button className="px-4 py-2 text-white rounded-md cursor-pointer bg-lime-500 hover:bg-lime-700">
                Topup
              </button>
            </div>
            <div className="flex flex-row gap-2">
              <p
                onClick={handleExport}
                href={`http://139.59.236.50:8000/exportmember?usname=${memData.username}&file_format=csv`}
                className="px-4 py-2 rounded-md cursor-pointer text-white bg-amber-600 hover:bg-amber-700">
                Export Members
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="ml-72" style={{ marginTop: "100px", zIndex: -1 }}>
        <Tabs />
      </div>
    </div>
  );
};

export default MemberDetails;
