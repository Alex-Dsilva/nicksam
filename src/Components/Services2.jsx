import { Box, Button, Flex, Grid, Icon, Image, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaUniversity } from 'react-icons/fa';
import { GiTicket } from 'react-icons/gi';
import { MdCurrencyRupee } from 'react-icons/md';

const Services2 = () => {
    const [cards, setCards] = useState([
        { isHovering: false },
        { isHovering: false },
        { isHovering: false },
    ]);

    const handleHover = (index, value) => {
        const updatedCards = [...cards];
        updatedCards[index].isHovering = value;
        setCards(updatedCards);
    };


    return (
        <Grid bg='#ececec' w='100vw' justifyItems='center' p='50' templateColumns={['repeat(1,1fr)', 'repeat(2,1fr)', 'repeat(3,1fr)']}>
            <Flex
                w="300px"
                h="250px"
                gap='2'
                p='2'
                transition="all 0.5s ease-in-out"
                _hover={{
                    borderColor: "blue.500",
                    bg: "blue.50",
                    "& > div:first-child": {
                        transform: "translateY(10px)",
                        border: '3px dashed black'
                    },
                }}
            >
                <Flex border={'3px solid black'} p='2' borderRadius={'50%'} align="center" justify="center" w="100%" h="75px">
                    <Icon as={FaUniversity} boxSize={{ base: "2rem", md: "3rem" }} />
                </Flex>
                <Box >
                    <Text fontWeight="bold" fontSize="lg">
                        DIGITAL SEVA
                    </Text>
                    <Text noOfLines={7} fontSize={{ base: "sm", md: "md" }}>
                        Common Services Centres (CSC) are ICT enabled access points for delivery
                        of various Government &amp; business services to citizens. CSC will
                        provide skill development, digital literacy, health and financial
                        services to rural India. ... By December 2016 all 2,50,000 Gram
                        Panchayats will be equipped with a CSC.
                    </Text>
                </Box>
            </Flex>
            <Flex
                w="300px"
                h="250px"
                gap='2'
                p='2'
                transition="all 0.5s ease-in-out"
                _hover={{
                    borderColor: "blue.500",
                    bg: "blue.50",
                    "& > div:first-child": {
                        transform: "translateY(10px)",
                        border: '3px dashed black'
                    },
                }}
            >
                <Flex border={'3px solid black'} p='2' borderRadius={'50%'} align="center" justify="center" w="100%" h="75px">
                    <Icon as={GiTicket} boxSize={{ base: "2rem", md: "3rem" }} />
                </Flex>
                <Box >
                <Text fontWeight="bold" fontSize="lg">
                        CSP KIOSK
                    </Text>
                    <Text noOfLines={7} fontSize={{ base: "sm", md: "md" }}>
                      
      Kiosks act as touch-points for conducting basic banking services. It helps businesses to improve customer experience and enforce branding of banks. The use of kiosk for banking services are secure and appeals to Millennials and digitally-inclined consumers.
                    </Text>
                </Box>
            </Flex>
            <Flex
                w="300px"
                h="250px"
                gap='2'
                p='2'
                transition="all 0.5s ease-in-out"
                _hover={{
                    borderColor: "blue.500",
                    bg: "blue.50",
                    "& > div:first-child": {
                        transform: "translateY(10px)",
                        border: '3px dashed black'
                    },
                }}
            >
                <Flex border={'3px solid black'} p='2' borderRadius={'50%'} align="center" justify="center" w="100%" h="75px">
                    <Icon as={MdCurrencyRupee} boxSize={{ base: "2rem", md: "3rem" }} />
                </Flex>
                <Box >
                    <Text fontWeight="bold" fontSize="lg">
                        AEPS SEVA
                    </Text>
                    <Text noOfLines={7} fontSize={{ base: "sm", md: "md" }}>
                        
      AEPS is a bank led model which allows online interoperable financial transaction at PoS (Point of Sale / Micro ATM) through the Business Correspondent (BC)/Bank Mitra of any bank using the Aadhaar authentication.
                    </Text>
                </Box>
            </Flex>

        </Grid>
    )
}

export default Services2