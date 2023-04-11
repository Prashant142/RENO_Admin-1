import React from "react";
import Table from "../../../UI/CommonTable/Table";
import { deleteIcon, edit, images } from "./Assets/index";

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
    header: "Project Name",
    accessor: "projectname",
  },
  {
    header: "Category",
    accessor: "category",
  },
  {
    header: "Rate",
    accessor: "rate",
  },
  {
    header: "Reviews",
    accessor: "reviews",
  },
  {
    header: "Action",
    accessor: "action",
  },
];

const data = [
  {
    photo: <Photo />,
    projectname: "Parallel Kitechen",
    category: "Residential",
    rate: `$ ${130}`,
    reviews: `${55}k reviews`,
    action: <Action />,
  },
  {
    photo: <Photo />,
    projectname: "Parallel Kitechen",
    category: "Residential",
    rate: `$ ${130}`,
    reviews: `${55}k reviews`,
    action: <Action />,
  },
  {
    photo: <Photo />,
    projectname: "Parallel Kitechen",
    category: "Residential",
    rate: `$ ${130}`,
    reviews: `${55}k reviews`,
    action: <Action />,
  },
  {
    photo: <Photo />,
    projectname: "Parallel Kitechen",
    category: "Residential",
    rate: `$ ${130}`,
    reviews: `${55}k reviews`,
    action: <Action />,
  },
];

const blackButtonText = "Export All";

// Number of Pages to be display on a single page.
const pageSize = 4;

const allProjects = () => {
  return (
    <Table
      columns={columns}
      data={data}
      pageSize={pageSize}
      blackButtonText={blackButtonText}
    />
  );
};

export default allProjects;