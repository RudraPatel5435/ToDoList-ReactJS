import React, { useEffect, useState } from 'react'
import AddTask from './Components/AddTask'
import AllTasks from './Components/AllTasks'
import TaskNumber from './Components/TaskNumber'
import TaskList from './Tasks/TaskList'

const App = () => {

  const [taskList, setTaskList] = useState(TaskList)

  return (
    <div className='flex items-start justify-start flex-col w-[400px] h-[600px]'>
      <TaskNumber taskList={taskList}/>
      <AddTask taskList={taskList} setTaskList={setTaskList} />
      <AllTasks taskList={taskList} setTaskList={setTaskList} />
    </div>
  )
}

export default App
