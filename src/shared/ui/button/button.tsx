"use client";

import { Button as AntdButton } from "antd";

type ButtonProps = React.ComponentProps<typeof AntdButton>;

export function Button(props: ButtonProps) {
  return <AntdButton {...props} />;
}
