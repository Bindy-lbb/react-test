import React from "react";
import "./App.css";

function Test({ children }) {
  return <div>这是一个 {children}</div>;
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Test>
          <div>
zheshishihsi
          </div>
          </Test>
      </div>
    );
  }
}

export default App;
