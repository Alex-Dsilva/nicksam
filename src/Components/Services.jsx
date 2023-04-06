import { Box, Button, Flex, Grid, Image, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

const Services = () => {
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
        <Grid bg='#ee590e' w='100vw' gap='5' justifyItems='center' p='50' templateColumns={['repeat(1,1fr)', 'repeat(2,1fr)', 'repeat(3,1fr)']}>
            <Flex
                position="relative"
                w="250px"
                h="250px"
                overflow="hidden"
                rounded="md"
                boxShadow="md"
                onMouseEnter={() => handleHover(0, true)}
                onMouseLeave={() => handleHover(0, false)}
            >
                <Image
                    src='https://nictcsp.com/img/what-is-csp.jpg'
                    alt='what-is-csp'
                    w="100%"
                    h="100%"
                    objectFit="cover"
                    transition="transform 0.3s ease-in-out"
                    transform={cards[0].isHovering ? "scale(2)" : "scale(1)"}
                    zIndex={1}
                />
                <Flex
                    position="absolute"
                    top={0}
                    left={0}
                    w="100%"
                    h="100%"
                    bg="rgba(0, 0, 0, 0.5)"
                    backdropFilter="blur(8px)"
                    opacity={cards[0].isHovering ? 1 : 0}
                    transition="opacity 0.3s ease-in-out"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    zIndex={2}
                >
                    <Text
                        color="white"
                        fontSize="sm"
                        textAlign="center"
                        opacity={cards[0].isHovering ? 1 : 0}
                        transform={cards[0].isHovering ? "translateY(0)" : "translateY(-100%)"}
                        transition="opacity 0.3s ease-in-out 0.2s, transform 0.3s ease-in-out 0.2s"
                    >
                       Kiosks act as touch-points for conducting basic banking services. It helps businesses to improve customer experience and enforce branding of banks.
                    </Text>
                </Flex>
                <Text
                    position="absolute"
                    top={5}
                    // left={0}
                    w="100%"
                    p={4}
                    color="white"
                    fontWeight="bold"
                    textAlign="center"
                    fontSize="xl"
                    zIndex={2}
                    textShadow="5px 5px 5px rgba(0, 0, 0, 0.943)"
                    transition="transform 0.3s ease-in-out"
                    transform={cards[0].isHovering ? "scale(1.2)" : "scale(1)"}
                >
                    what-is-csp
                </Text>
            </Flex>
            <Flex
                position="relative"
                w="250px"
                h="250px"
                overflow="hidden"
                rounded="md"
                boxShadow="md"
                onMouseEnter={() => handleHover(1, true)}
                onMouseLeave={() => handleHover(1, false)}
            >
                <Image
                    src='https://nictcsp.com/img/open-csp.jpg'
                    alt='BENEFIT OF CSP'
                    w="100%"
                    h="100%"
                    objectFit="cover"
                    transition="transform 0.3s ease-in-out"
                    transform={cards[1].isHovering ? "scale(2)" : "scale(1)"}
                    zIndex={1}
                />
                <Flex
                    position="absolute"
                    top={0}
                    left={0}
                    w="100%"
                    h="100%"
                    bg="rgba(0, 0, 0, 0.5)"
                    backdropFilter="blur(8px)"
                    opacity={cards[1].isHovering ? 1 : 0}
                    transition="opacity 0.3s ease-in-out"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    zIndex={2}
                >
                    <Text
                        color="white"
                        fontSize="sm"
                        textAlign="center"
                        opacity={cards[1].isHovering ? 1 : 0}
                        transform={cards[1].isHovering ? "translateY(0)" : "translateY(-100%)"}
                        transition="opacity 0.3s ease-in-out 0.2s, transform 0.3s ease-in-out 0.2s"
                    >
                        Yes. All the Bank Mitra will get a fixed salary of INR 2000 to INR 5000 irrespective of the bank and branch. Apart from this,
                    </Text>
                </Flex>
                <Text
                    position="absolute"
                    top={5}
                    // left={0}
                    w="100%"
                    p={4}
                    color="white"
                    fontWeight="bold"
                    textAlign="center"
                    fontSize="xl"
                    zIndex={2}
                    textShadow="5px 5px 5px rgba(0, 0, 0, 0.943)"
                    transition="transform 0.3s ease-in-out"
                    transform={cards[1].isHovering? "scale(1.2)" : "scale(1)"}
                >
                    BENEFIT OF CSP
                </Text>
            </Flex>
            <Flex
                position="relative"
                w="250px"
                h="250px"
                overflow="hidden"
                rounded="md"
                boxShadow="md"
                onMouseEnter={() => handleHover(2, true)}
                onMouseLeave={() => handleHover(2, false)}
            >
                <Image
                    src='https://nictcsp.com/img/csp-agent.jpg'
                    alt='Become a CSP Agent Today'
                    w="100%"
                    h="100%"
                    objectFit="cover"
                    transition="transform 0.3s ease-in-out"
                    transform={cards[2].isHovering ? "scale(2)" : "scale(1)"}
                    zIndex={1}
                />
                <Flex
                    position="absolute"
                    top={0}
                    left={0}
                    w="100%"
                    h="100%"
                    bg="rgba(0, 0, 0, 0.5)"
                    backdropFilter="blur(8px)"
                    opacity={cards[2].isHovering ? 1 : 0}
                    transition="opacity 0.3s ease-in-out"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    zIndex={2}
                >
                    <Text
                        color="white"
                        fontSize="sm"
                        textAlign="center"
                        opacity={cards[2].isHovering ? 1 : 0}
                        transform={cards[2].isHovering ? "translateY(0)" : "translateY(-100%)"}
                        transition="opacity 0.3s ease-in-out 0.2s, transform 0.3s ease-in-out 0.2s"
                    >
                        You may apply to become Bank Mitra for State Bank of India, Bank of Baroda, Bank of India and Punjab National Bank
                    </Text>
                </Flex>
                <Text
                    position="absolute"
                    top={1}
                    // left={0}
                    w="100%"
                    p={4}
                    color="white"
                    fontWeight="bold"
                    textAlign="center"
                    fontSize="xl"
                    zIndex={2}
                    textShadow="5px 5px 5px rgba(0, 0, 0, 0.943)"
                    transition="transform 0.3s ease-in-out"
                    transform={cards[2].isHovering? "scale(1.2)" : "scale(1)"}
                >
                    Become a CSP Agent Today
                </Text>
            </Flex>
        </Grid>
    )
}

export default Services