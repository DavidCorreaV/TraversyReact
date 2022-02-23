import React, {useState} from 'react'
import ToDo from './ToDo'

const UseRefExample3 = () => {
  const [showToDo, setShowToDo] = useState(true)
  return (
    <div>{showToDo && <ToDo />}
    <button className="btb btn-primary" onClick={() => setShowToDo(!showToDo)}>Toggle</button></div>
  )
}

export default UseRefExample3