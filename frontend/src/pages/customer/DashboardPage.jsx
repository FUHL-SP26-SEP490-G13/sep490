import { useEffect, useState } from "react";
import CustomerLayout from "../../components/layout/customer.layout";
import { Card, Typography, Button, Space } from "antd";
import RichTextEditor from "../../components/RichTextEditor/RichTextEditor";

const { Title } = Typography;

const CustomerDashboard = () => {
    const [message, setMessage] = useState("");
      const [success, setSuccess] = useState("");
      const [error, setError] = useState("");
      const [content, setContent] = useState("");

      const handleSave = () => {
    console.log("Nội dung đã nhập:", content);
  };
  
      useEffect(() => {
        fetch("http://localhost:5000")
          .then((res) => {
            if (!res.ok) {
              throw new Error("Failed to fetch API");
            }
            return res.json();
          })
          .then((data) => {
            setMessage(data.message);
            setSuccess(data.success);
          })
          .catch((err) => {
            setError(err.message);
          });
      }, []);
  return (
    <CustomerLayout title="Dashboard">
      {/* Hiển thị message từ API */}
      <div className="card" style={{ marginTop: "16px", textAlign: "center" }}>
        <h3>API Response</h3>
        {error ? (
          <p style={{ color: "red" }}>{error}</p>
        ) : (
          <>
            <p>
              <strong>API message:</strong> <code>{message}</code>
            </p>
            {success && (
              <p
                style={{
                  color: "lightgreen",
                  background: "black",
                  textAlign: "center",
                  maxWidth: "50%",
                  marginTop: "8px",
                }}
              >
                <code>{success}</code>
              </p>
            )}

            
          </>
        )}
      </div>
      <Space direction="vertical" style={{ width: "100%", padding: 20 }}>
      {/* Khung soạn thảo */}
      <Card
        bordered={true}
        style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}
      >
        <Title level={3} style={{ marginBottom: 20 }}>
          ✏️ Rich Text Editor
        </Title>
        <RichTextEditor value={content} onChange={setContent} />
        <Button type="primary" style={{ marginTop: 20 }} onClick={handleSave}>
          Lưu nội dung
        </Button>
      </Card>

      {/* Khung xem trước */}
      <Card
        bordered={true}
        style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}
      >
        <Title level={4}>📄 Preview</Title>
        <div
          style={{ minHeight: 100 }}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </Card>
    </Space>
    </CustomerLayout>
  );
};

export default CustomerDashboard;
