import Button from "./components/Button";
import Container from './components/Container';
// import Input from "./components/Input";

function App() {
  return (
    <main>
      <Container as={Button}> Click Me! </Container>
    </main>
  );
}

export default App;
