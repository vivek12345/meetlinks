import React from "react";

const Event = ({ name, link }) => {
  return (
    <div className="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
      <span className="bg-gray-400 h-2 w-2 m-2 rounded-full"></span>
      <div className="flex-grow w-2/3 font-medium px-2">{name}</div>
      <div className="text-sm w-1/3 font-normal text-gray-500 tracking-wide text-right">
        <a href={link} rel="noopener noreferrer" target="_blank">
          Join Google Meet
        </a>
      </div>
    </div>
  );
};

export default Event;
