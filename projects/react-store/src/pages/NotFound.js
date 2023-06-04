import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {TbError404} from 'react-icons/tb'

const NotFound = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  });

  return (
    <div className='notfound-page-container'>
        <span>
            <TbError404 size={'200px'} color='black' />
        </span>
        <h1 className='notfound-page-title'>Not Found</h1>
        <p className='notfound-page-desc'>Redirecting to home page in 3 seconds...</p>
    </div>
  );
};

export default NotFound;
