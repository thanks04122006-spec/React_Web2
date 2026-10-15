import React, {useState} from "react";

function MyButton2() {
    const [count, setCount] = useState(1);

    const btnClick = (id, event) => {
        console.log(id, event.target, event.x, event.y);
    }

    return (
        <button onClick={(event) => {
            setCount((count) => count + 1);
            btnClick(1, event);
        }}>
            클릭하세요(F12실행)
        </button>
    );

}

export default MyButton2;