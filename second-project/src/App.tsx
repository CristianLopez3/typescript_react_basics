import Button from "./components/Button";
// import Container from './components/Container';
import Input from "./components/Input";
import Form, {type FormHandle} from "./components/Form";
import { useRef } from "react";
// import Input from "./components/Input";

function App() {

  const customForm = useRef<FormHandle>(null);
  
  function handleSave(data: unknown){
    const extractedData = data as { name: string; age: string };
    console.log(extractedData);
    customForm.current?.clear();
  };

  return (
    <main>
      {/* <Input label="Test" id="test" ref={input} /> */}
      {/* <Container as={Button}> Click Me! </Container> */}
      <Form onSave={handleSave} ref={customForm}>
        <Input type="text" label="name" id="name" />
        <Input type="number" label="age" id="age" />
        <p>
          <Button>Save</Button>
        </p>
      </Form>
    </main>
  );
}

export default App;
