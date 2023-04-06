import { Box, Flex, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import CountUpComponent from './CountUpComponent'
import { SiCheckmarx } from 'react-icons/si'

const Numbers = () => {
  return (
    <Flex backgroundImage={`url(https://nictcsp.com/img/count-bg.jpg)`}
    backgroundPosition="center"
    backgroundRepeat="no-repeat"
    backgroundAttachment="fixed"
    backgroundSize="cover"
    w='100vw'
    align='center'
    height="500px"
    position="relative" >

        <Flex gap='5em' w={["90%","80%",'60%']} m='auto' id='center' flexDir='column' textAlign='left' >
        <Flex fontSize={['1.5rem', '2rem','2.8rem']} color='#0ebac0'>
            <Icon as={SiCheckmarx}  h={['5rem','6.5rem','7.5rem']} w='7.5rem'/>
        Just numbers?
        <br />
         Means a lot !,
        </Flex>
        
        <Flex gap='5'>
            <Box textAlign='center' >
            <CountUpComponent color='white' fontSize={['2.5em','4em','5em']} textAlign='center' endValue={8000}/>
            <Text color='white' >VILLAGE COVERED</Text>
            </Box>
            <Box textAlign='center'>
            <CountUpComponent color='white' fontSize={['2.5em','4em','5em']} textAlign='center' endValue={4000}/>
            <Text color='white' >CUSTOMER SERVICE POINT</Text>
            </Box>
            <Box textAlign='center'>
            <CountUpComponent color='white' fontSize={['2.5em','4em','5em']} isPercentage={true} textAlign='center' endValue={100}/>
            <Text color='white' >SATISFIED CUSTOMERS</Text>
            </Box>
        
        </Flex>

        </Flex>
        

    </Flex>
  )
}

export default Numbers