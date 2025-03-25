/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const Cards = (props) => {
  return (
    <>
      <div className={` w-1/2 flex  border ${props.borderColor?props.borderColor:"border-slate-300"} mx-1 rounded-xl`}>
        <div className="max-w-sm bg-slate-100 border rounded-lg shadow ">
          <img
            className="rounded-t-lg object-cover h-48 w-96 "
            src={
              props.image
                ? props.image
                : "https://source.unsplash.com/720x400/?" + props.title
            }
            alt=""
          />

          <div className="p-5">
            <h5 className={`mb-2 text-2xl font-bold tracking-tight ${props.titleColor?props.titleColor:" text-orange-600"} cursor-pointer`}>
              {props.title ? props.title : "Title"}
            </h5>

            <p className="mb-3 font-normal text-gray-700 ">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <Link to={props.toLink} className={`inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white ${props.btnColor ? props.btnColor: "bg-orange-700"}  rounded-lg ${props.btnHoverColor ? props.btnHoverColor: "hover:bg-orange-800"} focus:ring-4 focus:outline-none`}>
              {props.buttonText ? props.buttonText : "Read More"}
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
