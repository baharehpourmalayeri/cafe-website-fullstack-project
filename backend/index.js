const express = require("express"),
  path = require("path");
const sqlite = require("sqlite"),
  sqlite3 = require("sqlite3");
var cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(path.resolve(), "dist")));
let drinks = [];

let database;
(async () => {
  database = await sqlite.open({
    driver: sqlite3.Database,
    filename: "test.sqlite",
  });
  await database.run("PRAGMA foreign_keys = ON");

  console.log("Redo att göra databasanrop");
})();

const get_ingredient = async (name) => {
  let ingredient = await database.get(
    "SELECT * FROM ingredients WHERE name = ?",
    [name]
  );
  if (!ingredient) {
    await database.run("INSERT INTO ingredients(name) values(?)", [name]);

    ingredient = await database.get(
      "SELECT * FROM ingredients WHERE name = ?",
      [name]
    );
  }

  return ingredient;
};

//to get all the drinks
app.get("/drinks", async (request, response) => {
  drinks = await database.all("SELECT * FROM drinks ORDER BY id");

  for (const drink of drinks) {
    let ingredients = await database.all(
      "SELECT name FROM ingredients i join drink_ingredients di on(i.id=di.ingredient_id) WHERE di.drink_id =? ",
      [drink.id]
    );

    drink.ingredients = ingredients.map((i) => i.name);
  }

  response.json(drinks);
});

//to get the drink by the given id in query parameter
app.get("/drink", async (request, response) => {
  const { id } = request.query;
  if (!id) {
    return response.status(400).json({ error: "Id is required." });
  }
  let drink = await database.get("SELECT * FROM drinks WHERE id=?", [id]);
  if (!drink) {
    return response.status(404).json({ error: "Drink does not exist!" });
  }

  let ingredients = await database.all(
    "SELECT name FROM ingredients i join drink_ingredients di on(i.id=di.ingredient_id) WHERE di.drink_id =? ",
    [drink.id]
  );

  drink.ingredients = ingredients.map((i) => i.name);

  return response.json(drink);
});
//to create a new drink
app.post("/drink", async (request, response) => {
  const { id, title, image, description, ingredients } = request.body;
  if (!id || !title || !image || !description || !ingredients) {
    return response.status(400).json({ error: "Bad request!" });
  }
  const repeatedId = await database.get("SELECT * FROM drinks WHERE id=?", [
    id,
  ]);
  if (repeatedId) {
    return response.status(400).json({ error: "Duplicated id" });
  }
  await database.run(
    "INSERT INTO drinks (id, title, image, description) VALUES(?, ?, ?, ?)",
    [id, title, image, description]
  );
  for (const name of ingredients) {
    const ingredient = await get_ingredient(name);
    await database.run(
      "INSERT INTO drink_ingredients (drink_id, ingredient_id) VALUES(?, ?)",
      [id, ingredient.id]
    );
  }

  return response.status(201).json({ Success: true });
});

//to edit a drink
app.put("/drink/:id", async (request, response) => {
  const { id } = request.params;
  const { title, image, description, ingredients } = request.body;

  if (!id || !title || !image || !description || !ingredients) {
    response.status(400).json({ error: "Bad request!" });
    return;
  }
  await database.run(
    "UPDATE drinks SET title=?, image=?, description=? WHERE id=?",
    [title, image, description, id]
  );
  await database.run("DELETE FROM drink_ingredients WHERE drink_id=?", [id]);
  for (const name of ingredients) {
    const ingredient = await get_ingredient(name);
    await database.run(
      "INSERT INTO drink_ingredients (drink_id, ingredient_id) VALUES(?, ?)",
      [id, ingredient.id]
    );
  }

  response.status(200).json({ success: true });
});
// delete a drink
app.delete("/drink/:id", async (request, response) => {
  const { id } = request.params;
  await database.run("DELETE FROM drink_ingredients WHERE drink_id=?", [id]);

  const deletedDrink = await database.run("DELETE FROM drinks WHERE id=?", [
    id,
  ]);
  if (deletedDrink.changes === 0) {
    response.status(404).json({ error: "Drink not found" });
    return;
  }

  response.status(200).json({ success: true });
});
app.listen(8080, () => {
  console.log("Redo på http://localhost:8080/");
});
