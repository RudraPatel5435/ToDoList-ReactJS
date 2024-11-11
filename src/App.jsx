import React, { useEffect, useState } from 'react'
import AddTask from './Components/AddTask'
import AllTasks from './Components/AllTasks'
import TaskNumber from './Components/TaskNumber'
import TaskList from './Tasks/TaskList'
import AddOns from './Components/AddOns'

const App = () => {

  const [taskList, setTaskList] = useState(TaskList)

  return (
    <div className='flex items-start justify-start flex-col w-full h-full p-10'>
      <div className="flex items-start justify-start w-full">
        <TaskNumber taskList={taskList}/>
        <AddTask taskList={taskList} setTaskList={setTaskList} />
      </div>
      <div className="flex justify-start items-start">
      <AllTasks taskList={taskList} setTaskList={setTaskList} />
      <AddOns taskList={taskList} setTaskList={setTaskList} />
      </div>
    </div>
  )
}

export default App
