import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ColorList from "./ColorList";
import NewColorForm from "./NewColorForm";
import Color from "./Color"

const Routing = () => {

    const initialColors = {
        red: "#FF0000",
        green: "#00FF00",
        blue: "#0000FF"
    };
    const [colors, updateColors] = useState(initialColors);

    const addColor = (newColor) => {
        updateColors(prevColors => ({ ...prevColors, ...newColor }))
    }

    return (
        <Routes>
            <Route path="/colors" element={<ColorList colors={colors} />} />
            <Route path="/colors/new" element={<NewColorForm addColor={addColor} />} />
            <Route path="/colors/:color"  element={<Color colors={colors} />}/>
            <Route path="*" element={<Navigate replace to="/colors" />} />
        </Routes>
    )
}

export default Routing;