import React from 'react'

function AdminDashboard() {
  return (
    <div className=' bg-slate-100 min-h-screen flex items-center justify-center'>
        <section className='p-5 shadow-lg w-max min-w-[30rem] bg-white rounded-xl  '>

        
        <div className="bg-white py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-xl px-4 md:px-8">
    <div className="grid gap-8 md:grid-cols-2 lg:gap-12 items-center">
      <div>
        <div className="h-12 overflow-hidden rounded-lg w-max  mx-auto  bg-gray-100 shadow-lg md:h-40">
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
            loading="lazy"
            alt="Photo by Martin Sanchez"
            className="h-full mx-auto w-full object-cover object-center"
          />
        </div>
      </div>
      <div className="">
        <p className="text-center font-bold text-indigo-500">
            Hello! You are
        </p>
        <h1 className=" text-center mb-2 md:mb-2 text-2xl font-bold text-gray-800 sm:text-3xl  ">
          Samyak Jain
        </h1>
        <p className=" text-center ">
          Roll no : 2100301530097
        </p>
        <p className='text-center'>Phone no : 9899987988</p>
        
        
      </div>
    </div>
  </div>
</div>

<div className="teacher">
    <div className="heading flex justify-between items-center ">
        <h2 className='text-xl font-bold'>Teacher Database</h2>

<button className='bg-blue-500 rounded-lg text-white text-sm p-2 my-3'>Add Teacher</button>
    </div>

<div className="teacher_table h-60 bg-slate-100 overflow-auto shadow-inset shadow-xl">
    
    <table className='w-full'>
  <tr className='text-left'>
    <th className='p-2 border-2'>Name</th>
    <th className='p-2 border-2'>Department</th>
    <th className='p-2 border-2'>...</th>
  </tr>

  <tr className='p-1 bg-white'>
    <td className='p-2 border-2'>Neha Verma</td>
    <td className='p-2 border-2'>AIML</td>
    <td className='p-2 border-2'><a className='underline text-blue-500'>View Details</a></td>
  </tr>
  <tr className='p-1 bg-white'>
    <td className='p-2 border-2'>Neha Verma</td>
    <td className='p-2 border-2'>AIML</td>
    <td className='p-2 border-2'><a className='underline text-blue-500'>View Details</a></td>
  </tr>
  <tr className='p-1 bg-white'>
    <td className='p-2 border-2'>Neha Verma</td>
    <td className='p-2 border-2'>AIML</td>
    <td className='p-2 border-2'><a className='underline text-blue-500'>View Details</a></td>
  </tr>
  <tr className='p-1 bg-white'>
    <td className='p-2 border-2'>Neha Verma</td>
    <td className='p-2 border-2'>AIML</td>
    <td className='p-2 border-2'><a className='underline text-blue-500'>View Details</a></td>
  </tr>
  <tr className='p-1 bg-white'>
    <td className='p-2 border-2'>Neha Verma</td>
    <td className='p-2 border-2'>AIML</td>
    <td className='p-2 border-2'><a className='underline text-blue-500'>View Details</a></td>
  </tr>
  <tr className='p-1 bg-white'>
    <td className='p-2 border-2'>Neha Verma</td>
    <td className='p-2 border-2'>AIML</td>
    <td className='p-2 border-2'><a className='underline text-blue-500'>View Details</a></td>
  </tr>
  <tr className='p-1 bg-white'>
    <td className='p-2 border-2'>Neha Verma</td>
    <td className='p-2 border-2'>AIML</td>
    <td className='p-2 border-2'><a className='underline text-blue-500'>View Details</a></td>
  </tr>
  
</table>
</div>
</div>

<div className="student my-10">
    <div className="heading flex justify-between items-center ">
        <h2 className='text-xl font-bold'>Student Database</h2>

<button className='bg-blue-500 rounded-lg text-white text-sm p-2 my-3'>Add Student</button>
    </div>

<div className="teacher_table h-60 bg-slate-100 overflow-auto shadow-inset shadow-xl">
    
    <table className='w-full'>
  <tr className='text-left'>
    <th className='p-2 border-2'>Name</th>
    <th className='p-2 border-2'>Department</th>
    <th className='p-2 border-2'>...</th>
  </tr>

  <tr className='p-1 bg-white'>
    <td className='p-2 border-2'>Rohit</td>
    <td className='p-2 border-2'>AIML</td>
    <td className='p-2 border-2'><a className='underline text-blue-500'>View Details</a></td>
  </tr>
  <tr className='p-1 bg-white'>
    <td className='p-2 border-2'>Rohit</td>
    <td className='p-2 border-2'>AIML</td>
    <td className='p-2 border-2'><a className='underline text-blue-500'>View Details</a></td>
  </tr>
  <tr className='p-1 bg-white'>
    <td className='p-2 border-2'>Rohit</td>
    <td className='p-2 border-2'>AIML</td>
    <td className='p-2 border-2'><a className='underline text-blue-500'>View Details</a></td>
  </tr>
  <tr className='p-1 bg-white'>
    <td className='p-2 border-2'>Rohit</td>
    <td className='p-2 border-2'>AIML</td>
    <td className='p-2 border-2'><a className='underline text-blue-500'>View Details</a></td>
  </tr>
  <tr className='p-1 bg-white'>
    <td className='p-2 border-2'>Rohit</td>
    <td className='p-2 border-2'>AIML</td>
    <td className='p-2 border-2'><a className='underline text-blue-500'>View Details</a></td>
  </tr>
  <tr className='p-1 bg-white'>
    <td className='p-2 border-2'>Rohit</td>
    <td className='p-2 border-2'>AIML</td>
    <td className='p-2 border-2'><a className='underline text-blue-500'>View Details</a></td>
  </tr>
  <tr className='p-1 bg-white'>
    <td className='p-2 border-2'>Rohit</td>
    <td className='p-2 border-2'>AIML</td>
    <td className='p-2 border-2'><a className='underline text-blue-500'>View Details</a></td>
  </tr>
  <tr className='p-1 bg-white'>
    <td className='p-2 border-2'>Rohit</td>
    <td className='p-2 border-2'>AIML</td>
    <td className='p-2 border-2'><a className='underline text-blue-500'>View Details</a></td>
  </tr>
  <tr className='p-1 bg-white'>
    <td className='p-2 border-2'>Rohit</td>
    <td className='p-2 border-2'>AIML</td>
    <td className='p-2 border-2'><a className='underline text-blue-500'>View Details</a></td>
  </tr>
  
</table>
</div>
</div>
</section>
</div>


  )
}

export default AdminDashboard