import React from "react";
import { Provider } from "react-redux";
import store from "./Store";
import Counter from "./Counter";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Counter/>
      </Provider>
    </div>
  );
}

export default App;
