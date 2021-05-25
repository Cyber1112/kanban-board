import React, { useContext } from "react";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import DrgDrpContext from "./components/information/DrpContext";
import { Route, Switch } from "react-router-dom";
import Description from "./components/Description";

function App() {
  const { state } = useContext(DrgDrpContext);
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" render={() => <Body state={state} />} />
        <Route
          path="/:cardId"
          render={(props) => <Description state={state} {...props} />}
        />
      </Switch>

      <Footer state={state} />
    </div>
  );
}

export default App;
