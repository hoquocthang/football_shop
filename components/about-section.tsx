import { Card, CardContent } from "@/components/ui/card"
import { Award, Shield, Heart } from "lucide-react"

const values = [
  {
    icon: Award,
    title: "Chất lượng hàng đầu",
    description: "Cam kết sử dụng vải cao cấp và công nghệ in ấn hiện đại nhất",
  },
  {
    icon: Shield,
    title: "Uy tín & Tin cậy",
    description: "Hơn 5 năm kinh nghiệm phục vụ các đội bóng chuyên nghiệp",
  },
  {
    icon: Heart,
    title: "Đam mê bóng đá",
    description: "Được tạo ra bởi những người yêu bóng đá, vì cộng đồng bóng đá",
  },
]

export default function AboutSection() {
  return (
    <section className="py-16 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative">
            <img
              src="https://res.cloudinary.com/dmcqu0oz3/image/upload/v1755589360/t%E1%BA%A1o_cho_t%C3%B4i_m%E1%BB%99t_h%C3%ACnh_%E1%BA%A3nh_v%E1%BB%81_shop_b%C3%A1n_qu%E1%BA%A7n_%C3%A1o_%C4%91%C3%A1_b%C3%B3ng_c%C3%B3_lo_go_Ch%C3%A2mCh%C3%A2m_Shop_v%E1%BB%9Bi_4_ti%C3%AAu_ch%C3%AD___Thi%E1%BA%BFt_k%E1%BA%BF_t%E1%BB%B1_do_Cho_%C4%91%E1%BB%99i_b%C3%B3ng_Ch%E1%BA%A5t_l%C6%B0%E1%BB%A3ng_cao_Giao_h%C3%A0ng_nhanh_ph%E1%BA%A3i_th%E1%BB%83_hi%E1%BB%87n_l%C3%AAn_%E1%BA%A3nh_1_fg3dkn.jpg"
              alt="Về chúng tôi"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-6">Về Mei Sports</h2>

            <p className="text-lg text-secondary-foreground/90 mb-8">
              Mei Sports được sinh ra từ tình yêu bóng đá và mong muốn mang đến cho cộng đồng những sản phẩm áo đấu chất
              lượng cao với thiết kế độc đáo. Chúng tôi hiểu rằng mỗi chiếc áo không chỉ là trang phục mà còn là biểu
              tượng của tinh thần đội nhóm.
            </p>

            <div className="space-y-6">
              {values.map((value, index) => (
                <Card key={index} className="bg-secondary-foreground/5 border-secondary-foreground/20">
                  <CardContent className="p-4 flex items-start gap-4">
                    <value.icon className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-secondary-foreground mb-2">{value.title}</h3>
                      <p className="text-secondary-foreground/80">{value.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
