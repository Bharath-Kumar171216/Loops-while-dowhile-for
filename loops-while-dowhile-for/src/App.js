import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <button
        type="button"
        onClick={() => {
          for (let i = 1; i <= 500; i++) {
            for (let j = 1; j <= 100; j++) {
              if (
                i == 2 ||
                i == 5 ||
                i == 7 ||
                i == 11 ||
                i == 500 ||
                i == 499 ||
                j == 4 ||
                j == 5 ||
                j == 6 ||
                j == 7 ||
                j == 13 ||
                j == 17 ||
                j == 21 ||
                j == 34 ||
                j == 46
              ) {
                continue;
              }
              console.log(`${i}*${j} = ${i * j}`);
            }
          }
        }}
      >
        Tables form 1-500
      </button>
    </div>
  );
}

export default App;
