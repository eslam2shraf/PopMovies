import { useState } from "react";

export default function TextExpander({
  children,
  collapsedNumWords = 10,
  expandButtonText = "Show More",
  expanded = false,
  collapseButtonText = "Show Less",
  buttonColor = "blue",
  className = "",
}) {
  const [words, setWords] = useState(!expanded?
    children.split(" ").slice(0, collapsedNumWords).join(" ") + "..."
    :
    children
  );
  const [isOpen, setIsOpen] = useState(expanded);

  function handelText(e) {
    setIsOpen((s) => (s = !isOpen));
    if (!isOpen) {
      setWords((s) => (s = children));
    } else {
      setWords(
        children.split(" ").slice(0, collapsedNumWords).join(" ") + "..."
      );
    }
  }

  return (
    <div  className={className}>
      <p>
        {" "}
        {words}{" "}
        <button
          onClick={handelText}
          style={{ color: buttonColor }}
       
        >
          {" "}
          {isOpen ? collapseButtonText : expandButtonText}
        </button>{" "}
      </p>
    </div>
  );
}
