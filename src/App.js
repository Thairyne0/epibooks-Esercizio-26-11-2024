import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavBar from "./Components/MyNavBar";
import MyFooter from "./Components/MyFooter";

function App() {
  return (
    <div className="App">
      <header>
        <MyNavBar></MyNavBar>
      </header>
      <main></main>
      <footer>
        <MyFooter></MyFooter>
      </footer>
    </div>
  );
}

export default App;
