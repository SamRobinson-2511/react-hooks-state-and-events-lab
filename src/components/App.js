import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [isLight, setIsLight] = useState(true)
  // const [isDark, setIsDark] = useState(false)

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = isLight ? "App light" : "App dark"
  

const handleClick = () => setIsLight(!isLight)
  // function handleClickCount(){
  //   setCount(count+1)
  // }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{isLight ? "Dark":"Light"} Mode </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
