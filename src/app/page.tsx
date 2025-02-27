import Image from "next/image";
import Link from "next/link";

const FunctionCard = ({ title, subtitle, imageAlt }: { title: string; subtitle?: string; imageAlt: string }) => {
  return (
    <div className="card">
      <div className="relative w-full h-[200px]">
        <Image 
          src="/api/placeholder/600/400"
          alt={imageAlt}
          fill
          className="object-cover"
        />
      </div>
      <svg className="star-icon" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"></path>
      </svg>
      <div className="card-content">
        <div className="card-title">{title}</div>
        {subtitle && <div className="card-subtitle">{subtitle}</div>}
      </div>
    </div>
  );
};

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
      
      <div className="footer">
        <div className="footer-button active">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <rect x="3" y="3" width="7" height="7" rx="1"></rect>
            <rect x="14" y="3" width="7" height="7" rx="1"></rect>
            <rect x="3" y="14" width="7" height="7" rx="1"></rect>
            <rect x="14" y="14" width="7" height="7" rx="1"></rect>
          </svg>
          <div>Функции</div>
        </div>
        <Link href="/profile" className="footer-button">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <circle cx="12" cy="8" r="4"></circle>
            <path d="M12 12c-3.3 0-6 2.7-6 6v1h12v-1c0-3.3-2.7-6-6-6z"></path>
          </svg>
          <div>Профиль</div>
        </Link>
      </div>
    </div>
  );
}
