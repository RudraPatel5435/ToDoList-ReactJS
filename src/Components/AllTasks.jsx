import React from 'react'
import { RiDeleteBinLine } from '@remixicon/react'
import { RiEditBoxLine } from '@remixicon/react'


const AllTasks = ({taskList, setTaskList}) => {

    const toggleTaskChecked = (index) => {
        const updatedTaskList = taskList.map((task, i) => {
            if (i === index){
                return {...task, checked: !task.checked}
            }
            return task
        })
        setTaskList(updatedTaskList)
    }

    const handleDelete = (index)=>{
        const updatedTaskList = taskList.map((task, i)=>{
            if(i == index){
                if (!task.checked){
                    const ans = window.confirm("The task is not completed. Are you sure you want to delete it ?")
                    if (ans){
                        return {...task, deleted: true}
                    }
                }
                else {
                    return {...task, deleted: true}
                }
            }
            return task
        })
        setTaskList(updatedTaskList)
    }

  return (
    <div id='alltasks' className='w-full max-h-[357px] mt-3 overflow-y-scroll'>
      {taskList.map((task, index) => {
        if (task.deleted === true) return null
          return (
            <div key={index} className='flex items-center justify-between mt-3 border-[#c4b49b] border-[1px] px-5 py-2 rounded-xl'>
              <div className='flex items-center'>
                <div onClick={() => toggleTaskChecked(index)} className={`cursor-pointer h-5 w-5  rounded-full border-[1px] border-[#4caf50] ${task.checked ? 'bg-[#4caf50]' : 'bg-trasparent'}`}></div>
                <p className='text-white text-lg ml-3 w-[280px]'>{task.name}</p>
              </div>
              <div className="flex ">
                <RiEditBoxLine size={25} color='#c4b49b' className='cursor-pointer' />
                <RiDeleteBinLine onClick={() => handleDelete(index)} size={25} color='#c4b49b' className='cursor-pointer' />
              </div>
            </div>
          )
      })}
    </div>
  )
}

export default AllTasks
