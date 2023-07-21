import { useState } from "react";
import React from "react";
import TopHeader from "../../../UI/TopHeader/TopHeader";
import axios from "axios";
import { responsiveFontSizes } from "@mui/material";
import { useDispatch } from "react-redux";
import { updateServicePackage } from "../../User_Management/features/userSlice";
import { Link, useNavigate } from "react-router-dom";

const EditServicePackage = ({ setExpand, setActiveTab }) => {
    // setExpand("marketPlace");
    setActiveTab("servicePackageManagement");
    const head = "Edit Service Package";
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [images, setImages] = useState([]);

    const handleSubmit = (event) => {
        console.log("clicked")
        const formData = new FormData();
        formData.append("prod_servicePackage", title);

        dispatch(updateServicePackage(formData));
        navigate('/home/servicePackageList')
    };


    return (
        <div>
            <div className="flex fixed z-10">
                <TopHeader className="fixed" head={head} />
            </div>

            <div className=" ml-72 mb-10 relative" style={{ marginTop: "120px" }}>
                <form onSubmit={handleSubmit}>
                    <label className="grid mt-5">Service Category List :
                        <select id=""
                            style={{
                                height: "50px",
                                backgroundColor: "#e5ecff",
                                fontSize: "15px",
                            }}
                            className="px-4 py-2 mt-3 drop-shadow-md rounded-md  ">
                            <option >Select Category</option>
                            <option >Category 1</option>
                            <option >Category 2</option>
                        </select>
                    </label>
                    <div>
                        <label className="grid mt-5" style={{ fontSize: "15px" }}>
                            Service Package Price
                            <input
                                class="rounded w-[100vh] outline-none"
                                style={{
                                    height: "50px",
                                    paddingLeft: "10px",
                                    border: "2px solid 	#e6f7fe",
                                    marginTop: "5px",
                                    fontSize: "15px",
                                }}
                                type="number"
                                multiple
                                placeholder="Enter Price"
                                required
                            />
                        </label>
                    </div>
                    <div style={{ width: "600px", marginTop: "10px" }}>
                        {images && images.length > 0 && (
                            <div className="grid grid-cols-6 gap-2">
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

                    <button
                        className="rounded mt-10 bg-lime-600 hover:bg-lime-700"
                        style={{
                            width: "170px",
                            height: "55px",
                            color: "white",
                        }}
                        type="submit"
                        onSubmit={handleSubmit}>
                        Save
                    </button>
                    <button
                        className="rounded mt-10 bg-black hover:bg-gray-800"
                        style={{
                            width: "170px",
                            height: "55px",
                            color: "white",
                            marginLeft: "30px",
                        }}
                        type="submit">
                        <Link to='/home/servicePackageList'>Cancel</Link>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditServicePackage;
