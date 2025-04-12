import { blue } from "@ant-design/colors";
import { Flex, Typography } from "antd";
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
    <Flex vertical style={{ height: "100%", flex: "auto" }}>
      <Typography.Title level={2}>
        <span>가장 쉬운</span>
        <br></br>
        <span style={{ color: blue[5] }}>트레이닝</span> 시작해볼까요?
      </Typography.Title>
      <Typography.Text strong style={{ color: blue[5], fontSize: "30px" }}>
        STEP {currentStep}
      </Typography.Text>
      <Typography.Text
        style={{ fontSize: "12px", color: "#7D7D7D" }}
      >{`${comments[currentStep - 1]} :)`}</Typography.Text>
      <Flex vertical style={{ height: "100%" }}>
        {children}
      </Flex>
    </Flex>
  );
};

export default SignUpTitle;
