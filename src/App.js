import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./Recipe";

function App() {
  const APP_ID = "b52397b0";
  const APP_KEY = "de814a8d8bde0d4e9a2d7f7df2ae56c1";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  //const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(() => {
    getRecipes();
    console.log("we are fetching data");
    // eslint-disable-next-line
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );

    const data = await response.json();

    console.log(data.hits);
    setRecipes(data.hits);
    console.log(data.hits);
  };

  function updateSearch(e) {
    setSearch(e.target.value);
  }

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <h1 className="header">Recipe App</h1>
        <input
          type="text"
          className="search-bar"
          value={search}
          onChange={updateSearch}
        />
        <button type="submit" className="search-button">
          Search
        </button>
        <p className="header description">
          Write the ingredient you want and click on "Search" to view recipes!!!
        </p>
      </form>
      {recipes.map((recipe) => (
        <a
          className="recipes"
          href="https://www.facebook.com/profile.php?id=100006855102607"
          target="_blank"
        >
          <Recipe
            data={recipe}
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        </a>
      ))}
    </div>
  );
}

export default App;
