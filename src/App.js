import Homepage from "./layout/Homepage/Homepage";
import CountryPage from "./layout/CountryPage/CountryPage";
import { BrowserRouter, Route } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" exact component={Homepage}></Route>
        <Route path="/:country" exact component={CountryPage}></Route>
      </div>
    </BrowserRouter>
  );
};

export default App;
