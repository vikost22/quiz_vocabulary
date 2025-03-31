"use client"
// Components
import QuizSlider from "@/components/QuizSlider/index.client";
// Styles
import styles from "./index.module.scss";

const HomePage: React.FC = () => {
    return (
        <div className={styles.home_container}>
            <h1>Популярные квизы</h1>
            <QuizSlider />
            <h1>Квизы по темам</h1>
        </div>
    );
};

export default HomePage;
