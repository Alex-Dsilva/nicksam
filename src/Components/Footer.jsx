import { Box, Container, SimpleGrid, Stack, useColorModeValue, Heading, Text, Image, Divider, Icon, Flex } from '@chakra-ui/react';
import React from 'react';
import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import { Link as ChakraLink } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { IoMail } from 'react-icons/io5';
import { MdLocationOn } from 'react-icons/md';
import { BiChevronRight } from 'react-icons/bi';
import './Footer.css'
import VerticalCarousel from './VerticalCarousel';

const Footer = () => {
  return (
    <div>
      <Box
        bg='black'
        color='white'
        w='100vw'
      >
        <Container as={Stack} maxW={'90%'} >
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
            <Stack align={'flex-start'}>
              <Heading as='h4'  size='md' >Contact Us</Heading>
              <Divider/>
              <Flex id='mail' m='2' fontFamily='Inter, system-ui, Avenir, Helvetica, Arial, sans-serif' justify={['left', 'center',  'center']}  fontSize='16' align='center' >
            <Icon as={IoMail} color='white'  fontSize='18' mr='2' />
            <ChakraLink href="mailto:info@nictcsp.com" target="_blank" color="white" fontFamily='Inter, system-ui, Avenir, Helvetica, Arial, sans-serif' fontWeight='400' _hover={{ textDecoration: "underline", color:'white' }}>
                   info@nictcsp.com
            </ChakraLink>
            </Flex>
            <Flex id='addres' m='2' justify={['left', 'center',  'center']}  fontSize='16'  >
            <Icon as={MdLocationOn} color='white'  fontSize='13' mr='2' />
            <Text color="white" fontSize='13' fontFamily='Inter, system-ui, Avenir, Helvetica, Arial, sans-serif' fontWeight='400' _hover={{ textDecoration: "underline", color:'white' }}>
                2F PLOT NO EB 109 SCHEME NO.94 OPPOSITE BOMBAY HOSPITAL INDORE MP 452010
                <Text  mt='5'>CIN - U72200MP2003PTC015766</Text>
            </Text>

            </Flex>
            </Stack>

            <Stack align={'flex-start'}>
              <Heading as='h4' size='md' >P M Scheme</Heading>
              <Divider/>
              <Flex className='list'  m='2' w='fit-content' _hover={{color:'#e0420b'}} fontFamily='Inter, system-ui, Avenir, Helvetica, Arial, sans-serif' justify={['left', 'center',  'center']}  fontSize='16' align='center' >
            <Icon as={BiChevronRight} color='white'  fontSize='13' mr='2' />
            <Link to='#' target="_blank" color="white" fontSize='13' fontFamily='Inter, system-ui, Avenir, Helvetica, Arial, sans-serif' fontWeight='400'>
                    P M Jan Dhan Yojana
            </Link>
            </Flex>
            <Flex className='list'  m='2' w='fit-content' _hover={{color:'#e0420b'}} fontFamily='Inter, system-ui, Avenir, Helvetica, Arial, sans-serif' justify={['left', 'center',  'center']}  fontSize='16' align='center' >
            <Icon as={BiChevronRight} color='white'  fontSize='13' mr='2' />
            <Link to='#' target="_blank" color="white" fontSize='13' fontFamily='Inter, system-ui, Avenir, Helvetica, Arial, sans-serif' fontWeight='400'>
                P M Atal Pension Yojana
            </Link>
            </Flex>
            <Flex className='list'  m='2' w='fit-content' _hover={{color:'#e0420b'}} fontFamily='Inter, system-ui, Avenir, Helvetica, Arial, sans-serif' justify={['left', 'center',  'center']}  fontSize='16' align='center' >
            <Icon as={BiChevronRight} color='white'  fontSize='13' mr='2' />
            <Link to='#' target="_blank" color="white" fontSize='13' fontFamily='Inter, system-ui, Avenir, Helvetica, Arial, sans-serif' fontWeight='400'>
            P M Suraksha Bima Yojana
            </Link>
            </Flex>
            <Flex className='list'  m='2' w='fit-content' _hover={{color:'#e0420b'}} fontFamily='Inter, system-ui, Avenir, Helvetica, Arial, sans-serif' justify={['left', 'center',  'center']}  fontSize='16' align='center' >
            <Icon as={BiChevronRight} color='white'  fontSize='13' mr='2' />
            <Link to='#' target="_blank" color="white" fontSize='13' fontFamily='Inter, system-ui, Avenir, Helvetica, Arial, sans-serif' fontWeight='400'>
            Kisan Creadit Card
            </Link>
            </Flex>
            <Flex className='list'  m='2' w='fit-content' _hover={{color:'#e0420b'}} fontFamily='Inter, system-ui, Avenir, Helvetica, Arial, sans-serif' justify={['left', 'center',  'center']}  fontSize='16' align='center' >
            <Icon as={BiChevronRight} color='white'  fontSize='13' mr='2' />
            <Link to='#' target="_blank" color="white" fontSize='13' fontFamily='Inter, system-ui, Avenir, Helvetica, Arial, sans-serif' fontWeight='400'>
            P M Mudra Yojana
            </Link>
            </Flex>
            <Flex className='list'  m='2' w='fit-content' _hover={{color:'#e0420b'}} fontFamily='Inter, system-ui, Avenir, Helvetica, Arial, sans-serif' justify={['left', 'center',  'center']}  fontSize='16' align='center' >
            <Icon as={BiChevronRight} color='white'  fontSize='13' mr='2' />
            <Link to='#' target="_blank" color="white" fontSize='13' fontFamily='Inter, system-ui, Avenir, Helvetica, Arial, sans-serif' fontWeight='400'>
                P M Jeevan Jyoti Bima Yojana
            </Link>
            </Flex>
            <Flex className='list'  m='2' w='fit-content' _hover={{color:'#e0420b'}} fontFamily='Inter, system-ui, Avenir, Helvetica, Arial, sans-serif' justify={['left', 'center',  'center']}  fontSize='16' align='center' >
            <Icon as={BiChevronRight} color='white'  fontSize='13' mr='2' />
            <Link to='#' target="_blank" color="white" fontSize='13' fontFamily='Inter, system-ui, Avenir, Helvetica, Arial, sans-serif' fontWeight='400'>
                 P M Vaya Vandana Yojana
            </Link>
            </Flex>
            </Stack>

            <Stack align={'flex-start'}>
              <Heading as='h4' size='md' >Digital Seva</Heading>
              <Divider/>
              <Flex className='list'  m='2' w='fit-content' _hover={{color:'#e0420b'}} fontFamily='Inter, system-ui, Avenir, Helvetica, Arial, sans-serif' justify={['left', 'center',  'center']}  fontSize='16' align='center' >
            <Icon as={BiChevronRight} color='white'  fontSize='13' mr='2' />
            <Link to='#' target="_blank" color="white" fontSize='13' fontFamily='Inter, system-ui, Avenir, Helvetica, Arial, sans-serif' fontWeight='400'>
            CSP Point
            </Link>
            </Flex>
            <Flex className='list'  m='2' w='fit-content' _hover={{color:'#e0420b'}} fontFamily='Inter, system-ui, Avenir, Helvetica, Arial, sans-serif' justify={['left', 'center',  'center']}  fontSize='16' align='center' >
            <Icon as={BiChevronRight} color='white'  fontSize='13' mr='2' />
            <Link to='#' target="_blank" color="white" fontSize='13' fontFamily='Inter, system-ui, Avenir, Helvetica, Arial, sans-serif' fontWeight='400'>
            AEPS Point
            </Link>
            </Flex>
            <Flex className='list'  m='2' w='fit-content' _hover={{color:'#e0420b'}} fontFamily='Inter, system-ui, Avenir, Helvetica, Arial, sans-serif' justify={['left', 'center',  'center']}  fontSize='16' align='center' >
            <Icon as={BiChevronRight} color='white'  fontSize='13' mr='2' />
            <Link to='#' target="_blank" color="white" fontSize='13' fontFamily='Inter, system-ui, Avenir, Helvetica, Arial, sans-serif' fontWeight='400'>
            Financs
            </Link>
            </Flex>
            <Flex className='list'  m='2' w='fit-content' _hover={{color:'#e0420b'}} fontFamily='Inter, system-ui, Avenir, Helvetica, Arial, sans-serif' justify={['left', 'center',  'center']}  fontSize='16' align='center' >
            <Icon as={BiChevronRight} color='white'  fontSize='13' mr='2' />
            <Link to='#' target="_blank" color="white" fontSize='13' fontFamily='Inter, system-ui, Avenir, Helvetica, Arial, sans-serif' fontWeight='400'>
            Electricity Pay
            </Link>
            </Flex>
            <Flex className='list'  m='2' w='fit-content' _hover={{color:'#e0420b'}} fontFamily='Inter, system-ui, Avenir, Helvetica, Arial, sans-serif' justify={['left', 'center',  'center']}  fontSize='16' align='center' >
            <Icon as={BiChevronRight} color='white'  fontSize='13' mr='2' />
            <Link to='#' target="_blank" color="white" fontSize='13' fontFamily='Inter, system-ui, Avenir, Helvetica, Arial, sans-serif' fontWeight='400'>
            Rail Booking
            </Link>
            </Flex>
            <Flex className='list'  m='2' w='fit-content' _hover={{color:'#e0420b'}} fontFamily='Inter, system-ui, Avenir, Helvetica, Arial, sans-serif' justify={['left', 'center',  'center']}  fontSize='16' align='center' >
            <Icon as={BiChevronRight} color='white'  fontSize='13' mr='2' />
            <Link to='#' target="_blank" color="white" fontSize='13' fontFamily='Inter, system-ui, Avenir, Helvetica, Arial, sans-serif' fontWeight='400'>
            Bus Booking
            </Link>
            </Flex>
            <Flex className='list'  m='2' w='fit-content' _hover={{color:'#e0420b'}} fontFamily='Inter, system-ui, Avenir, Helvetica, Arial, sans-serif' justify={['left', 'center',  'center']}  fontSize='16' align='center' >
            <Icon as={BiChevronRight} color='white'  fontSize='13' mr='2' />
            <Link to='#' target="_blank" color="white" fontSize='13' fontFamily='Inter, system-ui, Avenir, Helvetica, Arial, sans-serif' fontWeight='400'>
            Flight Booking
            </Link>
            </Flex>
            </Stack>

            <Stack align={'flex-start'}>
              <Heading as='h4' size='md' >Partner Banks</Heading>
              <Divider/>
              <VerticalCarousel />
            </Stack>
          </SimpleGrid>
        </Container>

        <Box
          borderTopWidth={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
        >
          <Container
            as={Stack}
            maxW={'6xl'}
            py={4}
            direction={{ base: 'column', md: 'row' }}
            spacing={4}
            justify={{ md: 'space-between' }}
            align={{ md: 'center' }}
          >
            <Text> © 2021 Nict Technologies Pvt.Ltd. All Right Reserved</Text>
            <Stack direction={'row'} spacing={6}>
              <Link to={'#'}>
                <FaTwitter />
              </Link>
              <Link label={'YouTube'} to={'#'}>
                <FaYoutube />
              </Link>
              <Link label={'Instagram'} to={'#'}>
                <FaInstagram />
              </Link>
            </Stack>
          </Container>
        </Box>
      </Box>
    </div>
  );
};

export default Footer;
