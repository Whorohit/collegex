import React, { useCallback, useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { RxCross1 } from 'react-icons/rx'
import { ToastContainer, toast } from "react-toastify";
import Input from './Input'
import Select from './Select'
function Document() {
  const [userinfo, setuserinfo] = useState(
    {
      firstname: "",
      lastname: "",
      dob: "",

      mobile: 0,
      email: "",

      profilephoto: "",
      address: "",
      pincode: "",
      course: "",
      department: "",
      section: "",
      year:"",
      Rollno: "",
      idcard: "",
      Certificate: "",

      Achievement: ""
    }
  )
  const handleInputChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setuserinfo((prevCarInfo) => ({
        ...prevCarInfo,
        [name]: value,
      }));

    },


    [userinfo]
  )
  const navigate=useNavigate();

  return (
    <div className='z-20  bg-white absolute   min-h-screen transition-all duration-300'>
      <h1 className='flex items-center justify-end  w-[95%] mx-auto mt-5 gap-x-4 '>
        <button className='bg-transparent font-bold  border-blue-200 hover:scale-90 hover:bg-blue-300 hover:text-black cursor-pointer  border-2 px-3  py-1 rounded-xl '
        > Submit
        </button>
        <RxCross1 size={20}   />
      </h1>
      <h1 className='  mx-auto px-8 md:px-0 md:w-[70%] font-bold text-start text-xl md:text-3xl'>Basic Details</h1>
      <div className='flex flex-col md:flex-row   md:justify-between px-4  md:p-8 items-start '>

        <div className=' mx-auto md:basis-[70%]  md:px-6 '>
          <div className='flex flex-col md:flex-row justify-center  gap-2 md:gap-6'>
            <Input label='Firstname' value={userinfo.firstname} type='text' name='firstname' onchange={handleInputChange} />
            <Input label='Lastname' value={userinfo.lastname} type='text' name='lastname' onchange={handleInputChange} />
            {/* <Select label='Make' value={carinfo.lastname} name='brandname' optiondata={Brand} onchange={handleInputChange} enableoption={true} /> */}
          </div>
          
          <div className='flex flex-col md:flex-row justify-center  gap-2 md:gap-6'>
            <Input label='Dob' value={userinfo.dob} type="date"name='dob' onchange={handleInputChange} />
            <Input label='Lastname' value={userinfo.lastname} type='text' name='lastname' onchange={handleInputChange} />
            {/* <Select label='Make' value={carinfo.lastname} name='brandname' optiondata={Brand} onchange={handleInputChange} enableoption={true} /> */}
          </div>
          <div className='flex flex-col md:flex-row justify-center  gap-2 md:gap-6'>
            <Select label='Course' value={userinfo.lastname} name='course' optiondata={[
              "BTech","BCA","BBA"
            ]} onchange={handleInputChange} enableoption={false} />
            <Select label='Department' value={userinfo.department} name='department' optiondata={['ECE',"CSE","CSE_AIML","CSE_DS","ME","ASH"]} onchange={handleInputChange} enableoption={false} />
            {/* <Input label='Email' name='email' value={userinfo.email} type='email' onchange={handleInputChange} /> */}
          </div>
          <div className='flex flex-col md:flex-row justify-center  gap-2 md:gap-6'>
            {/* <Select label='Body' optiondata={Category} name='Body' value={carinfo.Body} onchange={handleInputChange} /> */}
            <Input label='Address' name='address' classname={'w-[44rem] md:w-[50rem]'}classnamelabel={'w-[44rem] md:w-[50rem]'}  value={userinfo.address} onchange={handleInputChange} />


          </div>
          {/* <div className='flex flex-col md:flex-row justify-center  gap-2 md:gap-6'>
            <Select label='Rent/Sell' name='RentorSell' optiondata={[{ brandname: "Rent" }, { brandname: "Sell" }]} value={carinfo.RentorSell} onchange={handleInputChange} />
            <Input label='Seating' type='number' name='seating' value={carinfo.seating} onchange={handleInputChange} />
          </div> */}

        </div>
        <div className='md:basis-[30%] md:px-10'>
          <h1 className='text-black  pb-3 mb-1 border-b border-neutral-500 font-bold text-xl'> Safety recall terms</h1>
          <h1 className='text-neutral-500 p-2  text-sm md:text-base my-1 '>
          In light of recent security assessments, we regret to announce a safety recall for the Digilocker website utilized for academic purposes. Users are urged to refrain from accessing the site until further notice due to identified vulnerabilities that may compromise data security. Our team is actively working to address these issues and ensure the safety of user data. Please stay tuned for updates on the website's restoration. Your cooperation is crucial, and we apologize for any inconvenience caused. Thank you for prioritizing your safety and security.
          </h1>
          <h1 className='text-black  pb-3 mb-1 border-b border-neutral-500 font-bold text-xl'> Need support?</h1>
          <h1 className='text-neutral-500 p-2  text-sm md:text-base my-1 '>
            Have questions or need assistance? We’re here to help.

            Contact us
            <a href="" className='block text-blue-500'>support@Collegedigi.com</a>
          </h1>
        </div>
      </div>

    </div>
  )
}

export default Document