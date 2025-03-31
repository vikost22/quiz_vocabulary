// Styles
import styles from "./index.module.scss";

interface ScoreboardProps {
  knowCount: number;
  dontKnowCount: number;
}

const Scoreboard: React.FC<ScoreboardProps> = ({ knowCount, dontKnowCount }) => {
  return (
    <div className={styles.scoreboard}>
      <span className={styles.dontKnow}>Не знаю: {dontKnowCount}</span>
      <span className={styles.know}>Знаю: {knowCount}</span>
    </div>
  );
};

export default Scoreboard;
