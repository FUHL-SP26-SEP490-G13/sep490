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
  { key: "/", icon: <DashboardOutlined />, label: "Dashboard", selectedKeys: [location.pathname] },
  { key: "/users", icon: <UserOutlined />, label: "Users", selectedKeys: [location.pathname] },
  { key: "/settings", icon: <SettingOutlined />, label: "Settings", selectedKeys: [location.pathname] },
];

const AppSidebar = ({ collapsed, onCloseMobile }) => {
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
      style={{ borderRight: 0 }}
      onClick={({ key }) => {
        navigate(key);
        if (isMobile) onCloseMobile?.();
      }}
    />
  );

  /* ===== Mobile: Drawer ===== */
  if (isMobile) {
    return (
      <Drawer
        placement="left"
        open={!collapsed}
        closable={false}
        width={240}
        bodyStyle={{ padding: 0 }}
        onClose={onCloseMobile}
      >
        {/* Header Drawer */}
        <div
          style={{
            height: 64,
            display: "flex",
            alignItems: "center",
            padding: "0 16px",
            fontWeight: 600,
            fontSize: 18,
            background: "#001529",
            color: "#fff",
          }}
        >
          My App
        </div>

        {menu}
      </Drawer>
    );
  }

  /* ===== Desktop / Tablet: Sider ===== */
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      width={240}
      trigger={null}
    >
      {/* Logo / Brand */}
      <div
        style={{
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: collapsed ? "center" : "flex-start",
          paddingLeft: collapsed ? 0 : 16,
          fontWeight: 600,
          fontSize: 18,
          color: "#fff",
          transition: "all 0.2s",
        }}
      >
        {collapsed ? "A" : "My App"}
      </div>

      {menu}
    </Sider>
  );
};

export default AppSidebar;
