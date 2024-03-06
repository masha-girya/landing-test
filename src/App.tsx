/* eslint-disable @typescript-eslint/no-empty-function */
// import { Button } from 'components';

import {
  About,
  AppContainer,
  Banner,
  FAQs,
  Features,
  Footer,
  Header,
} from 'components';

function App() {
  return (
    <AppContainer>
      <Header />
      <main>
        <Banner />
        <About />
        <Features />
        <FAQs />
      </main>
      <Footer />
    </AppContainer>
  );
}

export default App;
