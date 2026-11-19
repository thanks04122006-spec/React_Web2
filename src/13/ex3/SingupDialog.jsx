import React, {useState} from "react";
import Dialog from "./Dialog";
import "./SignupDialog.css";


function SignupDialog(){
    const [nickname, setNickname] = useState('');

    const handleChange = (event) => {
        setNickname(event.target.value);
    }

    const handleSignup = () => {
      alert(`어서오세요, ${nickname}님!`);
    }

    return(
        <Dialog
            title={"고양이 탐사 프로그램"}
            message={"닉네임을 입력해주세요"}>
            <input
                aria-label="닉네임"
                value={nickname}
                onChange={handleChange}
            />
            <button onClick={handleSignup}>
                가입하기
            </button>
        </Dialog>
    )
}

export default SignupDialog;
