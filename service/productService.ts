export interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    created_at: string;
  }
  // lấy toàn bộ dnah sách sản phẩm
  export const getProducts = async (): Promise<Product[]> => {
    try {
      const response = await fetch("/api/product");
      if (!response.ok) throw new Error("Lỗi khi gọi API sản phẩm");
      
      return await response.json();
    } catch (error) {
      console.error("Lỗi khi lấy sản phẩm:", error);
      throw error;
    }
  };