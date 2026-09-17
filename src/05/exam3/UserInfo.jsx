import React from "react";
import Avatar from "./Avatar";
import "./UserInfo.css"

function UserInfo(props){
    return(
        <div>
            <Avatar user={props.user}/>
            <div>
                {props.user.name}
            </div>
        </div>
    );
}

export default UserInfo;