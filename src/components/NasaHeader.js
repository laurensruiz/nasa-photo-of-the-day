import React from "react";
import styled from "styled-components"

const StyledHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5%;
    background-color: ${props => props.theme.primaryColor};
    
    h3 {
        font-family: 'Bebas Neue', cursive;
        font-size: 400%;
        margin: 0;
    }

    p {
        text-align: top;
        margin: 0;
        
    }
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