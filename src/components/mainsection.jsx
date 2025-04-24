import React from 'react'
import image from '../json/imagejson'
const Mainsection = () => {
  return (
    <div className='flex mt-32 justify-center gap-12 px-20'>
        <div>{
            <section>
            <div>{
              image.map((item,index)=>{
                return <img className='w-[250px] h-[250px] rounded-full' src={item.img} alt="" />
              })
              }</div>
          </section>}</div>
          <div className='text-white'>
            <p className='text-white'>Frontend Developer</p>
            <h1 className='font-bold mt-4 text-4xl'>Sahib Deep</h1>
            <p className='mt-4 mb-4'>Fusce tempor magna mi, non egestas velit ultricies nec. Aenean convallis, <br />risus non condimentum gravida, odio mauris ullamcorper felis, ut <br />venenatis purus ex eu mi. Quisque imperdiet lacinia urna, a placerat sapien pretium eu.</p>
            <button className='border border-blue-400 border-2 mr-4 mt-2 py-2 px-4 hover:bg-gray-500 rounded-full '>Download Cv</button>
            <button className='border mt-2 hover:bg-gray-500 rounded-full px-4 py-2'>Contact</button>
          </div>
    </div>
  )
}

export default Mainsection