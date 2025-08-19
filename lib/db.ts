import { Pool } from "pg";
import dotenv from "dotenv";

// Nạp biến môi trường từ .env
dotenv.config();

// Cấu hình kết nối PostgreSQL với Supabase
const pool = new Pool({
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT), // Chuyển về dạng số
  database: process.env.DATABASE_NAME,
  user: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  ssl: { rejectUnauthorized: false }, // Bắt buộc khi dùng Supabase
});

// Hàm chạy truy vấn SQL
export const query = async (text: string, params?: any[]) => {
  const client = await pool.connect();
  try {
    const result = await client.query(text, params);
    return result.rows;
  } catch (error) {
    console.error("❌ Lỗi truy vấn database:", error);
    throw error;
  } finally {
    client.release();
  }
};

export default pool;
