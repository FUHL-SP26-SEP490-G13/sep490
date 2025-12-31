import { Layout, Row, Col, Typography, Space } from "antd";
import {
  FacebookOutlined,
  InstagramOutlined,
  YoutubeOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";

const { Footer } = Layout;
const { Title, Text, Link } = Typography;

const CustomerFooter = () => {
  return (
    <Footer style={{ background: "#001529", color: "#fff", padding: "48px 24px" }}>
      <Row gutter={[32, 32]}>
        {/* Brand */}
        <Col xs={24} md={8}>
          <Title level={4} style={{ color: "#fff", marginBottom: 16 }}>
            MyShop
          </Title>
          <Text style={{ color: "#ccc" }}>
            Nền tảng mua sắm trực tuyến cung cấp các sản phẩm chất lượng,
            giá cả hợp lý và dịch vụ uy tín.
          </Text>
        </Col>

        {/* Links */}
        <Col xs={24} md={8}>
          <Title level={5} style={{ color: "#fff" }}>
            Quick Links
          </Title>
          <Space direction="vertical">
            <Link href="/" style={{ color: "#ccc" }}>Home</Link>
            <Link href="/products" style={{ color: "#ccc" }}>Products</Link>
            <Link href="/about" style={{ color: "#ccc" }}>About Us</Link>
            <Link href="/contact" style={{ color: "#ccc" }}>Contact</Link>
          </Space>
        </Col>

        {/* Contact */}
        <Col xs={24} md={8}>
          <Title level={5} style={{ color: "#fff" }}>
            Contact
          </Title>
          <Space direction="vertical" style={{ color: "#ccc" }}>
            <Text style={{ color: "#ccc" }}>
              <PhoneOutlined /> 0123 456 789
            </Text>
            <Text style={{ color: "#ccc" }}>
              <MailOutlined /> support@myshop.com
            </Text>

            <Space size="middle">
              <FacebookOutlined style={{ fontSize: 20 }} />
              <InstagramOutlined style={{ fontSize: 20 }} />
              <YoutubeOutlined style={{ fontSize: 20 }} />
            </Space>
          </Space>
        </Col>
      </Row>

      {/* Bottom */}
      <div
        style={{
          marginTop: 32,
          borderTop: "1px solid rgba(255,255,255,0.15)",
          paddingTop: 16,
          textAlign: "center",
          color: "#aaa",
        }}
      >
        © {new Date().getFullYear()} MyShop. All rights reserved. Created by SEP490
      </div>
    </Footer>
  );
};

export default CustomerFooter;
