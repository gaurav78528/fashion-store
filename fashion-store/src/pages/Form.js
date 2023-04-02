import React, { useState } from "react";

const initialDetails = {
  name: "",
  colors: [
    {
      color: "Black",
      images: [],
    },
    {
      color: "Blue",
      images: [],
    },
    {
      color: "Red",
      images: [],
    },
  ],
};

const Form = () => {
  const [product, setProduct] = useState(initialDetails);
  const [color, setColor] = useState("");
  console.log("color", color);

  const handleChangeForm = () => {};

  const handleChangeColor = () => {};

  return (
    <>
      <input type="text" onChange={"sdf"} placeholder="Product title" />
      <select onChange={(e) => setColor(e.target.value)}>
        <option value="">Please Select color</option>
        <option value="black">Black</option>
        <option value="blue">Blue</option>
        <option value="red">Red</option>
      </select>
      <input type="text" name="image1" placeholder="image 1" />
      <input type="text" name="image2" placeholder="image 2" />
      <input type="text" name="image3" placeholder="image 3" />
      <button>Add Veraity</button>
    </>
  );
};

export default Form;
