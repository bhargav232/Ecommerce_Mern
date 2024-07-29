import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Spinner = ({ path = "login" }) => {
  const [time, setTime] = useState(3);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prevValue => prevValue - 1);
    }, 1000);

    if (time === 0) {
      navigate(`/${path}`);
      clearInterval(interval); // Clear the interval after navigating
    }

    return () => clearInterval(interval); // Cleanup the interval
  }, [time, navigate, path]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-xl font-semibold mb-4">Redirecting to {path} in {time} sec...</h2>
      <div className="w-16 h-16 border-4 border-t-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
    </div>
  );
};

export default Spinner;
