import React, {useState} from "react";
import Toolbar from "./Toolbar";
import rabbit from "./rabbit.jpg";
import "./LandingPage.css";

function LandingPage(){
    const [isLogIn, setIsLogIn] = useState(false);

    const onClickLogIn = () => {
      setIsLogIn(true);
    }

    const onClickLogut = () => {
        setIsLogIn(false);
    }

    return(
        <div>
            <Toolbar isLogIn={isLogIn} onClickLogIn={onClickLogIn} onClickLogout={onClickLogut}/>
            <hr/>
            <div>
                9장 조건부 렌더링 실습화면입니다
                <img src={rabbit}/>
            </div>
        </div>
    );
}

export default LandingPage;