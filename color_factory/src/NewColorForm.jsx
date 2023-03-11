import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NewColorForm.css"

const NewColorForm = ({addColor}) => {
    
    const [form, updateForm] = useState({name: "", hex:"#ffffff"});
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        updateForm( form => ({
            ...form, [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addColor({ [form.name]: form.hex });
        navigate("/colors");
    }
    
    return (
        <div className="NewColorForm">
            <form onSubmit={handleSubmit}>
                <div className="NewBoxForm-form-section">
                    <label htmlFor="name">Color Name: </label>
                    <input id="name" name="name" onChange={handleChange} value={form.name} />
                </div>
                <div className="NewBoxForm-form-section">
                    <label htmlFor="hex">Color Value: </label>
                    <input id="hex" type="color" name="hex" onChange={handleChange} value={form.hex} />
                </div>
                <input type="Submit" value="Add this color" readOnly />
            </form>
        </div>
    )
}

export default NewColorForm;
