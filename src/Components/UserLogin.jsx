import React, { useState } from "react";
// import { onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'

import { Link, useNavigate } from "react-router-dom";

// import { useDispatch, useSelector } from 'react-redux'
// import Toastbox from '../components/toastbox'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function UserLogin() {
  const navigate = useNavigate()
  // const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    userid: " ",
    password: " ",
    usertype: "Student",
  });
  // const data = useSelector((state) => state.stock.logininfo);
  const handleonchange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const toggleuser = (user) => {
    setUserData({
      ...userData,
      usertype: user,
    });
  };
  const handlesubmit = async () => {
    try {
      const { userid, password, usertype } = userData;
      let response = await fetch(`http://localhost:5000/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userid: userid,
          password: password,
          usertype: usertype,
        }),
      });
      const jsonfile = await response.json().then((data)=>{
        if (data.success==true) {
          toast.success("Login successfully", {
            position: "top-right",
            className: "font-bold text-xl",
            autoClose: 3000,
            style: {
              backgroundColor: "white",
              color: "rgb(92, 92, 92)",
              fontSize: "10px",
            },
          });
          localStorage.setItem('token',data.token)
          localStorage.setItem("id",data.id)
          setTimeout(() => {
            navigate('/userDashboard')
          },5000);
        }
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
        }
        
      });
      console.log(jsonfile);
      
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
    }
  };

  return (
    <>
      <ToastContainer />
      <div className=" min-h-screen min-w-screen mx-auto  flex justify-center items-center   bg-gray-200 ">
        <div className=" w-[90%]  md:flex justify-center md:w-3/5  ">
          <div
            class="hidden md:flex justify-evenly  flex-col  font-semibold w-3/5  md:rounded-s-3xl  bg-indigo-500 text-white "
            style={{ minHeight: "40rem" }}
          >
            <h1 className="text-5xl text-center ">Hey There!</h1>
            <div>
              <h1 className="text-2xl text-center font-semibold">
                {" "}
                WELCOME BACK
              </h1>
              <h1 className="text-base text-center">
                {" "}
                you are one step away your feed{" "}
              </h1>
            </div>
          </div>
          <div
            className="container bg-gray-50  rounded-xl md:w-3/5 w-full  md:mx-0 mx-auto flex flex-col   md:rounded-ee-3xl md:rounded-e-3xl  md:rounded-s-none   "
            style={{ minHeight: "40rem" }}
          >
            <h1 className="text-indigo-500 text-2xl font-semibold  mx-6 mt-24 text-center">
              Login
            </h1>
            <div className="mx-5">
              <p class="mb-4 md:text-xs text-center ">
                Please login to your account
              </p>
              <div className="flex justify-center gap-5 item-center  ">
                <button
                  className={`px-4 py-2  bg-indigo-300 hover:bg-indigo-500 rounded-md 
                   ${userData.usertype === "Faculty" && "bg-indigo-500 "}
                 `}
                  onClick={() => {
                    toggleuser("Faculty");
                  }}
                >
                  Faculty
                </button>
                <button
                  className={`px-4 py-2  bg-indigo-300 hover:bg-indigo-500 rounded-md 
                   ${userData.usertype === "Student" && "bg-indigo-500 "}
                 `}
                  onClick={() => {
                    toggleuser("Student");
                  }}
                >
                  Student
                </button>
              </div>
              <div className="container flex flex-col  justify-center item-center">
                <label
                  htmlFor="userid"
                  className="text-black block w-4/5 mx-auto text-xs my-1 font-semibold"
                >
                  User
                </label>
                <input
                  type="text"
                  className="w-4/5  mx-auto  text-sm border-2 border-gray-200 rounded-lg py-2 focus:border-indigo-500 "
                  name="userid"
                  id="userid"
                  style={{ minHeight: "1.8rem" }}
                  onChange={handleonchange}
                />
              </div>
              <h1 className="h-4 my-3"></h1>
              <div className="container flex flex-col">
                <label
                  htmlFor="password "
                  className="text-black text-xs  w-4/5 mx-auto my-1 font-semibold"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="w-4/5 mx-auto text-sm border-2 border-gray-200 rounded-lg py-2 focus:border-indigo-500 "
                  name="password"
                  id="password"
                  style={{ minHeight: "1.8rem" }}
                  onChange={handleonchange}
                />
              </div>
              {/* <div class="mb-6  text-base  md:text-xs mt-2 flex items-center justify-start  flex-wrap ">

              <Link
                href="#!"
                class="text-blue-400  hover:text-blue-700 text-lg md:text-sm "
              >Forgot password?</Link>
            </div> */}
              <div class="flex -mx-3 my-6">
                <div class="w-full px-3 mb-5">
                  <button
                    type="submit"
                    class="block   max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold  md:w-2/5  md:text-xs "
                    onClick={handlesubmit}
                  >
                    Login Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserLogin;
