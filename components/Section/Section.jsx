import React from "react";
import "./section.css";

const Section = ({ title }) => {
    return (
        <div className="section">
            <div className="contents">
                <h1>{title}</h1>
            </div>
        </div>
    );
};

export default Section;