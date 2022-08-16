import React from "react";

//need to use state in this component so i have to use class based component
class SearchBar extends React.Component {

  state = {term: ''};

  //this prevents the page to refresh when you hit 'enter' in the text field
  onFormSubmit = (event) => {
    event.preventDefault();
    //cannot read properties of undefined (reading 'state) when you dont have onFormSubmit as a regular function and not an arrow function
    //but because it's an arrow function now, this will work fine.
    console.log("this is from SearchBar Compnent: " + this.state.term);

    //props in class based component
    //communicated back to the parent component by using this callback
    this.props.runWhenUserSubmits(this.state.term);
  }


  render() {
    return (
      <div className="ui segment">

        {/* this is another way of getting pass by the undefined error. we can pass it as a arrow function and add () at the end. with this method you don't need to ahve onFormSubmit as an arrow function */}
        {/* <form className="ui form" onSubmit={(event) => this.onFormSubmit()}> */}
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            {/* this.onInputChange is a reference where this.onInputChange() will be called when we render. this.onInputChange will not automatically work when we render this component. this is a callback function  */}
            {/* it's an uncontrolled form element*/}
            <input
              type="text"
              //onChange={this.onInputChange} //it must be onChange
              //onChange={(e) => {console.log(e.target.value)}}
              value={this.state.term}
              onChange={(e) => {this.setState({term: e.target.value})}}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
