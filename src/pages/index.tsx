import { Hero } from '../components/Hero';
import { Container } from '../components/Container';
import { Main } from '../components/Main';
import { DarkModeSwitch } from '../components/DarkModeSwitch';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';
import { RandomQuotes } from '../components/RandomQuotes/RandomQuotes';

const Index = () => (
  <Container>
    <Main>
      <RandomQuotes />
    </Main>
    <DarkModeSwitch />
  </Container>
);

export default Index;
