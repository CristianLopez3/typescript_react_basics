import { type ElementType } from "react";

type ContainerProps = {
  as: ElementType
}

function Container({as}: ContainerProps){
  const Component = as;
  return <Component />
}


export default Container;
