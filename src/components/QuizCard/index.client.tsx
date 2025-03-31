"use client"
// Hooks
import { useState } from "react";
//Components
import { motion, MotionStyle } from "framer-motion";
// Styles
import styles from "./index.module.scss";

interface IQuizCardProps {
  question: string;
  answer: string;
  onSwipe: (type: "know" | "dontKnow") => void;
}

const QuizCard: React.FC<IQuizCardProps> = ({ question, answer, onSwipe }) => {
  const [flipped, setFlipped] = useState(false);
  const [xPosition, setXPosition] = useState(0);

  const handleDrag = (event: any, info: any) => {
    setXPosition(info.offset.x)
  };

  const handleDragEnd = (event: any, info: any) => {
    setXPosition(info.offset.x)
    if (info.offset.x > 100) {
      onSwipe("know");
    } else if (info.offset.x < -100) {
      onSwipe("dontKnow");
    }

    setTimeout(() => {
      setXPosition(0)
      setFlipped(false);
    }, 300);
  };

  const getCardStyleOnDrag = (x: number): MotionStyle => {
    const know = x > 0
    if (x === 0)
      return {}

    return {
      borderColor: `rgba(${know ? "170, 255, 170" : "255, 170, 170"}, ${Math.abs(x)/100})`
    }
  }
  return (
    <motion.div
      style={getCardStyleOnDrag(xPosition)}
      className={`${styles.card}`}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDrag={handleDrag}
      onDragEnd={handleDragEnd}
      onClick={() => setFlipped(!flipped)}
    >
      {!flipped ? question : answer}
    </motion.div>
  );
};

export default QuizCard;