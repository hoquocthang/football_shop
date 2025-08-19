import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"


export default function Footer() {
  return (
    <footer id="contact" className="bg-card text-card-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center flex-shrink-0">
                        <Image
                          src="/favicon.ico"   // hoặc /logo.png nếu bạn để file logo trong public/
                          alt="Logo"
                          width={32}
                          height={32}
                          className="mr-2"
                        />
                        <h1 className="text-2xl font-bold text-foreground font-script">
                          CHAMCHAM
                        </h1>
            
                      </div>
            <p className="text-card-foreground/80 mb-6 max-w-md">
              Chuyên thiết kế và sản xuất áo bóng đá tùy chỉnh cho các đội bóng và cá nhân. Chất lượng cao, giá cả hợp
              lý, giao hàng nhanh chóng.
            </p>

            <div className="flex space-x-4">
              <a href="#" className="text-card-foreground/60 hover:text-primary transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-card-foreground/60 hover:text-primary transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-card-foreground mb-4">Liên kết nhanh</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-card-foreground/80 hover:text-primary transition-colors">
                  Trang chủ
                </a>
              </li>
              <li>
                <a href="#collection" className="text-card-foreground/80 hover:text-primary transition-colors">
                  Bộ sưu tập
                </a>
              </li>
              <li>
                <a href="#custom" className="text-card-foreground/80 hover:text-primary transition-colors">
                  Thiết kế riêng
                </a>
              </li>
              <li>
                <a href="#" className="text-card-foreground/80 hover:text-primary transition-colors">
                  Chính sách đổi trả
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-card-foreground mb-4">Liên hệ</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-card-foreground/80">0123 456 789</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-card-foreground/80">info@jerseyvn.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-card-foreground/80">Hà Nội, Việt Nam</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-card-foreground/20 mt-8 pt-8 text-center">
          <p className="text-card-foreground/60">© 2024 JerseyVN. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  )
}
