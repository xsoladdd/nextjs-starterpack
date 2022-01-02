import React from "react";
// import "../../css/global.css";

interface HeadingProps {}

const Heading: React.FC<HeadingProps> = ({ children }) => {
  return <h1 className="text-red-500">{children}</h1>;
};
export default Heading;
