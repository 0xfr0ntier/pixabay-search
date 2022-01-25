import React from "react";

const Gallery = ({ images }) => {
    return (
        <div className="flex flex-wrap justify-center mt4">
            {images.map((image) => {
                return (
                    <div className="ma2" key={image.id}>
                        <a href={image.largeImageURL}>
                            <img
                                className="h5 w-auto b--solid bw2 shadow-5 b--white br4 grow"
                                alt={image.tags.split(", ")[0]}
                                src={image.webformatURL}
                            />
                        </a>
                    </div>
                );
            })}
        </div>
    );
};

export default Gallery;
