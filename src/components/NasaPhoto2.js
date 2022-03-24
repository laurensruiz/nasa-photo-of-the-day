import React from "react";
import styled, {keyframes} from "styled-components"

const kf = keyframes`
50% {
    transform: scale(1);
  }
  100% {
    opacity: 1;
    transform: scale(1.1);
  }
`
const StyledPhoto = styled.div`
display: flex;
    flex-direction: row;
    align-items: center;
    padding: 3%;
    background-color: ${props => props.theme.secondaryColor};


    img{
    max-width: 60%;
    border-radius: 50%;
    margin-right: 2%
  }
  
  .explanation {
    width:30%;
    padding: 1%;
    text-align: left; 
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 175%;

    &:hover {
        animation: ${kf} 0.2s ease-in-out forwards
      }
  }

  p {
    color: ${props => props.theme.white};
    }


`



const NasaPhoto = (props) => {
    return (
        <StyledPhoto className="photo-wrapper">
            <img src={props.info.hdurl}/>
            <p className="explanation">{props.info.explanation}</p>
        </StyledPhoto>
    )
}

export default NasaPhoto;