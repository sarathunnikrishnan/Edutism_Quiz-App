import React, { useEffect } from 'react'
import axios from 'axios';
import { message } from 'antd';
import {useNavigate} from "react-router-dom";

const LogOut = () => {

    const Navigate = useNavigate();


    useEffect( () => {
        const url = `${process.env.REACT_APP_API_URL}/logout`;
        axios
          .get(url)
          .then((res) => {
              message.success(res.data.message || "Logged out successfully");
              Navigate("/home" );
        
          })
          .catch((err) => {
            console.error("Error occurred while fetching data:", err);
            message.error("An error occurred during logout.");
          });
      },[Navigate])
  return (
    <div>LogOut</div>
  )
}

export default LogOut