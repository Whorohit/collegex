import React from 'react'
import Document from './Document'

function UserDashboard() {
  return (
    <div  className='bg-slate-100 min-h-screen '>
        <section className=" bg-white rounded-lg w-max min-w-[30rem] mx-auto shadow-lg rounded-lg ">

            <div className="bg-white py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-xl px-4 md:px-8">
    <div className="grid gap-8 md:grid-cols-2 lg:gap-12 items-center">
      <div>
        <div className="h-12 overflow-hidden rounded-lg w-max float-right bg-gray-100 shadow-lg md:h-40">
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
          Samyak Jain
        </h1>
        <p className=" text-center  text-gray-800  md:text-left">
          Roll no : 2100301530097
        </p>
        <p>Phone no : 9899987988</p>
        
        
      </div>
    </div>
  </div>
</div>

<div className="bg-white py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-xl px-4 md:px-8">
    {/* text - start */}
    <div className="">
      <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
        Your Documents
      </h2>
      
    </div>
    {/* text - end */}
    <div className="grid gap-8 grid-cols-1 sm:gap-12  xl:gap-16">
      {/* article - start */}
      <Document/>
      <Document/>
      <Document/>
      <Document/>
      {/* article - end */}
      
    </div>
  </div>
</div>


        </section>
    </div>
  )
}

export default UserDashboard