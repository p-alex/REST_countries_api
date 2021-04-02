import "./App.scss";
import Homepage from "./layout/Homepage/Homepage";
import { BrowserRouter, Route } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" exact component={Homepage}></Route>
      </div>
    </BrowserRouter>
  );
};

export default App;
