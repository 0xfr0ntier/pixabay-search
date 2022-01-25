import React from "react";
import "../assets/css/ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div className="flex flex-column">
            {/* Title */}
            <p className="f3 tc pb3">{"High quality Images search!"}</p>

            {/* Form */}
            <div className="form pa4 br3 shadow-5 flex flex-row" style={{ minWidth: "600px" }}>
                <input
                    className="w-70 pr2 f4"
                    type="tex"
                    onChange={onInputChange}
                />
                <button
                    className="w-30 pl2 pv2 f4 br3 br--right grow link white bg-gray hover-bg-dark-gray hover-bg-dark-gray"
                    onClick={onButtonSubmit}
                >
                    Detect
                </button>
            </div>
        </div>
    );
};

export default ImageLinkForm;
