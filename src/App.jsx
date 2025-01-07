import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [userOnline, setUserOnline] = useState([])
  const [messages, setMessages] = useState([])


  function handleIncrement() {
    setCount(c => c + 1)
  }

  function fetchUserOnline() {

  }

  useEffect(() => {
    fetchUserOnline()
  }, [])

  return (
    <>
      <div>
        <h1>App nich boss</h1>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {

        userOnline((user) => {
          return <li>{user.name}</li>
        })
      }

      }
        messages.map(msg => <div key={msg.id}>
          <h1>{msg.title}</h1>
        </div>)

      }
    <h1>{count}</h1>
    <button onClick={handleIncrement}>Increment</button>
    </>
  )
}

export default App
