import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import DogList from "./DogList";
import FilterDogDetails from './FilterDogDetails';

const Routing = ({dogs}) => {
    return (
        <Routes>
            <Route exact path="/dogs" element={<DogList dogs={dogs} />} />
            <Route path="/dogs/:name" element={<FilterDogDetails dogs={dogs} />} />
            <Route path="*" element={<Navigate replace to="/dogs" />} />
        </Routes>
        // <h1>test</h1>
    )
}

export default Routing;