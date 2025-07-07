import ProductCard, { Product } from "./ProductCard";

interface CatalogProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  title?: string;
}

const Catalog = ({
  products,
  onAddToCart,
  title = "Наша коллекция",
}: CatalogProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h3 className="text-4xl font-comfortaa font-bold text-center mb-12 text-gray-800">
          {title}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalog;
