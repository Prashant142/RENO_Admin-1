import React, { useState } from "react";
import search from "./Assets/search.png";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { IconButton, Button } from "@mui/material";
import Modal from '@mui/material/Modal';


function Table({
  columns,
  data,
  pageSize,
  greenButtonText,
  blackButtonText,
  blackClicked,
  greenClicked,
  catgoryFilter,
}) {
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = data.filter((row) =>
    Object.values(row).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );
  const ITEM_HEIGHT = 38;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 150,
      },
    },
  };

  const productCategory = [
    "Electrical",
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
  const names = productCategory;

  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  const handleClearSelection = () => {
    setPersonName([]);
  };
  const paginatedData = pageSize
    ? filteredData.slice(currentPage * pageSize, (currentPage + 1) * pageSize)
    : filteredData;

  const pageCount = pageSize ? Math.ceil(filteredData.length / pageSize) : 1;

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(0);
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
            <FormControl className="w-full">
              <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
              <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput label="Select Catagory" />}
                renderValue={(selected) => selected.join(', ')}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={personName.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <div className="flex justify-between mt-4">
              <div>
                <Button onClick={handleClearSelection} variant="contained" size="large" color="error">
                  Clear
                </Button>
              </div>
              <div>
                <Button onClick={handleClose} variant="contained" size="large" color="success">
                  Apply
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Modal >
      <div className="p-5 table-container">
        <div className="flex justify-between items-center mb-5">
          <div className="w-1/3 relative">
            <input
              type="text"
              placeholder="Search"
              className="shadow-md border-gray-100 border-2 rounded-md py-3 pl-5 pr-10 w-full"
              onChange={handleSearchChange}
            />
            <img
              src={search}
              alt="search"
              className="absolute top-3 right-3 pointer-events-auto"
            />
          </div>
          <div className="flex flex-row gap-4 items-center">
            {catgoryFilter && (
              <div>
                <IconButton color="success" onClick={handleOpen} size="large">
                  <FilterAltIcon />
                </IconButton>
              </div>
            )}
            {blackButtonText && (
              <div>
                <button
                  onClick={blackClicked}
                  className="bg-[#2B2B2B] rounded hover:bg-gray-600 w-auto text-white font-bold py-3 px-8 rounded-sm">
                  {blackButtonText}
                </button>
              </div>
            )}
            {greenButtonText && (
              <div>
                <button
                  onClick={greenClicked}
                  className="bg-[#8FC743] rounded hover:bg-lime-700 text-white w-auto font-bold py-3 px-8 rounded-sm">
                  {greenButtonText}
                </button>
              </div>
            )}
          </div>
        </div>
        <table className="table w-full table-auto text-left">
          <thead className="h-10">
            <tr className="bg-[#2B2B2B] text-white">
              {columns.map((column) => (
                <th key={column.accessor} className="px-5 py-5 border-b">
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((row, index) => (
              <tr
                key={index}
                className={`bg-${index % 2 === 0 ? "white" : "gray-100"}`}>
                {columns.map((column) => (
                  <td
                    key={column.accessor}
                    className="px-5 py-5 border-b border-gray-300">
                    {row[column.accessor]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        {pageSize && (
          <div className="pagination absolute left-0 right-0 flex justify-end p-5 gap-3">
            <button
              className={`px-4 border-2 rounded-md ${currentPage === 0
                ? "bg-[#DDDEF9] text-gray-500 cursor-default"
                : "bg-white text-gray-700 "
                }`}
              disabled={currentPage === 0}
              onClick={handlePreviousPage}>
              {"<"} Prev
            </button>
            <span className="px-4 py-2">{`${currentPage + 1
              } - ${pageCount}`}</span>
            <button
              className={`px-4 border-2 rounded-md ${currentPage === pageCount - 1
                ? "bg-[#DDDEF9] text-gray-500 cursor-default"
                : "bg-white text-gray-700"
                }`}
              disabled={currentPage === pageCount - 1}
              onClick={handleNextPage}>
              Next {">"}
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Table;
