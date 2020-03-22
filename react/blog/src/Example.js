import React,{useState,useEffect,createContext,useContext} from 'react'
const CountContext = createContext()

function Counter() {
  const count = useContext(CountContext)
  return(
    <h1>{count}</h1>
  )
}

function Example() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log(`you clicked ${count} times`)
  })
  return(
    <div>
      <p>you clicked {count} times</p>
      <button onClick={()=> setCount(count+1)}>Click</button>
      <CountContext.Provider value={count}>

      </CountContext.Provider>
    </div>
  )
}



export default Example