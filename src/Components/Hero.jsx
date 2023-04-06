import { Box, Image } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {EffectFade, Navigation, Pagination } from "swiper";

const Hero = () => {
  const [swiperHeight, setSwiperHeight] = useState(170);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setSwiperHeight("90vh");
      } else if(window.innerWidth >= 600 ){
        setSwiperHeight("40vh");
      }else{
        setSwiperHeight(170);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Box w="99vw" overflowX="hidden">
      <Swiper
        navigation={true}
        pagination={{ clickable: true }}
        effect={"fade"}
        loop={true}
        autoplay={{delay: 2000}}
        style={{ height: swiperHeight, width: "100%" }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper1"
      >
        <SwiperSlide>
          <Image w="100%" h='100%' src="https://nictcsp.com/slider/data1/images/1.jpg" alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <Image w="100%" h='100%' src="https://nictcsp.com/slider/data1/images/2.jpg" alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <Image w="100%" h='100%' src="https://nictcsp.com/slider/data1/images/3.jpg" alt="Slide 3" />
        </SwiperSlide>
        <SwiperSlide>
          <Image w="100%" h='100%' src="https://nictcsp.com/slider/data1/images/4.jpg" alt="Slide 4" />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default Hero;