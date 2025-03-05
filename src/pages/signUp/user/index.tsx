import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { signUpFormSchema } from "@/entities";
import { IMemberFormData, UserFormKey } from "@/shared";
import { UserSignUpStep1, UserSignUpStep2, UserSignUpStep3 } from "@/widgets";

import MemberSignUpLayout from "../layout";

const UserSignUpPage = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(prev => prev + 1);

  const schema = signUpFormSchema();

  const formMethods = useForm<IMemberFormData>({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      [UserFormKey.NICKNAME]: "",
      [UserFormKey.CELLPHONE]: "",
      [UserFormKey.SEX]: "male",
      [UserFormKey.AGE]: "",
      [UserFormKey.CITY]: "",
      [UserFormKey.DISTRICT]: "",
      [UserFormKey.GOALS]: [],
      [UserFormKey.CATEGORY]: [],
    },
    resolver: yupResolver(schema),
  });

  return (
    <MemberSignUpLayout currentStep={step}>
      <FormProvider {...formMethods}>
        {step === 1 && <UserSignUpStep1 next={nextStep} />}
        {step === 2 && <UserSignUpStep2 next={nextStep} />}
        {step === 3 && <UserSignUpStep3 />}
      </FormProvider>
    </MemberSignUpLayout>
  );
};

export default UserSignUpPage;
