import React from "react";
import styled from "styled-components";

const HeaderDate = styled.h2`
    font-size: 2em;
`
const Date = props => {
    return (
        <div className="date">
            <HeaderDate>{props.date}</HeaderDate>
        </div>
    )
}

export default Date;

// {props.date} here must match the one in CreateEntry!