import React, { useEffect, useState } from 'react'
import api from '../components/Navbar'

const Home = () => {
  const [posts, setPosts] = useState([])

  const getPostData = async () => {
    const actualData = await api()
    setPosts(actualData.data)
  }

  useEffect(() => {
    getPostData()
  }, [])

  function handledelete(index){
    setPosts(posts.filter((item)=>item.id!=index))
  }

  
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Posts</h1>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {posts.map((item, index) => (
          <div key={index} className="bg-white rounded-2xl shadow p-4 space-y-2 hover:shadow-lg transition">
            <h2 className="text-lg font-semibold text-indigo-700">{item.title}</h2>
            <p className="text-gray-600 text-sm">{item.body}</p>
            <div className="flex gap-2 pt-2">
              <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Edit</button>
              <button onClick={()=>handledelete(item.id)} className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
