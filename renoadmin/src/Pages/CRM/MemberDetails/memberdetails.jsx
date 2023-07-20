import React from "react";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import TopHeader from "../../../UI/TopHeader/TopHeader";
import { useDispatch, useSelector } from "react-redux";
import { useLoaderData, useLocation } from "react-router-dom";
import Tabs from "./Tabs";
import Modal from '@mui/material/Modal';
import { TextField, Button } from "@mui/material";

const MemberDetails = ({ setActiveTab, setExpand }) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '30rem',
    boxShadow: 24,
    borderRadius: '20px',
    backgroundColor: 'white',
    padding: '15px 30px'
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"

      >
        <div style={style}>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            textAlign: 'center',
          }} className="text-gray-900">Amount</h2>
          <div className="my-3">
            <TextField id="outlined-basic" label="Enter Amount" fullWidth variant="outlined" />
            <div className="text-end mt-2">
              <Button color="success" variant="contained">
                Set TopUp
              </Button>
            </div>
          </div>
        </div>
      </Modal>
      <div>
        <div className="fixed flex" style={{ zIndex: "10" }}>
          <TopHeader className="fixed" head={head} />
        </div>

        <div
          className="ml-72 mt-20 bg-slate-100 rounded-2xl p-4 relative flex"
          style={{ marginTop: "107px", zIndex: "2" }}>
          <div className="pr-10">
            <div
              className="rounded"
              style={{
                width: "175px",
                height: "220px",
                border: "2px solid #EFEFEF",
                backgroundColor: "#FFFFFF",
                filter: "drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.1))",
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
          <div className="flex flex-col gap-10">
            <div className="flex flex-row justify-start gap-5 items-center">
              <div className="flex flex-row gap-2 py-3 px-4 rounded-md shadow-md bg-white">
                <label>Name :</label>
                <p>{memData.username}dummy name</p>
              </div>
              <div className="flex flex-row gap-2 py-3 px-4 rounded-md shadow-md bg-white">
                <label>Phone No :</label>
                <p>{memData.contact}+91 921681268</p>
              </div>
              <div className="flex flex-row gap-2 py-3 px-4 rounded-md shadow-md bg-white">
                <label>Email :</label>
                <p>{memData.email}dummy123@gmail.com</p>
              </div>
            </div>
            <div className="flex flex-row justify-start gap-5 items-center">
              <div className="flex flex-row gap-2 py-3 px-4 rounded-full shadow-md bg-white">
                <label>Purchased item :</label>
                <p>{memData.purchase}12</p>
              </div>
              <div className="flex flex-row gap-2 py-3 px-4 rounded-full shadow-md bg-white">
                <label>Payment History :</label>
                <p>{memData.payment}$1213</p>
              </div>
              <div className="flex flex-row gap-2 py-3 px-4 rounded-full shadow-md bg-white">
                <label>Reward Points :</label>
                <p>{memData.points}1212</p>
              </div>
            </div>
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row gap-2 py-3 px-4 rounded-full shadow-md bg-white">
                <label>Cashback Points :</label>
                <p>{memData.about}122</p>
              </div>
              <div className="flex flex-row gap-2">
                <button onClick={handleOpen} className="px-4 py-2 text-white rounded-md cursor-pointer bg-lime-500 hover:bg-lime-700">
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
    </>

  );
};

export default MemberDetails;
