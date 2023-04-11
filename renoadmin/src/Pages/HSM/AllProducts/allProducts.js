import React from "react";
import Table from "../../../UI/CommonTable/Table";
import { deleteIcon, edit, images } from "../Assets/index";

const Action = () => {
  return (
    <div className="w-6 h-6 flex gap-3 cursor-pointer">
      <img src={edit} alt="edit" />
      <img src={deleteIcon} alt="Delete" />
    </div>
  );
};

const Photo = () => {
  return (
    <div>
      <img className="w-14 h-14 rounded" src={images} alt="Photo" />
    </div>
  );
};

const columns = [
  {
    header: "Photo",
    accessor: "photo",
  },
  {
    header: "Product Name",
    accessor: "productname",
  },
  {
    header: "Category",
    accessor: "category",
  },
  {
    header: "Product Category",
    accessor: "productcategory",
  },
  {
    header: "Inventory",
    accessor: "inventory",
  },
  {
    header: "Package",
    accessor: "package",
  },
  {
    header: "Purchased Item",
    accessor: "purchaseditem",
  },
  {
    header: "Action",
    accessor: "action",
  },
];

const data = [
  {
    photo: <Photo />,
    productname: "Parallel Kitechen",
    category: "Electrical",
    productcategory: "Office",
    inventory: `${5} items`,
    package: `$${130}`,
    purchaseditem: `${2} items`,
    action: <Action />,
  },
  {
    photo: <Photo />,
    productname: "Parallel Kitechen",
    category: "Electrical",
    productcategory: "Office",
    inventory: `${5} items`,
    package: `$${130}`,
    purchaseditem: `${2} items`,
    action: <Action />,
  },
  {
    photo: <Photo />,
    productname: "Parallel Kitechen",
    category: "Electrical",
    productcategory: "Office",
    inventory: `${5} items`,
    package: `$${130}`,
    purchaseditem: `${2} items`,
    action: <Action />,
  },
];

const blackButtonText = "Export All";
const greenButtonText = "Add New Product";

// Number of Pages to be display on a single page.
const pageSize = 4;

const allProjects = () => {
  return (
    <Table
      columns={columns}
      data={data}
      pageSize={pageSize}
      blackButtonText={blackButtonText}
      greenButtonText={greenButtonText}
    />
  );
};

export default allProjects;