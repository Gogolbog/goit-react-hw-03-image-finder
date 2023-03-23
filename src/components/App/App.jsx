import { Component } from "react";
import Searchbar from "../Searchbar/Searchbar";
import { AppWrapper } from "./AppStyled";


class App extends Component {
  state = {
    searchValue: "",
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchValue !== this.props.searchValue) {

    }
  }

  render() {
    return (
      <AppWrapper>
        <Searchbar />
      </AppWrapper>
    );
  }
}

export default App;