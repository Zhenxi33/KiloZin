import Place from "./components/Place.jsx";
import { AVAILABLE_PLACES } from "./data.js";

function App() {
  return (
    <>
      <header>
        <h1>PlacePicker</h1>
        <p>Where would you like to go?</p>
      </header>
      <main>
        <section className="places-category">
          <ul className="places">
            {AVAILABLE_PLACES.map((place) => (
              <li key={place.id} className="place-item">
                <button>
                  <img src={place.image.src} alt={place.image.alt} />
                  <h3>{place.title}</h3>
                </button>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}

export default App;
