import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-shadow duration-300 border-pink-100">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <Badge className="absolute top-4 left-4 bg-white/90 text-primary border-primary">
            {product.category}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <CardTitle className="font-comfortaa text-xl mb-2">
          {product.name}
        </CardTitle>
        <CardDescription className="font-nunito text-gray-600 mb-4">
          {product.description}
        </CardDescription>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-comfortaa font-bold text-primary">
            {product.price.toLocaleString()} ₽
          </span>
          <Button
            onClick={() => onAddToCart(product)}
            className="bg-primary hover:bg-primary/90 text-white font-nunito rounded-full px-6"
          >
            <Icon name="Plus" className="mr-2" size={16} />В корзину
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
