import React from 'react';
import SliderBlock from './components/SliderBlock';
import TextBlock from './components/TextBlock';

const SelectionSlider = () => {
   return (
      <div className='selectSlider__wraper'>
         <div className='selectSlider__container container'>
            <SliderBlock />
            <TextBlock />
         </div>
      </div>
   )
}

export default SelectionSlider;
