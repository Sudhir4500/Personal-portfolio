import React from "react";

const TextReveal = ({ text }) => {
  return (
    <span className="reveal-text dark:reveal-text-dark">{text}</span>
  );
};

export default TextReveal;
