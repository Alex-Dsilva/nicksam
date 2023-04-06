import { Button, Flex, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import './Topnav.css'
import { Link as ChakraLink } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import {IoMail, FaPencilAlt, FaUser} from 'react-icons/all'


const Topnav = () => {
  return (
    <Flex bg='#535351' w='100vw' flexDir={['column', 'row', 'row']} justify='space-between' h='fit-content'>
        <Flex id='mail' m='2' justify={['left', 'center',  'center']}  fontSize='16' align='center' >
            <Icon as={IoMail} color='white'  fontSize='18' mr='2' />
            <ChakraLink href="mailto:info@nictcsp.com" target="_blank" color="white" fontWeight='400' _hover={{ textDecoration: "underline", color:'white' }}>
                   info@nictcsp.com
            </ChakraLink>
        </Flex>
        <Flex gap='2' justify={['right', 'center',  'center']} mr='2' >
            <Button  bg='black' color='white' animation="blinking 1s infinite" _hover={{bg:'#898989'}} _focus={{outline: "none" }} _active={{outline: "none" }} borderRadius='none' size='md' >
                <Icon as={FaPencilAlt} color='white' mr='1'/>  
                <Text fontSize={'13px'} fontWeight='500' >APPLY NOW FOR CSP</Text>
            </Button>
            <Button bg='#e0420b' _hover={{bg:'#898989'}} _focus={{outline: "none" }} _active={{outline: "none" }} color='white' borderRadius='none' size='md'>
                <Icon as={FaUser} color='white' mr='1'/>
                <Text fontSize={'13px'} fontWeight='500' >VLE LOGIN</Text>
                
            </Button>
        </Flex>
    </Flex>
  )
}

export default Topnav


