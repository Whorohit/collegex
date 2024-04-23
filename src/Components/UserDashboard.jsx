import React, { useEffect, useState } from 'react'
import Document from './Document'
import { useNavigate } from 'react-router-dom'
import { toast, } from 'react-toastify'

function UserDashboard() {
  const [userdata, setuserdata] = useState({
    firstname: "Rohit ",
    lastname: "Gautam",
    mobile: "5555555512",
    department: "CSE",
    section: "A",
    year: "3rd",
    course: "B.TECH",
    Rollno: "222222222"




  })
  const navigate = useNavigate()
  const getuserdata = async () => {

    try {
      let response = await fetch(`http://localhost:5000/api/getinfo`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `${localStorage.getItem('token')}`
        },

      });
      const jsonfile = await response.json().then((data) => {
        setuserdata(data.userData)
        if (data.success === false) {
          toast.error(data.errors, {
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
          }, 5000);
        }

      })



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
      }, 5000);
    }
  }
  useEffect(() => {

    getuserdata();


  }, [])
  console.log(userdata);

  return (
    <div className='bg-slate-100 min-h-screen  '>
      <section className=" bg-white rounded-lg w-[70%] mx-auto shadow-lg  ">

        <div className="bg-white py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-xl px-4 md:px-8">
            <div className="flex  md:flex-row flex-col  md:justify-between items-center justify-center w-[80%] mx-auto ">
              <div>
                <div className="rounded-lg  flex justify-center items-center   md:h-40">
                  <img
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                    loading="lazy"
                    alt="Photo by Martin Sanchez"
                    className="h-full object-cover object-center"
                  />
                </div>
              </div>
              <div className="">
                <p className="text-center font-bold text-indigo-500 md:text-left">
                  Hello! You are
                </p>
                <h1 className=" text-center mb-2 md:mb-2 text-2xl font-bold text-gray-800 sm:text-3xl  md:text-left">
                  {userdata?.firstname} {userdata?.lastname}
                </h1>
                <p className=" text-center  text-gray-800  md:text-left">
                  Roll no : {userdata?.Rollno}
                </p>
                <p >Phone no :{userdata?.mobile}</p>
                <p >course :{userdata?.course}</p>
                <p >Branch :{userdata?.department}</p>
                <p>year :{userdata?.year}-{userdata?.section}</p>


              </div>
            </div>
          </div>
        </div>


        <div className="bg-white py-6 sm:py-8 lg:py-12">
          <div className="mx-auto  min-w-[30rem] w-max px-4 md:px-8">
            {/* text - start */}

            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Your Documents
            </h2>
            {/* text - end */}
            <div className="grid gap-8 grid-cols-1 sm:gap-12  xl:gap-16">
              {/* <mydocument /> */}
              <div>
                <h3 className='text-xl font-semibold'>ID Card</h3>
                <a className='# text-sm ' href='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2k5wQTq_JQHeyuCOdgyr8m07RGGML4HAIfh9BCSqSHuydwM30r-YwNKM&s=10'  >View Document</a>
              </div>
              <div>
                <h3 className='text-xl font-semibold'>Time Table</h3>
                <a className='# text-sm ' href='#'  >View Document</a>
              </div>
              <div>
                <h3 className='text-xl font-semibold'>Certificate 01</h3>
                <a className='# text-sm ' href='#'  >View Document</a>
              </div>
              <div>
                <h3 className='text-xl font-semibold'>Certificate 01</h3>
                <a className='# text-sm ' href='#'  >View Document</a>
              </div>
              <div>
                <h3 className='text-xl font-semibold'>Certificate 03</h3>
                <a className='# text-sm ' href='#'  >View Document</a>
              </div>
              <div className="bg-white py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                  <div className="grid gap-6 sm:grid-cols-2">
                    {/* product - start */}
                    <a
                      href="#"
                      className="group relative flex h-80 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg"
                    >
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2k5wQTq_JQHeyuCOdgyr8m07RGGML4HAIfh9BCSqSHuydwM30r-YwNKM&s=10"
                        loading="lazy"
                        alt="Photo by Fakurian Design"
                        className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
                      <div className="relative flex flex-col">
                        <span className="text-gray-300">Home</span>
                        <span className="text-lg font-semibold text-white lg:text-xl">
                          Decoration
                        </span>
                      </div>
                    </a>
                    {/* product - end */}
                    {/* product - start */}
                    <a
                      href="#"
                      className="group relative flex h-80 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg"
                    >
                      <img
                        src="https://images.unsplash.com/photo-1620241608701-94ef138c7ec9?auto=format&q=75&fit=crop&w=750"
                        loading="lazy"
                        alt="Photo by Fakurian Design"
                        className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
                      <div className="relative flex flex-col">
                        <span className="text-gray-300">Modern</span>
                        <span className="text-lg font-semibold text-white lg:text-xl">
                          Furniture
                        </span>
                      </div>
                    </a>
                    {/* product - end */}
                  </div>
                </div>
              </div>

              {/* <MyDocument />
              <MyDocument />
              <MyDocument />
              <MyDocument />
              <MyDocument /> */}
              {/* article - start */}
              {/* <Document />
              <Document />
              <Document />
              <Document /> */}
              {/* article - end */}

            </div>
          </div>
        </div>


      </section>
    </div>
  )
}

export default UserDashboard