import React from 'react'
import { Link } from 'react-router-dom'

function TeacherLogin() {
  return (
    <div>
        <div className=' min-h-screen min-w-screen mx-auto  flex justify-center items-center   bg-gray-200 '>
      <div className=" w-[90%]  md:flex justify-center md:w-3/5  " >
        <div class="hidden md:flex justify-evenly  flex-col  font-semibold w-3/5  md:rounded-s-3xl  bg-indigo-500 text-white " style={{ minHeight: "40rem" }}>

          <h1 className='text-5xl text-center ' >Hey There!</h1>
          <div>
            <h1 className='text-2xl text-center font-semibold'> WELCOME BACK</h1>
            <h1 className='text-base text-center'> you are one step away your feed </h1>
          </div>

          <div className="container text-xs flex justify-between flex-col items-center">
            <h1 className='text-base text-center mb-3 font-normal text-gray-400'><a href='/'>don't have an account ?</a></h1>
            <button class="rounded-full border-2 w-36 text-center  border-white py-2 px-4 hover:bg-indigo-700 focus:bg-indigo-700"><Link to='/signup'>Sign up</Link></button>
          </div>
        </div>
        <div className="container bg-gray-50  rounded-xl md:w-3/5 w-full  md:mx-0 mx-auto flex flex-col   md:rounded-ee-3xl md:rounded-e-3xl  md:rounded-s-none   " style={{ minHeight: "40rem" }} >


          <h1 className='text-indigo-500 text-2xl font-semibold  mx-6 mt-24'>Login</h1>
          <form className='mx-5' >
            <p class="mb-4 md:text-xs ">Please login to your account</p>
            <div className="container flex flex-col">
              <label htmlFor="email " className='text-black text-xs my-1 font-semibold' >User</label>
              <input type="text" className='w-4/5   text-sm border-2 border-gray-200 rounded-lg py-2 focus:border-indigo-500 ' name="email" id="email" style={{ minHeight: "1.8rem" }}/>
            </div>
            <h1 className='h-4 my-3'></h1>
            <div className="container flex flex-col">
              <label htmlFor="password " className='text-black text-xs my-1 font-semibold' >Password</label>
              <input type="password" className='w-4/5  text-sm border-2 border-gray-200 rounded-lg py-2 focus:border-indigo-500 ' name="password" id="password" style={{ minHeight: "1.8rem" }} />

            </div>
            {/* <div class="mb-6  text-base  md:text-xs mt-2 flex items-center justify-start  flex-wrap ">

              <Link
                href="#!"
                class="text-blue-400  hover:text-blue-700 text-lg md:text-sm "
              >Forgot password?</Link>
            </div> */}
            <div class="flex -mx-3 my-2">
              <div class="w-full px-3 mb-5">
                <button type='submit' class="block   max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold  md:w-2/5  md:text-xs ">Login Now</button>
              </div>
            </div>
          </form>
          
          
        </div>


      </div>
    </div>

    </div>
  )
}

export default TeacherLogin