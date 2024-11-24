import React, { useEffect, useState } from 'react'
import AddTask from './Components/Header/AddTask'
import AllTasks from './Components/TasksView/AllTasks'
import TaskNumber from './Components/Header/TaskNumber'
import TaskList from './Tasks/TaskList'
import AddOns from './Components/AddsOns/AddOns'

const App = () => {

  const [taskList, setTaskList] = useState(()=>{
    const savedTasks = localStorage.getItem('taskList')
    return savedTasks ? JSON.parse(savedTasks): TaskList
  })

  useEffect(()=>{
    localStorage.setItem('taskList', JSON.stringify(taskList))
  }, [taskList])

  return (
    <div className='flex items-start justify-start flex-col w-full h-full p-10'>
      <div className="flex items-start justify-start w-full">
        <TaskNumber taskList={taskList}/>
        <AddTask taskList={taskList} setTaskList={setTaskList} />
      </div>
      <div className="flex justify-start items-start mt-10 gap-16">
      <AddOns taskList={taskList} setTaskList={setTaskList} />
      <AllTasks taskList={taskList} setTaskList={setTaskList} />
      </div>
    </div>
  )
}

export default App
