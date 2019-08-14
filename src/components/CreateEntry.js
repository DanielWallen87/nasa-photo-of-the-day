import React, { useEffect, useState } from "react";
import axios from "axios";
import Entry from "./Entry";

const CreateEntry = () => {
    const [title, setTitle] = useState();
    const [date, setDate] = useState();
    const [photo, setPhotoSource] = useState();
    const [blog, setBlogText] = useState();

    useEffect(() => {
        axios
            .get('https://api.nasa.gov/planetary/apod?api_key=D15zpNbrT5kUItMw4iPhxpHkNqprKnQh6h7LIOCJ')
            .then(response => {
                setTitle(response.data.title);
                setDate(response.data.date);
                setPhotoSource(response.data.url);
                setBlogText(response.data.explanation);
                //console.log(response);
            });
    }, []);

    return (
        <div className="container">
            <Entry title = {title} image = {photo} day = {date} text = {blog} /> 
            {/* ^ this "prop" must match the one being passed down on "entry" */}
        </div>
    )
}

export default CreateEntry;