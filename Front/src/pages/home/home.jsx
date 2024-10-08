import React, { useState, useEffect } from "react";
import Adminside from "../sides/Adminside";
import axios from "axios";
import Nav from "../components/nav";
import { NavLink } from "react-router-dom";
function Home() {
  const [flat, setflat] = useState([]);

  const fetchallflat = async () => {
    axios
      .get("http://127.0.0.1:3000/api/flat/all")
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
      <div className="flex bg-gray-900 justify-between px-1 gap-1">
        <div className="side h-[87vh] w-[30%] ">
          <Adminside />
        </div>
        <div className="body rounded-lg bg-blue-200 scrollbar-thin  scrollbar-thumb-blue-700  scrollbar-track-gray-200 h-[87vh] my-1 w-full overflow-scroll overflow-x-clip flex flex-col items-center gap-3  ">
          {flat?.map((item, index) => (
            <div key={index} className="flex text-center items-center justify-between w-[50vw] bg-blue-500 px-2  rounded-lg py-1">
             <NavLink className="font-bold text-white " to ={`/flat/one/${item.flat}`}>
              {item?.flat}
             </NavLink>
             <div>
              
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
          {item?.bed}
             </div>
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
            
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
