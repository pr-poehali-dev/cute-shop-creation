import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  cartCount: number;
}

const Navigation = ({
  activeSection,
  setActiveSection,
  cartCount,
}: NavigationProps) => {
  return (
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
              {cartCount > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs">
                  {cartCount}
                </Badge>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
