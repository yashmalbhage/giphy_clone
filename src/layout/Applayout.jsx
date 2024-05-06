import React from 'react'
import { Outlet } from 'react-router-dom'

const Applayout = () => {
  return (
    <div className='bg-gray-900 text-white min-h-screen'>
        {/* HEader */}
        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default Applayout