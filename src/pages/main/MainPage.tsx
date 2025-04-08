"use client";
import { blue } from "@ant-design/colors";
import { Flex, Typography } from "antd";
import { useState } from "react";

import { TrainerProfileType } from "@/entities/trainer";

import { TrainerProfile } from "./ui";

export const Main = () => {
  const [TestList, setTestList] = useState<TrainerProfileType[]>([
    {
      images: [
        {
          uid: "-1",
          name: "image.png",
          status: "done",
          url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
        },
        {
          uid: "-2",
          name: "image.png",
          status: "done",
          url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
        },
      ],
      name: "황재민",
      profile: "매우 반복적인 식단, 지겨우셨죠?",
      category: "PT",
      cost: "15,000",
    },
    {
      images: [
        {
          uid: "-1",
          name: "image.png",
          status: "done",
          url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
        },
        {
          uid: "-2",
          name: "image.png",
          status: "done",
          url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
        },
      ],
      name: "황세민",
      profile: "매우 반복적인 식단, 그게 답이다",
      category: "PT",
      cost: "25,000",
    },
  ]);

  return (
    <>
      <Flex vertical style={{ height: "100%", flex: "auto" }}>
        <Typography.Title level={2}>
          <Typography.Text strong style={{ color: blue[5], fontSize: "30px" }}>
            손흥민
          </Typography.Text>
          님 <br />
          반갑습니다.
        </Typography.Title>

        {TestList.map((list, index) => (
          <TrainerProfile
            key={index}
            images={list.images}
            name={list.name}
            profile={list.profile}
            category={list.category}
            cost={list.cost}
          />
        ))}
      </Flex>
    </>
  );
};

export default Main;
