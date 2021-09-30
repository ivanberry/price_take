import "./App.css";

function App() {
  const test = () => {
    window.postMessage({ type: "USER_STORAGE", text: "Hello from the webpage!" }, "*");
  }
  return (
    <div className="App">
      <button onClick={test}></button>
    </div>
  );
}

export default App;
