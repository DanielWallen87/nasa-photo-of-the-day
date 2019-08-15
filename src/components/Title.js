import React from "react";
import styled from "styled-components";

const BigTitle = styled.h1`
    font-size: 3em;
`

const Title = props => {
    return (
        <div className="title">
            <BigTitle>{props.title}</BigTitle>
        </div>
    )
}

export default Title;