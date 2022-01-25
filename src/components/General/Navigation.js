import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({ signOut, signedIn }) => {
    return (
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
            {signedIn ? (
                <Link onClick={() => signOut()} to="/">
                    <p className="mr3 f3 link dim black pa3 pointer white">
                        Sign out
                    </p>
                </Link>
            ) : (
                <Link to="/signin">
                    <p className="mr3 f3 link dim black pa3 pointer white">
                        Sign in
                    </p>
                </Link>
            )}
        </div>
    );
};

export default Navigation;
