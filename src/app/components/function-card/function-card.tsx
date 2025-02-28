import Image from "next/image";

const FunctionCard = ({ title, subtitle, imageAlt }: { title: string; subtitle?: string; imageAlt: string }) => {
  return (
    <div className="card relative">
      <Image
        src="https://cs5.pikabu.ru/post_img/2015/06/04/11/1433446202_1725992411.jpg"
        alt={imageAlt}
        fill
        className="object-cover"
        priority
      />
      <svg className="star-icon relative z-10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"></path>
      </svg>
      <div className="card-content relative z-10">
        <div className="card-title">{title}</div>
        {subtitle && <div className="card-subtitle">{subtitle}</div>}
      </div>
    </div>
  );
};

export default FunctionCard;