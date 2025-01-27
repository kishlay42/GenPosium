import { NavLink } from "react-router-dom";
const Tabs = () => {
  return (
    <>
      <div className="animate-y flex md:w-1/2 lg:w-1/2 xl:w-1/4 mx-auto bg-blue-50 px-2 rounded-xl my-1 ">
        <div className="w-full">
          <ul
            className=" flex mb-0 list-none lg:flex pt-3 pb-4 flex-row justify-center "
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <NavLink
                to="/uniSocial"
                className={({
                  isActive,
                }) => `text-xs hidden md:block font-bold uppercase px-5 py-3 shadow-lg rounded  leading-normal
                   transition ease-in  duration-200
                 ${
                   isActive
                     ? "text-white bg-blue-600"
                     : "text-blue-600 bg-white  hover:bg-blue-200"
                 }`}
              >
                UniSocial
              </NavLink>
              <NavLink
                to="/uniSocial"
                className={({
                  isActive,
                }) => `text-xs font-bold md:hidden uppercase px-5 py-3 shadow-lg rounded block leading-normal
                   transition ease-in  duration-200
                 ${
                   isActive
                     ? "text-white bg-blue-600"
                     : "text-blue-600 bg-white  hover:bg-blue-200"
                 }`}
              >
                U
              </NavLink>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <NavLink
                to="/contests"
                className={({
                  isActive,
                }) => `text-xs hidden md:block font-bold uppercase px-5 py-3 shadow-lg rounded  leading-normal transition ease-in  duration-200 
                ${
                  isActive
                    ? "text-white bg-blue-600"
                    : "text-blue-600 bg-white  hover:bg-blue-200"
                }`}
              >
                Contests
              </NavLink>
              <NavLink
                to="/contests"
                className={({
                  isActive,
                }) => `text-xs font-bold md:hidden uppercase px-5 py-3 shadow-lg rounded block leading-normal transition ease-in  duration-200 
                ${
                  isActive
                    ? "text-white bg-blue-600"
                    : "text-blue-600 bg-white  hover:bg-blue-200"
                }`}
              >
                C
              </NavLink>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <NavLink
                to="/learning"
                className={({
                  isActive,
                }) => `text-xs font-bold uppercase px-5 py-3 shadow-lg rounded hidden md:block leading-normal transition ease-in  duration-200
                ${
                  isActive
                    ? "text-white bg-blue-600"
                    : "text-blue-600 bg-white  hover:bg-blue-200"
                }`}
              >
                Learning
              </NavLink>
              <NavLink
                to="/learning"
                className={({
                  isActive,
                }) => `text-xs font-bold md:hidden uppercase px-5 py-3 shadow-lg rounded block leading-normal transition ease-in  duration-200
                ${
                  isActive
                    ? "text-white bg-blue-600"
                    : "text-blue-600 bg-white  hover:bg-blue-200"
                }`}
              >
                L
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Tabs;
