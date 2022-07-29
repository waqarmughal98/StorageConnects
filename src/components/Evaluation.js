import React from "react";
import EvaluationForm from "./FreeEvaluationComponents/EvaluationForm";
import SelfStorage from "./FreeEvaluationComponents/SelfStorage";
import Footer from "./layout/Footer";
import Nav from "./layout/Nav";
import TitleBanner from "./layout/TitleBanner";

const Evaluation = () => {
  return (
    <div>
      <Nav overlay={false} />
      <TitleBanner
        title="Get Your Self Storage Evaluated"
        subtitle="Let’s help you determine what your self storage is worth"
      />
      <SelfStorage />
      <EvaluationForm />
      <Footer />
    </div>
  );
};

export default Evaluation;
