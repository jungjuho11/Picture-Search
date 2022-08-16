//THIS WILL SHOW ONE IMAGE BY ITSELF
import React from "react";
import ImageList from "./ImageList";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {spans: 0};

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    //console.log(this.imageRef);
    //console.log(this.imageRef.current.clientHeight); //this will print out 0 because it is trying to console log even before the images loads up on DOM
    //SOLUTION TO THIS PROBLEM
    this.imageRef.current.addEventListener("load", this.setSpans); //we are using callback to eventlistener so our setSpan has to be arrow function
    //console.log(this.imageRef.current.clientHeight);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    console.log(height);

    const spans = Math.ceil(height / 10);

    this.setState({spans: spans});

  };

  render() {
    const { description, urls } = this.props.image;

    return (
      <div style={{gridRowEnd: `span ${this.state.spans}`}}>
        {/* ref is a jsx tag */}
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
