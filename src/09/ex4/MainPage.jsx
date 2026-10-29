import React, {useState} from "react";
import WarningBanner from "./WarningBanner";
import "./MainPage.css";

function MainPage(props){
    const [showWarning, setShowWarning] = useState(false);

    const btnListner = () => {
        setShowWarning(prevShowWarning => !prevShowWarning)
    }

    return(
        <div>
            <WarningBanner warning = {showWarning}/>
            <button onClick={btnListner}>
                {showWarning? "감추기" : "보이기"}
            </button>
        </div>
    );
}

export default MainPage;