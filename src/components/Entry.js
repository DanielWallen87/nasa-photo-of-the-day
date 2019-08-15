import React from "react";

import Title from "../components/Title";
import Image from "../components/Image";
import Date from "../components/Date";
import Blog from "../components/Blog";

// import Lettering from "../components/Lettering";

// Props only needs to be typed on the RECEIVING component. Like genes. You inherit from parents.

const Entry = props => {
    return (
        <div className="entry">
            
            <Title title={props.title} />

            <Image image={props.image} />

            <Date date={props.date} />

            <Blog blog={props.blog} />

        </div>
    )
}

export default Entry;

// Entry translates the styles/text from components into blogs.