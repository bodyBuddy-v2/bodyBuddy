import { PropsWithChildren } from "react";

type MemberSingUpLayoutProps = {
  currentStep: number;
} & PropsWithChildren;

const SignUpTitle = ({ children, currentStep }: MemberSingUpLayoutProps) => {
  const comments = [
    "간단한 기본 정보를 입력해주세요",
    "상세 정보를 입력해주세요",
    "원하시는 운동 정보를 입력해 주세요",
  ];

  return (
    <div className="flex flex-col h-full flex-auto">
      {/* 타이틀 */}
      <h2 className="text-2xl font-bold leading-tight">
        <span>가장 쉬운</span>
        <br />
        <span className="text-blue-500">트레이닝</span> 시작해볼까요?
      </h2>

      {/* Step 번호 */}
      <div className="text-[30px] font-semibold text-blue-500">STEP {currentStep}</div>

      {/* 설명문 */}
      <p className="text-xs text-gray-500">{comments[currentStep - 1]} :)</p>

      {/* 아래 Wizard 컨텐츠 들어오는 영역 */}
      <div className="flex-1 flex flex-col">{children}</div>
    </div>
  );
};

export default SignUpTitle;
