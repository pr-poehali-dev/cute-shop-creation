import { useState } from "react";
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

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

const Index = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const [activeSection, setActiveSection] = useState("home");

  const products: Product[] = [
    {
      id: 1,
      name: "Уютный розовый свитер",
      price: 4500,
      image: "/img/552fad00-7462-4e57-92e9-1e4b5a1acae3.jpg",
      category: "Свитеры",
      description: "Стильный oversized свитер из мягкой пряжи",
    },
    {
      id: 2,
      name: "Бежевый кардиган",
      price: 5200,
      image: "/img/5b5c0b47-0a35-4819-a563-65d41459fdbb.jpg",
      category: "Кардиганы",
      description: "Элегантный кардиган в минималистичном стиле",
    },
    {
      id: 3,
      name: "Серое вязаное платье",
      price: 6800,
      image: "/img/160b29a4-13d8-4d65-b578-1d0d1ce4ef94.jpg",
      category: "Платья",
      description: "Комфортное midi платье для повседневной носки",
    },
  ];

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId: number) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const getTotalPrice = () => {
    return cart.reduce((sum, item) => sum + item.price, 0);
  };

  const renderNavigation = () => (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-pink-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Heart" className="text-primary" size={24} />
            <h1 className="text-2xl font-comfortaa font-semibold text-primary">
              КнитСтор
            </h1>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => setActiveSection("home")}
              className={`font-nunito transition-colors ${
                activeSection === "home"
                  ? "text-primary"
                  : "text-gray-600 hover:text-primary"
              }`}
            >
              Главная
            </button>
            <button
              onClick={() => setActiveSection("catalog")}
              className={`font-nunito transition-colors ${
                activeSection === "catalog"
                  ? "text-primary"
                  : "text-gray-600 hover:text-primary"
              }`}
            >
              Каталог
            </button>
            <button
              onClick={() => setActiveSection("contacts")}
              className={`font-nunito transition-colors ${
                activeSection === "contacts"
                  ? "text-primary"
                  : "text-gray-600 hover:text-primary"
              }`}
            >
              Контакты
            </button>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setActiveSection("cart")}
              className="relative p-2 text-gray-600 hover:text-primary transition-colors"
            >
              <Icon name="ShoppingBag" size={24} />
              {cart.length > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs">
                  {cart.length}
                </Badge>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );

  const renderHero = () => (
    <section className="pt-20 pb-16 bg-gradient-to-br from-pink-50 to-rose-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-comfortaa font-bold text-gray-800 mb-6">
            Трендовая вязаная одежда
          </h2>
          <p className="text-xl font-nunito text-gray-600 mb-8">
            Уютные и стильные вязаные изделия для современных девушек.
            Качественная пряжа, актуальные модели, доступные цены.
          </p>
          <Button
            onClick={() => setActiveSection("catalog")}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-nunito rounded-full"
          >
            Посмотреть коллекцию
            <Icon name="ArrowRight" className="ml-2" size={20} />
          </Button>
        </div>
      </div>
    </section>
  );

  const renderCatalog = () => (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h3 className="text-4xl font-comfortaa font-bold text-center mb-12 text-gray-800">
          Наша коллекция
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group hover:shadow-lg transition-shadow duration-300 border-pink-100"
            >
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
                    onClick={() => addToCart(product)}
                    className="bg-primary hover:bg-primary/90 text-white font-nunito rounded-full px-6"
                  >
                    <Icon name="Plus" className="mr-2" size={16} />В корзину
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );

  const renderCart = () => (
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
              onClick={() => setActiveSection("catalog")}
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
                        onClick={() => removeFromCart(item.id)}
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

  const renderContacts = () => (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h3 className="text-4xl font-comfortaa font-bold text-center mb-12 text-gray-800">
          Контакты
        </h3>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-pink-100">
              <CardHeader>
                <CardTitle className="font-comfortaa text-xl flex items-center gap-2">
                  <Icon name="MapPin" className="text-primary" size={24} />
                  Наш магазин
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-nunito text-gray-600 mb-4">
                  г. Москва, ул. Тверская, д. 15
                  <br />
                  ТЦ "Модный квартал", 2 этаж
                </p>
                <p className="font-nunito text-gray-600">
                  Время работы: 10:00 - 21:00
                </p>
              </CardContent>
            </Card>

            <Card className="border-pink-100">
              <CardHeader>
                <CardTitle className="font-comfortaa text-xl flex items-center gap-2">
                  <Icon name="Phone" className="text-primary" size={24} />
                  Связаться с нами
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-nunito text-gray-600 mb-2">
                  Телефон: +7 (495) 123-45-67
                </p>
                <p className="font-nunito text-gray-600 mb-2">
                  Email: info@knitstore.ru
                </p>
                <p className="font-nunito text-gray-600">
                  Telegram: @knitstore
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-white">
      {renderNavigation()}

      {activeSection === "home" && (
        <>
          {renderHero()}
          {renderCatalog()}
        </>
      )}

      {activeSection === "catalog" && (
        <div className="pt-20">{renderCatalog()}</div>
      )}

      {activeSection === "cart" && <div className="pt-20">{renderCart()}</div>}

      {activeSection === "contacts" && (
        <div className="pt-20">{renderContacts()}</div>
      )}

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Heart" className="text-primary" size={20} />
            <span className="font-comfortaa font-semibold">КнитСтор</span>
          </div>
          <p className="font-nunito text-gray-300">
            © 2024 КнитСтор. Трендовая вязаная одежда для современных девушек.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
