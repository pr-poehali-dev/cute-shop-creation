import { useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Catalog from "@/components/Catalog";
import Cart from "@/components/Cart";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";
import { Product } from "@/components/ProductCard";

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

  return (
    <div className="min-h-screen bg-white">
      <Navigation
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        cartCount={cart.length}
      />

      {activeSection === "home" && (
        <>
          <Hero onViewCatalog={() => setActiveSection("catalog")} />
          <Catalog products={products} onAddToCart={addToCart} />
        </>
      )}

      {activeSection === "catalog" && (
        <div className="pt-20">
          <Catalog products={products} onAddToCart={addToCart} />
        </div>
      )}

      {activeSection === "cart" && (
        <div className="pt-20">
          <Cart
            cart={cart}
            onRemoveFromCart={removeFromCart}
            onGoToCatalog={() => setActiveSection("catalog")}
          />
        </div>
      )}

      {activeSection === "contacts" && (
        <div className="pt-20">
          <Contacts />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Index;
