import React from 'react';
import './DisplayCard.css'; // Asegúrate de que este archivo exista y tenga los estilos necesarios
interface DisplayCardProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  iconBg?: string; // Nueva prop opcional
}

const DisplayCard: React.FC<DisplayCardProps> = ({ icon, title, children, iconBg }) => (
  <div className="card">
    <div className="card__icon" style={iconBg ? { background: iconBg } : undefined}>
      {icon}
    </div>
    <h3 className="card__title">{title}</h3>
    <div className="card__content">{children}</div>
  </div>
);

export default DisplayCard;
