import "./App.css";
import Header from "./components/Header";
import goalsImgs from "./assets/goals.jpg";
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList";

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  const handleGoals = () => {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: "Learng React + TS",
        description: "Learn it in depth",
      };
      return [...prevGoals, newGoal];
    });
  };

  function handleDeleteGoal(id: number){
    setGoals(prevGoals => prevGoals.filter((goal) => goal.id !== id ))
  }

  return (
    <main>
      <Header image={{ src: goalsImgs, alt: "A list of goals" }}>
        <h1> Your Course Goals </h1>
      </Header>

      <button onClick={handleGoals}>Add Goal</button>
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />

    </main>
  );
}

export default App;
