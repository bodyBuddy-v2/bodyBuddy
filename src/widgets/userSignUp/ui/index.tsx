"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { signUpFormSchema } from "@/entities";

import UserSignUpStep1 from "./Step1";

const UserSignUp = () => {
  const schema = signUpFormSchema();

  const [currentStep, setCurrentStep] = useState(1);

  const form = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const nextStep = () => setCurrentStep(currentStep + 1);
  const prevStep = () => setCurrentStep(currentStep - 1);

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <UserSignUpStep1 next={nextStep} />;
      case 2:
        return <></>;
      case 3:
        return <></>;

      default:
        return <></>;
    }
  };

  // return <FormProvider {...form}>{renderStep()}</FormProvider>;
  return <></>;
};

export default UserSignUp;
