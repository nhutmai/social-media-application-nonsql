# Social Media Server

## Mô tả

Dự án này là một server cho một ứng dụng mạng xã hội, được xây dựng bằng Node.js và Express. Nó cung cấp các API để quản
lý bài viết.

## Cài đặt

1. Clone repository này về máy của bạn:
   ```bash
   git clone https://github.com/yourusername/social-media-server.git
   ```

2. Di chuyển vào thư mục dự án:
   ```bash
   cd social-media-server
   ```

3. Cài đặt các phụ thuộc:
   ```bash
   npm install
   ```

## Chạy ứng dụng

Để khởi động server, bạn có thể sử dụng lệnh sau:

```bash
npm start
```

Server sẽ chạy trên `http://localhost:3000` (hoặc cổng mà bạn đã cấu hình trong file `index.js`).

## API

### Bài viết

- **Lấy tất cả bài viết**
    - `GET /posts`
    - Trả về danh sách tất cả các bài viết.

- **Tạo bài viết mới**
    - `POST /posts`
    - Tạo một bài viết mới.

- **Cập nhật bài viết**
    - `PUT /posts/:id`
    - Cập nhật bài viết theo ID.

- **Xóa bài viết**
    - `DELETE /posts/:id`
    - Xóa bài viết theo ID.

### Người dùng

- **Lấy tất cả người dùng**
    - `GET /users`
    - Trả về danh sách tất cả người dùng.

- **Tạo người dùng mới**
    - `POST /users`
    - Tạo một người dùng mới.

- **Cập nhật thông tin người dùng**
    - `PUT /users/:id`
    - Cập nhật thông tin người dùng theo ID.

- **Xóa người dùng**
    - `DELETE /users/:id`
    - Xóa người dùng theo ID.

## Tài liệu API

Tài liệu API được tạo ra bằng Swagger. Bạn có thể truy cập tài liệu tại `http://localhost:3000/api-docs` sau khi khởi
động server.

