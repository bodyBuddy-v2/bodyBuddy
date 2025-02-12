import { Form, Input, Typography } from "antd";
import { Controller, useFormContext } from "react-hook-form";

import { UserFormKey } from "@/shared";

type UserSignUpStep1Props = {
  next: () => void;
};

const UserSignUpStep1 = ({ next }: UserSignUpStep1Props) => {
  const { control } = useFormContext();

  return (
    <>
      <Controller
        name={UserFormKey.NICKNAME}
        control={control}
        render={({ field, fieldState }) => {
          const isError = fieldState.error;

          return (
            <Form.Item validateStatus={isError && "error"} help={fieldState.error?.message}>
              <Typography>닉네임</Typography>
              <Input {...field} placeholder="특수 문자 제외(2~5글자)" />
            </Form.Item>
          );
        }}
      />
      <button onClick={next}></button>
    </>
  );
};

export default UserSignUpStep1;
