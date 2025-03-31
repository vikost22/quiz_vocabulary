// Styles
import styles from "./index.module.scss";

interface ProgressBarProps {
  quiz: number;
  length: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ quiz, length }) => {
  return (
    <div className={styles.progressBar}>
      <p>{quiz}/{length}</p>
      <div className={styles.progress}>
        <div className={styles.progressLine} style={{ width: `${quiz / length * 100}%` }} />
      </div>
    </div>
  );
};

export default ProgressBar;