"use client"
import { useEffect, useState } from "react"
import ProductCard from "./product-card"
import { Button } from "@/components/ui/button"
import { getProducts, Product } from "@/service/productService"
import SkeletonCard from "./skeletonCard"

export default function CollectionSection() {
  const [products, setProducts] = useState<Product[]>([])
  const [visibleCount, setVisibleCount] = useState(8) // số sản phẩm ban đầu
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getProducts()
        setProducts(data)
      } catch (error) {
        console.error("Không thể load sản phẩm:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  // Hàm xử lý khi nhấn "Xem tất cả sản phẩm"
  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4) // mỗi lần thêm 4 sản phẩm
  }

  return (
    <section id="collection" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Bộ Sưu Tập Nổi Bật</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Khám phá những mẫu áo bóng đá hot nhất với chất lượng cao và thiết kế độc đáo
          </p>
        </div>

        {loading ? (
          <SkeletonCard />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {products.slice(0, visibleCount).map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                price={product.price.toLocaleString("vi-VN") + "đ"}
                image={product.image}
              />
            ))}
          </div>
        )}

        {/* Chỉ hiện nút khi còn sản phẩm chưa load hết */}
        {visibleCount < products.length && (
          <div className="text-center">
            <Button
              onClick={handleLoadMore}
              size="lg"
              variant="outline"
              className="border-primary hover:bg-primary hover:text-primary-foreground bg-black text-white"
            >
              Xem thêm sản phẩm
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
