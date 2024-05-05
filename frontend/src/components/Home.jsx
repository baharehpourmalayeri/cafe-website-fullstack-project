import "../css/Home.css";

function Home() {
  return (
    <>
      <div className="content content-left">
        <div>
          <p>
            På Café e Dolci tror vi att varje kopp kaffe ska vara ett
            mästerverk, och varje ögonblick här ska vara minnesvärt.
          </p>
          <p>
            Våra skickliga baristor skapar dina favoritdrycker med precision och
            passion, vilket garanterar att varje klunk är en upplevelse i sig.
            På Café e Dolci är vi mer än bara ett kafé; vi är en gemenskap.
          </p>
          <p>
            Kom för kaffet, stanna för nöjet och gå härifrån med ett leende på
            läpparna.
          </p>
        </div>
        <picture>
          <source
            media="(min-width:500px)"
            src="/src/assets/images/barista-500w.jpg"
          />
          <source
            media="(min-width:300px)"
            src="/src/assets/images/barista-300w.jpg"
          />
          <img
            className="barista"
            src="/src/assets/images/barista-500w.jpg"
            alt="a barista who makes coffee"
          />
        </picture>
      </div>
      <div className="content content-right">
        <div>
          <p>Men det är inte allt! </p>
          <aside>
            <p>
              Vi har tagit ett steg längre genom att erbjuda en unik blandning
              av underhållning och konstnärlighet. Var med oss på en livlig
              eftermiddag med brädspel, där du kan utmana vänner eller skapa nya
              över ett spel som du väljer.
            </p>
          </aside>
          <p>
            Om du känner dig konstnärlig är canvasmålning en perfekt möjlighet
            att låta din inre Picasso blomstra. Allt du behöver för din
            konstnärliga resa finns här på kaféet - penslar och ett spektrum av
            färger. Din kreativa vision är allt du behöver för att komma igång.
          </p>
          <p>Gå med oss idag och bli en del av något riktigt speciellt!</p>
        </div>
        <picture>
          <source
            media="(min-width:500px)"
            src="/src/assets/images/painting-500w.jpg"
          />
          <source
            media="(min-width:300px)"
            src="/src/assets/images/painting-300w.jpg"
          />
          <img
            className="barista"
            src="/src/assets/images/painting-500w.jpg"
            alt="painting tools"
          />
        </picture>
      </div>
    </>
  );
}

export default Home;
