import { FC, type PropsWithChildren, type ReactNode } from "react";

interface CourseGoalProps {
  title: string;
  description: string;
  children: ReactNode;
}

// type CourseGoalProps = PropsWithChildren<{title: string}>;

function CourseGoal({ title, description, children }: CourseGoalProps) {
  return (
    <article className="card">
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        {children}
      </div>
      <button>Delete</button>
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
