import React, {useState} from "react";
import LogoutButton from "./LogoutButton";
import LogInButton from "./LogInButton";
import Greeting from "../ex1/GreetingTest";

function LogControl(){
    const[isLogIn,setIsLogIn] = useState(false);

    const logInClickListener = () => {
        setIsLogIn(true);
    }

    const LogOutClickListener = () => {
        setIsLogIn(false);
    }

    let button;

    if(isLogIn){
        button = <LogoutButton onClick = {LogOutClickListener}/>
    }
    else {
        button = <LogInButton onClick={logInClickListener}/>
    }

    return(
      <div>
          <Greeting isLogIn={isLogIn}/>
          {button}
      </div>
    );
}

export default LogControl;