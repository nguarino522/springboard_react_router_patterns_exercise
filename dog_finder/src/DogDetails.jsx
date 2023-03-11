import React from "react";
import { Link, Navigate } from "react-router-dom";
import "./DogDetails.css";

const DogDetails = ({ dog }) => {

    if (!dog) return <Navigate to="/dogs" />

    return (
        <div className="DogDetails">
            <div className="">
                <img src={dog.src} alt={dog.name} />
                <h2>{dog.name} - {dog.age} years old</h2>
                <div className="DogDetails-facts">
                    <ul>
                        {dog.facts.map((fact, i) => (
                            <li key={i}>{fact}</li>
                        ))}
                    </ul>
                </div>
                <Link to="/dogs">Go Back</Link>
            </div>
        </div>
    )
}

export default DogDetails;