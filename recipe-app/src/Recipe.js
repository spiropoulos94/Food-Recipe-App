import React from "react";
import style from "./recipe.module.css";

function Recipe({ title, calories, image, ingredients, data }) {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <p>{calories}</p>
      <ul>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
      <img className={style.image} src={image} alt="Food" />
      {console.log(data)}
    </div>
  );
}

export default Recipe;
