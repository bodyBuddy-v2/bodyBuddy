import { UserOutlined } from "@ant-design/icons";
import Image from "next/image";

import { Button } from "@/shared/ui";

const TopBar = () => {
  return (
    <div className="mb-2 flex justify-between items-center">
      <Image src="/logo.png" alt="Logo" width="120" height="20" />
      <Button icon={<UserOutlined />} />
    </div>
  );
};

export default TopBar;
