import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ConfigProvider } from "antd";

// Pages
import DashboardPage from "./pages/admin/DashboardPage";
import ManageUserPage from "./pages/admin/ManageUserPage";

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
          <Route path="/" element={<DashboardPage />} />
          <Route path="/users" element={<ManageUserPage />} />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
