import React from "react";
import { Link } from "react-router-dom";

const Register = ({ signUp }) => {
    return (
        <div className="flex justify-center">
            <div
                className="measure tc pa4 ba br3 shadow-5"
                style={{ background: "#00000050", marginTop: "8.5rem" }}
            >
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f3 fw6 ph0 mh0">Sign Up</legend>
                    <div className="mt3">
                        <label
                            className="db fw6 lh-copy f5"
                            htmlFor="email-address"
                        >
                            Name
                        </label>
                        <input
                            className="pa2 input-reset ba br3 bg-transparent hover-white w-100"
                            type="text"
                            name="name"
                            id="name"
                        />
                    </div>
                    <div className="mt3">
                        <label
                            className="db fw6 lh-copy f5"
                            htmlFor="email-address"
                        >
                            Email
                        </label>
                        <input
                            className="pa2 input-reset ba br3 bg-transparent hover-white w-100"
                            type="email"
                            name="email-address"
                            id="email-address"
                        />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f5" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="b pa2 input-reset ba br3 bg-transparent hover-white w-100"
                            type="password"
                            name="password"
                            id="password"
                        />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f5" htmlFor="password">
                            Verify password
                        </label>
                        <input
                            className="b pa2 input-reset ba br3 bg-transparent hover-white w-100"
                            type="re-password"
                            name="re-password"
                            id="re-password"
                        />
                    </div>
                </fieldset>
                <Link to="/app" onClick={() => signUp()}>
                    <input
                        className="ph3 pv2 input-reset ba br3 b--white white bg-transparent grow pointer f5 dib w-70"
                        type="submit"
                        value="Sign up"
                    />
                </Link>
                <div className="lh-copy mt3">
                    <Link to="/signin" className="f6 link dim white db">
                        Sign In
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Register;
