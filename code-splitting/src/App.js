import React from "react";
import "./App.css";
import Page1 from "./components/Page1";
import AsyncComponent from "./components/AsyncComponent";

class App extends React.PureComponent {
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }
  state = {
    route: "Page1",
  };
  _onRouteChange = (route) => {
    this.setState({ route: route });
  };
  render() {
    if (this.state.route === "Page1") {
      return <Page1 onRouteChange={this._onRouteChange} />;
    }
    console.log(this.state.route);
    let AsyncPage = AsyncComponent(() =>
      import(`./components/${this.state.route}`)
    );
    return <AsyncPage onRouteChange={this._onRouteChange} />;
  }
}

export default App;
