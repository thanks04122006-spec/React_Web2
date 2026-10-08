import React, { useEffect, useState } from "react";
import useCounter from "./useCounter";
import "./Aucomment.css";

const MAX_CAPACITY = 10;

function Aucommodate() {
    const [count, increaseCount, decreaseCount] = useCounter(0);
    const [isFull, setIsFull] = useState(false);

    useEffect(() => {
        setIsFull(count >= MAX_CAPACITY);

        console.log("==============useEffect 확인용");
        console.log(`Current count value: ${count}`);
        console.log(`isFull: ${count >= MAX_CAPACITY}`);
    }, [count]);

    return (
        <div className="container">
            <h2 className="title">수용 시설</h2>

            <p className="count">
                현재 총 {count}명 수용중입니다.
            </p>

            <div className="button-group">
                <button
                    className="btn enter-btn"
                    onClick={increaseCount}
                    disabled={count >= MAX_CAPACITY}
                >
                    입장
                </button>

                <button
                    className="btn exit-btn"
                    onClick={decreaseCount}
                    disabled={count <= 0}
                >
                    퇴장
                </button>
            </div>

            {isFull && (
                <p className="full-message">
                    수용 시설에 정원이 가득 찼습니다.
                </p>
            )}
        </div>
    );
}

export default Aucommodate;