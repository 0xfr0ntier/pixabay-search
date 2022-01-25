import React, { Component } from "react";
import ImageLinkForm from "./ImageLinkForm";
import Gallery from "./Gallery";

const serverURL = "SERVER URL";

export default class App extends Component {
    constructor() {
        super();

        this.state = {
            id: 0,
            query: "",
            images: [],
        };
    }

    onInputChange = (event) => {
        this.setState({ query: event.target.value });
    };

    onSubmit = () => {
        const { query, id } = this.state;

        fetch(`${serverURL}/image/${id}/${query}`)
            .then((res) => res.json())
            .then((images) => {
                this.setState({ images: images });
            })
            .catch((error) => console.log(error));
    };

    render() {
        return (
            <>
                <div className="flex flex-row justify-center">
                    <ImageLinkForm
                        onButtonSubmit={this.onSubmit}
                        onInputChange={this.onInputChange}
                        onSubmit
                    />
                </div>
                <Gallery images={this.state.images} />
            </>
        );
    }
}
