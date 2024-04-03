import React from "react";
import { NavLink } from "react-router-dom";

const Tabs = () => {
  return (
    <>
      <div className="flex flex-wrap w-1/4 mx-auto bg-purple-50 px-2 rounded-xl my-1 ">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <NavLink
                to="/uniSocial"
                className={({
                  isActive,
                }) => `text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal
                   transition ease-in  duration-200
                 ${
                   isActive
                     ? "text-white bg-orange-600"
                     : "text-purple-600 bg-white  hover:bg-purple-200"
                 }`}
              >
                UniSocial
              </NavLink>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <NavLink
                to="/contests"
                className={({
                  isActive,
                }) => `text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal transition ease-in  duration-200 
                ${
                  isActive
                    ? "text-white bg-blue-600"
                    : "text-purple-600 bg-white  hover:bg-purple-200"
                }`}
              >
                Contests
              </NavLink>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <NavLink
                to="/learning"
                className={({
                  isActive,
                }) => `text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal transition ease-in  duration-200
                ${
                  isActive
                    ? "text-white bg-green-600"
                    : "text-purple-600 bg-white  hover:bg-purple-200"
                }`}
              >
                Learning
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Tabs;
