import React from "react";

const CheckBox = ({ value, label }) => {
  return (
    <div class="checkbox mb-3">
      <label>
        <input type="checkbox" value={value} /> {label}
      </label>
    </div>
  );
};

export default CheckBox;
