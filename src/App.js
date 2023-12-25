import "./index.css";
import Container from "./components/Container";

function App() {
  return (
    <div className="App">
      <Container
        colors={{
          colorOne: "blue",
          colorTwo: "red",
          colorThree: "silver",
          colorFour: "purple",
          colorFive: "green",
          colorSix: "pink",
          number: 1,
          text: "hello",
        }}
      />

      <Container
        colors={{
          colorOne: "pink",
          colorTwo: "blue",
          colorThree: "pink",
          colorFour: "silver",
          colorFive: "green",
          colorSix: "red",
          number: 1,
          text: "click",
        }}
      />

      <Container
        colors={{
          colorOne: "orange",
          colorTwo: "silver",
          colorThree: "green",
          colorFour: "yellow",
          colorFive: "brown",
          colorSix: "coral",
          number: 1,
          text: "here",
        }}
      />
    </div>
  );
}

export default App;
