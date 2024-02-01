import { type ReactNode } from "react";

interface CourseGoalProps {
  id: number;
  title: string;
  description: string;
  onDelete: (id: number) => void;
  children: ReactNode;
}

// type CourseGoalProps = PropsWithChildren<{title: string}>;

function CourseGoal({ id, title, description, onDelete, children }: CourseGoalProps) {
  return (
    <article className="card">
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        {children}
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
}

// const CourseGoal: FC<CourseGoalProps> = ({title, children }) => { 

//   return(
//     <article>
//       <div>
//         <h2>{title}</h2>
//         {children}
//       </div>
//       <button>Delete</button>
//     </article>
//   );
// };

export default CourseGoal;
