import React from 'react'
import Link from 'next/link'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

// import Swiper core and required modules
import SwiperCore, {
  Navigation, Pagination
} from 'swiper/core';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { sliderContent } from '../../data/sliderContent';

// install Swiper modules
SwiperCore.use([Pagination,Navigation]);

export const Slider = () => {
  return (
    <Flex
      align="center"
      justify="center"
      w="100vw"
      maxW="calc(1160px - 2rem)"
      mx="auto"
      mb="8"
      h={["250px",
      "250px",
      "350px",
      "450px"]}
    >
      <Swiper 
        className="custom-slider"
        slidesPerView={1}
        loop={true} 
        pagination={{ "clickable": true }} 
        navigation={true}
        wrapperTag="ul"
        style={{width: "100%", height: "100%"}}
      >
        {sliderContent.map(continent => {
          return (
            <SwiperSlide 
              tag="li" 
              style={{width: "100%", height: "100%", position: "relative", listStyleType: 'none'}} 
              key={continent.id}
            >
              <Link href={`/continent/${continent.id}`} >
                <a>
                  <Flex 
                    position="absolute" 
                    zIndex={50} 
                    align="center" 
                    justify="center" 
                    direction="column" 
                    w="100%"
                    h="100%"
                  >
                    <Text
                      textAlign="center"
                      fontWeight="bold"
                      color="gray.50"
                      fontSize={["24", "24", "36"]}
                      mb="3"
                    >
                      {continent.name}
                    </Text>
                    <Text
                      textAlign="center"
                      fontWeight="bold"
                      color="gray.300"
                      fontSize={["14", "14", "20"]}
                    >
                      {continent.description}
                    </Text>
                  </Flex>

                  <Box 
                    bg="#12121299"
                    position="absolute"
                    zIndex={5}
                    w="100%"
                    h="100%"
                  />
                  
                  <Image 
                    src={continent.path} 
                    alt="europe" 
                    w="100%"
                    h="100%"
                    objectFit="cover"
                    zIndex={1} 
                  />
                </a>
              </Link>
              
            </SwiperSlide>    
          )
        })}    
      </Swiper>
    </ Flex>
  )
}
