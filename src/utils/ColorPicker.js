import React, { useState } from "react";
import { FormGroup } from "reactstrap";

const ColorPickerForm = () => {
  const initialValues = {
    colorPicker0: "#ff0000",
    colorPicker1: "#ffa500",
    colorPicker2: "#ffff00",
    colorPicker3: "#008000",
    colorPicker4: "#0000ff",
    colorPicker5: "#4b0082",

  }
  const [numColors, setNumColors] = useState("");
  const [specifyColor, setSpecifyColor] = useState(initialValues);

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
          Click the colors to choose exactly what color(s) you want...
        </p>
        <input
          type="color"
          id="colorPicker0"
          name="colorPicker0"
          value={specifyColor.colorPicker0}
          className="col form-control colorPicker"
          style={{ display: numColors >= 1 ? "block" : "none" }}
        />
        <input
          type="color"
          id="colorPicker1"
          name="colorPicker1"
          value={specifyColor.colorPicker1}

          className="col form-control colorPicker"
          style={{ display: numColors >= 2 ? "block" : "none" }}
        />
        <input
          type="color"
          id="colorPicker2"
          name="colorPicker2"
          value={specifyColor.colorPicker2}
          className="col form-control colorPicker"
          style={{ display: numColors >= 3 ? "block" : "none" }}
        />
        <input
          type="color"
          id="colorPicker3"
          name="colorPicker3"
          value={specifyColor.colorPicker3}
          className="col form-control colorPicker"
          style={{ display: numColors >= 4 ? "block" : "none" }}
        />
        <input
          type="color"
          id="colorPicker4"
          name="colorPicker4"
          value={specifyColor.colorPicker4}
          className="col form-control colorPicker"
          style={{ display: numColors >= 5 ? "block" : "none" }}
        />
        <input
          type="color"
          id="colorPicker5"
          name="colorPicker5"
          value={specifyColor.colorPicker5}
          className="col form-control colorPicker"
          style={{ display: numColors >= 6 ? "block" : "none" }}
        />
      </FormGroup>
      <input
        type="text"
        className="form-control mt-1"
        id="specifyColor"
        
        onChange={handleChange}
        placeholder="...or type in your prefered colors"
        style={{ display: numColors ? "block" : "none" }}
      />
    </FormGroup>
  );
};

export default ColorPickerForm;
