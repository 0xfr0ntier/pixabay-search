import React from "react";
import { Link } from "react-router-dom";
import Tilt from "./Tilt";
import logoImg from "../assets/img/FA.png";

const Logo = ({ signedIn }) => {
    let path = signedIn ? "/app" : "/";

    return (
        <Link to={path}>
            <div className="ma4 mt0 fixed fl">
                <Tilt
                    className="w4 h4 br2 pt1 shadow-2"
                    style={{ background: "#323232" }}
                    options={{ max: 35 }}
                >
                    <img
                        className="Tilt-inner tc"
                        alt="0xfrontier"
                        src={logoImg}
                    />
                </Tilt>
            </div>
        </Link>
    );
};

export default Logo;
