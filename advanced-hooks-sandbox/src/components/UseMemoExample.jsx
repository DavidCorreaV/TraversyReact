import React,{useState, useEffect, useRef, useMemo} from 'react'

const UseMemoExample = () => {
    const [number, setNumber] = useState(1)
    const [inc, setInc] = useState(0)
    const renders = useRef(1)
    const sqrt = getSqrt(number)
function getSqrt(number) {
    return 
    for (let i=0; i<=10000; i++){
        console.log(i)
    }
Math.sqrt(number)}

    useEffect(() => {
        renders.current++
    })

    const onClick = () => {
        setInc((n)=> {return n + 1})
    }
  return (
    <div>
        <input type="text" className="form-control w-25" value={number} onChange={(e)=>setNumber(e.target.value)}/>
        <h2 className="my-3">The square root of {number} is {sqrt} </h2>
        <button className="btn btn-danger" onClick={onClick}>Rerender</button>
        <h3>Rendered: {renders.current} times</h3>
    </div>
  )
}

export default UseMemoExample