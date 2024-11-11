import React, { useState } from 'react'

const AddTask = ({taskList, setTaskList}) => {

    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [tags, setTags] = useState('')

    const addTask = () => {
        if (task.trim() === "") return
        const newTask = {
            name: task,
            category: category,
            tags: [],
            checked: false,
            deleted: false
        }
        const updatedTaskList = [newTask, ...taskList]
        setTaskList(updatedTaskList)
        setName('')
        setCategory('')
        setTags('')
    }

  return (
    <div className='w-[80%] flex items-center justify-between'>
      <div className="flex flex-col items-start justify-start pl-10 gap-5">
        <input type="text" onChange={(e) => set(e.target.value)} value={name} placeholder='Add Task' className='rounded-lg px-5 py-2 w-[100%] text-2xl outline-none bg-[#1f2937] text-[#c4b49b] placeholder:text-[#c4b49b]' />
        <div className="flex items-center justify-between gap-5">
          <input type="text" onChange={(e) => set(e.target.value)} value={category} placeholder='Add Category' className='rounded-lg px-5 py-2 w-[400px] text-2xl outline-none bg-[#1f2937] text-[#c4b49b] placeholder:text-[#c4b49b]' />
          <input type="text" onChange={(e) => set(e.target.value)} value={tags} placeholder='Add Tags' className='rounded-lg px-5 py-2 w-[400px] text-2xl outline-none bg-[#1f2937] text-[#c4b49b] placeholder:text-[#c4b49b]' />
          </div>
      </div>
      <div className="m-10">
        <img onClick={addTask} src="plus.png" className='h-20 ml-5 bg-[#1f2937] rounded-full p-4 cursor-pointer' /> 
      </div>
    </div>
  )
}

export default AddTask
