import "antd/dist/antd.css";
import "../styles/vars.css";
import "../styles/global.css";

import Link from "next/link";
import { Layout, Menu } from "antd";
import {
  HomeOutlined,
  PhoneOutlined,
  QuestionCircleOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { QueryClient, QueryClientProvider } from "react-query";

const { Content, Sider } = Layout;

const queryClient = new QueryClient();

export default function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout style={{ height: "100%" }}>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            // console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            // console.log(collapsed, type);
          }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
            <Menu.Item key="1" icon={<PhoneOutlined />}>
              <Link href="/phones">Phones</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<QuestionCircleOutlined />}>
              <Link href="/discovered">Discovered</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<HomeOutlined />}>
              <Link href="/rooms">Rooms</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<SettingOutlined />}>
              <Link href="/settings">Settings</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              <Component {...pageProps} />
            </div>
          </Content>
        </Layout>
      </Layout>
    </QueryClientProvider>
  );
}
