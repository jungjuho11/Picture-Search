import React from "react";
import unsplash from "../api/unsplash";
//import axios from "axios";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
    state = {images: []};

    //onSearchSubmit Method
    onSearchSubmit = async (term) => {
    console.log("This is in App.js, but this info is from SearchBar component: " + term);
    const response = await unsplash.get("https://api.unsplash.com/search/photos", {
      params: { query: term }
    });

    console.log(response.data.results);
    console.log('this result data into state called images');
    this.setState({images: response.data.results});
  }//end of onSearchSubmit Method


  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar runWhenUserSubmits={this.onSearchSubmit} />
        Found: {this.state.images.length} images
        <ImageList images={this.state.images}/>
      </div>
    );
  }
}

export default App;
