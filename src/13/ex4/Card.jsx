import React from "react";
import "./Card.css";

function Card({ title, image, alt, children }) {
    return (
        <article className="stay-card">
            {image && <img src={image} />}
            {title && <h2>{title}</h2>}
            {children}
        </article>
    );
}

export default Card;
