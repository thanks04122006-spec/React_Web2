import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import TodoList from "./01/TodoListApp";
import reportWebVitals from './reportWebVitals';
// import Library from "./03/enhenced_css/Library";
// import "./03/enhenced_css/Book.css";
// import Clock from "./04/Clock";
// import "./04/Clock.css"
// import ConfirmDialog from "./04/ConfirmDialog";
// import ConfirmDialogList from "./04/ConfirmDialogList";
// import WelcomeList from "./05/exam01/WelcomeList";
//import Booklist from "./05/exam02/Booklist";
// import UserInfoList from "./05/exam3/UserInfoList";
// import NotificationList from "./06/test/NotificationList";
// import Usestate from "./07/UseState2";
// import TextinputWithFocusButton from "./07/1/TextinputWithFocusButton";
// import Aucommodate from "./07/2/Aucommodate";
// import Toggle from "./08/1/Toggle";
// import MyButton from "./08/1/MyButton";
// import Toggle2 from "./08/1/Toggle2";
// import MyButton2 from "./08/1/MyButton2";
// import ConfirmButton from "./08/2/ConfirmButton";
// import ConfirmButton2 from "./08/2/ConfirmButton2";
// import SentMessgeBox from "./08/1/SentMessgeBox";
// import Greeting from "./09/1/GreetingTest";
// import LogControl2 from "./09/2/LogControl";
//import "./09/ex2/LogControl.css"
// import MailBox from "./09/3/MailBox";
// import "./09/3/MailBox.css";
//import LogControl2 from "./09/ex3/LogControl2";
// import MainPage from "./09/ex4/MainPage";
import LandingPage from "./09/finalex/LandingPage";

const root = ReactDOM.createRoot(document.getElementById('root'));

// setInterval(() => {
     root.render(
            <React.StrictMode>
                {<LandingPage/>}
            </React.StrictMode>
        );
//     },1000
// )

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
