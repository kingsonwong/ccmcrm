import React from "react";

const DropDown = ({ options, labelWidth, inputWidth, labelName, id }) => {
  const labelClass = `col-sm-${labelWidth} col-form-label`;
  const inputClass = `col-sm-${inputWidth} custom-select`;

  return (
    <div class="form-group row">
      <label class={labelClass} htmlFor={id}>
        {labelName}
      </label>
      <select class={inputClass} id={id}>
        {options.map(option => {
          return <option value={option}>{option}</option>;
        })}
      </select>
    </div>
  );
};

export default DropDown;
