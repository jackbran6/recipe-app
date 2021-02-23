import "./App.css";
import React, { useEffect, useState } from "react";

const App = () => {
  const APP_ID = "715ed0ed";
  const APP_KEY = "136473b13252ee3659e9a8a57037e4ac";

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = response.json();
    setRecipes(data.hits);
  };

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit"></button>
      </form>
    </div>
  );
};

export default App;
