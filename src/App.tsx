import NavBar from "./components/Navbar/Navbar";
import Routes from "./components/Routes/Routes";

function App() {
  return (
    <div className="App" style={{ background: "#3a3a3a" }}>
      <NavBar />

      <Routes />
      {/* <div>
        <div>Movies</div>
      </div> */}
    </div>
  );
}

export default App;
