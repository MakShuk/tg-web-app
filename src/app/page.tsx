import FunctionCard from "./components/function-card/function-card";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <div className="w-full p-3 sm:p-6 lg:p-8">
      <div className="header">Функции</div>

      <div className="tabs">
        <div className="tab inactive">Все</div>
        <div className="tab active">Избранные</div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 lg:gap-6">
        <FunctionCard
          title="Нарисовать картинку"
          subtitle="в разных стилях"
          imageAlt="Космический кот"
        />

        <FunctionCard
          title="Примерить разные образы"
          subtitle="с помощью фильтров с переносом лица"
          imageAlt="Лицо девушки"
        />

        <FunctionCard
          title="Генерация текста"
          subtitle="на разные темы"
          imageAlt="Ноутбук"
        />
      </div>

      <Footer />
    </div>
  );
}
