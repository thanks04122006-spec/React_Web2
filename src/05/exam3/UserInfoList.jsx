import React from "react";
import UserInfo from "./UserInfo";
import "./UserInfoList.css"

const users = [
    {
        name : "Jang Wonyoung",
        avatarUrl : "https://i.pinimg.com/736x/34/12/c9/3412c98fb027010ce754f57875066fb3.jpg",
        messege : "Positive mindset, lucky vive~"
    },
    {
        name : "Cutecat",
        avatarUrl : "https://i.pinimg.com/736x/3d/fe/c5/3dfec53e47433d96bf70c240fde59355.jpg",
        messege : "리본냥이"
    },
    {
        name : "Ham",
        avatarUrl : "https://i.pinimg.com/736x/d8/2e/90/d82e90e589eff41473c2fb021a0881e8.jpg",
        messege : "해변햄스터"
    },
]

function UserInfoList(props){
    const currentDate = new Date();
    return(
        <div>
            {
                users.map((user) => {
                   return(
                       <div>
                           <UserInfo user={user}/>
                           <div>
                               {user.messege}
                           </div>
                           <div>
                               {currentDate.toDateString()}
                           </div>
                       </div>
                   );
                })
            }
        </div>
    );
}

export default UserInfoList;