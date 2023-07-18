import React from "react";
import { useEffect, useState } from "react";
// import { Grid } from "react-loader-spinner";
import Table from "../../../UI/CommonTable/Table";
import { deleteIcon, edit } from "../Assets/index";
import TopHeader from "../../../UI/TopHeader/TopHeader";
import { useNavigate } from "react-router-dom";
import { Alert, AlertTitle, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";


// { servicePackageId, servicePackageName } this is the props for action
const Action = ({ servicePackageId, servicePackageName }) => {
    const Navigate = useNavigate();
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
    const handleClick = () => {
        // console.log(servicePackageName);
        const data = {
            servicePackagename: servicePackageName,
        };
        Navigate("/home/editServicePackage", { state: data });
    };
    const dispatch = useDispatch();
    const handleDeleteClick = () => {
        setShowDeleteConfirmation(true);
    };

    const handleConfirmDelete = () => {
        // dispatch(DeleteServicePackage(catId))
        // .then(() => {
        // window.location.reload();
        // })
        // .catch((err) => {
        // console.log(err);
        // });
        console.log(servicePackageId);
    };

    const handleCancelDelete = () => {
        setShowDeleteConfirmation(false);
    };
    return (
        <div className="w-6 h-6 flex gap-3 cursor-pointer">
            <img onClick={handleClick} src={edit} alt="edit" />
            <img onClick={handleDeleteClick} src={deleteIcon} alt="Delete" />
            {showDeleteConfirmation && (
                <div className="fixed top-0 left-0 w-screen h-screen bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-5 rounded shadow">
                        <Alert severity="warning">
                            <AlertTitle>Confirmation</AlertTitle>
                            <p className="pt-5">Are you sure you want to delete {servicePackageName}?</p>
                            <div className="p-5">
                                <Button onClick={handleConfirmDelete} color="error" autoFocus>
                                    Delete
                                </Button>
                                <Button onClick={handleCancelDelete} color="inherit">
                                    Cancel
                                </Button>
                            </div>
                        </Alert>
                    </div>
                </div>
            )}
        </div>
    );
};

const Photo = ({ prop }) => {
    return (
        <div>
            <img className="w-14 h-14 rounded" src={prop} alt="Photo" />
        </div>
    );
};

const ServicePackageList = ({ setActiveTab, setExpand }) => {
    const head = "Service Package List";
    setExpand("homeService");
    setActiveTab("servicePackageList");
    const Navigate = useNavigate();
    const greenClicked = () => {
        Navigate("/home/addNewServicePackageList");
    };

    //   const dispatch = useDispatch();
    //   const [loading, setLoading] = useState(true);

    //   const productData = useSelector((state) => state.userManagement.mpm_servicePackage);

    //   useEffect(() => {
    //     const fetchUserData = async () => {
    //       setLoading(true);
    //       await dispatch(MPM_servicePackage());
    //       setLoading(false);
    //     };
    //     fetchUserData();
    //   }, [dispatch]);

    const productData = [
        {
            serviceCategory:
                "Service Cat 1",
            servicePackage: "254",
        },
        {
            serviceCategory:
                "Service Cat 2",
            servicePackage: "4828",
        },
        {
            serviceCategory:
                "Service Cat 3",
            servicePackage: "4216",
        },
        {
            serviceCategory:
                "Service Cat 4",
            servicePackage: "241",
        },
    ];

    const columns = [
        {
            header: "Service Category",
            accessor: "serviceCategory",
        },
        {
            header: "Service Package Price ($)",
            accessor: "servicePackage",
        },
        {
            header: "Action",
            accessor: "action",
        },
    ];
    console.log(productData);

    const data = productData.map((user) => ({
        serviceCategory: user.serviceCategory,
        servicePackage: user.servicePackage,
        action: <Action />,
    }));

    const blackButtonText = "Export All";
    const greenButtonText = "Add New";

    // Number of Pages to be display on a single page.
    const pageSize = 4;

    return (
        <div>
            <div className="flex fixed z-10">
                <TopHeader className="fixed" head={head} />
            </div>
            <div className=" ml-72 mt-28 h-[85vh] w-[140vh] relative">
                <Table
                    columns={columns}
                    data={data}
                    pageSize={pageSize}
                    blackButtonText={blackButtonText}
                    greenButtonText={greenButtonText}
                    greenClicked={greenClicked}
                />
            </div>
        </div>
    );
};

export default ServicePackageList;
