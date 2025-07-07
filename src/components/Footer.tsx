import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
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
  );
};

export default Footer;
