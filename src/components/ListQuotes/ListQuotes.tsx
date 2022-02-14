import { Flex } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { Card } from '../Card/';

interface ListQuotesProps {
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

export const ListQuotes = () => {
  const [quotes, setQuotes] = useState<ListQuotesProps[]>();
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://game-of-thrones-quotes.herokuapp.com/v1/random/20');
      const data = await response.json();
      setQuotes(data);
    };
    fetchData();
  }, []);

  return (
    <Flex gap={6} flexWrap={'wrap'} maxW='1600px' justifyContent='center'>
      {quotes?.map((quote, i) => (
        <Card key={i} quotes={quote} />
      ))}
    </Flex>
  );
};
