// layouts/CustomerLayout.jsx
import { Layout } from "antd";
import CustomerHeader from "../headfoot/header";
import CustomerFooter from "../headfoot/footer";

const { Content, Footer } = Layout;

const CustomerLayout = ({ children }) => {
  return (
    <Layout>
      <CustomerHeader />

      <Content
        style={{
          minHeight: "calc(100vh - 64px)",
          padding: "24px 16px",
        }}
      >
        {children}
      </Content>

      <CustomerFooter />
    </Layout>
  );
};

export default CustomerLayout;
