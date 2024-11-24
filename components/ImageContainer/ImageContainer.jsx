import React from "react";

const ImageContainer = ({ imageSource, description }) => {
    return (
        <div className="h-[100%] overflow-hidden flex flex-col align-center">
            <img className="object-cover h-[120%]" src={imageSource} alt="alt text goes here" />
            <p className="date">{description}</p>
        </div>
    );
};

export default ImageContainer;