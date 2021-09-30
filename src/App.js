import "./App.css";

function App() {
  const test = () => {
    // @ts-ignore
    chrome.runtime.sendMessage('bkabehjfcepfcmiahcppfnjfeflfheml', (response) => {
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
