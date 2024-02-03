import Button from "./components/Button";
// import Input from "./components/Input";

function App() {
  return (
    <>
      <h1>Let's get started</h1>
      {/* <Input label='Your name' id='name' type='text' />
      <Input label='Your age' id='number' type='number' /> */}
      <p>
        <Button el="button"> A Button </Button>
      </p>
      <p>
        <Button el='anchor' href="https://github.com/CristianLopez3" target="_blank"> A Link</Button>
      </p>
    </>
  );
}

export default App;
