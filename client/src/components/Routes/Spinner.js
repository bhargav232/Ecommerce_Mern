import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Spinner = ({path = "login"}) => {
    const[time, setTime] = useState(3);
    const navigate = useNavigate();

  useEffect(()=>{
    const interval = setTimeout(()=>{
         setTime((prevValue)=>--prevValue)
    }, 1000)
    time === 0 && navigate(`/${path}`)
    return () => clearInterval(interval);
   }, [time, navigate, path])
   
    return (
        <div className="spinner">
            <h2 className="spinner-heading">Redirecting to homepage in {time} sec...</h2>
        <div className="spinner-border" >
        </div>
        </div>
    );
};

export default Spinner;
