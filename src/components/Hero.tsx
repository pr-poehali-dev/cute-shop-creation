import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface HeroProps {
  onViewCatalog: () => void;
}

const Hero = ({ onViewCatalog }: HeroProps) => {
  return (
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
            onClick={onViewCatalog}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-nunito rounded-full"
          >
            Посмотреть коллекцию
            <Icon name="ArrowRight" className="ml-2" size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
