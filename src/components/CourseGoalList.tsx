import { type CourseGoal as CGoal } from "../App";
import CourseGoal from "./CourseGoal";

type CourseGoalListProps = {
  goals: CGoal[];
}

const CourseGoalList = ({goals}: CourseGoalListProps) => {
  return (
    <ul>
    {goals.map((goal) => {
      return (
        <li key={goal.title}>
          <CourseGoal title={goal.title} description={goal.description}>
            <p>Learn it from the ground up</p>
          </CourseGoal>
        </li>
      );
    })}
  </ul>
  )
}

export default CourseGoalList;