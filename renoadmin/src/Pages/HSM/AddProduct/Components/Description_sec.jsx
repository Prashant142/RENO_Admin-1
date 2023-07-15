import React from "react";

const Description = () => {
  return (
    <div>
      <div className="bg-[#EEEEEE] p-5 rounded-md drop-shadow-md border w-[80vh]">
        <p className="pb-5">Description Section</p>
        <hr />
        <form className="flex flex-col gap-5 pt-5" action="submit">
          <label>Short Description</label>
          <textarea name="shortDescription" id="" cols="20" rows="5"></textarea>
          <label>Description</label>
          <textarea
            name="shortDescription"
            id=""
            cols="20"
            rows="10"></textarea>
        </form>
      </div>
    </div>
  );
};

export default Description;
