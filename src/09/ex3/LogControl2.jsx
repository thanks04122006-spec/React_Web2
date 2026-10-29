import React, {useState} from "react";
import LogoutButton from "../ex2/LogoutButton";
import LogInButton from "../ex2/LogInButton";
import Greeting from "../ex1/GreetingTest";

function LogControl2(){
    const[isLogIn,setIsLogIn] = useState(false);

    const logInClickListener = () => {
        setIsLogIn(true);
    }

    const LogOutClickListener = () => {
        setIsLogIn(false);
    }

    let button;

    button = isLogIn ? <LogoutButton onClick={LogOutClickListener}/> : <LogInButton onClick={logInClickListener}/>

    return(
      <div>
          <Greeting isLogIn={isLogIn}/>
          {button}
      </div>
    );
}

export default LogControl2;