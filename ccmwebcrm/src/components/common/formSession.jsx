import React from "react";

const FormSession = ({ title, children }) => {
  return (
    <React.Fragment>
      <br />
      <br />
      <h1 class="mb-3">
        {title}
        {children}
      </h1>
      <hr />
    </React.Fragment>
  );
};

export default FormSession;
