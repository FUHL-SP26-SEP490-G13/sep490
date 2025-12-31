import { Layout, Button, Grid, Typography } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useState } from "react";
import StaffSidebar from "../sidebars/staff.sidebar.jsx";

const { Header, Content } = Layout;
const { Title } = Typography;
const { useBreakpoint } = Grid;

const StaffLayout = ({ children, title }) => {
  const screens = useBreakpoint();
  const isMobile = !screens.md;

  const [collapsed, setCollapsed] = useState(isMobile);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <StaffSidebar
        collapsed={collapsed}
        onCloseMobile={() => setCollapsed(true)}
      />

      <Layout>
        <Header
          style={{
            background: "#fff",
            padding: "0 16px",
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <Button
            type="text"
            icon={<MenuOutlined />}
            onClick={() => setCollapsed(!collapsed)}
          />

          {/* Title động */}
          <Title level={4} style={{ margin: 0 }}>
            {title}
          </Title>
        </Header>

        <Content
          style={{
            margin: 16,
            padding: 24,
            background: "#fff",
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default StaffLayout;
