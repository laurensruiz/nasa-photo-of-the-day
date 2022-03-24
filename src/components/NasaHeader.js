import React from "react";
import styled from "styled-components"

const StyledHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  
`

const NasaHeader = (props) => {
    return (
        <StyledHeader className="header-wrapper">
            <h3>{props.info.title}</h3>
            <p>{props.info.date}</p>
        </StyledHeader>

    )
}

export default NasaHeader;