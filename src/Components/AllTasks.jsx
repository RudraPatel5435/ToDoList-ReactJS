import React, { useState } from 'react'
import TaskList from '../Tasks/TaskList'
import { RiDeleteBinLine } from '@remixicon/react'
import { RiEditBoxLine } from '@remixicon/react'


const AllTasks = () => {

    const [bgColor, setBgColor] = useState('black')

  return (
    <div id='alltasks' className='w-full max-h-[357px] mt-3 overflow-x-scroll'>
        
      {TaskList.map((task, index) => {
          return (
            <div key={index} className='flex items-center justify-between mt-3 border-[#c4b49b] border-[1px] px-5 py-2 rounded-xl'>
              <div className='flex items-center'>
                <div className={`cursor-pointer h-5 w-5  rounded-full border-[1px] border-[#4caf50] ${task.checked ? 'bg-[#4caf50]' : 'bg-trasparent'}`}></div>
                <p className='text-white text-lg ml-3 w-[280px]'>{task.name}</p>
              </div>
              <div className="flex ">
                <RiDeleteBinLine size={25} color='#c4b49b' className='cursor-pointer' />
                <RiEditBoxLine size={25} color='#c4b49b' className='cursor-pointer' />
              </div>
            </div>
          )
      })}
    </div>
  )
}

export default AllTasks
