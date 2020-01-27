import React from 'react';

const Gif = props => {
    const { imageUrl: image } = props;
    if(image && image.includes('http')){
        return(
            <div>
                <img src={image} alt="Fetched" width='500px' height='500px' />
            </div>
        )
    }else{
        return(
            <div>{image}</div> 
        )
    }
}

export default Gif;