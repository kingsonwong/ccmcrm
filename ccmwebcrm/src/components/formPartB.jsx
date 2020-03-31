import React from "react";
import InputLabelPair from "./common/inputLabelPair";

const FormPartB = ({ onChange }) => {
  return (
    <div class="col-md-6">
      <InputLabelPair
        labelWidth="5"
        inputWidth="7"
        labelName="Cash Received Date"
        placeHolder="dd/mm/yy"
        id="cashReceivedDate"
        type="date"
        onChange={onChange}
      />
      <InputLabelPair
        labelWidth="5"
        inputWidth="7"
        labelName="Cash Paid Date"
        placeHolder="dd/mm/yy"
        id="cashPaidDate"
        type="date"
        onChange={onChange}
      />
      <InputLabelPair
        labelWidth="5"
        inputWidth="7"
        labelName="Cash Received Date"
        placeHolder="dd/mm/yy"
        id="cashReceivedDate"
        type="date"
        onChange={onChange}
      />
      <InputLabelPair
        labelWidth="5"
        inputWidth="7"
        labelName="Product Deliver Date"
        placeHolder="dd/mm/yy"
        id="deliverDate"
        type="date"
        onChange={onChange}
      />
    </div>
  );
};

export default FormPartB;
