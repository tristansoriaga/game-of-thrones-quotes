import { useState, useEffect } from 'react';
import { Card } from '../Card/';
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

  return <Card quotes={quotes} />;
};
