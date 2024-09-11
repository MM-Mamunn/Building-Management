import React, { useState, useEffect } from "react";
import Adminside from "../sides/Adminside";
import axios from "axios";
import Nav from "../components/nav";
import { useParams, useNavigate } from "react-router-dom";
function Flatbook() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [book, setBook] = useState({
    owner: "",
    phone: "",
    members: "",
    flat: id,
  });

  const handleChange = (e, f) => {
    f == 1
      ? setBook((prev) => ({
          ...prev,
          owner: e.target.value,
        }))
      : f == 2
      ? setBook((prev) => ({
          ...prev,
          phone: e.target.value,
        }))
      : f == 3
      ? setBook((prev) => ({
          ...prev,
          members: e.target.value,
        }))
      : f == 4
      ? setBook((prev) => ({
          ...prev,
          issue: e.target.value,
        }))
      : "";
  };

const handleAdd= async ()=>{
    let datee = new Date().toISOString().split('T')[0];
    setBook((prev) => ({
        ...prev,
        issue: datee,
        flat:id
    }))
      console.log((book));
      
      axios
      .post(`http://127.0.0.1:3000/api/newrent/book`,book)
      .then((res) => {
        alert("successfull")
        setBook((prev) => ({
            owner: "",
            phone: "",
            members: "",
            issue: "",
            flat: id,
          }))
      })
      .catch((error) => {
        const errorMessage = error.message || 'An unknown error occurred';
    
        // Display the error message using alert
        alert(errorMessage);
      });
}

  return (
    <>
      <Nav />
      <div className="flex justify-between mx-1 gap-1">
        <div className="side h-[87vh] w-[30%]">
          <Adminside />
        </div>
        <div className="body bg-blue-300  rounded-lg scrollbar-thin scrollbar-thumb-blue-700  scrollbar-track-gray-200 h-[87vh] my-1 w-full overflow-scroll overflow-x-clip flex flex-col items-center gap-1  ">
          <div className="w-[69vw] my-4 text-center p-8 bg-blue-200 border border-gray-200 rounded-lg shadow dark:border-blue-700">
            <div className="bg-blue-100 p-1 rounded-xl">
              <div className="bg-[#0ea5e9] mx-[40%] my-1 py-2 rounded-xl font-serif font-bold text-black italic ">
                Flat : {id}
              </div>
              <div className="allinputs flex flex-col items-center">
                <input
                  name={book.owner}
                  value={book.owner}
                  onChange={(e) => handleChange(e, 1)}
                  type="text"
                  className="mx-1 px-2 min-h-[20px] w-[800px]  my-1 bg-white rounded-2xl"
                  placeholder="Name"
                  minLength={3}
                />

                <input
                  name={book.phone}
                  value={book.phone}
                  onChange={(e) => handleChange(e, 2)}
                  type="text"
                  className="mx-1 px-2 min-h-[20px] w-[800px]  my-1 bg-white rounded-2xl"
                  placeholder="Phone"
                  minLength={11}
                />

                <input
                  name={book.members}
                  value={book.members}
                  onChange={(e) => handleChange(e, 3)}
                  type="number"
                  className="mx-1 px-2 min-h-[20px] w-[800px]  my-1 bg-white rounded-2xl"
                  placeholder="Number of members"
                  min="1"
                  step="1"
                />
                
              </div>
                <button
                  onClick={handleAdd}
                  disabled={book.owner.length < 5 || book.phone.length < 11 || book.members < 1}
                  className="bg-green-900 disabled:bg-blue-950 hover:bg-blue-800 px-2 mx-1 text-white rounded-2xl h-[60px] py-2  mt-[9px]"
                >
                 Request Booking
                </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Flatbook;
