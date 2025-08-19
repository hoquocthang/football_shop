import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function HeroBanner() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://res.cloudinary.com/dmcqu0oz3/image/upload/v1755589820/t%E1%BA%A1o_cho_t%C3%B4i_m%E1%BB%99t_h%C3%ACnh_%E1%BA%A3nh_v%E1%BB%81_shop_b%C3%A1n_qu%E1%BA%A7n_%C3%A1o_%C4%91%C3%A1_b%C3%B3ng_v%E1%BB%9Bi_4_ti%C3%AAu_ch%C3%AD___Thi%E1%BA%BFt_k%E1%BA%BF_t%E1%BB%B1_do_Cho_%C4%91%E1%BB%99i_b%C3%B3ng_Ch%E1%BA%A5t_l%C6%B0%E1%BB%A3ng_cao_Giao_h%C3%A0ng_nhanh_2_neg1aa.jpg" // banner Cloudinary
          alt="Banner áo bóng đá"
          fill
          className="object-cover brightness-75" // brightness-75 làm tối để chữ nổi hơn
          priority
        />
      </div>

      {/* Overlay (màu mờ đen để chữ dễ đọc hơn) */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
          Áo Bóng Đá
          <span className="block">Thiết Kế Riêng</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto drop-shadow-md">
          Tạo nên phong cách độc đáo cho đội bóng của bạn với những thiết kế áo đấu chuyên nghiệp và cá tính
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-lg font-semibold shadow-lg"
          >
            Khám phá ngay
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-primary text-white hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg bg-transparent shadow-md"
          >
            Thiết kế riêng
          </Button>
        </div>
      </div>
    </section>
  )
}
