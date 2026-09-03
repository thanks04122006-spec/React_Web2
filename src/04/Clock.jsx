import React from "react";
import "./Clock.css";

function Clock() {
    return (
        <div className="clock-container">
            <div className="clock-bg">CLOCK</div>

            <h1>인공지능 소프트웨어과</h1>

            <h2>
                {new Date().toLocaleTimeString()}
            </h2>

            <p>현재 시각입니다</p>
        </div>
    );
}

export default Clock;