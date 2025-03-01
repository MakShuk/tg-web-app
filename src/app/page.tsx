import FunctionCard from "./components/function-card/function-card";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <div className="pb-24">
      <div className="header">Функции</div>
      
      <div className="tabs">
        <div className="tab inactive">Все</div>
        <div className="tab active">Избранные</div>
      </div>
      
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
      
      <Footer />
    </div>
  );
}
