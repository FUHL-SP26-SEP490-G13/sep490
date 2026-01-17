# COFFEE SHOP MANAGEMENT SYSTEM

## I. Giới thiệu

### 1. Thông tin đồ án

- Tên dự án (Tiếng Việt): **HỆ THỐNG QUẢN LÝ QUÁN CÀ PHÊ**
- Tên dự án (Tiếng Anh): **COFFEE SHOP MANAGEMENT SYSTEM**
- Nhóm thực hiện: **SEP490 - Nhóm 13**

### 2. Thành viên nhóm

| MSSV | Họ và tên | Email |
| :--- | :--- | :--- |
|HE170807 |Chu Thế Văn |vancthe170807@fpt.edu.vn |
|HE170689 |Đào Mạnh Hùng |hungdmhe170689@fpt.edu.vn |
|HE171008 |Phan Văn Khải |khaipvhe171008@fpt.edu.vn |
|HE172719 |Nguyễn Tân Tiến |tiennthe172719@fpt.edu.vn |
|HE173048 |Trần Văn Tuấn |tuantvhe173048@fpt.edu.vn |

## II. Công nghệ sử dụng

### 1. Frontend
- **Library:** ReactJS + Vite
- **UI Framework:** Ant Design
- **State Management:** React Hooks (useState, useEffect)

### 2. Backend
- **Runtime:** Node.js
- **Framework:** ExpressJS
- **Database:** SQL Server
- **ORM:** Sequelize
- **Authentication:** JWT (JSON Web Token) & Bcryptjs
- **Real-time:** Socket.io
- **File Storage:** Cloudinary
- **Email Service:** Nodemailer
- **API Documentation:** Swagger

## III. Hướng dẫn cài đặt

### 1. Yêu cầu hệ thống
- Node.js (Khuyến nghị phiên bản LTS mới nhất)
- SQL Server

### 2. Cài đặt và chạy

#### Backend
1. Di chuyển vào thư mục backend: `cd backend`
2. Cài đặt dependencies: `npm install`
3. Cấu hình file `.env` (liên hệ nhóm trưởng để lấy file cấu hình).
4. Chạy server: `npm start`

#### Frontend
1. Di chuyển vào thư mục frontend: `cd frontend`
2. Cài đặt dependencies: `npm install`
3. Chạy ứng dụng: `npm run dev`

## IV. Chức năng chính
- **Dashboard:** Xem thống kê và thông báo từ hệ thống.
- **Quản lý người dùng:** Xem danh sách, thêm, sửa, xóa người dùng (Phân quyền Admin/Staff).
