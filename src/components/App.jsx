import React, { Component } from "react";
import SearchBar from "./SearchBar";
import Gif from "./Gif";
import GifList from "./GifList";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [ { id: "3o72EU9yuLyplAjD8I" }, { id: "3o72EU9yuLyplAjD8I" } ],
      selectedGifId: "3o72EU9yuLyplAjD8I"
    };
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;
