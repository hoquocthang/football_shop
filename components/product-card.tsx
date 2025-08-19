import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ShoppingCart } from "lucide-react"

interface ProductCardProps {
  name: string
  price: string
  image: string
  originalPrice?: string
}

export default function ProductCard({ name, price, image, originalPrice }: ProductCardProps) {
  return (
    <Card className="bg-card border-border hover:shadow-lg transition-all duration-300 group overflow-hidden">
      <div className="relative overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />

      </div>

      <CardContent className="p-4">
        <h3 className="font-semibold text-card-foreground mb-2 truncate">
          {name}
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-primary">{price}</span>
          {originalPrice && <span className="text-sm text-muted-foreground line-through">{originalPrice}</span>}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
          <ShoppingCart className="mr-2 h-4 w-4" />
          Thêm vào giỏ
        </Button>
      </CardFooter>
    </Card>
  )
}
