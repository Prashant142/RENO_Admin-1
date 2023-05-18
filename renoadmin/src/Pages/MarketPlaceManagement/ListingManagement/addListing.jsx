import { useState } from "react";
import React from "react";
import TopHeader from "../../../UI/TopHeader/TopHeader";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addNewListing } from "../../User_Management/features/userSlice";
import { Link, useNavigate } from "react-router-dom";

const AddListing = ({ setExpand, setActiveTab }) => {
  // setExpand("marketPlace");
  setActiveTab("listingManagement");
  const head = "Add Listing";
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [content, setContent] = useState("");
  const [images, setImages] = useState([]);

  const HandleSubmit = (event) => {
    event.preventDefault();
    const navigate = useNavigate();
    const formData = new FormData();
    formData.append("service", title);
    formData.append("rate", price);
    formData.append("desc", content);
    images.forEach((image, index) => {
      formData.append(`pic_url`, image);
    });

    dispatch(addNewListing(formData))
      .then(() => {
        navigate("/home/listingManagement");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handlePhotoUpload = (event) => {
    const files = event.target.files;
    const uploadedImages = [];
    for (let i = 0; i < files.length; i++) {
      uploadedImages.push(files[i]);
    }
    setImages(uploadedImages);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  return (
    <div>
      <div className="flex fixed z-10">
        <TopHeader className="fixed" head={head} />
      </div>

      <div className=" ml-80 mb-10 relative" style={{ marginTop: "120px" }}>
        <form onSubmit={HandleSubmit}>
          <label className="grid mt-5">
            Service Name
            <input
              type="text"
              placeholder="Electician Services"
              id="title"
              className="rounded w-[100vh] outline-none"
              style={{
                height: "50px",
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

          <div className="grid grid-cols-2 w-[100vh] gap-2 mt-5">
            <label className="grid">
              Price
              <input
                id="label"
                class="outline-none  w-[49vh] rounded"
                placeholder="$000.00"
                style={{
                  height: "50px",
                  paddingLeft: "5px",
                  border: "2px solid 	#e6f7fe",
                  marginTop: "5px",
                  fontSize: "14px",
                }}
                value={price}
                onChange={handlePriceChange}
                required
              />
            </label>
            <label className="grid w-[49vh]">
              Upload Photos
              <input
                style={{
                  height: "50px",
                  paddingLeft: "0px",
                  border: "2px solid 	#e6f7fe",
                  marginTop: "5px",
                  fontSize: "14px",
                }}
                class="file:bg-black file:px-6 file:py-3 file:border-none file:rounded file:text-white file:cursor-pointer placeholder-transparent mt-3 rounded appearance-none placeholder-transparent"
                type="file"
                accept="image/*"
                multiple
                onChange={handlePhotoUpload}
                placeholder=""
                required
              />
            </label>
            <div style={{ marginLeft: "600px", width: "600px" }}>
              {images && images.length > 0 && (
                <div className="grid grid-cols-4 gap-3">
                  {images.map((image, index) => (
                    <img
                      key={index}
                      src={URL.createObjectURL(image)} // replace with your image source
                      alt={image.name} // replace with your image alt text
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        marginRight: "10px",
                      }} // set width, height, object-fit, and margin-right styles
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          <label className="grid mt-5">
            Description
            <textarea
              id="content"
              placeholder="Enter Description"
              className="rounded w-[100vh] outline-none pt-2"
              style={{
                height: "170px",
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
          {/* </div> */}
        </form>
        <button
          className="rounded bg-lime-600 hover:bg-lime-700 mt-10"
          style={{
            width: "170px",
            height: "55px",
            color: "white",
          }}
          type="submit">
          Save
        </button>
        <button
          className="rounded bg-black hover:bg-gray-800 mt-10"
          style={{
            width: "170px",
            height: "55px",
            color: "white",
            marginLeft: "30px",
          }}
          type="submit">
          <Link to="/home/listingManagement">Cancel</Link>
        </button>
      </div>
    </div>
  );
};

export default AddListing;
