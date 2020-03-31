import React from "react";
import InputLabelPair from "./common/inputLabelPair";

const formPartC = ({ onChange }) => {
  return (
    <React.Fragment>
      <div class="col-md-6">
        <InputLabelPair
          labelWidth="4"
          inputWidth="8"
          labelName="Record Date"
          placeHolder="dd/mm/yy"
          id="recordDate"
          type="date"
          onChange={onChange}
        />

        <InputLabelPair
          labelWidth="4"
          inputWidth="8"
          labelName="Case Id"
          placeHolder="Case ID"
          id="caseid"
          type="text"
          onChange={onChange}
        />
        <InputLabelPair
          labelWidth="4"
          inputWidth="8"
          labelName="Order Id"
          placeHolder="Order ID"
          id="orderid"
          type="text"
          onChange={onChange}
        />
      </div>
      <div class="col-md-6">
        <InputLabelPair
          labelWidth="4"
          inputWidth="8"
          labelName="Customer Name"
          placeHolder="Customer Name"
          id="customerName"
          type="text"
          onChange={onChange}
        />
        <InputLabelPair
          labelWidth="4"
          inputWidth="8"
          labelName="Customer Phone"
          placeHolder="Customer Phone No."
          id="customerPhone"
          type="text"
          onChange={onChange}
        />
        <InputLabelPair
          labelWidth="4"
          inputWidth="8"
          labelName="Customer Address"
          placeHolder="Customer Living Address"
          id="customerAddress"
          type="text"
          onChange={onChange}
        />
      </div>
    </React.Fragment>
  );
};

export default formPartC;
