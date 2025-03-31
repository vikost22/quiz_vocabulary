"use client"
// Hooks
import { useState } from "react";
//Components
import QuizCard from "@/components/QuizCard/index.client";
import ProgressBar from "@/components/ProgressBar/index.server";
import Scoreboard from "@/components/Scoreboard/index.server";
// Styles
import styles from "./index.module.scss";
// Types

const quizCards = [
    { id: 1, question: "Apfel", answer: "яблоко" },
    { id: 2, question: "Buch", answer: "книга" },
    { id: 3, question: "Haus", answer: "дом" },
    { id: 4, question: "Tisch", answer: "стол" },
    { id: 5, question: "Katze", answer: "кошка" },
    { id: 6, question: "Hund", answer: "собака" },
    { id: 7, question: "Wasser", answer: "вода" },
    { id: 8, question: "Freund", answer: "друг" },
    { id: 9, question: "Stadt", answer: "город" },
    { id: 10, question: "Sonne", answer: "солнце" }
];

const QuizPage: React.FC = () => {
    const [index, setIndex] = useState(0);
    const [knowCount, setKnowCount] = useState(0);
    const [dontKnowCount, setDontKnowCount] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const handleSwipe = (type: "know" | "dontKnow") => {
        if (type === "know") setKnowCount((prev) => prev + 1);
        if (type === "dontKnow") setDontKnowCount((prev) => prev + 1);
        setIndex((prev) => (prev + 1));
        if (index + 1 === quizCards.length) {
            setShowResult(true)
        }
    };

    return (
        <section className={styles.quiz_section}>
            <ProgressBar quiz={index} length={quizCards.length} />
            <Scoreboard knowCount={knowCount} dontKnowCount={dontKnowCount} />
            {showResult ?
                <>
                    <p>Вы знаете {knowCount} из {quizCards.length}</p>
                    <p>{knowCount / quizCards.length > 0.7 ? "Пройдено" : "Лучше повторить"}</p>
                </> :
                <QuizCard
                    question={quizCards[index].question}
                    answer={quizCards[index].answer}
                    onSwipe={handleSwipe}
                />}
        </section>
    );
}

export default QuizPage