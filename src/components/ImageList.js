import React from "react";
import ImageCard from "./ImageCard";
import "./ImageList.css";

const ImageList = list => {
    const images = list.images.map((image) => {
        return <ImageCard key={image.id} image={image} />
    });

    return (
        <div className="image-list">{images}</div>
        )
}

export default ImageList;