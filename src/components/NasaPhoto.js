import React from "react";




const NasaPhoto = (props) => {
    return (
        <div className="photo-wrapper">
            <img src={props.photo.hdurl}/>
            <p className="explanation">{props.photo.explanation}</p>
        </div>
    )
}

export default NasaPhoto;