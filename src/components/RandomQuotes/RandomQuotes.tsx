import { useState, useEffect } from 'react';
import { Heading, Text, Stack, Image, Box } from '@chakra-ui/react';
import { getImages } from '../../util';
interface RandomQuotesProps {
  sentence: string;
  character: {
    name: string;
    slug: string;
    house: {
      name: string;
      slug: string;
    };
  };
}

export const RandomQuotes = () => {
  const [quotes, setQuotes] = useState<RandomQuotesProps>();
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://game-of-thrones-quotes.herokuapp.com/v1/random');
      const data = await response.json();
      setQuotes(data);
    };
    fetchData();
  }, []);

  return (
    <Stack as='section' justifyContent='center' borderRadius='3xl' border='10px solid black' p='1rem' maxW='400px'>
      <Box bg='gray.200' borderRadius='lg'>
        <Heading as='h1' fontSize='lg' fontWeight='bold' borderRadius='lg' border='3px solid black' p='5px'>
          {quotes?.character?.name}
        </Heading>
      </Box>
      <Box>
        <Image w='420px' src={getImages(quotes?.character?.slug)} />
      </Box>
      <Box bg='gray.200' borderRadius='lg' border='3px solid black' p='5px'>
        <Text fontSize='lg' fontWeight='bold'>
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
