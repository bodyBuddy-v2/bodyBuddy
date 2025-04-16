import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Layout } from "antd";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "바디버디",
  description: "쉬운 1:1 트레닝의 시작",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body style={{ margin: 0 }}>
        <AntdRegistry>
          <Layout
            style={{
              minHeight: "100vh",
              minWidth: "100vw",
              margin: "0 auto",
              background: "#fff",
              padding: "22px",
              display: "grid",
              gridTemplateRows: "1fr auto" /* 상단은 가변, 하단은 고정 */,
              height: "100vh" /* 화면 전체 높이 */,
            }}
          >
            {children}
          </Layout>
        </AntdRegistry>
      </body>
    </html>
  );
}
