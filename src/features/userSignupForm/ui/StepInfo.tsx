"use client";

type StepIndicatorProps = {
  currentStep: number;
};

const comments = ["간단한 기본 정보를 입력해주세요", "상세 정보를 입력해주세요", "원하시는 운동 정보를 입력해 주세요"];

export const StepInfo = ({ currentStep }: StepIndicatorProps) => {
  return (
    <>
      <div className="text-[30px] font-semibold text-blue-500">STEP {currentStep}</div>

      <p className="text-xs text-gray-500">{comments[currentStep - 1]} :)</p>
    </>
  );
};

export default StepInfo;
