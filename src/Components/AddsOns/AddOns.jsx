import React, { useState } from 'react'

const AddOns = ({taskList, setTaskList}) => {
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedTag, setSelectedTag] = useState('')
  const allCategories = Array.from(new Set(taskList.map(task=>task.category)))
  const allTags = Array.from(new Set(taskList.flatMap(task=>task.tags)))

  const filterTasks = () => {
    const filteredTasks = taskList.filter(task =>
    (selectedCategory === '' || task.category === selectedCategory) &&
    (selectedTag === '' || task.tags.includes(selectedTag))
    )
    setTaskList(filteredTasks)
  }

  return (
    <div className='flex flex-col items-start justify-start gap-5 '>
      <div className='h-[107px] w-[370px] border-[#c4b49b] border-2 rounded-2xl'>
        <h1 className='text-4xl text-center font-bold border-b-2 border-b-[#c4b49b] text-white my-2'>Categories</h1>
        <select onChange={(e)=> setSelectedCategory(e.target.value)} className='bg-[#1f2937] text-[#c4b49b] rounded-lg w-full p-2'>
          <option value="">All</option>
          {allCategories.map((category, idx) => (
            <option key={idx} value={category}>{category}</option>
              ))}
        </select>
      </div>
      <div className='h-[107px] w-[370px] border-[#c4b49b] border-2 rounded-2xl'>
        <h1 className='text-4xl text-center font-bold border-b-2 border-b-[#c4b49b] text-white my-2'>Tags</h1>
        <select onChange={(e) => setSelectedTag(e.target.value)} className='bg-[#1f2937] text-[#c4b49b] rounded-lg w-full p-2'>
          <option value="">All</option>
          {allTags.map((tag, idx) => (
            <option key={idx} value={tag}>{tag}</option>
            ))}
        </select>
      </div>
      <button onClick={filterTasks} className='bg-[#4caf50] text-[#1f2937] px-5 py-2 rounded-lg mt-5'>Filter Tasks</button>
    </div>
  )
}

export default AddOns