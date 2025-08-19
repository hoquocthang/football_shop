import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function GET() {
  try {
    const result = await pool.query("SELECT * FROM product");
    return NextResponse.json(result.rows);
  } catch (error) {
    console.error("Lỗi lấy sản phẩm:", error);
    return NextResponse.json({ error: "Lỗi server" }, { status: 500 });
  }
}
