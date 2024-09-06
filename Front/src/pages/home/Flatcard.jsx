import React, { useState, useEffect } from "react";
import Adminside from "../sides/Adminside";
import axios from "axios";
import Nav from "../components/nav";
import { useParams } from "react-router-dom";
function Flatcard() {
  const [flat, setflat] = useState([]);
  const { id } = useParams();

  const fetchallflat = async () => {
    console.log("from card",id);
    
    axios
      .get(`http://127.0.0.1:3000/api/flat/one/${id}`)
      .then((res) => {
        setflat(res?.data);
        console.log(res?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchallflat();
  }, []);

  return (
    <>
    <Nav />
      <div className="flex justify-between mx-1 gap-1">
        <div className="side h-[87vh] w-[30%]  border-black border-2">
          <Adminside />
        </div>
        <div className="body scrollbar-thin scrollbar-thumb-blue-700  scrollbar-track-gray-200 h-[87vh] my-1 w-full overflow-scroll overflow-x-clip flex flex-col items-center gap-1  ">
          {flat?.map((item, index) => (
            <div key={index}>
              <div className="w-[69vw] text-center p-8 bg-blue-200 border border-gray-200 rounded-lg shadow dark:border-blue-700">
                <div className="bg-blue-100 p-1 rounded-xl">
                <div href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-black ">
                    <svg
                      className="inline"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={24}
                      height={24}
                      color={"#000000"}
                      fill={"none"}
                    >
                      <path
                        d="M15.0002 17C14.2007 17.6224 13.1504 18 12.0002 18C10.8499 18 9.79971 17.6224 9.00018 17"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M2.35157 13.2135C1.99855 10.9162 1.82204 9.76763 2.25635 8.74938C2.69065 7.73112 3.65421 7.03443 5.58132 5.64106L7.02117 4.6C9.41847 2.86667 10.6171 2 12.0002 2C13.3832 2 14.5819 2.86667 16.9792 4.6L18.419 5.64106C20.3462 7.03443 21.3097 7.73112 21.744 8.74938C22.1783 9.76763 22.0018 10.9162 21.6488 13.2135L21.3478 15.1724C20.8473 18.4289 20.5971 20.0572 19.4292 21.0286C18.2613 22 16.5538 22 13.139 22H10.8614C7.44652 22 5.73909 22 4.57118 21.0286C3.40327 20.0572 3.15305 18.4289 2.65261 15.1724L2.35157 13.2135Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                    </svg>{" "}
                    Flat: {item.flat}
                  </h5>
                </div>
                <div>
                  <svg className="inline"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                    color={"#000000"}
                    fill={"none"}
                  >
                    <path
                      d="M2 21.9684C2.94975 21.9684 3.88858 22.0553 4.67843 21.4396C5.45232 20.8365 6.68304 20.8564 7.42654 21.4842C8.2373 22.1688 9.76776 22.1494 10.5969 21.5032C11.4013 20.8763 12.6209 20.804 13.4265 21.4842C14.3106 22.2306 15.8003 22.1241 16.6784 21.4396C17.4523 20.8365 18.683 20.8564 19.4265 21.4842C20.1427 22.0889 21.1197 21.9684 22 21.9684"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 19C9.19765 16.6088 11.4362 15 14 15C16.5638 15 18.8023 16.6088 20 19"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11 15.1016C8 14.5448 5.39726 16.3366 4 19"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 15C12 12 12.8 7.16 16 5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15.5004 2C16.3755 2 17.3024 3.0972 16 5M16 5C16.7861 5.23357 19.208 6.31952 18.9828 9M16 5C15.4148 4.29569 13.3126 3.40012 12 4.80011M16 5C16.58 5.70922 17 8 16 9"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Area: {item.area}
                </div>
                <p className="mb-3 text-black ">
                  <svg
                    className="inline"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                    color={"#000000"}
                    fill={"none"}
                  >
                    <path
                      d="M22 17.5H2"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 21V16C22 14.1144 22 13.1716 21.4142 12.5858C20.8284 12 19.8856 12 18 12H6C4.11438 12 3.17157 12 2.58579 12.5858C2 13.1716 2 14.1144 2 16V21"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 12V10.6178C16 10.1103 15.9085 9.94054 15.4396 9.7405C14.4631 9.32389 13.2778 9 12 9C10.7222 9 9.53688 9.32389 8.5604 9.7405C8.09154 9.94054 8 10.1103 8 10.6178L8 12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M3 12V9C3 7.58579 3 6.87868 3.43934 6.43934C3.87868 6 4.58579 6 6 6C6.27475 6 6.65685 6.07272 6.90282 5.94012C7.0139 5.88025 7.11349 5.72888 7.31269 5.42616C8.26921 3.97247 10.2246 3 12 3C13.7754 3 15.7308 3.97247 16.6873 5.42616C16.8865 5.72888 16.9861 5.88025 17.0972 5.94012C17.3432 6.07272 17.7252 6 18 6C19.4142 6 20.1213 6 20.5607 6.43934C21 6.87868 21 7.58579 21 9V12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                  Total Bed:{item.bed}|(Master Bed:{item.masterbed})
                </p>
                <p className="mb-3  text-black ">
                  <svg
                    className="inline"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                    color={"#000000"}
                    fill={"none"}
                  >
                    <path
                      d="M8 11H17.1351C18.6001 11 19.3326 11 19.7749 11.7353C20.2172 12.4706 19.9567 12.9393 19.4357 13.8769C18.4017 15.738 16.3955 17 14.0901 17C12.5456 17 11.1353 16.4335 10.0618 15.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 11V4C8 3.05719 8 2.58579 7.70711 2.29289C7.41421 2 6.94281 2 6 2C5.05719 2 4.58579 2 4.29289 2.29289C4 2.58579 4 3.05719 4 4V11C4 11.9428 4 12.4142 4.29289 12.7071C4.58579 13 5.05719 13 6 13C6.94281 13 7.41421 13 7.70711 12.7071C8 12.4142 8 11.9428 8 11Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7 7L10 7"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 17C15 18 16 21 17.9996 22H4C5 21 6.7 17.8 5.5 13"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>{" "}
                  Total Bath: {item.bath}|(Attached bath: {item.attachedbath})
                </p>
                <div
                  className={
                    item.status == false
                      ? "inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
                      : "inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 "
                  }
                >
                  {item.status == true ? "Not " : ""}Available
                </div>
              </div>
            </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Flatcard;
