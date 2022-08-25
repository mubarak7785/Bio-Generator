import { useState } from 'react'
// import './App.css'
import { Biogenerator } from './components/Biogenerator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
     <Biogenerator/>
    </div>
  )
}

export default App
