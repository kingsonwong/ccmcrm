import React from "react";
import CheckBox from "./common/checkBox";
import InputLabelPair from "./common/inputLabelPair";

const FormPartA = ({ onChange }) => {
  return (
    <div class="col-md-6 partA ">
      <InputLabelPair
        labelWidth="4"
        inputWidth="8"
        labelName="CCM Invoice ID"
        placeHolder="CCM Invoice ID"
        id="invoiceId"
        type="text"
        onChange={onChange}
      />
      <InputLabelPair
        labelWidth="4"
        inputWidth="8"
        labelName="CCM Invoice Date"
        placeHolder="dd/mm/yy"
        id="invoiceDate"
        type="date"
        onChange={onChange}
      />
      <InputLabelPair
        labelWidth="4"
        inputWidth="8"
        labelName="My Remark"
        placeHolder="My Remark"
        id="remark"
        type="text"
        onChange={onChange}
      />
      <div class="row">
        <div class="col-md-12">
          <CheckBox id="audited" label="Audited" />
          <CheckBox id="completed" label="Order Completed and Close File" />
        </div>
      </div>
    </div>
  );
};

export default FormPartA;
