import { useState } from "react";
import React from "react";
import TopHeader from "../../../UI/TopHeader/TopHeader";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addNewShowcase } from "../../User_Management/features/userSlice";
import { Link, useNavigate } from "react-router-dom";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import DisabledByDefaultRoundedIcon from "@mui/icons-material/DisabledByDefaultRounded";

const AddNewShowcase = ({ setExpand, setActiveTab }) => {
  // setExpand("showcaseManagement");
  setActiveTab("projectList");
  const head = "Add New Showcase";
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [images, setImages] = useState([]);
  const [userType, setUserType] = useState("");
  const [rate, setRate] = useState("");

  const handleSubmit = (event) => {
    // event.preventDefault();
    console.log("Hello");
    const formData = new FormData();
    formData.append("proj_name", title);
    formData.append("proj_category", userType);
    formData.append("rate", rate);
    formData.append("details", content);
    images.forEach((image, index) => {
      formData.append(`pic`, image);
    });

    dispatch(addNewShowcase(formData));
    navigate("/home/projectList");
  };

  const handleImageUpload = (event) => {
    const uploadedImages = [];
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
      uploadedImages.push(files[i]);
    }
    setImages(uploadedImages);
  };

  const handleRemoveImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);

    // fileInputRef.current.value = newImages.length;
  };

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const productCategory = [
    "Elecrical",
    "Plumbing",
    "Air con service",
    "Handyman Services",
    "Carpentry Services",
    "Tiling Works",
    "Ceiling and Partition work",
    "Painting Works",
    "Aluminium and metal work",
    "Vinyl Flooring",
    "Glass Works",
    "Dismantling and Disposal",
  ];

  return (
    <div>
      <div className="flex fixed z-10">
        <TopHeader className="fixed" head={head} />
      </div>

      <div
        className=" ml-80 mb-10 relative"
        style={{ marginTop: "120px" }}
      >
        <form onSubmit={handleSubmit}>
          <label className="grid mt-5">
            Project Title
            <input
              type="text"
              placeholder="Enter Title"
              id="title"
              className="rounded outline-none"
              style={{
                height: "50px",
                // width: "1210px",
                paddingLeft: "10px",
                border: "2px solid 	#e6f7fe",
                marginTop: "5px",
                fontSize: "15px",
              }}
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              required
            />
          </label>

          <div className="grid grid-cols-2 gap-4 mt-5">
            <label className="grid pr-6">
              Category
              <select
                id="label"
                name="label"
                class="outline-none  rounded"
                style={{
                  height: "50px",
                  // width: "590px",
                  paddingLeft: "5px",
                  border: "2px solid 	#e6f7fe",
                  marginTop: "5px",
                  fontSize: "14px",
                }}
                value={userType}
                onChange={handleUserTypeChange}
              >
                <option value="">Select Catagory</option>
                {productCategory.map((item) => {
                  return <option value={`${item}`}>{item}</option>;
                })}
              </select>
            </label>
            <label className="grid pl-6">
              Project Rate
              <div className="flex flex-row">
                <select style={{
                  height: "50px",
                  // width: "586px",
                  paddingLeft: "10px",
                  border: "2px solid 	#e6f7fe",
                  marginTop: "5px",
                  fontSize: "14px",
                }}>
                  <option value="$">$</option>
                  <option value="€">€</option>
                  <option value="£">£</option>
                </select>
                <input
                  type="number"
                  value={rate}
                  className="outline-none  rounded"
                  placeholder="000.00"
                  style={{
                    height: "50px",
                    // width: "586px",
                    paddingLeft: "10px",
                    border: "2px solid 	#e6f7fe",
                    marginTop: "5px",
                    fontSize: "14px",
                  }}
                  onChange={(event) => setRate(event.target.value)}
                  required
                />
              </div>
            </label>

            {/* <div> */}
            <label className="grid mt-5" style={{ fontSize: "15px" }}>
              Main Photo
              <input
                className=" file:bg-black file:px-6 file:py-3 file:border-none file:rounded file:text-white file:cursor-pointer placeholder-transparent mt-3 rounded appearance-none placeholder-transparent"
                style={{ border: "2px solid #e6f7fe" }}
                type="file"
                placeholder=""
                accept="image/*"
                onChange={handleImageUpload}
                required
              />
            </label>
            <label className="grid mt-5" style={{ fontSize: "15px" }}>
              Slider Photos
              <input
                className=" file:bg-black file:px-6 file:py-3 file:border-none file:rounded file:text-white file:cursor-pointer placeholder-transparent mt-3 rounded appearance-none placeholder-transparent"
                style={{ border: "2px solid #e6f7fe" }}
                type="file"
                placeholder=""
                accept="image/*"
                onChange={handleImageUpload}
                required
                multiple
              />
            </label>
            {/* </div> */}
          </div>
          <div style={{ width: "600px", marginTop: "10px" }}>
            {images && images.length > 0 && (
              <div className="grid grid-cols-6 gap-2">
                {images.map((image, index) => (
                  <div key={index} className="relative">
                    <img
                      src={URL.createObjectURL(image)} // replace with your image source
                      alt={image.name} // replace with your image alt text
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        marginRight: "10px",
                      }} // set width, height, object-fit, and margin-right styles
                    />
                    <button
                      className="absolute top-0 text-white"
                      style={{ right: 5 }}
                      onClick={() => handleRemoveImage(index)}>
                      <DisabledByDefaultRoundedIcon style={{ fill: "red" }} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div style={{ fontSize: "10px", marginTop: "8px" }}>
            <ul className="list-disc ml-3 text-gray-500">
              <li>Allowed banner image extension .jpg | .jpeg | .png</li>
              <li>
                Max banner image file size <a className="text-red-500">5MB</a>
              </li>
              <li>
                Recommended Banner image size{" "}
                <a className="text-red-500">1900px * 700px</a>
              </li>
            </ul>
          </div>

          <label className="grid mt-5">
            Project Details
            <textarea
              id="content"
              placeholder="Enter Details"
              className="rounded outline-none pt-2"
              style={{
                height: "170px",
                // width: "1210px",
                border: "2px solid #e6f7fe",
                paddingLeft: "10px",
                paddingTop: "20px",
                fontSize: "15px",
                marginTop: "5px",
              }}
              value={content}
              onChange={(event) => setContent(event.target.value)}
              required
            />
          </label>
          {/* <div> */}
          <label className="grid mt-5">
            Project Subtitle
            <input
              type="text"
              placeholder="Enter Title"
              id="sub-title"
              className="rounded outline-none"
              style={{
                height: "50px",
                // width: "1210px",
                paddingLeft: "10px",
                border: "2px solid 	#e6f7fe",
                marginTop: "5px",
                fontSize: "15px",
              }}
              // value={subTitle}
              onChange={(event) => setTitle(event.target.value)}
              required
            />
          </label>
          <label className="grid mt-5">
            Project Description
            <textarea
              id="content"
              placeholder="Enter Details"
              className="rounded outline-none pt-2"
              style={{
                height: "170px",
                // width: "1210px",
                border: "2px solid #e6f7fe",
                paddingLeft: "10px",
                paddingTop: "20px",
                fontSize: "15px",
                marginTop: "5px",
              }}
              // value={content}
              onChange={(event) => setContent(event.target.value)}
              required
            />
          </label>
          <label className="grid mt-5">
            Project Sub Description
            <textarea
              id="content"
              placeholder="Enter Details"
              className="rounded outline-none pt-2"
              style={{
                height: "170px",
                // width: "1210px",
                border: "2px solid #e6f7fe",
                paddingLeft: "10px",
                paddingTop: "20px",
                fontSize: "15px",
                marginTop: "5px",
              }}
              // value={content}
              onChange={(event) => setContent(event.target.value)}
              required
            />
          </label>
          {/* <div> */}
          <label className="grid mt-5" style={{ fontSize: "15px" }}>
            Sub Slider Photos
            <input
              className=" file:bg-black file:px-6 file:py-3 file:border-none file:rounded file:text-white file:cursor-pointer placeholder-transparent mt-3 rounded appearance-none placeholder-transparent"
              style={{ border: "2px solid #e6f7fe" }}
              type="file"
              placeholder=""
              accept="image/*"
              onChange={handleImageUpload}
              required
              multiple
            />
          </label>
          <label className="grid mt-5" style={{ fontSize: "15px" }}>
            Quatation Photo
            <input
              className=" file:bg-black file:px-6 file:py-3 file:border-none file:rounded file:text-white file:cursor-pointer placeholder-transparent mt-3 rounded appearance-none placeholder-transparent"
              style={{ border: "2px solid #e6f7fe" }}
              type="file"
              placeholder=""
              accept="image/*"
              onChange={handleImageUpload}
              required
            />
          </label>
          {/* </div> */}
          <div style={{ width: "600px", marginTop: "10px" }}>
            {images && images.length > 0 && (
              <div className="grid grid-cols-6 gap-2">
                {images.map((image, index) => (
                  <div key={index} className="relative">
                    <img
                      src={URL.createObjectURL(image)} // replace with your image source
                      alt={image.name} // replace with your image alt text
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        marginRight: "10px",
                      }} // set width, height, object-fit, and margin-right styles
                    />
                    <button
                      className="absolute top-0 text-white"
                      style={{ right: 5 }}
                      onClick={() => handleRemoveImage(index)}>
                      <DisabledByDefaultRoundedIcon style={{ fill: "red" }} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
          <button
            className="rounded mt-10 bg-lime-600 hover:bg-lime-700 "
            style={{
              width: "170px",
              height: "55px",
              color: "white",
            }}
            type="submit"
            onSubmit={handleSubmit}
          >
            Publish
          </button>
          {/* <button
            className="rounded mt-10 bg-black hover:bg-gray-800"
            style={{
              // backgroundColor: "black",
              width: "170px",
              height: "55px",
              color: "white",
              marginLeft: "30px",
            }}>
            Draft
          </button> */}
          <button
            className="rounded mt-10 bg-amber-600 hover:bg-amber-700"
            style={{
              // backgroundColor: "black",
              width: "170px",
              height: "55px",
              color: "white",
              marginLeft: "30px",
            }}
          >
            <Link to="/home/projectList">Back</Link>
          </button>
        </form>
        {/* </div> */}
      </div >
    </div >
  );
};

export default AddNewShowcase;
