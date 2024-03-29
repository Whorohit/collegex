import React,{useEffect,useState} from 'react'
import { Link, useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
function Document() {
  const [userdata, setuserdata] = useState({

  })
  const navigate = useNavigate()
  const  getuserdata=async()=>{
    if(!localStorage.getItem('token'))
    {
      navigate('/')
    }
    try {
      let response = await fetch(`http://localhost:5000/api/getinfo`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "token": localStorage.getItem('token')
        },
      
      });
      const jsonfile = await response.json();
      console.log(jsonfile);
      if (jsonfile.success === false) {
        toast.error(jsonfile.errors, {
          position: "top-right",
          className: "font-bold text-xl",
          autoClose: 3000,
          style: {
            backgroundColor: "white",
            color: "rgb(92, 92, 92)",
            fontSize: "10px",
          },
        });
        localStorage.clear();
        setTimeout(() => {
          navigate('/')
        },5000);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong", {
        position: "top-right",
        className: "font-bold text-xl",
        autoClose: 3000,
        style: {
          backgroundColor: "white",
          color: "rgb(92, 92, 92)",
          fontSize: "10px",
        },
      });
      localStorage.clear();
      setTimeout(() => {
        navigate('/')
      },5000);
    }
  } 
   useEffect(() => {
    
    

    
   }, [ ])
   
  
  return (
    <div>
        <h3 className='text-xl font-semibold'>Document Type</h3>
        <a className='# text-sm ' href='#'  >View Document</a>
        {/* <div className="flex  p-2 border-2 border-t-0 border-x-0 flex-col items-center gap-4 md:flex-row lg:gap-6">
        <a
          href="#"
          className="group relative block  shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg h-16 md:w-24"
        >
          <img
            src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
            loading="lazy"
            alt="Photo by Minh Pham"
            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />
        </a>
        <div className="flex flex-col gap-2">
          
          <h2 className="text-xl font-bold text-gray-800">
            <a
              href="#"
              className="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
            >
              New trends in Tech
            </a>
          </h2>
          <div>
            <a
              href="#"
              className="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
            >
              View Document
            </a>
          </div>
        </div>
      </div>
    </div> */}
    </div>
  )
}

export default Document