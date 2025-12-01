import { Button, Form, Input, Typography } from "antd";
import { Controller, useFormContext } from "react-hook-form";

import { checkAllDirty, checkAllErrors } from "@/features";
import { IMemberFormData, UserFormKey } from "@/shared";

type UserSignUpStep1Props = {
  next: () => void;
};

const UserSignUpStep1 = ({ next }: UserSignUpStep1Props) => {
  const {
    control,
    formState: { errors, dirtyFields },
    trigger,
  } = useFormContext<IMemberFormData>();
  const keysToCheckStep1 = [UserFormKey.NICKNAME, UserFormKey.CELLPHONE];
  return (
    <>
      <Controller
        name={UserFormKey.NICKNAME}
        control={control}
        render={({ field, fieldState }) => (
          <>
            <Form.Item
              style={{ width: "100%" }}
              validateStatus={fieldState.error && "error"}
              help={fieldState.error?.message || ""}
            >
              <Typography>닉네임</Typography>
              <Input {...field} placeholder="특수 문자 제외(2~5글자)" status={fieldState.error && "error"} />
            </Form.Item>
          </>
        )}
      />
      <Controller
        name={UserFormKey.CELLPHONE}
        control={control}
        render={({ field, fieldState }) => {
          return (
            <Form.Item validateStatus={fieldState.error && "error"} help={fieldState.error?.message || ""}>
              <Typography>핸드폰 번호</Typography>
              <Input {...field} placeholder="핸드폰 번호 입력" status={fieldState.error && "error"} />
            </Form.Item>
          );
        }}
      ></Controller>
      <Form.Item>
        <Button
          style={{ width: "100%" }}
          type="primary"
          size="large"
          onClick={() => {
            if (!checkAllErrors(errors, keysToCheckStep1) && checkAllDirty(dirtyFields, keysToCheckStep1)) {
              next();
              return;
            }
            void trigger(keysToCheckStep1);
          }}
        >
          다음
        </Button>
      </Form.Item>
    </>
  );
};

export default UserSignUpStep1;
