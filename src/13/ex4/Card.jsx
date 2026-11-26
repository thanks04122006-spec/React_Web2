import React from "react";
import "./Card.css";

function Card({ title, image, alt, header, children }) {
    return (
        <article className="stay-card">
            {header}
            {image && <img src={image} alt={alt ?? ""} />}
            {title && <h2>{title}</h2>}
            {children}
        </article>
    );
}

export default Card;
