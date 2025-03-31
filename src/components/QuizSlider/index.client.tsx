"use client"
// Components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import QuizPreview from "../QuizPreview/index.client";
// Styles 
import styles from "./index.module.scss"

const popularQuizzes = [
  { id: 1, image: "/images/history.jpg", title: "История", cardCount: 20, rating: 4.8 },
  { id: 2, image: "/images/science.jpg", title: "Наука", cardCount: 15, rating: 4.7 },
  { id: 3, image: "/images/geography.jpg", title: "География", cardCount: 18, rating: 4.9 },
];

const QuizSlider: React.FC = () => {
  
  return (
    <div className={styles.slider_wrap}>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        navigation
        centeredSlides={true}   
        pagination={{ clickable: true }}
        className={styles.swiper}
      >
        {popularQuizzes.map((quiz) => (
          <SwiperSlide className={styles.slide}  key={quiz.id}>
            <QuizPreview {...quiz} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default QuizSlider;
