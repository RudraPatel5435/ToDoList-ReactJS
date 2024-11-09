import React from 'react'

const AddTask = () => {
  return (
    <div className='flex items-center justify-center mt-6'>
      <input type="text" placeholder='Add Task' className='rounded-lg px-4 py-1 w-[340px] text-lg outline-none bg-[#1f2937] text-[#c4b49b] placeholder:text-[#c4b49b]' />
      <img src="plus.png" className='h-9 ml-5 bg-[#1f2937] rounded-full p-2 cursor-pointer' /> 
    </div>
  )
}

export default AddTask
