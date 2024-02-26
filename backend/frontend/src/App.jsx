import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Biodata from './Components/Biodata'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      < Biodata/>
    </>
  )
}

export default App
