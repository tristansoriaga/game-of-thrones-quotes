import { getImages, getBackground } from '../../util';

import { Stack, Box, Heading, Image, Text } from '@chakra-ui/react';
export const Card = ({ quotes }) => {
  return (
    <Stack
      as='section'
      justifyContent='center'
      borderRadius='3xl'
      border='10px solid black'
      p='1rem'
      maxW='400px'
      backgroundRepeat='repeat'
      backgroundImage={getBackground()}
      boxShadow='0px 5px 5px 0px rgba(0, 0, 0, 0.5)'
      cursor='pointer'
      transition='all 0.1s ease-in-out'
      _hover={{
        transform: 'scale(1.01)',
        boxShadow: '0 8px 10px 0 rgba(0, 0, 0, 0.2)',
      }}
    >
      <Box bg='gray.200' borderRadius='lg'>
        <Heading as='h1' fontSize='md' fontWeight='bold' borderRadius='lg' border='3px solid black' p='5px' color='black'>
          {quotes?.character?.name}
        </Heading>
      </Box>
      <Image w='420px' border='3px solid black' borderRadius='md' src={getImages(quotes?.character?.slug)} />
      <Box bg='gray.200' borderRadius='lg' border='3px solid black' p='5px'>
        <Text fontSize='md' fontWeight='bold' color='black'>
          {quotes?.character.house.name}
        </Text>
      </Box>
      <Box bg='gray.200' minH='250px' borderRadius='lg' py='1.5rem' px='5px' border='3px solid black'>
        <Text as='q' fontSize='xl' lineHeight='1.1' fontStyle='italic' color='black'>
          {quotes?.sentence}
        </Text>
      </Box>
    </Stack>
  );
};
