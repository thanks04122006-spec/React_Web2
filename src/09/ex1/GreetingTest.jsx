import React from "react";
import UserGreeting from "./UserGreeting";
import GuestGreeting from "./GuestGreeting";

function Greeting(props){
    // const isLogIn = true;
    const isLogIn = props.isLogIn;

    if (isLogIn){
        return <UserGreeting></UserGreeting>
    }else {
        return <GuestGreeting></GuestGreeting>
    }
}

export default Greeting;