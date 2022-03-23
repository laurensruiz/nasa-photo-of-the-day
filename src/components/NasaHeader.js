import React from "react";


const NasaHeader = (props) => {
    return (
        <div className="header-wrapper">
            <h3>{props.info.title}</h3>
            <p>{props.info.date}</p>
        </div>

    )
}

export default NasaHeader;