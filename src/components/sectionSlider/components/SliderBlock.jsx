import { React } from 'react';


import face from '../../../images/face.png';
import foot from '../../../images/foot.png';
import mountaine from '../../../images/mountain.png';
import shoose from '../../../images/shoose.png';
import shirt from '../../../images/t-shirt.png';

import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';


const SliderBlock = () => {

   return (
      <div className='slider__wraper swiper_wrap'>
         <h2 className='slider__block_title title'>
            CHOOSE LOOKS
         </h2>
         <div className='slider__container container swiper-container'>
            <div className='slider__block swiper-wrapper'>

               <Swiper
                  className='slider__block_swiper'
                  modules={[Navigation]}
                  centeredSlides={true}
                  spaceBetween={43}
                  slidesPerView={4}
                  keyboard={{ enabled: true }}
                  navigation={true}
                  loop={true}
               >
                  <SwiperSlide><img className='slider__block_img' src={mountaine} alt='mountaine' /></SwiperSlide>
                  <SwiperSlide><img className='slider__block_img' src={face} alt='face' /></SwiperSlide>
                  <SwiperSlide><img className='slider__block_img' src={shoose} alt='shoose' /></SwiperSlide>
                  <SwiperSlide><img className='slider__block_img' src={foot} alt='foot' /></SwiperSlide>
                  <SwiperSlide><img className='slider__block_img' src={shirt} alt='shirt' /></SwiperSlide>
                  <SwiperSlide><img className='slider__block_img' src={mountaine} alt='mountaine' /></SwiperSlide>
                  <SwiperSlide><img className='slider__block_img' src={face} alt='face' /></SwiperSlide>
                  <SwiperSlide><img className='slider__block_img' src={shoose} alt='shoose' /></SwiperSlide>
                  <SwiperSlide><img className='slider__block_img' src={foot} alt='foot' /></SwiperSlide>
                  <SwiperSlide><img className='slider__block_img' src={shirt} alt='shirt' /></SwiperSlide>
               </Swiper>
            </div>
         </div>
      </div>
   )
}

export default SliderBlock
