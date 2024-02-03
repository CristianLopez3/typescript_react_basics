import Header from "../components/Header";
import goalsImgs from "../assets/goals.jpg";
import { useState } from "react";
import CourseGoalList from "../components/CourseGoalList";
import NewGoal from "../components/NewGoal";

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

function GoalsNotes() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  const handleAddGoal = (goal: string, summary: string) => {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: goal,
        description: summary,
      };
      return [...prevGoals, newGoal];
    });
  };

  function handleDeleteGoal(id: number){
    setGoals(prevGoals => prevGoals.filter((goal) => goal.id !== id ))
  }

  return (
    <div className={"card-container"}>
      <Header image={{ src: goalsImgs, alt: "A list of goals" }}>
        <h1> Your Course Goals </h1>
      </Header>

      <NewGoal onAddGoal={handleAddGoal} />
      <div className="list-goals">
        <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
      </div>

    </div>
  );
}

export default GoalsNotes;
