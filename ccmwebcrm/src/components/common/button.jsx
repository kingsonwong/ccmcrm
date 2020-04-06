import React from "react";

const Button = ({ text, children, ...rest }) => {
  return (
    <button {...rest}>
      {text}
      {children}
    </button>
  );
};

export default Button;
