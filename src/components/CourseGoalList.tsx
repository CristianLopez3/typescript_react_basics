import { type CourseGoal as CGoal } from "../pages/GoalsNotes";
import CourseGoal from "./CourseGoal";

type CourseGoalListProps = {
  goals: CGoal[];
  onDeleteGoal: (id: number) => void;
};

const CourseGoalList = ({ goals, onDeleteGoal }: CourseGoalListProps) => {
  return (
    <ul>
      {goals.map((goal) => {
        return (
          <li key={goal.title}>
            <CourseGoal
              id={goal.id}
              title={goal.title}
              description={goal.description}
              onDelete={onDeleteGoal}
            >
              ...
            </CourseGoal>
          </li>
        );
      })}
    </ul>
  );
};

export default CourseGoalList;
