"use client"
// Styles
import styles from "./index.module.scss";

interface IQuizCardProps {
  image: string;
  title: string;
  cardCount: number;
  rating: number;
}

const QuizPreview: React.FC<IQuizCardProps> = ({ image, title, cardCount, rating }) => {
  return (
    <div className={styles.card}>
      {/* <img src={image} alt={title} className={styles.image} /> */}
      <div className={styles.image}></div>
      <div className={styles.info}>
        <h3 className={styles.card_title}>{title}</h3>
        <p className={styles.quiz_count}>{cardCount} карточек</p>
        <span>⭐ {rating.toFixed(1)}</span>
      </div>
    </div>
  );
};

export default QuizPreview;
