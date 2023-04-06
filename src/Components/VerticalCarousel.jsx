import { Box, Flex } from "@chakra-ui/react";
// import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {EffectFade, Navigation, Pagination } from "swiper";


const VerticalCarousel = () => {

  
    return (
      <Flex flexDir='column' gap='3' h="200px"  w="100%" mb="-100px" overflowY='scroll'>
        {/* <Swiper  direction="vertical"
        style={{ width: "100%", height: "100%" }}
        slidesPerView={2}
        autoplay={2000}> */}
            {/* <SwiperSlide> */}
          <img src="https://nictcsp.com/img/banks/sbi.jpg" alt="Sbi Kiosk Bank" />
          {/* </SwiperSlide> */}
          {/* <SwiperSlide> */}
          <img src="https://nictcsp.com/img/banks/allahabad.jpg" alt="Allahabad Kiosk Bank" />
          {/* </SwiperSlide> */}
          {/* <SwiperSlide> */}
          <img src="https://nictcsp.com/img/banks/bob.jpg" alt="Bank Of Baroda Kiosk Bank" />
          {/* </SwiperSlide> */}
          {/* <SwiperSlide> */}
          <img src="https://nictcsp.com/img/banks/boi.jpg" alt="Bank Of India Kiosk Bank" />
          {/* </SwiperSlide> */}
          {/* <SwiperSlide> */}
          <img src="https://nictcsp.com/img/banks/bom.jpg" alt="Bank Of Maharashtra Kiosk Bank" />
          {/* </SwiperSlide> */}
          {/* <SwiperSlide> */}
          <img src="https://nictcsp.com/img/banks/canara.jpg" alt="canara Kiosk Bank" />
          {/* </SwiperSlide> */}
          {/* <SwiperSlide> */}
          <img src="https://nictcsp.com/img/banks/dena.jpg" alt="Dena Kiosk Bank" />
          {/* </SwiperSlide> */}
          {/* <SwiperSlide> */}
          <img src="https://nictcsp.com/img/banks/hdfc.jpg" alt="HDFC Kiosk Bank" />
          {/* </SwiperSlide> */}
          {/* <SwiperSlide> */}
          <img src="https://nictcsp.com/img/banks/icici.jpg" alt="Icici Kiosk Bank" />
          {/* </SwiperSlide> */}
          {/* <SwiperSlide> */}
          <img src="https://nictcsp.com/img/banks/pnb.jpg" alt="Pnb Kiosk Bank" />
          {/* </SwiperSlide> */}
          {/* <SwiperSlide> */}
          <img src="https://nictcsp.com/img/banks/sentral.jpg" alt="Central Kiosk Bank" />
          {/* </SwiperSlide> */}
          {/* <SwiperSlide> */}
          <img src="https://nictcsp.com/img/banks/union.jpg" alt="Union Kiosk Bank" />
          {/* </SwiperSlide> */}
          {/* </Swiper> */}
      </Flex>
    );
  };


  export default VerticalCarousel;
  