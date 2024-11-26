import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavBar from "./Components/MyNavBar";
import MyFooter from "./Components/MyFooter";
import MyBooksCards from "./Components/MyBooksCards";

function App() {
  return (
    <div className="App">
      <header>
        <MyNavBar></MyNavBar>
      </header>
      <main>
        <MyBooksCards></MyBooksCards>
      </main>
      <footer>
        <MyFooter></MyFooter>
      </footer>
    </div>
  );
}

export default App;
