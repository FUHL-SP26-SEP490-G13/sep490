import {
  Layout,
  Menu,
  Button,
  Drawer,
  Grid,
  Input,
  Badge,
  Avatar,
} from "antd";
import {
  MenuOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const { Header } = Layout;
const { useBreakpoint } = Grid;
const { Search } = Input;

const menuItems = [
  { key: "/", label: "Home" },
  { key: "/products", label: "Products" },
  { key: "/about", label: "About" },
  { key: "/contact", label: "Contact" },
];

const CustomerHeader = () => {
  const screens = useBreakpoint();
  const isMobile = !screens.md;
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const menu = (
    <Menu
      mode={isMobile ? "vertical" : "horizontal"}
      items={menuItems}
      onClick={({ key }) => {
        navigate(key);
        setOpen(false);
      }}
      style={{ border: "none" }}
    />
  );

  return (
    <>
      <Header
        style={{
          background: "#fff",
          padding: "0 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "sticky",
          top: 0,
          zIndex: 100,
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        }}
      >
        {/* Left */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          {isMobile && (
            <Button
              type="text"
              icon={<MenuOutlined />}
              onClick={() => setOpen(true)}
            />
          )}

          <div
            style={{ fontSize: 20, fontWeight: 700, cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            MyShop
          </div>
        </div>

        {/* Center */}
        {!isMobile && (
          <div style={{ flex: 1, padding: "0 32px" }}>
            <Search placeholder="Search products..." allowClear />
          </div>
        )}

        {/* Right */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          {!isMobile && menu}

          <Badge count={2}>
            <ShoppingCartOutlined
              style={{ fontSize: 20, cursor: "pointer" }}
              onClick={() => navigate("/cart")}
            />
          </Badge>

          <Avatar icon={<UserOutlined />} />
        </div>
      </Header>

      {/* Mobile Drawer */}
      <Drawer
        title="Menu"
        placement="left"
        open={open}
        onClose={() => setOpen(false)}
      >
        <Search placeholder="Search..." style={{ marginBottom: 16 }} />
        {menu}
      </Drawer>
    </>
  );
};

export default CustomerHeader;
