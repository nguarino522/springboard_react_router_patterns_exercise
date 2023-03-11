import React from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import "./Color.css";

function Color({ colors }) {
    const { color } = useParams();

    if (color in colors) {
        return (
            <div className="Color" style={{ backgroundColor: colors[color] }}>
                <p>this is {color}.</p>
                <p>Isn't it beautiful?</p>
                <p>
                    <Link to="/">Go back</Link>
                </p>
            </div>
        )
    } else {
        return (
            <Navigate to="/colors" />
        )
    }

}

export default Color;
