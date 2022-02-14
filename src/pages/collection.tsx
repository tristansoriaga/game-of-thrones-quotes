import { Container } from '../components/Container';
import { Main } from '../components/Main';
import { DarkModeSwitch } from '../components/DarkModeSwitch';
import { ListQuotes } from '../components/ListQuotes/';

const Collection = () => (
  <Container>
    <Main>
      <ListQuotes />
    </Main>
    <DarkModeSwitch />
  </Container>
);

export default Collection;
