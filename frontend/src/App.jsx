import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ConfigProvider } from "antd";

// Pages
import DashboardPage from "./pages/admin/DashboardPage";
import ManageUserPage from "./pages/admin/ManageUserPage";
import StaffDashboardPage from "./pages/staff/DashboardPage";
import StaffManageUserPage from "./pages/staff/ManageUserPage";
import CustomerDashboard from "./pages/customer/DashboardPage";

const theme = {
  token: {
    fontFamily: `'Inter', system-ui, -apple-system, BlinkMacSystemFont,
                 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif`,
  },
};

function App() {
  return (
    <ConfigProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CustomerDashboard />} />
          <Route path="/admin" element={<DashboardPage />} />
          <Route path="/admin/users" element={<ManageUserPage />} />
          <Route path="/staff" element={<StaffDashboardPage />} />
          <Route path="/staff/users" element={<StaffManageUserPage />} />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
