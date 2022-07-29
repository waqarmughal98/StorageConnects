import React from "react";
import SellEnquiry from "../SellStorageComponents/SellEnquiry";

const EvaluationForm = () => {
  return (
    <div className="evaluation-bg mx-auto text-center py-20">
      <p className="text-white text-xl px-8 w-full lg:w-7/12 relative mx-auto">
        Let us know about you and your Self Storage, drop some information that
        would help us carry out the evaluation effectively
      </p>
      <SellEnquiry />
    </div>
  );
};

export default EvaluationForm;
