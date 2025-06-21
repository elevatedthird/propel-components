import React from "react";
import useComputedStyle from "./hooks/useComputedStyle";

function Heading({ level }) {
  const { rules, ComputedStyleEl } = useComputedStyle(level, [
    "font-family",
    "font-size",
  ]);
  return (
    <div>
      <ComputedStyleEl className={level}> Heading: {level} </ComputedStyleEl>
      <small>
        {" "}
        Font Family: {rules["font-family"]} | Font Size:{" "}
        {rules["font-size"]}{" "}
      </small>
    </div>
  );
}

export default function Typography() {
  const tags = ["h1", "h2", "h3", "h4", "h5"];
  return (
    <div>
      {tags.map((tag, index) => (
        <Heading key={index} level={tag} />
      ))}
    </div>
  );
}
