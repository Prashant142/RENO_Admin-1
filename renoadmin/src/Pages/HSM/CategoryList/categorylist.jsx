import React from "react";
import { useEffect, useState } from "react";
// import { Grid } from "react-loader-spinner";
import Table from "../../../UI/CommonTable/Table";
import { deleteIcon, edit } from "../Assets/index";
import TopHeader from "../../../UI/TopHeader/TopHeader";
import { useNavigate } from "react-router-dom";

// { catId, catName } this is the props for action
const Action = () => {
  // const Navigate = useNavigate();
  // const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  // const handleClick = () => {
  //   console.log(catName);
  //   const data = {
  //     catname: catName,
  //   };
  //   Navigate("/home/editCategory", { state: data });
  // };
  // const dispatch = useDispatch();
  // const handleDeleteClick = () => {
  //   setShowDeleteConfirmation(true);
  // };

  // const handleConfirmDelete = () => {
  //   dispatch(DeleteCategory(catId))
  //     .then(() => {
  //       window.location.reload();
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // const handleCancelDelete = () => {
  //   setShowDeleteConfirmation(false);
  // };
  return (
    <div className="w-6 h-6 flex gap-3 cursor-pointer">
      <img src={edit} alt="edit" />
      <img src={deleteIcon} alt="Delete" />
      {/* {showDeleteConfirmation && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-5 rounded shadow">
            <Alert severity="warning">
              <AlertTitle>Confirmation</AlertTitle>
              <p className="pt-5">Are you sure you want to delete {catName}?</p>
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
      )} */}
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

const CategoryList = ({ setActiveTab, setExpand }) => {
  const head = "Category List";
  setExpand("homeService");
  setActiveTab("categoryList");
  const Navigate = useNavigate();
  //   const greenClicked = () => {
  //     Navigate("/home/addNewCategory");
  //   };

  //   const dispatch = useDispatch();
  //   const [loading, setLoading] = useState(true);

  //   const productData = useSelector((state) => state.userManagement.mpm_category);

  //   useEffect(() => {
  //     const fetchUserData = async () => {
  //       setLoading(true);
  //       await dispatch(MPM_category());
  //       setLoading(false);
  //     };
  //     fetchUserData();
  //   }, [dispatch]);

  const productData = [
    {
      photo:
        "https://m.media-amazon.com/images/I/71s-2ug9haL._AC_UF894,1000_QL80_.jpg",
      category: "Bedroom",
    },
    {
      photo:
        "https://m.media-amazon.com/images/I/71s-2ug9haL._AC_UF894,1000_QL80_.jpg",
      category: "Bathroom",
    },
    {
      photo:
        "https://m.media-amazon.com/images/I/71s-2ug9haL._AC_UF894,1000_QL80_.jpg",
      category: "Livingroom",
    },
    {
      photo:
        "https://m.media-amazon.com/images/I/71s-2ug9haL._AC_UF894,1000_QL80_.jpg",
      category: "Bedroom",
    },
  ];

  const columns = [
    {
      header: "Photo",
      accessor: "photo",
    },
    {
      header: "Category Name",
      accessor: "category",
    },
    {
      header: "Action",
      accessor: "action",
    },
  ];
  console.log(productData);

  const data = productData.map((user) => ({
    photo: <Photo prop={user.photo} />,
    category: user.category,
    action: <Action />,
  }));

  const blackButtonText = "Export All";
  const greenButtonText = "Add New";

  // Number of Pages to be display on a single page.
  const pageSize = 4;

  return (
    <div className="flex-grow px-2 pe-4">
      <div className="flex sticky top-0 z-10">
        <TopHeader className="fixed" head={head} />
      </div>
      <div className=" ml-72 mt-28 h-[85vh] w-[140vh] relative">
        <Table
          columns={columns}
          data={data}
          pageSize={pageSize}
          blackButtonText={blackButtonText}
          greenButtonText={greenButtonText}
        />
      </div>
    </div>
  );
};

export default CategoryList;
