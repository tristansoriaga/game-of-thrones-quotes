import { getImages, getBackground } from '../../util';

import { Stack, Box, Heading, Image, Text } from '@chakra-ui/react';
export const Card = ({ quotes }) => {
  return (
    <Stack as='section' justifyContent='center' borderRadius='3xl' border='10px solid black' p='1rem' maxW='400px' backgroundImage={getBackground()}>
      <Box bg='gray.200' borderRadius='lg'>
        <Heading as='h1' fontSize='md' fontWeight='bold' borderRadius='lg' border='3px solid black' p='5px'>
          {quotes?.character?.name}
        </Heading>
      </Box>
      <Box>
        <Image w='420px' src={getImages(quotes?.character?.slug)} />
      </Box>
      <Box bg='gray.200' borderRadius='lg' border='3px solid black' p='5px'>
        <Text fontSize='md' fontWeight='bold'>
          {quotes?.character.house.name}
        </Text>
      </Box>
      <Box bg='gray.200' minH='250px' borderRadius='lg' py='1.5rem' px='5px' border='3px solid black'>
        <Text as='q' fontSize='xl' lineHeight='1.1' fontStyle='italic'>
          {quotes?.sentence}
        </Text>
      </Box>
    </Stack>
  );
};
