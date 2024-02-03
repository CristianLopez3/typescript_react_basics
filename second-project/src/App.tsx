import Button from "./components/Button";
import Container from './components/Container';
// import Input from "./components/Input";

function App() {
  return (
    <main>
      <Container as={Button} />
    </main>
  );
}

export default App;
