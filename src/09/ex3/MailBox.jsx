import React from "react";

function MailBox(props){
    const unreadMesseages = 1;

    return(
        <div>
            <h1>안녕하세요</h1>
            {unreadMesseages > 0 &&
                <h2>
                    현재 {unreadMesseages}개의 읽지않은 메세지가 있습니다.
                </h2>
            }
            {unreadMesseages == 0 &&
                <h2>
                    현재 모든 메세지를 읽으셨습니다!
                </h2>

            }
        </div>
    );
}

export default MailBox;