import React from 'react'
import AddTask from './Components/AddTask'
import AllTasks from './Components/AllTasks'
import TaskNumber from './Components/TaskNumber'

const App = () => {
  return (
    <div className='flex items-start justify-start flex-col w-[400px] h-[600px]'>
      <TaskNumber />
      <AddTask />
      <AllTasks />
    </div>
  )
}

export default App
