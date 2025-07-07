import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Product } from "./ProductCard";

interface CartProps {
  cart: Product[];
  onRemoveFromCart: (productId: number) => void;
  onGoToCatalog: () => void;
}

const Cart = ({ cart, onRemoveFromCart, onGoToCatalog }: CartProps) => {
  const getTotalPrice = () => {
    return cart.reduce((sum, item) => sum + item.price, 0);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h3 className="text-4xl font-comfortaa font-bold text-center mb-12 text-gray-800">
          Корзина
        </h3>
        {cart.length === 0 ? (
          <div className="text-center py-16">
            <Icon
              name="ShoppingBag"
              className="mx-auto mb-4 text-gray-400"
              size={64}
            />
            <p className="text-xl font-nunito text-gray-600 mb-8">
              Ваша корзина пуста
            </p>
            <Button
              onClick={onGoToCatalog}
              className="bg-primary hover:bg-primary/90 text-white font-nunito rounded-full px-8 py-3"
            >
              Перейти к покупкам
            </Button>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto">
            <div className="space-y-4 mb-8">
              {cart.map((item, index) => (
                <Card key={`${item.id}-${index}`} className="border-pink-100">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h4 className="font-comfortaa font-semibold text-lg">
                          {item.name}
                        </h4>
                        <p className="font-nunito text-gray-600">
                          {item.description}
                        </p>
                        <p className="font-comfortaa font-bold text-primary mt-2">
                          {item.price.toLocaleString()} ₽
                        </p>
                      </div>
                      <Button
                        onClick={() => onRemoveFromCart(item.id)}
                        variant="outline"
                        size="sm"
                        className="text-red-500 hover:text-red-700 border-red-200 hover:border-red-300"
                      >
                        <Icon name="Trash2" size={16} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xl font-comfortaa font-semibold">
                    Итого:
                  </span>
                  <span className="text-2xl font-comfortaa font-bold text-primary">
                    {getTotalPrice().toLocaleString()} ₽
                  </span>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white font-nunito rounded-full py-3">
                  Оформить заказ
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
