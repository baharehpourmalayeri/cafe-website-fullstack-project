import Contact from "./components/Contact";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Admin from "./components/Admin";

import {
  createHashRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";

function Root() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Hem</Link>
            </li>
            <li>
              <Link to="/menu">Meny</Link>
            </li>
            <li>
              <Link to="/contact">Kontakt & Övrigt</Link>
            </li>
            <li>
              <Link to="/admin">Kaféhantering</Link>
            </li>
          </ul>
        </nav>
        <div id="lang">
          <a href="#">
            <img
              src="/src/assets/images/united-kingdom.png"
              alt="english-flag"
            />
          </a>
          <a href="#">
            <img src="/src/assets/images/sweden.png" alt="swedish-flag" />
          </a>
        </div>
      </header>
      <main>
        <h1>Café E Dolci</h1>
        <h6>Rise & sip</h6>
        <h6 id="welcome"> Välkommen till oss på Café e Dolci</h6>
        <Outlet />
      </main>
      <footer className="footer">
        <div className="address">
          <p>
            Värmlandsgatan 16 <br />
            Göteborg
          </p>
        </div>
        <div className="copy-right">
          <p>Copyright © Café e Dolci 2023</p>
        </div>
        <div>
          <p className="connection">Hitta oss på:</p>
          <div className="icon">
            <a target="_blank" href="#">
              <img
                src="/src/assets/images/facebook.svg"
                alt="facebook"
                width="50"
              />
            </a>
            <a
              target="_blank"
              href="https://instagram.com/cafeedolcii?igshid=NzZhOTFlYzFmZQ=="
            >
              <img
                src="/src/assets/images/instagram.svg"
                alt="instagram"
                width="50"
              />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
function App() {
  const router = createHashRouter([
    {
      children: [
        { element: <Home />, path: "/" },
        { element: <Menu />, path: "/menu" },
        { element: <Contact />, path: "/contact" },
        { element: <Admin />, path: "/admin" },
      ],
      element: <Root />,
    },
  ]);

  return <RouterProvider router={router} />;
}
export default App;
