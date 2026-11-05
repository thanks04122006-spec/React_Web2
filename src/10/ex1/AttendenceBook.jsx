import React from "react";
import "./AttendenceBook.css";

const students = [
    {
        id: 1,
        name: "minsu"
    },
    {
        id: 2,
        name: "jiwon"
    },
    {
        id: 3,

        name: "seojun"
    },
    {
        id: 4,
        name: "hayun"
    },
]

function AttendenceBook(){
    return(
      <ul className="attendance-book" aria-label="학생 출석부">
          {students.map((students,index) => {
              return <li className="attendance-card" key={index}>{students.name}</li>
          })}
      </ul>
    );
}

export default AttendenceBook;
