import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Palette, Users, Trophy, Zap } from "lucide-react"

const features = [
  {
    icon: Palette,
    title: "Thiết kế tự do",
    description: "Tạo ra những mẫu áo độc đáo theo ý tưởng của bạn với đội ngũ designer chuyên nghiệp",
  },
  {
    icon: Users,
    title: "Cho đội bóng",
    description: "Thiết kế đồng phục cho cả đội với logo, tên cầu thủ và số áo theo yêu cầu",
  },
  {
    icon: Trophy,
    title: "Chất lượng cao",
    description: "Sử dụng vải cao cấp, bền đẹp, thấm hút mồ hôi tốt, phù hợp cho thi đấu",
  },
  {
    icon: Zap,
    title: "Giao hàng nhanh",
    description: "Hoàn thành và giao hàng trong 7-10 ngày làm việc trên toàn quốc",
  },
]

export default function CustomDesignSection() {
  return (
    <section id="custom" className="py-16 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Dịch Vụ Thiết Kế
              <span className="block text-primary">Áo Đấu Riêng</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8">
              Biến ý tưởng của bạn thành hiện thực với dịch vụ thiết kế áo bóng đá chuyên nghiệp. Từ cá nhân đến đội
              bóng, chúng tôi tạo ra những sản phẩm độc đáo và chất lượng cao.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <Card key={index} className="bg-background border-border">
                  <CardContent className="p-4">
                    <feature.icon className="h-8 w-8 text-primary mb-3" />
                    <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Bắt đầu thiết kế
            </Button>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img
              src="https://res.cloudinary.com/dmcqu0oz3/image/upload/v1755588926/t%E1%BA%A1o_cho_t%C3%B4i_m%E1%BB%99t_h%C3%ACnh_%E1%BA%A3nh_v%E1%BB%81_shop_b%C3%A1n_qu%E1%BA%A7n_%C3%A1o_%C4%91%C3%A1_b%C3%B3ng_c%C3%B3_lo_go_Ch%C3%A2mCh%C3%A2m_Shop_v%E1%BB%9Bi_4_ti%C3%AAu_ch%C3%AD___Thi%E1%BA%BFt_k%E1%BA%BF_t%E1%BB%B1_do_Cho_%C4%91%E1%BB%99i_b%C3%B3ng_Ch%E1%BA%A5t_l%C6%B0%E1%BB%A3ng_cao_Giao_h%C3%A0ng_nhanh_ph%E1%BA%A3i_th%E1%BB%83_hi%E1%BB%87n_l%C3%AAn_%E1%BA%A3nh_cslog4.jpg"
              alt="Thiết kế áo bóng đá"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
