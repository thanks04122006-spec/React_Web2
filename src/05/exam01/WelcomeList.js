import React from "react";
import Welcome from "./Welcome";
import "./Welcome.css";

function WelcomeList() {
    return (
        <div className="container">
            <div className="welcome-card">
                <Welcome name = "dlrkdud" colorClass="bg-1"/><br/>
                <Welcome name = "dlrkdud" colorClass="bg-1"/><br/>
                <Welcome name = "dlrkdud" colorClass="bg-1"/><br/>
            </div>
        </div>
    );
}

export default WelcomeList;
