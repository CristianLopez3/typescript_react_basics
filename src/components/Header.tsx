import { type ReactNode } from "react";

// type Image = {
//   src: string;
//   alt: string;
// }

interface HeaderProps {
  image: {
    src: string;
    alt: string;
  };
  children: ReactNode  
}

const Header = ({image, children}: HeaderProps) => {
  return (
    <header>
      {/* <img src={image.src} alt={image.alt} /> */}
      <img {...image} />
      {children}
    </header>
  );
}

export default Header;