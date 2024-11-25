import React, { useState } from 'react'

const AddOns = ({taskList, setTaskList}) => {
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedTag, setSelectedTag] = useState('')
  const allCategories = Array.from(new Set(taskList.map(task=>task.category)))
  const allTags = Array.from(new Set(taskList.flatMap(task=>task.tags)))
  const [allTasks] = useState(taskList)

  const filterTasks = () => {
    const filteredTasks = allTasks.filter(task =>
    (selectedCategory === '' || task.category === selectedCategory) &&
    (selectedTag === '' || task.tags.includes(selectedTag))
    )
    setTaskList(filteredTasks)
  }
  const clearFilters = () => {
    setTaskList(allTasks)
    setSelectedCategory('')
    setSelectedTag('')
  }

  return (
    <div className='flex flex-col items-start justify-start gap-5 '>
      <div className='h-[107px] w-[280px] border-[#c4b49b] border-2 rounded-2xl'>
        <h1 className='text-4xl text-center font-bold border-b-2 border-b-[#c4b49b] text-white my-2'>Categories</h1>
        <select onChange={(e)=> setSelectedCategory(e.target.value)} className='bg-[#1f2937] text-[#c4b49b] block mx-auto rounded-lg w-11/12 p-2 outline-none'>
          <option value="">All</option>
          {allCategories.map((category, idx) => (
            <option key={idx} value={category}>{category}</option>
              ))}
        </select>
      </div>
      <div className='h-[107px] w-[280px] border-[#c4b49b] border-2 rounded-2xl'>
        <h1 className='text-4xl text-center font-bold border-b-2 border-b-[#c4b49b] text-white my-2'>Tags</h1>
        <select onChange={(e) => setSelectedTag(e.target.value)} className='bg-[#1f2937] block mx-auto text-[#c4b49b] rounded-lg w-11/12 p-2 outline-none'>
          <option value="">All</option>
          {allTags.map((tag, idx) => (
            <option key={idx} value={tag}>{tag}</option>
            ))}
        </select>
      </div>
      <div className="flex gap-2">
        <button onClick={filterTasks} className='bg-[#4caf50] text-[#1f2937] text-xl font-bold px-3 py-2 rounded-lg mt-5'>Filter Tasks</button>
        <button onClick={clearFilters} className='bg-[#4caf50] text-[#1f2937] text-xl font-bold px-3 py-2 rounded-lg mt-5'>Clear Filters</button>
      </div>
    </div>
  )
}

export default AddOns
