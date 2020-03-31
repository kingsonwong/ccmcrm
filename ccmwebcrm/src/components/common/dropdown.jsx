import React from "react";

const DropDown = ({ options, inputWidth, id }) => {
  const inputClass = `col-sm-${inputWidth} custom-select`;

  return (
    <select class={inputClass} id={id}>
      {options.map(option => {
        return <option value={option}>{option}</option>;
      })}
    </select>
  );
};
export default DropDown;
