import Card from "./components/Card.jsx";
import { MIT } from "./data.js";

function App() {
  return (
    <>
      <header>
        <h1>MIT CREW</h1>
        <p>Meet the legendary members of the team!</p>
      </header>
      <main>
        <section className="cards-category">
          <ul className="cards">
            {MIT.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}

export default App;