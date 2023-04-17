import React from 'react';

const Header = () => {
   return (
      <div className='header__wraper'>
         <div className='header__containet container'>
            <div className='header__block'>
               <div className='header__logo'>
                  <h1>landing</h1>
               </div>
               <div className='header__nav'>
                  <ul className='header__nav_lists'>
                     <li className='header__nav_list'>Clothes</li>
                     <li className='header__nav_list'>Sneakers</li>
                     <li className='header__nav_list'>Bags</li>
                     <li className='header__nav_list'>Accessorize</li>
                  </ul>
                  <div className='header__nav_buy'>
                     <span>BUY</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Header;
