import "./App.css";

function App() {
  const test = () => {
    chrome.runtime.sendMessage('123', (response) => {
      console.log('send message: ', response)
    })
  }
  return (
    <div className="App">
      <button onClick={test}>通讯测试</button>
    </div>
  );
}

export default App;
