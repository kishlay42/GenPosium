import React from "react";
import { Link } from "react-router-dom";
const Button = (props) => {
  return (
    <>
      <div    
        className={`relative inline-flex items-center justify-center mx-3 my-3 p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2
        ${props.btnBorderColor?props.btnBorderColor:"border-orange-500"}

        rounded-full shadow-md group`}
      >
        <span className={`absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full ${props.hoverColor?props.hoverColor:"bg-orange-500"} group-hover:translate-x-0 ease`}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </span>
        <span className={`absolute flex items-center justify-center w-full h-full 
        ${props.btnTextColor?props.btnTextColor:"text-orange-500"}
         transition-all duration-300 transform group-hover:translate-x-full ease`}>
          {props.text ? props.text : "buttonText"}
        </span>
        <span className="relative invisible">Button Text</span>
      </div>
    </>
  );
};

export default Button;
