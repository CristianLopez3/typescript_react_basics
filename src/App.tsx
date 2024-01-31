import "./App.css";
import CourseGoal from "./components/CourseGoal";
import Header from "./components/Header";
import goalsImgs from './assets/goals.jpg';

function App() {
  return (
    <main>
      <Header image={{src: goalsImgs, alt: "A list of goals"}}>
        <h1> Your Course Goals </h1>
      </Header>
      <CourseGoal
        title="Learng React + TypeScript"
      >
        <p>Became a great react dev with typescript</p>
      </CourseGoal>
    </main>
  );
}

export default App;
