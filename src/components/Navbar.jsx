import React from 'react'
import api from '../json/jsonapi'

const Navbar = () => {
  return (
    <div className=' flex py-6 justify-between px-10'>
      <div>
      <h1 className=' text-white font-bold text-3xl'>Sahib Deep</h1>
      </div>
      
      <div>
        <ul className='text-white gap-8 flex  hover:rounded-lg '>
          {api.map((item,index)=>{
            return <li className='hover:text-gray-400'>{item.section}</li>
          })}
        </ul>
      </div>
    </div>
    
  )
}

export default Navbar