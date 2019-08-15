import React from "react";
import styled from "styled-components";

const FullScreenImage = styled.img`
    width: 100vw;
    height: 100vh;
`;

const Image = props => {
    return (
        <div className="image">
            <FullScreenImage src={props.image} />
        </div>
    )
}

export default Image;