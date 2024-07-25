import React, { useEffect } from 'react'
import axios from 'axios';
import {useNavigate} from "react-router-dom";

const LogOut = () => {

    const Navigate = useNavigate();


    useEffect( () => {
        const url = "http://localhost:7070/logout";
        axios
          .get(url)
          .then((res) => {
              alert(res.data)
              Navigate("/home" );
        
          })
          .catch((err) => {
            console.error("Error occurred while fetching data:", err);
          });
      },[Navigate])
  return (
    <div>LogOut</div>
  )
}

export default LogOut