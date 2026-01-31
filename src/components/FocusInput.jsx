import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";


const FocusInput = () => {
  const inputRef = useRef(null);
    const navigate = useNavigate();


  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <div className="flex justify-center mt-10">
      <input ref={inputRef} type="text" placeholder="Type here..."
        className="border border-gray-400 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    <button onClick={() => navigate(-1)} className=" bg-blue-700 text-white rounded-xl p-2 text-center m-10 w-20">Back</button>
    </>
  );
};

export default FocusInput;
