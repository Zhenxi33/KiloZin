import Card from "./components/Card.jsx";
import { MIT } from "./data.js";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <h1>✨ MIT Crew ✨</h1>
        <p>Meet the legendary members of our team!</p>
      </header>
      
      <main>
        <div className="cards-grid">
          {MIT.map((member) => (
            <Card key={member.id} member={member} />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;