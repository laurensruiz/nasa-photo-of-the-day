import React from "react";




const NasaPhoto = (props) => {
    return (
        <div className="photo-wrapper">
            <img src={props.info.hdurl}/>
            <p className="explanation">{props.info.explanation}</p>
        </div>
    )
}

export default NasaPhoto;