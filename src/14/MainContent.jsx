import React, { useContext } from "react";
import Card from "../13/ex4/Card";
import ThemaContext from "./ThemaContext";
import "./MainContent.css";

const cards = [
    { title: "직장인 햄스터", image: "office-hamster.png", icon: "🐹", description: "오늘도 모니터 앞에서 버티는 직장인 햄스터." },
    { title: "팩 하는 강아지", image: "spa-dog.png", icon: "🐶", description: "목욕탕에서 팩 한 장 붙이고 쉬는 중이에요." },
    { title: "소파 위 햄스터", image: "sofa-hamster.png", icon: "🐹", description: "선글라스를 얹고 소파를 차지한 햄스터." },
];

function MainContent() {
    const { theme, toggleTheme } = useContext(ThemaContext);
    const isDark = theme === "dark";

    return (
        <main className="theme-gallery" data-theme={theme}>
            <div className="theme-gallery__inner">
                <header className="theme-gallery__header">
                    <p className="theme-gallery__brand">말랑이네</p>
                    <button type="button" onClick={toggleTheme} aria-pressed={isDark}>
                        <span aria-hidden="true">{isDark ? "☀️" : "🌙"}</span>
                        {" "}다크 모드
                    </button>
                </header>
                <section aria-labelledby="feed-title">
                    <h1 id="feed-title" className="theme-gallery__feed-title">오늘의 게시물</h1>
                    <div className="theme-gallery__feed">
                        {cards.map(({ title, image, icon, description }) => (
                            <Card
                                key={image}
                                image={`${process.env.PUBLIC_URL}/imgs/${image}`}
                                alt={description}
                                header={
                                    <header className="theme-gallery__post-header">
                                        <span className="theme-gallery__avatar" aria-hidden="true">{icon}</span>
                                        <div>
                                            <p className="theme-gallery__author">말랑이네</p>
                                            <h2>{title}</h2>
                                            <p>{description}</p>
                                        </div>
                                    </header>
                                }
                            />
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}

export default MainContent;
