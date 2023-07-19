import React, { useState, useEffect, useRef } from "react";
import TopHeader from "../../../UI/TopHeader/TopHeader";
import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import axios from "axios";

const localizer = momentLocalizer(moment);

const ProjectBookings = () => {
  const schedulerRef = useRef(null);
  const head = "Bookings";
  const apiURL = "http://139.59.236.50:8000/projectbookings/";
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [editPopupOpen, setEditPopupOpen] = useState(false); // New state for edit popup
  const [consultantPopupOpen, setConsultantPopupOpen] = useState(false); // New state for consultant popup
  const [allUserDropdown, setAllUserDropdown] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(apiURL);
      const data = await response.json();
      console.log("This is the data", data);
      const parsedEvents = data.map((event) => ({
        id: event.id,
        title: event.prod_name,
        description: event.desc,
        start: new Date(event.date),
        end: new Date(event.date),
        user: event.user,
        status: event.status,
        rate: event.rate,
      }));
      setEvents(parsedEvents);
    } catch (error) {
      console.log(error);
    }
  };

  const eventComponent = ({ event }) => {
    return (
      <div>
        <div>Title: {event.title}</div>
        <div>Description: {event.description}</div>
        <div>Date: {moment(event.start).format("YYYY-MM-DD")}</div>
        <div>Time: {moment(event.start).format("HH:mm")}</div>
        <div>Person: {event.user}</div>
        <div>Status: {event.status}</div>
        <div>Price: {event.rate}</div>
      </div>
    );
  };

  const handleSelect = (event) => {
    setSelectedEvent(event);
  };

  const handleClosePopup = () => {
    setSelectedEvent(null);
  };

  const handleEditPopup = () => {
    setEditPopupOpen(true);
  };

  const handleCloseEditPopup = () => {
    setEditPopupOpen(false);
  };

  const handleConsultantPopup = () => {
    setConsultantPopupOpen(true);
  };

  const handleCloseConsultantPopup = () => {
    setConsultantPopupOpen(false);
  };

  useEffect(() => {
    axios
      .get("http://139.59.236.50:8000/user/")
      .then((response) => {
        console.log("These are all the users : ", response.data);
        setAllUserDropdown(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="flex-grow px-2 pe-4">
      <div className="flex sticky top-0 z-10">
        <TopHeader className="fixed" head={head} />
      </div>

      <div
        className="ml-80 mb-10 w-[100vh] relative"
        style={{ marginTop: "110px" }}>
        <Calendar
          localizer={localizer}
          selectable={true}
          events={events}
          defaultView="month"
          ds
          onSelectEvent={handleSelect}
          components={{
            event: eventComponent,
          }}
          views={["day", "week", "month", "agenda"]}
          style={{ height: 700, width: 1100 }}
        />
        {selectedEvent &&
          !editPopupOpen &&
          !consultantPopupOpen && ( // Display the event details popup only if editPopupOpen and consultantPopupOpen are false
            <div className="fixed flex flex-col top-0 left-0 w-screen h-screen bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
              <div className="w-50 h-50 bg-white p-8 rounded-3xl">
                <div className="flex flex-row justify-between mb-10">
                  <h4 className="text-2xl text-lime-500 font-bold">
                    Event Details
                  </h4>
                  <button
                    className="float-right font-bold text-3xl hover:text-red-700 focus:outline-none text-red-500"
                    onClick={handleClosePopup}>
                    x
                  </button>
                </div>
                <div className="flex flex-col gap-5">
                  <div className="flex flex-row justify-between">
                    <label className="text-blue-600 text-xl">Title : </label>
                    <p>{selectedEvent.title}</p>
                  </div>
                  <div className="flex flex-row justify-between">
                    <label className="text-blue-600 text-xl">
                      Description :{" "}
                    </label>
                    <p>{selectedEvent.description}</p>
                  </div>
                  <div className="flex flex-row justify-between">
                    <label className="text-blue-600 text-xl">Date : </label>
                    <p>{moment(selectedEvent.start).format("YYYY-MM-DD")}</p>
                  </div>
                  <div className="flex flex-row justify-between">
                    <label className="text-blue-600 text-xl"> Time :</label>
                    <p> {moment(selectedEvent.start).format("HH:mm")}</p>
                  </div>
                  <div className="flex flex-row justify-between">
                    <label className="text-blue-600 text-xl">Person : </label>
                    <p>{selectedEvent.user}</p>
                  </div>
                  <div className="flex flex-row justify-between">
                    <label className="text-blue-600 text-xl">Status : </label>
                    <p>{selectedEvent.status}</p>
                  </div>
                  <div className="flex flex-row text-left justify-between">
                    <label className="text-blue-600 text-xl">Price: </label>
                    <p>{selectedEvent.rate}</p>
                  </div>
                </div>
                <div className="flex flex-row gap-10 pt-10">
                  <button
                    className="px-4 py-2 rounded-md bg-yellow-500 hover:bg-yellow-700 text-white "
                    onClick={handleEditPopup} // Open the edit popup on button click
                  >
                    Edit
                  </button>
                  <button
                    className="px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-700 text-white "
                    onClick={handleConsultantPopup} // Open the consultant popup on button click
                  >
                    Assign Consultant
                  </button>
                </div>
              </div>
            </div>
          )}
        {selectedEvent &&
          editPopupOpen && ( // Display the edit popup only if editPopupOpen is true
            <div className="fixed flex flex-col top-0 left-0 w-screen h-screen bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
              <div className="w-50 h-50 bg-white p-8 rounded-3xl">
                {/* Add your input fields and submit button for editing here */}
                <div className="flex flex-row justify-between mb-10">
                  <h4 className="text-2xl text-lime-500 font-bold">
                    Edit Event
                  </h4>
                  <button
                    className="float-right font-bold text-3xl hover:text-red-700 focus:outline-none text-red-500"
                    onClick={handleCloseEditPopup} // Close the edit popup on button click
                  >
                    x
                  </button>
                </div>
                <div>
                  <form action="submit" className="flex flex-col gap-5">
                    <div className="flex flex-row justify-between items-center gap-5">
                      <label>Date :</label>
                      <input
                        className="border border-blue-300 cursor-pointer rounded-md w-2/3 px-4 py-2"
                        type="date"
                      />
                    </div>
                    <div className="flex flex-row justify-between items-center gap-5">
                      <label>Time :</label>
                      <input
                        className="border border-blue-300 cursor-pointer rounded-md w-2/3 px-4 py-2"
                        type="time"
                      />
                    </div>
                    <div className="flex flex-row justify-between items-center gap-5">
                      <label>Venue :</label>
                      <input
                        className="border border-blue-300 cursor-pointer rounded-md w-2/3 px-4 py-2"
                        type="text"
                      />
                    </div>
                    <div className="flex flex-row justify-between items-center gap-5">
                      <label>State :</label>
                      <input
                        className="border border-blue-300 cursor-pointer rounded-md w-2/3 px-4 py-2"
                        type="text"
                      />
                    </div>
                    <button className="mt-5 px-4 py-2 rounded-md bg-lime-500 hover:bg-lime-700 text-white ">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}
        {selectedEvent &&
          consultantPopupOpen && ( // Display the consultant popup only if consultantPopupOpen is true
            <div className="fixed flex flex-col top-0 left-0 w-screen h-screen bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
              <div className="w-50 h-50 bg-white p-8 rounded-3xl">
                {/* Add your input fields and submit button for assigning consultant here */}
                <div className="flex flex-row justify-between mb-10">
                  <h4 className="text-2xl text-lime-500 font-bold">
                    Assign Consultant
                  </h4>
                  <button
                    className="float-right font-bold text-3xl hover:text-red-700 focus:outline-none text-red-500"
                    onClick={handleCloseConsultantPopup} // Close the consultant popup on button click
                  >
                    x
                  </button>
                </div>
                <div>
                  <form action="submit" className="flex flex-col gap-5">
                    <div className="flex flex-row justify-between items-center gap-5">
                      <label>Consultant Name :</label>
                      <select
                        className="px-4 py-2 rounded-md border border-blue-300 cursor-pointer"
                        name="assign_consultant"
                        id="">
                        {allUserDropdown.map((user) => {
                          return (
                            <option value={user.username}>
                              {user.username}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <button className="mt-5 px-4 py-2 rounded-md bg-lime-500 hover:bg-lime-700 text-white ">
                      Assign
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}
      </div>
    </div>
  );
};

export default ProjectBookings;
