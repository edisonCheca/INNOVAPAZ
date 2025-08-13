import React from 'react';
import HeroTitle from '../common/HeroTitle';
import CommentCard from '../common/CommentCard';
import Button from '../common/Button';
import './CommentSection.css';

// Interfaces y tipos
interface Comment {
  id: number;
  message: string;
  userName: string;
  userPosition?: string;
  rating: number;
  userImage?: string;
}

interface CommentSectionProps {
  title?: string;
  description?: string;
  gradientText?: string;
  comments?: Comment[];
  showMoreButton?: boolean;
  maxCommentsToShow?: number;
  onViewMore?: () => void;
  className?: string;
}

const defaultComments: Comment[] = [
  {
    id: 1,
    message:
      'Antes de implementar el ERP, llevaba el control de inventario y ventas mediante hojas de Excel, lo que me generaba muchos errores y pérdida de tiempo. Ahora con el sistema puedo saber en tiempo real qué productos se están agotando, cuáles son los más vendidos y generar reportes automáticos para mis proveedores.',
    userName: 'María Becerra Gutierrez',
    userPosition: 'Llanterías del Sur',
    rating: 5,
  },
  {
    id: 2,
    message:
      'Antes de implementar el ERP, llevaba el control de inventario y ventas mediante hojas de Excel, lo que me generaba muchos errores y pérdida de tiempo. Ahora con el sistema puedo saber en tiempo real qué productos se están agotando, cuáles son los más vendidos y generar reportes automáticos para mis proveedores.',
    userName: 'María Becerra Gutierrez',
    userPosition: 'Llanterías del Sur',
    rating: 5,
  },
  {
    id: 3,
    message:
      'Antes de implementar el ERP, llevaba el control de inventario y ventas mediante hojas de Excel, lo que me generaba muchos errores y pérdida de tiempo. Ahora con el sistema puedo saber en tiempo real qué productos se están agotando, cuáles son los más vendidos y generar reportes automáticos para mis proveedores.',
    userName: 'María Becerra Gutierrez',
    userPosition: 'Llanterías del Sur',
    rating: 5,
  },
];

const CommentSection: React.FC<CommentSectionProps> = ({
  title = 'Lo que dicen Nuestros Clientes',
  description = 'Conoce casos de éxito, beneficios obtenidos y cómo nuestros clientes han optimizado sus procesos',
  gradientText = 'Clientes',
  comments = defaultComments,
  showMoreButton = true,
  maxCommentsToShow,
  onViewMore,
  className = '',
}) => {
  const [visibleComments, setVisibleComments] = React.useState<Comment[]>(() => {
    if (maxCommentsToShow && maxCommentsToShow < comments.length) {
      return comments.slice(0, maxCommentsToShow);
    }
    return comments;
  });

  const handleViewMore = (): void => {
    if (onViewMore) {
      onViewMore();
    } else {
      setVisibleComments(comments);
    }
  };

  const hasMoreComments: boolean = visibleComments.length < comments.length;

  return (
    <section className={`comment-section ${className}`}>
      <div className="comment-section__container">
        <HeroTitle
          titulo={title}
          descripcion={description}
          gradientText={gradientText}
          tituloStyle="h2"
          descripcionStyle="body-large"
          tituloSize={39}
          descripcionSize={20}
          descripcionMaxWidth="600px"
        />

        <div className="comment-section__grid">
          {visibleComments.map((comment: Comment) => (
            <CommentCard
              key={comment.id}
              message={comment.message}
              userName={comment.userName}
              userPosition={comment.userPosition}
              rating={comment.rating}
              userImage={comment.userImage}
            />
          ))}
        </div>

        {showMoreButton && hasMoreComments && (
          <div className="comment-section__action">
            <Button
              title="ver más"
              hasBackground={true}
              backgroundColor="var(--acc-600)"
              textColor="var(--white)"
              size="medium"
              onClick={handleViewMore}
              className="comment-section__button"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default CommentSection;
