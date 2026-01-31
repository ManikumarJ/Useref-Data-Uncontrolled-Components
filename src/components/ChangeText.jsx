import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const ChangeText = () => {
  const headingRef = useRef(null);
  const navigate = useNavigate();

  const clickchange = () => {
    headingRef.current.innerText = "Text Changed using useRef ";
  };

  return (
    <>
          <button onClick={() => navigate(-1)} className=" rounded bg-blue-600 text-white p-2 text-center m-12">Back</button>
      <h1 className=" m-12 text-2xl text-blue-600" ref={headingRef}>Original Text</h1>
      <button className="rounded bg-blue-600 text-white p-2 text-center m-12" onClick={clickchange}>Change Text</button>

    </>
  );
};

export default ChangeText;
