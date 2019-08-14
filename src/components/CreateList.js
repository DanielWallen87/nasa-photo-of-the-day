import React, { useEffect, useState } from "react";
import axios from "axios";
import List from "./List";

// This is NOT working so I'm gonna stop here since I'm afraid nothing will display if the console can't even log the info.
// At least I got some more practice with building out the syntax. Had the same problem with three different API's. *Scratches head*

const CreateList = () => {
    // consts go here
    const [title, setTitle] = useState();
    const [date, setDate] = useState();
    const [photo, setPhotoSource] = useState();


    useEffect(() => {
        axios 
            .get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=D15zpNbrT5kUItMw4iPhxpHkNqprKnQh6h7LIOCJ')
            .then(response => {

                console.log(response)
            })
    }, [] )

    return (
        <div className="container">
            <List title = {title} date = {date} photo = {photo} />
            {/* ^ I wonder if it might be easier to make those the same in retrospect... */}
        </div>
    )
}

export default CreateList;
