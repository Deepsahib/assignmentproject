import React from 'react'
import Navbar from './components/Navbar'
import Mainsection from './components/mainsection'

const App = () => {
  return (
    <div className='w-screen h-screen bg-zinc-900'>
      <Navbar />
      <Mainsection/>
 
    </div>
  )
}

export default App