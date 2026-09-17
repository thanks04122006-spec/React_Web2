import React from "react";
import Book from "./Book";
import "./Booklist.css";

// 데이터배열(HashMap,
const books = [
    {
        title : "처음 만난 리액트",
        author: "김소플",
        coverImage: "https://image.yes24.com/goods/124149305/XL"
    },
    {
        title : "데이터 베이스 실습",
        author: "박우창",
        coverImage: "https://image.yes24.com/goods/196285141/XL"
    },
    {
        title : "난생 처음 자바",
        author: "김소플",
        coverImage: "https://image.yes24.com/goods/119842978/XL"
    },
    {
        title : "새내기 파이썬",
        author: "천인국",
        coverImage: "https://image.yes24.com/goods/110241160/XL"
    },
    {
        title : "컴퓨팅 사고와 문제해결 : 스크래치로 배우는 창의적 코딩",
        author: "천인국",
        coverImage: "https://image.yes24.com/goods/97697341/XL"
    }
]

function Booklist() {
    return(
        <div className={"bookListWrapper"}>
            {books.map((book)=> {
                return(
                    <Book
                        title={book.title}
                        author={book.author}
                        coverImage={book.coverImage}
                    />
                );
            })}
        </div>
    );
}

export default Booklist;