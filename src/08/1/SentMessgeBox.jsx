import React, {useState} from "react";

function SentMessgeBox(){
    const[message,setMessge] = useState("");

    function handleChange(e) {
            setMessge(e.target.value);
    }

    function handleClick() {
            alert(message);
            setMessge("");
    }

    return(<div style={{padding:'20px'}}>
            <p>메세지 전송기</p>
            <input type={"text"} placeholder={"전송할 메세지 입력"} value={message} onChange={handleChange}/>
            <button onClick={handleClick}>
                전송
            </button>
            <p>미리보기: {message}</p>
        </div>
);}

export default SentMessgeBox;
