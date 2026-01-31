import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1 className="text-2xl font-bold text-center mt-6">
        useRef Task
      </h1>

      <div className="flex justify-center mt-10">
        <Link to="/ChangeTag">
          <div className="w-64 bg-blue-800 text-white rounded-xl p-6 hover:bg-blue-600  cursor-pointer text-center">
            <h2 className="text-xl font-semibold mb-2">Change Tag </h2>
          </div>
        </Link>
          <Link to="/FocusInput">
          <div className="w-64 bg-blue-800 text-white rounded-xl p-6 hover:bg-blue-600 ml-10 cursor-pointer text-center">
            <h2 className="text-xl font-semibold mb-2">Focus Input </h2>
          </div>
        </Link>

        
      </div>
    </>
  );
};

export default Home;
