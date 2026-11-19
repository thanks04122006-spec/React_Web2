import React from "react";
import Card from "./Card";
import img1 from "./imgs/img1.png";
import img2 from "./imgs/img2.png";
import img3 from "./imgs/img3.png";
import img4 from "./imgs/img4.png";
import img5 from "./imgs/img5.png";
import img6 from "./imgs/img6.png";
import img7 from "./imgs/img7.png";

const photos = [
    { image: img1, title: "해안도로"},
    { image: img2, title: "바닷가 전차"},
    { image: img3, title: "바닷가의 파란 집"},
    { image: img4, title: "논길 옆 기차역" },
    { image: img5, title: "꽃밭에서 낮잠 자는 고양이" },
    { image: img6, title: "도심 속 호수 공원" },
    { image: img7, title: "햇살이 드는 초록빛 방" },
];

function ProfileCard() {
    return (
        <main className="stay-list">
            <h1>여행지 둘러보기</h1>
            <div className="stay-grid">
                {photos.map(({ image, title}) => (
                    <Card key={image} title={title} image={image}/>
                ))}
            </div>
        </main>
    );
}

export default ProfileCard;
