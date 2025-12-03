import { PropsWithChildren } from "react";

const SignUpTitle = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col h-full flex-auto">
      <h2 className="text-2xl font-bold leading-tight">
        <span>가장 쉬운</span>
        <br />
        <span className="text-blue-500">트레이닝</span> 시작해볼까요?
      </h2>

      <div className="flex-1 flex flex-col">{children}</div>
    </div>
  );
};

export default SignUpTitle;
