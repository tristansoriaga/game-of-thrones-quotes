import { useState, useEffect } from 'react';
import { Heading, Text, Stack, Image } from '@chakra-ui/react';

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
    <Stack height='85vh' as='section' justifyContent='center' borderRadius='lg' border='1px solid grey' p='2rem' m='4rem'>
      <Image src='' />
      <Heading as='h1' fontSize='4xl'>
        {quotes?.character?.name}
      </Heading>
      <Text fontSize='2xl'>{quotes?.sentence}</Text>
    </Stack>
  );
};
