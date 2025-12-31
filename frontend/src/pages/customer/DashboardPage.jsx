import { useEffect, useState } from "react";
import CustomerLayout from "../../components/layout/customer.layout";

const CustomerDashboard = () => {
    const [message, setMessage] = useState("");
      const [success, setSuccess] = useState("");
      const [error, setError] = useState("");
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
    </CustomerLayout>
  );
};

export default CustomerDashboard;
