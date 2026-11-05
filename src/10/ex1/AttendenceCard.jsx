import React, { useRef, useState } from "react";
import img1 from "../imgs/chiikawa.png";
import img2 from "../imgs/hachiware.png";
import img3 from "../imgs/usagi.png";
import img4 from "../imgs/rakko.png";
import "./AttendenceCard.css";

const students =[
    {
        id: 1,
        name: "치이카와",
        grade: 1,
        major: "인공지능 소프트웨어",
        avatar: img1
    },
    {
        id: 2,
        name: "하치와레",
        grade: 2,
        major: "컴퓨터공학",
        avatar: img2
    },
    {
        id: 3,
        name: "우사기",
        grade: 3,
        major: "디지털미디어",
        avatar: img3
    },
    {
        id: 4,
        name: "랏코",
        grade: 1,
        major: "정보보안",
        avatar: img4
    }
]

function AttendenceCard(){
    const trackRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    function showCard(index) {
        const track = trackRef.current;
        const nextIndex = (index + students.length) % students.length;
        const card = track?.children[nextIndex];
        if (!card) return;
        track.scrollTo({
            left: card.offsetLeft - track.children[0].offsetLeft,
            behavior: index < 0 || index >= students.length ||
                window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"
        });
    }

    function syncActiveCard() {
        const track = trackRef.current;
        const firstLeft = track.children[0].offsetLeft;
        let closest = 0;
        Array.from(track.children).forEach((card, index) => {
            if (Math.abs(card.offsetLeft - firstLeft - track.scrollLeft) <
                Math.abs(track.children[closest].offsetLeft - firstLeft - track.scrollLeft)) {
                closest = index;
            }
        });
        setActiveIndex(closest);
    }

    return(
      <div className="attendance-carousel">
          <h1>학생 출석부</h1>
          <div className="attendance-stage">
          <button className="attendance-arrow attendance-previous" type="button"
                  onClick={() => showCard(activeIndex - 1)} aria-label="이전 학생증">←</button>
          <div className="attendance-track" ref={trackRef} onScroll={syncActiveCard}
               tabIndex={0} aria-label="학생증 슬라이드" onKeyDown={event => {
                   if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
                       event.preventDefault();
                       showCard(activeIndex + (event.key === "ArrowRight" ? 1 : -1));
                   }
               }}>
          {students.map((students) => (
                  <div className="student-id" key={students.id} role="group"
                       aria-label={`${students.name} 학생증`}>
                      <img src={students.avatar} alt={students.name}/>
                      <div>
                          <h3>{students.name}</h3>
                          <p>{students.grade}학년</p>
                      </div>
                  </div>
                  )
              )
          }
          </div>
          <button className="attendance-arrow attendance-next" type="button"
                  onClick={() => showCard(activeIndex + 1)} aria-label="다음 학생증">→</button>
          </div>
          <div className="attendance-navigation" aria-live="polite">
              {activeIndex + 1} / {students.length}
          </div>
      </div>
    );
}

export default AttendenceCard
