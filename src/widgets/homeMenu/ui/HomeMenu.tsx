import { CommentOutlined, HomeOutlined, SettingOutlined, UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { usePathname, useRouter } from "next/navigation";
import { useMemo } from "react";
type MenuItem = Required<MenuProps>["items"][number];

export const HomeMenu = () => {
  const pathname = usePathname(); // 현재 경로 가져오기
  const router = useRouter();

  const selectedKey = useMemo(() => {
    if (!pathname) return "home";

    if (/^\/chat(\/|$)/.test(pathname)) return "chat";
    if (/^\/board(\/|$)/.test(pathname)) return "board";
    if (/^\/signup(\/|$)/.test(pathname)) return "mypage";
    return pathname;
  }, [pathname]);

  const handleMenuClick = (e: { key: string }) => {
    router.push(e.key); // 선택한 메뉴의 경로로 이동
  };

  const items: MenuItem[] = [
    {
      label: "Home",
      key: "/",
      icon: <HomeOutlined />,
    },
    {
      label: "Chat",
      key: "app",
      icon: <CommentOutlined />,
      disabled: true,
    },
    {
      label: "Board",
      key: "board",
      icon: <SettingOutlined />,
    },
    {
      label: "My Page",
      key: "mypage",
      icon: <UserOutlined />,
    },
  ];

  return (
    <>
      <Menu
        style={{ width: "100%", display: "flex", justifyContent: "space-evenly" }}
        onClick={handleMenuClick}
        selectedKeys={[selectedKey]}
        mode="horizontal"
        items={items}
      />
    </>
  );
};

export default HomeMenu;
