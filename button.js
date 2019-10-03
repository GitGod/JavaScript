function App() {
  return (
    <button onClick={() => alert('Kliknięto!')}>Kliknij!</button>
  );
}
ReactDOM.render(<App />, document.getElementById("app"));
