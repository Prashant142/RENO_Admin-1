import { useState, useEffect } from "react";
import attachment from "./attachment.png";

const InputField = () => {
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    // Simulating API call to fetch internal notes
    const fetchInternalNotes = async () => {
      // Replace this with your actual API call to fetch internal notes
      // Dummy data for demonstration purposes
      const data = [
        {
          note: "This is the first internal note.",
          file: null,
        },
        {
          note: "This is the second internal note with an attached file.",
          file: "https://www.africau.edu/images/default/sample.pdf",
        },
        {
          note: "This is the third internal note.",
          file: null,
        },
        {
          note: "This is the fourth internal note.",
          file: null,
        },
        {
          note: "This is the fifth internal note.",
          file: null,
        },
      ];

      setLogs(data);
    };

    fetchInternalNotes();
  }, []);

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSendClick = () => {
    // Handle sending the message and file
    console.log("Message:", message);
    console.log("File:", file);

    // Clear the input fields after sending
    setMessage("");
    setFile(null);
  };

  return (
    <div className="p-2 flex flex-col space-y-4 h-[50vh] overflow-y-auto">
      <div className="flex flex-col space-y-4">
        {logs.map((log, index) => (
          <div key={index} className="bg-[#EEEEEE] border p-4 rounded">
            <div className="font-bold">Internal Note</div>
            <div className="mt-2">{log.note}</div>
            {log.file && (
              <div className="mt-4">
                <div className="font-bold">Attached File:</div>
                <img
                  src={log.file}
                  alt="Attached File"
                  className="mt-2 max-w-xs"
                />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="border flex space-x-6">
        <input
          type="text"
          placeholder="Write an internal note..."
          value={message}
          onChange={handleInputChange}
          className="w-full px-4 py-2 rounded-l"
        />
        <label
          htmlFor="file-upload"
          className="cursor-pointer text-white px-4 py-4 rounded-none">
          <img className="w-6 h-6" src={attachment} alt="attachment" />
        </label>
        <input
          id="file-upload"
          type="file"
          onChange={handleFileChange}
          className="hidden"
        />
        <button
          onClick={handleSendClick}
          className="hover:bg-lime-600 bg-[#8FC743] text-white px-8 py-4">
          Send
        </button>
      </div>
    </div>
  );
};

export default InputField;
