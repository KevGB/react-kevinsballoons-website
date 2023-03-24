import React, { useState } from "react";
import { FormGroup } from "reactstrap";

const ColorPickerForm = () => {
  const [numColors, setNumColors] = useState("");
  const [specifyColor, setSpecifyColor] = useState("");

  const handleNumColorsChange = (e) => {
    setNumColors(e.target.value);
  };

  const handleChange = (e) => {
    setSpecifyColor(e.target.value);
  };

  return (
    <FormGroup row style={{ maxWidth: 400 }}>
      <select
        name="numColors"
        id="numColors"
        className="form-control"
        onChange={handleNumColorsChange}
        value={numColors}
      >
        <option value=""></option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
      </select>
      <FormGroup className="row mt-n2 ">
        <p
          className="text-dark"
          id="pickerTitle"
          style={{ display: numColors >= 1 ? "block" : "none" }}
        >
          Click the black rectangles to pick your colors:
        </p>
        <input
          type="color"
          id="colorPicker0"
          className="col form-control colorPicker"
          style={{ display: numColors >= 1 ? "block" : "none" }}
        />
        <input
          type="color"
          id="colorPicker1"
          className="col form-control colorPicker"
          style={{ display: numColors >= 2 ? "block" : "none" }}
        />
        <input
          type="color"
          id="colorPicker2"
          className="col form-control colorPicker"
          style={{ display: numColors >= 3 ? "block" : "none" }}
        />
        <input
          type="color"
          id="colorPicker3"
          className="col form-control colorPicker"
          style={{ display: numColors >= 4 ? "block" : "none" }}
        />
        <input
          type="color"
          id="colorPicker4"
          className="col form-control colorPicker"
          style={{ display: numColors >= 5 ? "block" : "none" }}
        />
        <input
          type="color"
          id="colorPicker5"
          className="col form-control colorPicker"
          style={{ display: numColors >= 6 ? "block" : "none" }}
        />
      </FormGroup>
      <input
        type="text"
        className="form-control mt-1"
        id="specifyColor"
        value={specifyColor}
        onChange={handleChange}
        placeholder="...or type in your prefered colors here"
        style={{ display: numColors ? "block" : "none" }}
      />
    </FormGroup>
  );
};

export default ColorPickerForm;
