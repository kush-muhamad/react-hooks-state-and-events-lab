import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";



function App() {
  const [isDarkmode,setIsDarkMode] = useState(true);

  function handleToggleButton() {
    setIsDarkMode(!isDarkmode);

  }

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  //const appClass = isDarkmode ? "App dark" : "App light"

  return (
    <div className={isDarkmode ? "App dark" : "App light"}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleToggleButton}>{isDarkmode ?`Light Mode` : `Dark Mode`}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
