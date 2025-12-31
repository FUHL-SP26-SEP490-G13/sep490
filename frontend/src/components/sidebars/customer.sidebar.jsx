// components/AppSidebar.jsx
import { Layout, Menu, Drawer, Grid } from "antd";
import {
  DashboardOutlined,
  UserOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";

const { Sider } = Layout;
const { useBreakpoint } = Grid;

const items = [
  { key: "/", icon: <DashboardOutlined />, label: "Dashboard" },
  { key: "/users", icon: <UserOutlined />, label: "Users" },
  { key: "/settings", icon: <SettingOutlined />, label: "Settings" },
];

const CustomerSidebar = ({ collapsed, onCloseMobile }) => {
  const screens = useBreakpoint();
  const isMobile = !screens.md;

  const navigate = useNavigate();
  const location = useLocation();

  const menu = (
    <Menu
      theme="dark"
      mode="inline"
      items={items}
      selectedKeys={[location.pathname]}
      onClick={({ key }) => {
        navigate(key);
        if (isMobile) onCloseMobile();
      }}
    />
  );

  if (isMobile) {
    return (
      <Drawer
        open={!collapsed}
        placement="left"
        closable={false}
        width={240}
        bodyStyle={{ padding: 0 }}
        onClose={onCloseMobile}
      >
        <div
          style={{
            height: 64,
            color: "#fff",
            fontSize: 18,
            fontWeight: 600,
            display: "flex",
            alignItems: "center",
            paddingLeft: 16,
            background: "#001529",
          }}
        >
          My App
        </div>
        {menu}
      </Drawer>
    );
  }

  return (
    <Sider collapsed={collapsed} width={240}>
      <div
        style={{
          height: 64,
          color: "#fff",
          fontWeight: 600,
          display: "flex",
          alignItems: "center",
          justifyContent: collapsed ? "center" : "flex-start",
          paddingLeft: collapsed ? 0 : 16,
        }}
      >
        {collapsed ? "A" : "My App"}
      </div>
      {menu}
    </Sider>
  );
};

export default CustomerSidebar;
