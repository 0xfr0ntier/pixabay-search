import React, { useState } from "react";
import ImageLinkForm from "./ImageLinkForm";
import Gallery from "./Gallery";

const serverURL = "http://127.0.0.1:5000";

const SearchApp = () => {
    const [id, setId] = useState(123);
    const [query, setQuery] = useState("");
    const [images, setImages] = useState([]);

    const inputChange = (event) => {
        setQuery(event.target.value);
    };

    const onSubmit = () => {
        fetch(`${serverURL}/image/${id}/${query}`)
            .then((res) => res.json())
            .then((images) => {
                setImages(images);
            })
            .catch((error) => console.log(error));
    };

    return (
        <>
            <div className="flex flex-row justify-center">
                <ImageLinkForm
                    onButtonSubmit={onSubmit}
                    onInputChange={inputChange}
                    onSubmit
                />
            </div>
            <Gallery images={images} />
        </>
    );
};

export default SearchApp;
