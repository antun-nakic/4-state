import logo from "./logo.svg";
import "./App.css";
import Clock from "./components/Clock";
import Brojac from "./components/Brojac";
import TodoApp from "./containers/TodoApp";

function ClockFunkcionalna(props) {
  return (
    <div>
      <h1>Funkcionalna</h1>
      <h2>It is {props.time}.</h2>
    </div>
  );
}

function App() {
  return (
    <>
      <TodoApp />
      <ClockFunkcionalna time={new Date().toLocaleTimeString()} />
      <Clock />
      <Brojac />
    </>
  );
}

export default App;
