import React, { useState } from 'react'
import { RiDeleteBinLine } from '@remixicon/react'
import { RiEditBoxLine } from '@remixicon/react'



const AllTasks = ({taskList, setTaskList}) => {

    const [editingTaskName, setEditingTaskName] = useState('')
    const [editingIndex, setEditingIndex] = useState(null)

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

    const handleEdit = index => {
        setEditingIndex(index)
        setEditingTaskName(taskList[index].name)
    }

    const saveEditedTask = ()=>{
        const updatedTaskList = taskList.map((task, i)=>{
            if (i === editingIndex){
                return {...task, name:editingTaskName}
            }
            return task
        })
        setTaskList(updatedTaskList)
        setEditingIndex(null)
        setEditingTaskName('')
    }

  return (
    <div>
         <div className='flex items-center justify-center mt-6'>
            <input type="text" onChange={(e)=>setEditingTaskName(e.target.value)} value={editingTaskName} placeholder='Edit Task (Click Edit Button)' className='rounded-lg px-4 py-1 w-[290px] text-lg outline-none bg-[#1f2937] text-[#c4b49b] placeholder:text-[#c4b49b]' />
            <h4 onClick={saveEditedTask} className='h-9 ml-5 bg-[#4caf50] text-[#1f2937] text-xl rounded px-2 py-1 cursor-pointer font-semibold'>Save</h4> 
        </div>
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
                    <RiEditBoxLine onClick={()=>handleEdit(index)} size={25} color='#c4b49b' className='cursor-pointer' />
                    <RiDeleteBinLine onClick={() => handleDelete(index)} size={25} color='#c4b49b' className='cursor-pointer' />
                  </div>
                </div>
              )
          })}
        </div>
    </div>
  )
}

export default AllTasks
