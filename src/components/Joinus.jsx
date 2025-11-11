import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";


const Joinus = () => {
  return (
    <div className='font-medium text-gray-600'>
      <h1 className='p-3 text-3xl'>Contect Links</h1>
     <ul className='text-xl '>
        <li className='px-4 py-1'><a className='flex items-center gap-2'><FaLinkedin/> Linked in</a></li>
        <li className='px-4 py-1'><a className='flex items-center gap-2'> <FaTwitter/> mlmadmin@gmail.com</a></li>
        <li className='px-4 py-1'><a className='flex items-center gap-2'><FaTelegramPlane/> mlm@supportgmail.com </a></li> 
      </ul>
    </div>
  )
}

export default Joinus
