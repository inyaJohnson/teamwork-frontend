import React, { Component } from 'react';
import Axios from 'axios';

export default class Gif extends Component {
    constructor(props){
        super(props);
        this.state = {
            image : '',
            loading : true
        }
    }
    
    fetchImage = async () => {
        Axios.get(this.props.imageUrl).then((result) =>{
            // const image = Buffer.from(result.data, 'binary').toString('base64');
            const image = result.data
            console.log('Image Url === ', result);
            this.setState({
                image,
                loading : false
            })
        }).catch((error)=>{
            console.log(error)
        })
    }

    componentDidMount = () =>{
        this.fetchImage();
    }

    render(){
        const { loading, image } = this.state;
        if (loading) return "Loading...";
        console.log('Fetched Image === ', image)
        return(
            <div>
                <img src={image} alt="Fetched" width='200px' height='200px' />
            </div>
        )
    }
} 