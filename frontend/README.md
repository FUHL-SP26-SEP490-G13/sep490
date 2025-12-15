# SEP490 Project - Frontend

Đây là mã nguồn Frontend cho dự án SEP490, được xây dựng trên nền tảng React và Vite.

## Yêu cầu hệ thống

- [Node.js](https://nodejs.org/) (Khuyến nghị phiên bản LTS mới nhất)

## Hướng dẫn cài đặt

1. **Di chuyển vào thư mục frontend:**
   ```bash
   cd frontend
   ```

2. **Cài đặt các gói thư viện (dependencies):**
   ```bash
   npm install
   ```

## Cấu hình môi trường (.env)

Tạo một file có tên `.env` tại thư mục gốc của `frontend` để cấu hình các biến môi trường. Lưu ý với Vite, các biến môi trường cần bắt đầu bằng `VITE_`.

Ví dụ mẫu:

```env
# Đường dẫn API Backend
VITE_API_URL=http://localhost:5000/api

# Cấu hình Socket.io (nếu cần tách biệt)
VITE_SOCKET_URL=http://localhost:5000
```

## Chạy ứng dụng

Để chạy ứng dụng ở chế độ phát triển (Development):

```bash
npm run dev
```
*Ứng dụng sẽ chạy tại địa chỉ thường là `http://localhost:5173`.*

## Danh sách thư viện sử dụng

Dựa trên `package.json`, dưới đây là các thư viện chính và công dụng của chúng trong dự án:

### Core & Build Tool
- **`react`** (^19.2.0) & **`react-dom`**: Thư viện cốt lõi để xây dựng giao diện người dùng.
- **`vite`** (^7.2.4): Công cụ build frontend cực nhanh, thay thế cho Webpack.

### UI Components & Styling (Giao diện)
- **`antd`** (^6.0.0): Ant Design - Thư viện UI Component phổ biến, cung cấp các component dựng sẵn đẹp mắt.
- **`react-icons`** (^5.5.0): Bộ sưu tập icon đa dạng cho React.
- **`framer-motion`** (^12.23.25): Thư viện tạo hiệu ứng chuyển động (animation) mượt mà.
- **`clsx`** (^2.1.1): Tiện ích nhỏ gọn để xử lý class name động có điều kiện.

### State Management & API (Quản lý trạng thái & Kết nối)
- **`zustand`** (^5.0.9): Thư viện quản lý state toàn cục (Global State Management) nhẹ và đơn giản hơn Redux.
- **`axios`** (^1.13.2): Thư viện HTTP Client để gọi API tới Backend.
- **`socket.io-client`** (^4.8.1): Client để kết nối WebSocket với Backend (chat, thông báo realtime).

### Routing & Utilities (Điều hướng & Tiện ích)
- **`react-router-dom`** (^7.9.6): Quản lý điều hướng (routing) giữa các trang trong ứng dụng SPA.
- **`dayjs`** (^1.11.19): Thư viện xử lý ngày tháng nhẹ (thay thế cho Moment.js).
