import './ImageList.css';
import React from "react";
import ImageCard from './ImageCard';


const ImageList = (props) => {
    //console.log(props);
    //console.log("this just came from imageslist component");
    const images = props.images.map((image) => {
        return <ImageCard key={image.id} image={image} /> 

        //below is an example where you dont have to do image.description, image.id, image.urls.regular
    /* const images = props.images.map(({description, id, urls}) => {
        return <img alt={description} key={id} src={urls.regular} /> */

    });
    
    return <div className='image-list'>{images}</div>;
}

export default ImageList;