import React from "react";


const NasaHeader = (props) => {
    return (
        <div className="header-wrapper">
            <h3>{props.header.title}</h3>
            <p>{props.header.date}</p>
        </div>

    )
}

export default NasaHeader;