import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";
import axios from "axios";
import Cookies from "js-cookie";
import CloseIcon from '@mui/icons-material/Close';

const Chatdetails = ({ onClose, name, status, tid, page }) => {

  const [isInputDisabled, setIsInputDisabled] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [messageText, setMessageText] = useState("");


  const getCurrentDate = () => {
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, "0");
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const year = String(currentDate.getFullYear());
    return `${day}-${month}-${year}`;
  };

  const getCurrentTime = () => {
    const currentDate = new Date();
    const hours = String(currentDate.getHours()).padStart(2, "0");
    const minutes = String(currentDate.getMinutes()).padStart(2, "0");
    const seconds = String(currentDate.getSeconds()).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };



  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.post(`http://139.59.236.50:5002/getticket`, {
          tid: tid,
          uid: Cookies.get('uid'), // Replace with the actual uid
        });
        const { success, data } = response.data;
        if (success) {
          const { metadata, msgs } = data;
          // Update the UI with the fetched messages
          setMessages(msgs);
          // You can also access metadata values if needed
          console.log(metadata);
        } else {
          console.log("Failed to fetch messages");
        }
      } catch (error) {
        console.log("Failed to fetch messages");
        console.log(error);
      }
    };

    fetchMessages();
  }, [tid]);


  console.log("Called");
  const [isOpen, setIsOpen] = useState(true);
  function formatTime(date) {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "pm" : "am";
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${formattedHours}:${formattedMinutes}${ampm}`;
  }
  const navigate = useNavigate();
  // var flag=true;

  const handleClose = () => {
    console.log("close");
    setIsOpen(false);
    onClose();
    // flag=false;
  };
  console.log("Open");

  if (!isOpen) {
    // setIsOpen(true)
    return null; // Return null if isOpen state is false to hide the component
  }


  const handleCloseTicket = async () => {
    try {
      const body = {
        tid: tid,
      }
      const response = await axios.post("http://139.59.236.50:5002/closeticket", body);
      console.log(response);
      setIsInputDisabled(true);
    } catch (error) {
      console.log("Failed");
      console.log(error);

    }
  }


  const handleSendMessage = async () => {
    try {
      const body = {
        tid: tid,
        uid: Cookies.get('uid'), // Replace with the appropriate user ID
        msg: inputValue,
        date: getCurrentDate(), // Helper function to get the current date
        time: getCurrentTime(), // Helper function to get the current time
      };

      const response = await axios.post("http://139.59.236.50:5002/replyticket", body); // Replace "{{chatUrl}}" with the actual chat URL

      // Extract the message data from the response
      const { success, data } = response.data;
      const { cid, msg, date, time, role } = data;

      if (success) {
        // Create a new message object
        const newMessage = {
          cid: cid,
          msg: msg,
          date: date,
          time: time,
          role: role,
        };

        // Update the messages state with the new message
        setMessages((prevMessages) => [...prevMessages, newMessage]);

        // Clear the input value
        let scroller = document.getElementById('chat-scroller');
        setInputValue("");
        setTimeout(() => {

          scroller.scrollTo(0, scroller.scrollHeight);
        }, 500);
      }
    } catch (error) {
      console.log("Failed to reply", error);
    }
  };

  return (
    <div
      style={{
        zIndex: 1000,
        position: "fixed",
        width: "25rem",
        height: "75vh",
        right: "0px",
        bottom: "20px",
        background: "#FFFFFF",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
        borderRadius: '10px',
      }}
      className=" pb-10"
    >
      <div className="h-full overflow-y-auto scrollbar-hide" id='chat-scroller'>
        <div className="bg-white sticky top-0">
          <div className="flex justify-between px-3 pt-5">
            <div className="flex gap-3">
              <div className="font-bold">Chat Details</div>
              <button onClick={handleCloseTicket} className="rounded-full px-2 py-0.5 text-xs text-white bg-red-400 hover:bg-red-700">
                Close Conversation
              </button>
            </div>
            <div>
              <CloseIcon onClick={handleClose} className="font-bold cursor-pointer">
              </CloseIcon>
            </div>
          </div>

          <div className="pl-3 pr-3 py-2">
            <div className="flex items-center " style={{}}>
              <img
                src="/images/profile.jpg"
                alt=""
                style={{
                  height: "45px",
                  marginRight: "15px",
                  borderRadius: "50px",
                }}
              />
              <div>
                <div className="text-sm font-bold">{name}</div>
                <div className="text-xs text-gray-500 ">Status: {status}</div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="p-3 "
          style={{
            height: "100%",
          }}
        >
          {/* Backend Side Messages */}
          {messages.map((message, index) => {
            if (message.role === "user") {
              return (
                <div key={index} style={{ width: "80%", paddingBottom: "15px" }}>
                  <div
                    className="flex items-center"
                    style={{
                      backgroundColor: "#8FC743",
                      color: "white",
                      borderRadius: "6px",
                      fontSize: "14px",
                      paddingLeft: "10px",
                      boxSizing: "border-box",
                      wordWrap: "break-word",
                      paddingRight: "10px",
                      paddingTop: "7px",
                      paddingBottom: "7px",
                      width: "fit-content",
                      marginBottom: "5px",
                    }}
                  >
                    {message.msg}
                  </div>
                  <div
                    className="text-gray-500"
                    style={{ fontSize: "12px", paddingLeft: "8px" }}
                  >
                    {message.date} {message.time}
                  </div>
                </div>
              );
            }
            return null;
          })}

          {/* Frontend Side Messages */}
          {messages.map((message, index) => {
            if (message.role === "admin") {
              return (
                <div key={index} className="ms-auto" style={{ width: "80%", paddingBottom: "10px" }}>
                  <div
                    className="flex items-center ms-auto justify-end"
                    style={{
                      backgroundColor: "#2B2B2B",
                      color: "white",
                      borderRadius: "6px",
                      fontSize: "14px",
                      paddingLeft: "10px",
                      boxSizing: "border-box",
                      wordWrap: "break-word",
                      paddingRight: "10px",
                      paddingTop: "7px",
                      paddingBottom: "7px",
                      width: "fit-content",
                      marginBottom: "5px",
                    }}
                  >
                    {message.msg}
                  </div>
                  <div
                    className="text-gray-500 ms-auto text-right"
                    style={{
                      fontSize: "12px",
                    }}
                  >
                    {message.date} {message.time}
                  </div>
                </div>
              );
            }
            return null;
          })}



        </div>
      </div>
      {page == 'allChats' ? (<></>) : (<>
        <div className="p-3 bg-white flex justify-between items-center"
          style={{ position: "sticky", bottom: 0 }}
        >
          <input
            className="bg-gray-200"
            style={{
              width: "320px",
              height: "40px",
              borderRadius: "60px",
              outline: "none",
              paddingLeft: "10px",
            }}
            disabled={isInputDisabled}
            type="text"
            placeholder="Type here..."
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />
          <button
            className="ms-4 p-5 rounded-full flex items-center justify-center bg-black cursor-pointer"
            style={{
              border: "1px solid",
              height: "30px",
              width: "30px",
              color: "white",
            }}
            disabled={isInputDisabled}
            onClick={handleSendMessage}
          >
            <SendIcon className="ms-0.5" />
          </button>
        </div>
      </>)}

    </div>


  );
};

export default Chatdetails;
