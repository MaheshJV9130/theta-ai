import React from "react";

const UserMsg = ({ prompt }) => {
  return (
    <p className=" bg-zinc-600 text-sm  text-wrap text-white max-w-1/2 self-end flex-wrap p-2 m-2 rounded-lg break-words">
      {prompt}
    </p>
  );
};

export default UserMsg;
