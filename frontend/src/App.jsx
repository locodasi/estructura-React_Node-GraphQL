import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navigator from './components/Navigator'
import RoutesComp from './components/RoutesComp'

import { SUBSCRIPTIONS_PERSON_ADDED } from "./graphql/subscriptions"
import { useSubscription } from "@apollo/client";


function App() {
  const [count, setCount] = useState(0)

  useSubscription(SUBSCRIPTIONS_PERSON_ADDED, {
    onData: (data) => console.log("Data de subscripcion:",data.data.data.personAdded),
    onError: (error) => console.log(error)
})

  return (
    <>
      <Navigator/>
      <RoutesComp/>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
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
    </>
  )
}

export default App
