import React from "react";
import style from "./recipe.module.css";

function Recipe({ title, calories, image, ingredients, data }) {
  return (
    <div className={style.recipe}>
      <h1 className={style.title}>{title}</h1>
      <p>Calories {calories.toFixed(0)}</p>
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
