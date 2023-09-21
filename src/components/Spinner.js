import React from 'react'
import './Spinner.css'
 const Spinner = () => {
  return (
    <div className='flex flex-col items-center space-y-2' >
       <div className="custom-loader">

        </div>
        <div><h2 className=' text-lg text-white font-semibold' >Loading.. </h2></div>
    </div>
  )
}
export default Spinner;