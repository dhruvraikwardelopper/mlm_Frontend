import React from 'react'
import Feedback from './Feedback'
import Footerlinks from './Footerlinks'

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"



const MainFooter = () => {
  return (
    <>
    <div className=' px-15 my-10 mt-[7vw] font-serif  text-white'>
        <Feedback/>
        <Footerlinks/>
    </div>
    </>
  )
}

export default MainFooter
