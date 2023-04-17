import React, { useState } from 'react'
import { ReactComponent as MainAndroid } from '../images/android.svg'
import { ReactComponent as MainApple } from '../images/apple.svg'
import fleb from '../images/hlebalo.png'
import { ReactComponent as Line } from '../images/line.svg'



const MainBlock = () => {
   const [open, setOpen] = useState(false);

   const clickImage = () => {
      setOpen(!open)
   }

   return (
      <div className='main__wraper'>
         <div className='main__bcg'><Line className='main__bcg_img' /></div>
         <div className='main__container container'>
            <div className='main__block'>
               <div className='main_link'>
                  <span className='main__link_apple'>
                     <MainApple className='apple' />
                  </span>
                  <span className='main__link_android'>
                     <MainAndroid className='android' />
                  </span>
                  <p className='main__link_text'>App available</p>
               </div>
               <h2 className='main__title'>CHOOSE YOUR WINTER <span className='main__title-text'>LOOK</span><span className='main__title-slash'>*</span> APPAREL</h2>
               <div
                  className={open ? ' main__img_active' : 'main__img'}
                  onClick={clickImage}
               >
                  <img className='main__img_global' src={fleb} alt='gg' />
               </div>
            </div>
         </div>
      </div>
   )
}

export default MainBlock
