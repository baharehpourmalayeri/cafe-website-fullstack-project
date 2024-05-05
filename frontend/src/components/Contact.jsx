import "../css/Contact.css";

function Contact() {
  return (
    <>
      <div className="info-container">
        <div className="form">
          <p className="paragraph-1">Har du några förslag eller funderingar?</p>
          <p className="paragraph-2">
            Dela gärna med dig av dem så att du kan hjälpa oss att växa.
          </p>
          <form action="#" method="post">
            <div className="input-box">
              <div>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Förnamn"
                  aria-label="John"
                />
              </div>
              <div>
                <input
                  className="form-control"
                  type="text"
                  placeholder="E-postadress"
                  aria-label="John"
                />
              </div>
              <div>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="20"
                  cols="80"
                  placeholder="Meddelande"
                ></textarea>
              </div>
              <div>
                <input type="submit" value="Skicka" />
              </div>
            </div>
          </form>
        </div>
        <div className="info-box">
          <div className="info-title">
            <h4>Kontakta oss</h4>
          </div>
          <div>
            <p>
              <strong>Telefon:</strong> ********
            </p>

            <p>
              <strong>Epost:</strong> info@cafeedolci.se
            </p>

            <a href="#">
              <p>Café E Dolci på Facebook</p>
            </a>
            <a href="https://instagram.com/cafeedolcii?igshid=NzZhOTFlYzFmZQ=">
              <p>Café E Dolci på Instagram</p>
            </a>
          </div>
          <div className="info-title">
            <h4>Öppettider</h4>
          </div>
          <div>
            <p>
              <span>Måndag-Lördag</span>
              <span className="times">11:00-20:00</span>
            </p>
            <p>
              Söndag <span className="times">12:00-20:00</span>
            </p>
          </div>
          <div className="info-title">
            <h4>Hitta oss</h4>
          </div>
          <p>
            <strong>Adress:</strong>Café E Dolci
          </p>
          <p>Värmlandsgatan 16A</p>
          <p>413 28 Göteborg</p>
          <p>Sweden</p>
        </div>
      </div>
    </>
  );
}
export default Contact;
