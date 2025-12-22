# SEP490 Project - Backend

Đây là mã nguồn Backend cho dự án SEP490, được xây dựng trên nền tảng Node.js và Express.

## Yêu cầu hệ thống

- [Node.js](https://nodejs.org/) (Khuyến nghị phiên bản LTS mới nhất)
- [SQL Server](https://www.microsoft.com/en-us/sql-server) (Cơ sở dữ liệu)

## Hướng dẫn cài đặt

1. **Di chuyển vào thư mục backend:**
   ```bash
   cd backend
   ```

2. **Cài đặt các gói thư viện (dependencies):**
   ```bash
   npm install
   ```

## Cấu hình môi trường (.env)

Hãy liên hệ với thành viên trong nhóm hoặc trưởng nhóm gửi cho bạn file `.env`, và tuyệt đối không được push file `.env` bằng bất kỳ hình thức nào!

## Chạy ứng dụng

Để chạy server ở chế độ phát triển (Development) với tính năng tự động khởi động lại khi sửa code:

```bash
npm start
```
*Lệnh này sẽ chạy `nodemon server.js` như đã định nghĩa trong `package.json`.*

## Danh sách thư viện sử dụng

Dựa trên `package.json`, dưới đây là các thư viện chính và công dụng của chúng trong dự án:

### Core & Server
- **`express`** (^5.1.0): Framework web mạnh mẽ để xây dựng RESTful API.
- **`cors`** (^2.8.5): Middleware xử lý Cross-Origin Resource Sharing, cho phép frontend gọi API.
- **`dotenv`** (^17.2.3): Quản lý biến môi trường từ file `.env`.

### Database (Cơ sở dữ liệu)
- **`sequelize`** (^6.37.1): ORM (Object-Relational Mapper) giúp thao tác với database bằng code JavaScript thay vì SQL thuần.
- **`mssql`** (^11.0.0) & **`tedious`** (^18.5.1): Driver kết nối tới Microsoft SQL Server.

### Authentication (Xác thực & Bảo mật)
- **`jsonwebtoken`** (^9.0.2): Tạo và xác thực token cho chức năng đăng nhập (JWT).
- **`bcryptjs`** (^3.0.2): Mã hóa mật khẩu người dùng trước khi lưu vào database.

### File Upload & Media (Xử lý file)
- **`multer`** (^2.0.2): Middleware xử lý upload file (`multipart/form-data`).
- **`cloudinary`** (^2.8.0): SDK để upload và quản lý hình ảnh/video trên dịch vụ Cloudinary.
- **`streamifier`** (^0.1.1): Chuyển đổi Buffer thành Stream (hữu ích khi upload file từ bộ nhớ lên Cloudinary).

### Real-time & Communication (Thời gian thực & Giao tiếp)
- **`socket.io`** (^4.8.1): Hỗ trợ giao tiếp thời gian thực hai chiều (WebSocket), dùng cho chat hoặc thông báo.
- **`nodemailer`** (^7.0.10): Thư viện gửi email (xác thực tài khoản, quên mật khẩu...).

### Development Tools
- **`nodemon`** (^3.1.11): Công cụ hỗ trợ dev, tự động restart server khi file thay đổi.

### Documentation (Tài liệu API)
- **swagger-ui-express**: Middleware tạo giao diện người dùng (UI) để hiển thị và tương tác với tài liệu API. 
- **swagger-jsdoc**: Giúp viết tài liệu API ngay trong code bằng JSDoc comments và tự động tạo đặc tả OpenAPI.