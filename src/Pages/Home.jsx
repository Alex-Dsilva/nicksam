import { Box, Button, Flex, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, Grid, Image, Text, Divider } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Topnav from '../Components/Topnav'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Services from '../Components/Services'
import Services2 from '../Components/Services2'
import Numbers from '../Components/Numbers'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'
import Fade from 'react-reveal/Fade';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        setIsOpen(true);
      }, []);
    

  return (
    <Box>
        {/* <Modal isOpen={isOpen}  onClose={() => setIsOpen(false)}>
        <ModalOverlay />
        <ModalContent minW='60vw' bgImage='url(https://nictcsp.com/img/bg.jpg)'>
            <ModalHeader textAlign='center' color='white'>CSP ONLINE APPLICATION FORM</ModalHeader>

          <ModalCloseButton />
          <ModalBody >
            <Text color= "#FF0004" textAlign='center'>
              IMPORTANT INFORMATION/महत्वपूर्ण सूचना{" "}
            </Text>
            <Text>
            Dear customer, To get CSP, first of all the company gets your od account opened. For which you have to keep the balance in your savings account up to Rs 1 lakh only then you will be given csp. Thank you ?
            </Text>
            <Divider/>
            <Text>
            
प्रिये ग्राहक, सीएसपी लेने के लिए सबसे पहले कंपनी आपका od account ओपन करवाती है। जिसके लिए आपको आपने सेविंग अकाउंट में बैलेंस 1 lakh रूपए तक रखना होगा तभी आपको csp दिया जायेगा। धन्यवाद ?
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal> */}
        <Topnav/>
        <Navbar/>
        <Hero/>
        <Fade bottom>
        <Flex flexDir={['column', 'row', 'row']}  justify='space-around' bg='#747475' align='center'>
            <Text as='h3' fontSize={'xl'} textAlign='center'>Do you want to open BC point If yes, then apply now quickly !</Text>
            <Button bg='#e0420b' _hover={{bg:'#898989'}} m='5' _focus={{outline: "none" }} _active={{outline: "none" }} color='white' borderRadius='none' size='md'> Click To Apply </Button>
        </Flex >
        </Fade>
        <Fade bottom>
        <Flex flexDir={['column', 'column', 'row']} justify='space-around'>
            <Image src='https://nictcsp.com/img/process.jpg' alt='process'/>
            <Image src='https://nictcsp.com/img/process1.jpg' alt='process'/>
        </Flex>
        </Fade>
        <Fade bottom>
        <Services/>
        </Fade>
        <Fade bottom>
        <Box>
            <Image w='100vw' src='https://nictcsp.com/img/aeps.jpg' alt='bannar'/>
        </Box>
        </Fade>
        <Fade bottom>
        <Services2/>
        </Fade>
        <Fade bottom>
        <Numbers/>
        </Fade>
        <Fade bottom>
        <Box w='100vw' >
        <Flex gap='2' w='60%' m='auto' mt='50px' mb='50px' flexDir='column' textAlign='center' justify={'center'}>
            <Text fontSize='17px'>Do you want to Frenchise Service.Our Company Providing Also Like KIOSK BANKING, BC POINT, AEPS SERVICE, MICROFINANCE and Other Service.</Text>
            <Link to='/'><Text as='b' color='#e0420b'>Please Apply Now</Text></Link>
        </Flex>

        </Box>
        </Fade>
        <Fade bottom>
        <Flex mb='10' flexDir={['column', 'row', 'row']}  justify='space-around' bg='#747475' align='center'>
            <Text as='h3' fontSize={'xl'} textAlign='center'>Do you want to open BC point If yes, then apply now quickly !</Text>
            <Button bg='#e0420b' _hover={{bg:'#898989'}} m='5' _focus={{outline: "none" }} _active={{outline: "none" }} color='white' borderRadius='none' size='md'> Click To Apply </Button>
        </Flex >
        </Fade>

        <Footer/>
      
    </Box>
  )
}

export default Home