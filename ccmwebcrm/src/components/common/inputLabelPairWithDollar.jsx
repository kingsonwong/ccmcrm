import React from "react";
import Input from "./input";

const InputLabelPairWithDollar = ({
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
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">$</span>
          </div>
          <Input
            type={type}
            id={id}
            class="form-control "
            placeholder={placeHolder}
            required=""
            autofocus=""
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
};

export default InputLabelPairWithDollar;
