import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Contacts = () => {
  return (
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
};

export default Contacts;
