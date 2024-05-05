CREATE TABLE drinks(
  id INTEGER PRIMARY KEY,
  title TEXT NOT NULL,
  image TEXT NOT NULL,
  description TEXT NOT NULL
);

CREATE TABLE ingredients(
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE drink_ingredients(
  drink_id INTEGER NOT NULL,
  ingredient_id INTEGER NOT NULL,
  FOREIGN KEY(drink_id) REFERENCES drinks(id),
   FOREIGN KEY(ingredient_id) REFERENCES ingredients(id)
);

INSERT INTO drink_ingredients(drink_id, ingredient_id)
Values(1, 2)
INSERT INTO drink_ingredients(drink_id, ingredient_id)
Values(1, 3)


INSERT INTO drinks (id, title, image, description)
Values (1, 'Black Coffee', 'https://images.unsplash.com/photo-1494314671902-399b18174975?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'Svart kaffe är så enkelt som det kan bli med malda kaffebönor dränkta i hett vatten, serverat varmt. Och om du vill låta fancy kan du kalla svart kaffe med sitt rätta namn: café noir.');
INSERT INTO drinks (id, title, image, description)
Values (2, 'Latte', 'https://images.unsplash.com/photo-1561882468-9110e03e0f78?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxhdHRlfGVufDB8fDB8fHww', 'Som den mest populära kaffedrycken där ute består latte av en skvätt espresso och ångad mjölk med bara en gnutta skum. Den kan beställas utan smak eller med smak av allt från vanilj till pumpa kryddor.');
INSERT INTO drinks (id, title, image, description)
Values (3, 'Caramel Latte', 'https://images.unsplash.com/photo-1599398054066-846f28917f38?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'Om du gillar latte med en speciell smak kan karamell latte vara det bästa alternativet för att ge dig en upplevelse av den naturliga sötman och krämigheten hos ångad mjölk och karamell.');
INSERT INTO drinks (id, title, image, description)
Values (4, 'Cappuccino', 'https://images.unsplash.com/photo-1557006021-b85faa2bc5e2?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'Cappuccino är en latte som är gjord med mer skum än ångad mjölk, ofta med ett strö av kakaopulver eller kanel på toppen. Ibland kan du hitta variationer som använder grädde istället för mjölk eller sådana som tillsätter smakämnen också.');
INSERT INTO drinks (id, title, image, description)
Values (5, 'Americano', 'https://images.unsplash.com/photo-1532004491497-ba35c367d634?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'Med en liknande smak som svart kaffe består americano av en espresso skott utspätt med hett vatten.');
INSERT INTO drinks (id, title, image, description)
Values (6, 'Espresso', 'https://images.unsplash.com/photo-1579992357154-faf4bde95b3d?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'Ett espressoskott kan serveras ensamt eller användas som grund för de flesta kaffedrycker, som latte och macchiato.');
INSERT INTO drinks (id, title, image, description)
Values (7, 'Macchiato', 'https://images.unsplash.com/photo-1557772611-722dabe20327?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'Macchiaton är en annan espresso-baserad dryck som har en liten mängd skum på toppen. Det är det glada mellanrummet mellan en cappuccino och en doppio.');
INSERT INTO drinks (id, title, image, description)
Values (8, 'Mocha', 'https://images.unsplash.com/photo-1607260550778-aa9d29444ce1?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'För alla chokladälskare där ute kommer ni att bli förälskade i en mocha. Mocha är en choklad-espressodryck med ångad mjölk och skum.');
INSERT INTO drinks (id, title, image, description)
Values (9, 'Hot Chocolate', 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGhvdCUyMGNob2NvbGF0ZXxlbnwwfHwwfHx8MA%3D%3D', 'Under kalla vinterdagar får en kopp varm choklad dig att känna dig bekväm och lycklig. Den får dig också att må bra eftersom den innehåller energigivande koffein.');
INSERT INTO drinks (id, title, image, description)
Values (10, 'Chai Latte', 'https://images.unsplash.com/photo-1578899952107-9c390f1af1b7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNoYWklMjBsYXR0ZXxlbnwwfHwwfHx8MA%3D%3D', 'Om du letar efter en smakfull varm dryck mitt i vintern, välj chai latte. Kombinationen av kardemumma och kanel ger en underbar smak.');
INSERT INTO drinks (id, title, image, description)
Values (11, 'Matcha Latte', 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWF0Y2hhJTIwbGF0dGV8ZW58MHx8MHx8fDA%3D', 'Matcha latte är en grön, hälsosam kaffedryck med finkrossad matcha-te och mjölk, erbjuder mild sötma, en unik smak och en mild koffeinkick.');
INSERT INTO drinks (id, title, image, description)
Values (12, 'Seasonal Brew', 'https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg1fHxibGFjayUyMGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D', 'Säsongs kaffe med olika smaktoner som karamell, frukt och choklad');
INSERT INTO drinks (id, title, image, description)
Values (13, 'Svart Te', 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRlYXxlbnwwfHwwfHx8MA%3D%3D', 'Svart te föddes i Kina. Det är tillverkat av blad från en växt som kallas Camellia och kan smaksättas olika med frukter till exempel. En trevlig, varm, smakfull och aromatisk dryck som passar till vardagen.');
INSERT INTO drinks (id, title, image, description)
Values (14, 'Islatte', 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aWNlZCUyMGxhdHRlfGVufDB8fDB8fHww', 'Iced latte är en kyld kaffedryck som görs genom att blanda espresso och kyld mjölk. Den serveras med isbitar och är även känd som cafè latte iced eller latte on the rocks.');
INSERT INTO drinks (id, title, image, description)
Values (15, 'Islatte Mocha', 'https://images.unsplash.com/photo-1642647391072-6a2416f048e5?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGljZWQlMjBtb2NoYSUyMGxhdHRlfGVufDB8fDB8fHww', 'Iced latte Mocha är en kombination av latte och mocha, som i sig är en kombination av choklad och kaffe. Den ger kalla dryckälskare en läcker upplevelse av choklad och kaffe.');
INSERT INTO drinks (id, title, image, description)
Values (16, 'Frapino Caramel', 'https://images.unsplash.com/photo-1662047102608-a6f2e492411f?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJhcGlubyUyMGNhcmFtZWx8ZW58MHx8MHx8fDA%3D', 'Det är en blandad eller bättre sagt skakad kaffe med vispad grädde på toppen. Ett måste för varma sommardagar.');
INSERT INTO drinks (id, title, image, description)
Values (17, 'Frapino Mocka', 'https://images.unsplash.com/photo-1530373239216-42518e6b4063?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJhcGlubyUyMG1vY2hhfGVufDB8fDB8fHww', 'Ännu en berömd och utsökt kall dryck för dem som föredrar choklad. Tänk dig smaken av en shake med choklad och vispad grädde på toppen.');
INSERT INTO drinks (id, title, image, description)
Values (18, 'Apelsinjuice', 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fG9yYW5nZSUyMGp1aWNlfGVufDB8fDB8fHww', 'Vi har inget att säga om vår nypressade apelsinjuice. Du måste prova den själv.');
INSERT INTO drinks (id, title, image, description)
Values (19, 'Frozen Lemonade', 'https://images.unsplash.com/photo-1523371054106-bbf80586c38c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxlbW9uYWRlJTIwd2l0aCUyMGljZXxlbnwwfHwwfHx8MA%3D%3D', 'Frozen lemonade är en uppfriskande sommardryck som kombinerar färskpressad citronsaft, is och sötning till en svalkande, syrlig och sötsyrlig smaksensation.');
INSERT INTO drinks (id, title, image, description)
Values (20, 'Lemonad', 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGVtb25hZGV8ZW58MHx8MHx8fDA%3D', 'Var känd i Paris först och blev sedan mycket populär i hela Europa. Denna söta, färglösa, kolsyrade dryck görs genom att blanda citronsaft och kolsyrat vatten.');



INSERT INTO ingredients (id, name)
Values (1, 'Kaffe');
INSERT INTO ingredients (id, name)
Values (2, 'Espresso');
INSERT INTO ingredients (id, name)
Values (3, 'Ångad mjölk');
INSERT INTO ingredients (id, name)
Values (4, 'Karamellsirap');
INSERT INTO ingredients (id, name)
Values (5, 'Foam');
INSERT INTO ingredients (id, name)
Values (6, 'Hett vatten');
INSERT INTO ingredients (id, name)
Values (7, 'Choklad');
INSERT INTO ingredients (id, name)
Values (8, 'Mjölk');
INSERT INTO ingredients (id, name)
Values (9, 'Te');
INSERT INTO ingredients (id, name)
Values (10, 'Ingefära');
INSERT INTO ingredients (id, name)
Values (11, 'Kardemumma');
INSERT INTO ingredients (id, name)
Values (12, 'Kanel');
INSERT INTO ingredients (id, name)
Values (13, 'Matcha-pulver');
INSERT INTO ingredients (id, name)
Values (14, 'Socker');
INSERT INTO ingredients (id, name)
Values (15, 'Is');
INSERT INTO ingredients (id, name)
Values (16, 'Sirap');
INSERT INTO ingredients (id, name)
Values (17, 'Vispgrädde');
INSERT INTO ingredients (id, name)
Values (18, 'Karamellsås');
INSERT INTO ingredients (id, name)
Values (19, 'Cocoa');
INSERT INTO ingredients (id, name)
Values (20, 'Färska Apelsiner');
INSERT INTO ingredients (id, name)
Values (21, 'Citronsaft');
INSERT INTO ingredients (id, name)
Values (22, 'Kolsyrat vatten');
INSERT INTO ingredients (id, name)
Values (23, 'Honung');



INSERT INTO drink_ingredients (drink_id, ingredient_id)
Values (1, 1);
INSERT INTO drink_ingredients (drink_id, ingredient_id)
Values (2, 2);
INSERT INTO drink_ingredients (drink_id, ingredient_id)
Values (2, 3);
INSERT INTO drink_ingredients (drink_id, ingredient_id)
Values (3, 2);
INSERT INTO drink_ingredients (drink_id, ingredient_id)
Values (3, 3);
INSERT INTO drink_ingredients (drink_id, ingredient_id)
Values (3, 4);
INSERT INTO drink_ingredients (drink_id, ingredient_id)
Values (4, 2);
INSERT INTO drink_ingredients (drink_id, ingredient_id)
Values (4, 3);
INSERT INTO drink_ingredients (drink_id, ingredient_id)
Values (4, 5);
INSERT INTO drink_ingredients (drink_id, ingredient_id)
Values (5, 2);
INSERT INTO drink_ingredients (drink_id, ingredient_id)
Values (5, 6);
INSERT INTO drink_ingredients (drink_id, ingredient_id)
Values (6, 2);
INSERT INTO drink_ingredients (drink_id, ingredient_id)
Values (7, 2);
INSERT INTO drink_ingredients (drink_id, ingredient_id)
Values (7, 5);
INSERT INTO drink_ingredients (drink_id, ingredient_id)
Values (8, 2);
INSERT INTO drink_ingredients (drink_id, ingredient_id)
Values (8, 3);
INSERT INTO drink_ingredients (drink_id, ingredient_id)
Values (8, 7);
INSERT INTO drink_ingredients (drink_id, ingredient_id)
Values (9, 7);
INSERT INTO drink_ingredients (drink_id, ingredient_id)
Values (9, 8);
INSERT INTO drink_ingredients (drink_id, ingredient_id)
Values (10, 9);
INSERT INTO drink_ingredients (drink_id, ingredient_id)
Values (10, 8);
INSERT INTO drink_ingredients (drink_id, ingredient_id)
Values (10, 10);
INSERT INTO drink_ingredients (drink_id, ingredient_id)
Values (10, 11);
INSERT INTO drink_ingredients (drink_id, ingredient_id)
Values (10, 12);
INSERT INTO drink_ingredients (drink_id, ingredient_id)
Values (11, 13);
INSERT INTO drink_ingredients (drink_id, ingredient_id)
Values (11, 8);
INSERT INTO drink_ingredients (drink_id, ingredient_id)
Values (11, 14);
INSERT INTO drink_ingredients (drink_id, ingredient_id)
Values (12, 1);
INSERT INTO drink_ingredients (drink_id, ingredient_id)
Values (13, 9);
INSERT INTO drink_ingredients (drink_id, ingredient_id)
Values (14, 2);
INSERT INTO drink_ingredients (drink_id, ingredient_id)
Values (14, 8);
INSERT INTO drink_ingredients (drink_id, ingredient_id)
Values (14, 15);
INSERT INTO drink_ingredients (drink_id, ingredient_id)
Values (14, 16);
INSERT INTO drink_ingredients (drink_id, ingredient_id)
Values (15, 2);
INSERT INTO drink_ingredients (drink_id, ingredient_id)
Values (15, 15);
INSERT INTO drink_ingredients (drink_id, ingredient_id)
Values (15, 8);
INSERT INTO drink_ingredients (drink_id, ingredient_id)
Values (15, 7);
INSERT INTO drink_ingredients (drink_id, ingredient_id)
Values (16, 1);
INSERT INTO drink_ingredients (drink_id, ingredient_id)
Values (16, 15);
INSERT INTO drink_ingredients (drink_id, ingredient_id)
Values (16, 8);
INSERT INTO drink_ingredients (drink_id, ingredient_id)
Values (16, 4);
INSERT INTO drink_ingredients (drink_id, ingredient_id)
Values (16, 17);
INSERT INTO drink_ingredients (drink_id, ingredient_id)
Values (16, 18);
INSERT INTO drink_ingredients (drink_id, ingredient_id)
Values (17, 1);
INSERT INTO drink_ingredients (drink_id, ingredient_id)
Values (17, 15);
INSERT INTO drink_ingredients (drink_id, ingredient_id)
Values (17, 8);
INSERT INTO drink_ingredients (drink_id, ingredient_id)
Values (17, 19);
INSERT INTO drink_ingredients (drink_id, ingredient_id)
Values (17, 17);
INSERT INTO drink_ingredients (drink_id, ingredient_id)
Values (18, 20);
INSERT INTO drink_ingredients (drink_id, ingredient_id)
Values (18, 15);
INSERT INTO drink_ingredients (drink_id, ingredient_id)
Values (19, 21);
INSERT INTO drink_ingredients (drink_id, ingredient_id)
Values (19, 15);
INSERT INTO drink_ingredients (drink_id, ingredient_id)
Values (19, 14);
INSERT INTO drink_ingredients (drink_id, ingredient_id)
Values (20, 21);
INSERT INTO drink_ingredients (drink_id, ingredient_id)
Values (20, 22);
INSERT INTO drink_ingredients (drink_id, ingredient_id)
Values (20, 23);
