import { useEffect, useState } from "react";
import "../css/Menu.css";

function Menu() {
  const [drinks, setDrinks] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/drinks")
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setDrinks(result);
      });
  });

  return (
    <>
      <div className="menu-bar">
        <h2>Drycker</h2>
      </div>
      <div className="menu-container">
        {drinks &&
          drinks.map((drink, index) => (
            <div key={index} className="menu-item">
              <h4>{drink.title}</h4>
              <img src={drink.image} alt="hot-drink" />
              <div className="menu-show">
                <div className="menu-box">
                  <div>
                    <p className="description">{drink.description}</p>
                    <p className="title-ing">Ingredients:</p>
                    <ul>
                      {drink.ingredients &&
                        drink.ingredients.map((ingredient, ingIndex) => (
                          <li key={ingIndex}>{ingredient}</li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default Menu;
