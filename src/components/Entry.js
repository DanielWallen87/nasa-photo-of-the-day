import React from "react";
import CreateEntry from "./CreateEntry";
import styled from "styled-components";
// import Lettering from "../components/Lettering";

// Props only needs to be typed on the RECEIVING component. Like genes. You inherit from parents.
const Title = styled.h1`
    font-size: 3em;
`

const Image = styled.img`
    width: 100vw;
    height: 100vh;
`;

const Date = styled.h3`
    font-size: 2em;
`;

const Blog = styled.p`
    font-size: 1.2em;
    line-height: 1.5;
    margin: 40px;
    text-align: left;
`;

const Entry = props => {
    return (
        <div className="entry">
            
            <Title>{props.title}</Title>

            {/* <Lettering lettering={props.title} /> */}

            <Image src={props.image} />

            <Date>{props.day}</Date>

            <Blog>{props.text}</Blog>

        </div>
    )
}

export default Entry;