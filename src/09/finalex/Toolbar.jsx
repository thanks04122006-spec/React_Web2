import React from "react";

function Toolbar(props){
    const {isLogIn, onClickLogIn, onClickLogout} = props;

    return(
      <div>
          {
              isLogIn && <span>환영합니다</span>
          }
          {
              isLogIn ? <button onClick={onClickLogout}>로그아웃</button>:<button onClick={onClickLogIn}>로그인</button>
          }
      </div>
    );
}

export default Toolbar;