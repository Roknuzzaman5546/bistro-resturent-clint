import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import swip1 from '../../assets/home/slide1.jpg'
import swip2 from '../../assets/home/slide2.jpg'
import swip3 from '../../assets/home/slide3.jpg'
import swip4 from '../../assets/home/slide4.jpg'
import swip5 from '../../assets/home/slide5.jpg'
import Title from '../../Components/Title';

const Slider = () => {
    return (
        <>
        <Title
        Subheading={"---From 11:00am to 10:00pm---"}
        heading={"ORDER ONLINE"}
        ></Title>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={swip1} alt="" />
                    <h2 className=' text-3xl uppercase text-center -mt-16 text-white'>Salad</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={swip2} alt="" />
                    <h2 className=' text-3xl uppercase text-center -mt-16 text-white'>Soups</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={swip3} alt="" />
                    <h2 className=' text-3xl uppercase text-center -mt-16 text-white'>Pizza</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={swip4} alt="" />
                    <h2 className=' text-3xl uppercase text-center -mt-16 text-white'>Deserts</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={swip5} alt="" />
                    <h2 className=' text-3xl uppercase text-center -mt-16 text-white'>Salads</h2>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Slider;