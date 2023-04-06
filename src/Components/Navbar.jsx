import { Box, Button, Collapse, Divider, Flex, Icon, Image, Menu, MenuButton, MenuItem, MenuList, Text, useDisclosure, useMediaQuery } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link as ChakraLink } from "@chakra-ui/react";
import logo from '../assets/logo.png'
import { Link as RouterLink } from "react-router-dom";
import { ImMenu } from 'react-icons/im';
import { AiOutlineCloseSquare, AiOutlineDown } from 'react-icons/ai';

const Navbar = () => {
    const { isOpen, onToggle } = useDisclosure();
    const [isSmallerThan1280] = useMediaQuery("(max-width: 1279px)");
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    return (
        <Flex
            as="nav"
            align="center"
            justify='space-around'
            w="100vw"
            boxShadow={'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}
            p={4}
            bg={["gray.100", "gray.100", 'white']}
            color={["black", "black", "black"]}
        >
            <Flex align="center">
                <Box>
                    <RouterLink href="/" _hover={{ textDecoration: "none" }} >
                        <Image fontWeight="bold" src={logo} alt='Logo' />
                    </RouterLink>
                </Box>
            </Flex>

            <Flex
                align="center"
                justify={["none", "space-between", "flex-end"]}
                display={['none', 'flex', 'flex']}
            >
                <RouterLink to="/">
                    <Button onMouseEnter={handleMouseLeave} transition='0.2s' _focus={{ outline: "none" }} bg='none' borderRadius='0' color='black' _hover={{ bg: 'black', color: 'white' }} _active={{ outline: "none" }} >
                        Home
                    </Button>
                </RouterLink>
                <RouterLink to="/about">
                    <Button transition='0.2s' onMouseEnter={handleMouseLeave} _focus={{ outline: "none" }} bg='none' borderRadius='0' color='black' _hover={{ bg: 'black', color: 'white' }} _active={{ outline: "none" }} >
                        About Us
                    </Button>
                </RouterLink>
                <Flex alignItems="center" transition='1s' position='relative'>
                    <Button
                        _focus={{ outline: "none" }} bg='none' borderRadius='0' color='black' _hover={{ bg: 'black', color: 'white' }} _active={{ outline: "none" }}
                        onMouseEnter={handleMouseEnter}
                    >
                        schems <AiOutlineDown style={{ marginLeft: '5px' }} />
                    </Button>
                    {isHovering && (
                        <Box
                            position="absolute"
                            top="50"
                            left="0"
                            zIndex="999"
                            w='250px'
                            boxShadow="sm"
                            onMouseLeave={handleMouseLeave}
                            color='white'
                            bg='black'
                            p="2"
                        >
                            <Text color='white' bg='black' p='5px 15px'>pm jan dhan yojna</Text>
                            <Divider />
                            <Text color='white' bg='black' p='5px 15px'>pm atal pension yojna</Text>
                            <Divider />
                            <Text color='white' bg='black' p='5px 15px'>pm suraksha bima yojna</Text>
                            <Divider />
                            <Text color='white' bg='black' p='5px 15px'>kisan credit card</Text>
                            <Divider />
                            <Text color='white' bg='black' p='5px 15px'>pm mudra yojna</Text>
                        </Box>
                    )}
                </Flex>
                <RouterLink to="/services">
                    <Button transition='0.2s' onMouseEnter={handleMouseLeave} _focus={{ outline: "none" }} bg='none' borderRadius='0' color='black' _hover={{ bg: 'black', color: 'white' }} _active={{ outline: "none" }} >
                        apply online
                    </Button>
                </RouterLink>
                <RouterLink to="/contact">
                    <Button transition='0.2s' onMouseEnter={handleMouseLeave} _focus={{ outline: "none" }} bg='none' borderRadius='0' color='black' _hover={{ bg: 'black', color: 'white' }} _active={{ outline: "none" }} >
                        Contact Us
                    </Button>
                </RouterLink>
            </Flex>

            <Menu display={['block', 'none', 'none']}>
                <MenuButton display={['block', 'none', 'none']} border={'3px solid Black'} p='2px 5px' borderRadius='0' >
                    <Icon as={ImMenu} color="black" w={6} h={6} />
                </MenuButton>
                <MenuList display='flex' zIndex='999' flexDir='column' w='100vw'>
                <RouterLink to="/">
                    <Button onMouseEnter={handleMouseLeave} w='100%' transition='0.2s' _focus={{ outline: "none" }} bg='none' borderRadius='0' color='black' _hover={{ bg: 'black', color: 'white' }} _active={{ outline: "none" }} >
                        Home
                    </Button>
                </RouterLink>
                <RouterLink to="/about">
                    <Button transition='0.2s' w='100%' onMouseEnter={handleMouseLeave} _focus={{ outline: "none" }} bg='none' borderRadius='0' color='black' _hover={{ bg: 'black', color: 'white' }} _active={{ outline: "none" }} >
                        About Us
                    </Button>
                </RouterLink>
                <Flex alignItems="center" transition='1s' position='relative'>
                    <Button
                        w='100%'
                        onClick={()=>setIsHovering(!isHovering)}
                        _focus={{ outline: "none" }} bg='none' borderRadius='0' color='black' _hover={{ bg: 'black', color: 'white' }} _active={{ outline: "none" }}
                       
                    >
                        schems <AiOutlineDown style={{ marginLeft: '5px' }} />
                    </Button>
                    {isHovering && (
                        <Box
                            position="absolute"
                            top="50"
                            left="0"
                            zIndex="1"
                            w='100vw'
                            boxShadow="sm"
                            color='white'
                            bg='black'
                            p="2"
                        >
                            <RouterLink to="#"><Text color='white' cursor='pointer' _hover={{bg:'#3b3b3b'}} bg='black' p='5px 15px'>pm jan dhan yojna</Text></RouterLink>
                            <Divider />
                            <RouterLink to="#"><Text color='white' cursor='pointer' _hover={{bg:'#3b3b3b'}} bg='black' p='5px 15px'>pm atal pension yojna</Text></RouterLink>
                            <Divider />
                            <RouterLink to="#"><Text color='white' cursor='pointer' _hover={{bg:'#3b3b3b'}} bg='black' p='5px 15px'>pm suraksha bima yojna</Text></RouterLink>
                            <Divider />
                            <RouterLink to="#"><Text color='white' cursor='pointer' _hover={{bg:'#3b3b3b'}} bg='black' p='5px 15px'>kisan credit card</Text></RouterLink>
                            <Divider />
                            <RouterLink to="#"><Text color='white' cursor='pointer' _hover={{bg:'#3b3b3b'}} bg='black' p='5px 15px'>pm mudra yojna</Text></RouterLink>
                        </Box>
                    )}
                </Flex>
                <RouterLink to="/services">
                    <Button transition='0.2s' w='100%' onMouseEnter={handleMouseLeave} _focus={{ outline: "none" }} bg='none' borderRadius='0' color='black' _hover={{ bg: 'black', color: 'white' }} _active={{ outline: "none" }} >
                        apply online
                    </Button>
                </RouterLink>
                <RouterLink to="/contact">
                    <Button transition='0.2s' w='100%' onMouseEnter={handleMouseLeave} _focus={{ outline: "none" }} bg='none' borderRadius='0' color='black' _hover={{ bg: 'black', color: 'white' }} _active={{ outline: "none" }} >
                        Contact Us
                    </Button>
                </RouterLink>
                </MenuList>
            </Menu>
        </Flex>
    );
}

export default Navbar