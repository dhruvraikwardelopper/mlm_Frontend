import React from 'react'

import Contact from './Contact'
import Companyinfo from './Companyinfo'
import Buesinuss from './Buesinuss'
import Joinus from './Joinus'
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";


const Footerlinks = () => {
  return (
<>
<div className='p-5 pb-0'>
    <div className='flex gap-5 justify-between font-serif border-b-[1px] border-green-950 pb-[3%]'>
    <Companyinfo/>
  
    <Buesinuss/>
    <Joinus/>
      <Contact/>
    </div>
    <div className='flex h-[15vh] items-center justify-between text-[#111]'>
        <h1 className=' text-xl '>Copyright © 2024 Moonlit. All rights reserved.</h1>
        <div className='flex '>
          <h2 className='border-e-1 flex items-center gap-2 border-[#454671] text-[2.5vh] px-7'><FaLinkedin/>Linked in</h2>
          <h2 className='border-e-1 flex items-center gap-2 border-[#454671] text-[2.5vh] px-7'><FaFacebookSquare/> Facebook</h2>
          <h2 className='border-e-1 flex items-center gap-2 border-[#454671] text-[2.5vh] px-7'><FaTwitter/>Twitter</h2>
          <h2 className='flex items-center gap-2  text-[2.5vh] px-7'><FaTelegramPlane/>Telegram</h2>
          
        </div>
    </div>
    {/* <h1 className='justify-self-center self-center text-2xl font-bold text-amber-500 pt-10'>** Thankyou for visiting our Site **</h1> */}
</div>
</>
  )
}

export default Footerlinks
