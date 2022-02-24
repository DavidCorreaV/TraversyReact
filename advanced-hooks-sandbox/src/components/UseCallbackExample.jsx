import React, {useState, useCallback} from 'react'

const UseCallbackExample = () => {
    const [tasks,setTasks]=useState([])
const addTask = useCallback(() => {setTasks((pS)=>[...pS, 'Some Task'])},[setTasks])

    return (
    <div><Button addTask={addTask}/>
    {tasks.map((task,index)=>{return <p key={index}>{task}</p>})}
    </div>
  )
}

const Button = React.memo(({addTask})=> {
console.log('Button Rendered')
return <div>
    <button onClick={addTask} className="btn btn-primary">Add Task</button>
</div>
})

export default UseCallbackExample