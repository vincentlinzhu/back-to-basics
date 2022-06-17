import React, { useState, useEffect } from "react";

const SimpleForm = () => {
  const [name, setName] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [favFruit, setFavFruit] = useState("mango");

  function handleSubmit(e) {
    // Or use Formik
    e.preventDefault();
    console.log("Form submitted with values", { name, isChecked, favFruit });
  }
  return (
    <div>
      <h1>SimpleForm</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label htmlFor="checkbox">Are you enjoying?</label>
        <input
          type="checkbox"
          value="checkbox"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
        />
        <br />
        <label htmlFor="favFruit">Favorite Fruit</label>
        <select
          id="favFruit"
          value={favFruit}
          onChange={(e) => setFavFruit(e.target.value)}
        >
          <option value="mango">Mango</option>
          <option value="banana">Banana</option>
          <option value="watermelon">Watermelon</option>
        </select>

        <br />
        <input type="submit" value="Submit form" />
      </form>
    </div>
  );
};

export default SimpleForm;
