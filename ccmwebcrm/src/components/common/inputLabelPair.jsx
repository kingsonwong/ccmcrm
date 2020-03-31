import React from "react";
import Input from "./input";

const InputLabelPair = ({
  labelWidth,
  inputWidth,
  labelName,
  placeHolder,
  id,
  type,
  onChange
}) => {
  const labelClass = `col-sm-${labelWidth} col-form-label`;
  const inputClass = `col-sm-${inputWidth}`;
  return (
    <div class="form-group row">
      <label class={labelClass} htmlFor={id}>
        {labelName}
      </label>
      <div class={inputClass}>
        <Input
          type={type}
          id={id}
          class="form-control mb-3"
          placeholder={placeHolder}
          required=""
          autofocus=""
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default InputLabelPair;
