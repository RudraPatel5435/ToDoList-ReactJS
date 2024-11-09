import React from 'react'

const TaskNumber = ({taskList}) => {
    const completedTasks = taskList.filter((task) => task.checked === true)
    const totalTasks = taskList.filter((task) => task.deleted === false)

  return (
    <div className='h-[170px] w-[400px] rounded-2xl bg-trasnparent border-[#c4b49b] border-2 flex items-center justify-between'>
        <div className='text-white ml-12'>
            <h3 className='-ml-1 text-3xl'>Task Done</h3>
            <h4 className='text-lg'>Keep it up !</h4>
        </div>
        <div className="mr-12 text-3xl font-normal bg-[#4caf50] px-7 py-5 text-black rounded-3xl">
            <h3>{completedTasks.length}/{totalTasks.length}</h3>
        </div>
    </div>
  )
}

export default TaskNumber
