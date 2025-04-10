import React from "react";

const Button = ({ title }) => {
  return (
    <button className="bg-button text-white px-6 py-2 rounded-xl text-sm font-semibold cursor-pointer md:text-base md:px-10">
      {title}
    </button>
  );
};

export default Button;
