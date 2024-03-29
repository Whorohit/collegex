import React, { ChangeEvent } from 'react'




const Select = ({ value, onchange, optiondata=[], className, disabled = false, label, showlabel, name,enableoption=false }) => {
    return (
        <div className=' '>
            <label htmlFor={name} className='block text-neutral-600  my-2 font-semibold'>{label}</label>
            <select
                name={name}
                disabled={disabled}
                onChange={onchange}
                value={value}
                className=' w-[22rem] md:w-[25rem] outline-none   block mx-auto  rounded-md bg-blue-50 border border-neutral-500
         h-12 '
            >
                {optiondata?.map((option)=>{
                    return(
                        <option value={enableoption?option?.id:option.brandname}>{option.brandname}</option>
                    )
                })}
            </select>
        </div>
    )
}

export default Select