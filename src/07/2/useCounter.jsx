import React, {useState} from "react";

// Custom Hook(사용자 정의 훅)
function useCounter(initialValue){
    const [count, setcount] = useState(initialValue);

    const increaseCount = () => {
      setcount((count) => Math.min(count + 1, 10));
    };

    const decreaseCount = () => {
        setcount((count) => Math.max(count - 1, 0));
    };

    return [count, increaseCount, decreaseCount];
}

export default useCounter;