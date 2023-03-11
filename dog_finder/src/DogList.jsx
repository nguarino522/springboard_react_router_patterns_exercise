import React from "react";
import { Link } from "react-router-dom";
import "./DogList.css";

const DogList = ({ dogs }) => {
    return (
        <div className="DogList">
            <div className="DogList-title">
                <h1 >
                    LOOK AT ALL OF THE CUTE DOGS! CLICK FOR MORE INFO!
                </h1>
            </div>
            <div className="DogList-dogs">
                {dogs.map(d => (
                    <div className="DogList-dog" key={d.name}>
                        <img src={d.src} alt={d.name} />
                        <h3>
                            <Link to={`/dogs/${d.name.toLowerCase()}`}>{d.name}</Link>
                        </h3>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DogList;