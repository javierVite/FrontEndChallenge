import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function StartPage() {
  const [
    count, 
    setCount
  ] = useState<number>(0);
  const [
    isIncrementEvent,
    setIsIncrementEvent
  ]  = useState<boolean>(false);
  const myCount = useRef<number>(0);
  const isOverflow = useRef<boolean>(false);

  useEffect(()=>{
    if (isOverflow.current) {
      return;
    }
    myCount.current = myCount.current + 1;
    console.log(myCount.current)
    setCount((count) => count + 1)
    setIsIncrementEvent(false)
  },[
    count, 
    isIncrementEvent, 
    setIsIncrementEvent,
    setCount
  ])

  if (count > 25000) {
    isOverflow.current = true;
    window.location.href = '/';    
  }


  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setIsIncrementEvent(true)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR,          
        </p>
        <p>Make sure current count {myCount.current} is in sync?</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default StartPage
