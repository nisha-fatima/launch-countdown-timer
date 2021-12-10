import React from "react";
import "./card.css";

export default function card({ classes, bottomText, text }) {
    return (
        <div className="card-container">
            <div className={`card ${classes} d-flex justify-content-center align-items-center`}>
                <span className="pink-text">{text}</span>
            </div>
            <div className="d-flex justify-content-center align-items-center">
            <span className="light-text">{bottomText}</span>
            </div>
        </div>

    )
}
